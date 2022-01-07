const { compilerOptions } = require("@tsconfig/recommended/tsconfig.json");

module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts"],
  globals: {
    "ts-jest": {
      tsconfig: {
        ...compilerOptions,
        noImplicitAny: false,
        strictNullChecks: false,
      },
    },
  },
};
