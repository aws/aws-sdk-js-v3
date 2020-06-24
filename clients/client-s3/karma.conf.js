module.exports = function (config) {
  config.set({
    basePath: "",
    frameworks: ["mocha", "chai"],
    files: ["e2e/**/*.ispec.ts"],
    preprocessors: {
      "e2e/**/*.ispec.ts": ["webpack", "sourcemap", "credentials"]
    },
    webpackMiddleware: {
      stats: "minimal"
    },
    webpack: {
      resolve: {
        extensions: [".ts", ".js"]
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
                  configFile: "tsconfig.e2e.json",
                  compilerOptions: {
                    rootDir: "./"
                  }
                }
              }
            ],
            exclude: /node_modules/
          }
        ]
      },
      // stats: {
      //   // colors: false,
      //   // modules: false,
      //   // reasons: false,
      //   // assets: false,
      //   // moduleAssets: false,
      //   // chunks: false,
      //   // errorDetails: true
      //   all: false
      // },
      devtool: "inline-source-map"
    },
    plugins: [
      "@aws-sdk/karma-credential-loader",
      "karma-chrome-launcher",
      "karma-firefox-launcher",
      "karma-mocha",
      "karma-chai",
      "karma-webpack",
      "karma-coverage",
      "karma-sourcemap-loader"
    ],
    port: 9876,
    colors: true,
    logLevel: config.LOG_WARN,
    autoWatch: false,
    browsers: ["ChromeHeadless", "FirefoxHeadless"],
    customLaunchers: {
      FirefoxHeadless: {
        base: "Firefox",
        flags: ["-headless"]
      }
    },
    singleRun: true,
    concurrency: Infinity,
    exclude: ["**/*.d.ts", "*.spec.ts"]
  });
};
