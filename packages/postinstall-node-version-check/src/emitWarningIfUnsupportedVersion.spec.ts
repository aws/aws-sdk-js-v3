import { emitWarningIfUnsupportedVersion } from "./emitWarningIfUnsupportedVersion";

describe(emitWarningIfUnsupportedVersion.name, () => {
  const emitWarning = process.emitWarning;
  const supportedVersion = "12.0.0";

  afterEach(() => {
    jest.clearAllMocks();
    process.emitWarning = emitWarning;
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
      process.emitWarning = jest.fn();
      emitWarningIfUnsupportedVersion(unsupportedVersion);
      expect(process.emitWarning).toHaveBeenCalledTimes(1);
      expect(process.emitWarning).toHaveBeenCalledWith(
        `The AWS SDK for JavaScript (v3) will\n` +
          `no longer support Node.js ${unsupportedVersion} as of January 1, 2022.\n` +
          `To continue receiving updates to AWS services, bug fixes, and security\n` +
          `updates please upgrade to Node.js 12.x or later.\n\n` +
          `More information can be found at: https://a.co/1l6FLnu`,
        `NodeDeprecationWarning`
      );
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
      process.emitWarning = jest.fn();
      emitWarningIfUnsupportedVersion(unsupportedVersion);
      expect(process.emitWarning).not.toHaveBeenCalled();
    });
  });
});
