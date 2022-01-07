module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts"],
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.test.json",
    },
  },
};
