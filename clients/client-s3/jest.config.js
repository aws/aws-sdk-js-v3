const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  // Only test cjs dist, avoid testing the package twice
  testPathIgnorePatterns: ["/node_modules/", "/es/"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "/commands/",
    "/protocols/", // protocols tested in protocol protocol_tests folder
    "endpoints" // endpoint tested in tests/functional/endpoints
  ]
};
