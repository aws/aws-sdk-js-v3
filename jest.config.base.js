const { compilerOptions } = require("@tsconfig/recommended/tsconfig.json");

module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts", "!**/*.e2e.spec.ts"],
  transform: {
    "^.+\\.tsx?$": [
      "ts-jest",
      {
        ...compilerOptions,
        noImplicitAny: false,
        strictNullChecks: false,
      },
    ],
  },
};
