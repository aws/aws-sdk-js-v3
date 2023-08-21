// Set up following binaries before running the test:
// CHROME_BIN: path to Chromium browser
const webpack = require("webpack");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: ["test/e2e/**/*.ispec.ts"],
    processKillTimeout: 5000,
    preprocessors: {
      "test/e2e/**/*.ispec.ts": ["webpack", "sourcemap", "credentials", "env"],
    },
    webpackMiddleware: {
      stats: "minimal",
    },
    webpack: {
      resolve: {
        extensions: [".ts", ".js"],
      },
      mode: "development",
      module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: [
              {
                loader: "ts-loader",
                options: {
                  configFile: "tsconfig.json",
                  compilerOptions: {
                    rootDir: "./",
                  },
                },
              },
            ],
            exclude: /node_modules/,
          },
        ],
      },
      plugins: [new webpack.NormalModuleReplacementPlugin(/\.\/runtimeConfig$/, "./runtimeConfig.browser")],
      devtool: "inline-source-map",
    },
    envPreprocessor: ["AWS_SMOKE_TEST_REGION", "AWS_SMOKE_TEST_IDENTITY_POOL_ID"],
    plugins: [
      "@aws-sdk/karma-credential-loader",
      "karma-chrome-launcher",
      "karma-mocha",
      "karma-chai",
      "karma-webpack",
      "karma-coverage",
      "karma-sourcemap-loader",
      "karma-env-preprocessor",
    ],
    reporters: ["progress"],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ["ChromeHeadlessNoSandbox"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
    },
    singleRun: true,
    concurrency: Infinity,
    exclude: ["**/*.d.ts", "*.spec.ts"],
  });
};
