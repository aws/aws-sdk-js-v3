module.exports = function (config) {
  config.set({
    frameworks: ["jasmine", "karma-typescript"],
    files: [
      { pattern: "src/**/*.ts", include: "false" },
      { pattern: "test/browser/upload.browser-spec.ts", include: "false" },
    ],
    exclude: ["**/*.d.ts"],
    preprocessors: {
      "**/*.ts": "karma-typescript",
    },
    reporters: ["spec", "karma-typescript"],
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    karmaTypescriptConfig: {
      tsconfig: "./tsconfig.json",
      bundlerOptions: {
        addNodeGlobals: true,
      },
    },
    singleRun: true,
  });
};
