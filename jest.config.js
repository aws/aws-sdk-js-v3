const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/lib/*/jest.config.js",
    "<rootDir>/protocol_tests/*/jest.config.js",
    "<rootDir>/packages/*/jest.config.js",
    "<rootDir>/clients/*/jest.config.js",
  ],
  testPathIgnorePatterns: ["/node_modules/", "<rootDir>/clients/"],
  coveragePathIgnorePatterns: ["/node_modules/", "<rootDir>/clients/", "/__fixtures__/"],
  globals: {
    "ts-jest": {
      isolatedModules: true,
    },
  },
};
