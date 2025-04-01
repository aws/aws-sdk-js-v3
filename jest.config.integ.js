/**
 * Integration tests are tests that require multiple units or packages,
 * and do not connect to live services.
 * These should be run with the yarn test:integration script in each package.
 * For tests that involve network requests to live services, see jest.config.e2e.js.
 *
 * The tests run with cucumber-js are
 * now E2E tests in this classification system.
 */
module.exports = {
  projects: [
    // "<rootDir>/clients/*/jest.config.integ.js",
    // "<rootDir>/lib/*/jest.config.integ.js",
    "<rootDir>/packages/*/jest.config.integ.js",
    // "<rootDir>/private/*/jest.config.integ.js",
  ],
};
