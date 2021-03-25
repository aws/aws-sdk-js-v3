module.exports = {
  preset: "ts-jest",
  // filedoesnotexist.spec.ts is added to avoid jest error "Your test suite must contain at least one test."
  // replace it with **/*.spec.ts once we have a decision on test infrastructure for clients.
  testMatch: ["filedoesnotexist.spec.ts", "!**/*.browser.spec.ts", "!**/*.integ.spec.ts"],
};
