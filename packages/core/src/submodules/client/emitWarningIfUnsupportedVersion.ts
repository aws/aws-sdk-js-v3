// Stores whether the warning was already emitted.
export const state = {
  warningEmitted: false,
};

/**
 * @internal
 *
 * Emits warning if the provided Node.js version string is
 * pending deprecation by AWS SDK JSv3.
 *
 * @param version - The Node.js version string.
 */
export const emitWarningIfUnsupportedVersion = (version: string) => {
  if (version && !state.warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 18) {
    state.warningEmitted = true;
    process.emitWarning(
      `NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 16.x on January 6, 2025.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to a supported Node.js LTS version.

More information can be found at: https://a.co/74kJMmI`
    );
  }
};
