const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: ["<rootDir>/protocol_tests/*/jest.config.js", "<rootDir>/packages/*/jest.config.js"],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/clients/client-.*"],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/clients/client-.*",
    "/__fixtures__/"
  ]
};
