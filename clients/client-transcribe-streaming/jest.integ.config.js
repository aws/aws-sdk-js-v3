module.exports = {
  transform: {
    "^.+\\.ts$": "@swc/jest",
  },
  testMatch: ["**/*.integ.spec.ts"],
};
