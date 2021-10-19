module.exports = {
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  testMatch: ["**/*.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts"],
};
