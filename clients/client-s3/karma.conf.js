const webpack = require("webpack");

module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai", "webpack"],
    files: ["test/e2e/**/*.ispec.ts"],
    preprocessors: {
      "test/e2e/**/*.ispec.ts": ["webpack", "sourcemap", "credentials", "env"],
    },
    webpackMiddleware: {
      stats: "minimal",
    },
    webpack: {
      resolve: {
        extensions: [".ts", ".js"],
        fallback: {
          stream: false,
        },
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
    envPreprocessor: ["AWS_SMOKE_TEST_REGION", "AWS_SMOKE_TEST_BUCKET", "AWS_SMOKE_TEST_MRAP_ARN"],
    plugins: [
      "@aws-sdk/karma-credential-loader",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
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
    browsers: ["ChromeHeadlessNoSandbox", "FirefoxHeadless"],
    customLaunchers: {
      ChromeHeadlessNoSandbox: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox"],
      },
      FirefoxHeadless: {
        base: "Firefox",
        flags: ["-headless"],
      },
    },
    singleRun: true,
    concurrency: Infinity,
    exclude: ["**/*.d.ts", "*.spec.ts"],
  });
};
