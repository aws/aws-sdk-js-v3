module.exports = {
  preset: "ts-jest",
  testMatch: ["**/*.integ.spec.ts"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { isolatedModules: true }],
  },
};
