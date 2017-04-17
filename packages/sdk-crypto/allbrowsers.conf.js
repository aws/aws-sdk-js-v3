module.exports = function(config) {
  config.set({
      basePath: '',
      frameworks: [
          'browserify',
          'mocha',
          'detectBrowsers'
      ],
      files: [
          'vendor/es6-promise.auto.js',
          'test/*Tests.js'
      ],
      exclude: [
          'test/Node*Tests.js'
      ],
      preprocessors: {
          'test/*Tests.js': ['browserify']
      },
      reporters: ['progress'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_WARN,
      autoWatch: false,
      singleRun: true,
      concurrency: 2
  })
};
