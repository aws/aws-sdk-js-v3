const base = require("../../jest.config.base.js");

module.exports = {
  ...base,
  preset: "ts-jest",
  testEnvironment: "node",
  testMatch: ["**/lib/lib-storage/test/**/*.spec.ts?(x)"],
};
