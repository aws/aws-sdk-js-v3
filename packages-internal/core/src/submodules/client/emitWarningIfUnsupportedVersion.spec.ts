import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { emitWarningIfUnsupportedVersion, state } from "./emitWarningIfUnsupportedVersion";

describe("emitWarningIfUnsupportedVersion", () => {
  const emitWarning = process.emitWarning;
  const supportedVersion = "22.0.0";
  const supportedMajorVersion = parseInt(supportedVersion.substring(0, supportedVersion.indexOf(".")));

  beforeEach(() => {});

  afterEach(() => {
    vi.clearAllMocks();
    vi.resetModules();
    process.emitWarning = emitWarning;
    state.warningEmitted = false;
  });

  describe(`emits warning for Node.js <${supportedVersion}`, () => {
    const getPreviousMajorVersion = (major: number) => (major === 0 ? 0 : major - 1);

    const getPreviousMinorVersion = ([major, minor]: [number, number]) =>
      minor === 0 ? [getPreviousMajorVersion(major), 9] : [major, minor - 1];

    const getPreviousPatchVersion = ([major, minor, patch]: [number, number, number]) =>
      patch === 0 ? [...getPreviousMinorVersion([major, minor]), 9] : [major, minor, patch - 1];

    const [major, minor, patch] = supportedVersion.split(".").map(Number);
    it.each(
      [
        getPreviousPatchVersion([major, minor, patch]),
        [...getPreviousMinorVersion([major, minor]), 0],
        [getPreviousMajorVersion(major), 0, 0],
      ].map((arr) => `v${arr.join(".")}`)
    )(`%s`, async (unsupportedVersion) => {
      process.emitWarning = vi.fn() as any;
      emitWarningIfUnsupportedVersion(unsupportedVersion);

      // Verify that the warning was emitted.
      expect(process.emitWarning).toHaveBeenCalledTimes(1);
      expect(process.emitWarning).toHaveBeenCalledWith(
        `NodeVersionSupportWarning: The AWS SDK for JavaScript (v3)
versions published after the first week of January 2027
will require node >=${supportedMajorVersion}. You are running node ${unsupportedVersion}.

To continue receiving updates to AWS services, bug fixes,
and security updates please upgrade to node >=${supportedMajorVersion}.

More information can be found at: https://a.co/c895JFp`
      );

      // Verify that the warning emits only once.
      emitWarningIfUnsupportedVersion(unsupportedVersion);
      expect(process.emitWarning).toHaveBeenCalledTimes(1);
    });
  });

  describe(`emits no warning for Node.js >=${supportedVersion}`, () => {
    const [major, minor, patch] = supportedVersion.split(".").map(Number);
    it.each(
      [
        [major, minor, patch],
        [major, minor, patch + 1],
        [major, minor + 1, 0],
        [major + 1, 0, 0],
      ].map((arr) => `v${arr.join(".")}`)
    )(`%s`, async (unsupportedVersion) => {
      process.emitWarning = vi.fn() as any;
      emitWarningIfUnsupportedVersion(unsupportedVersion);
      expect(process.emitWarning).not.toHaveBeenCalled();
    });
  });
});
