module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: [
            'browserify',
            'mocha'
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
        browsers: ['HeadlessChrome'],
        singleRun: true,
        concurrency: Infinity,
        customLaunchers: {
            HeadlessChrome: {
                base: 'Chrome',
                flags: [
                    '--no-sandbox',
                    '--headless',
                    '--disable-gpu',
                    '--remote-debugging-port=9222'
                ]
            }
        }
    })
};
