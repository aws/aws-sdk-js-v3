const base = require("./jest.config.base.js");

module.exports = {
  ...base,
  projects: [
    "<rootDir>/lib/*/jest.config.js",
    "<rootDir>/private/*/jest.config.js",
    "<rootDir>/packages/*/jest.config.js",
  ],
};
