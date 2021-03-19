module.exports = {
  // remove testMatch once we move to ts-jest
  preset: "ts-jest",
  testMatch: ["**/*.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts"],
};
