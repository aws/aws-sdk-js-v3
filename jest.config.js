/**
 * Unit tests are test scenarios that exercise a single functionality.
 * For multiple module integration, see jest.config.integ.js.
 * For tests that involve network requests to live services, see jest.config.e2e.js.
 */
module.exports = {
  projects: [
    "<rootDir>/lib/*/jest.config.js",
    "<rootDir>/private/*/jest.config.js",
    "<rootDir>/packages/*/jest.config.js",
  ],
};
