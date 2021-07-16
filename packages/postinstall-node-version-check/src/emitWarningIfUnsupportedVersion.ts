export const emitWarningIfUnsupportedVersion = (version: string) => {
  // process.emitWarning will not be defined if user is on node < 6.
  // We don't support node < 6, but do not want postinstall script to fail.
  // @ts-expect-error This condition will always return true since this function is always defined
  if (process.emitWarning && version && parseInt(version.substring(1, version.indexOf("."))) < 12) {
    process.emitWarning(
      `The AWS SDK for JavaScript (v3) will\n` +
        `no longer support Node.js ${version} as of January 1, 2022.\n` +
        `To continue receiving updates to AWS services, bug fixes, and security\n` +
        `updates please upgrade to Node.js 12.x or later.\n\n` +
        `More information can be found at: {LINK TO BLOG}`,
      `NodeDeprecationWarning`
    );
  }
};
