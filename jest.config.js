module.exports = {
  projects: ["<rootDir>/packages/*/jest.config.js"],
  testPathIgnorePatterns: [
    "<rootDir>/packages/add-glacier-checksum-headers-browser",
    "<rootDir>/packages/client-.*"
  ],
  coveragePathIgnorePatterns: [
    "/node_modules/",
    "<rootDir>/packages/add-glacier-checksum-headers-browser",
    "<rootDir>/packages/crypto-sjcl-*",
    "<rootDir>/packages/xml-body-parser/vendor/",
    "<rootDir>/packages/client-.*",
    "/__fixtures__/"
  ],
  // remove testMatch once we move to ts-jest
  testMatch: ["**/__tests__/**/*.js?(x)", "**/?(*.)+(spec|test).js?(x)"]
};
