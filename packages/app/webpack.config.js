module.exports = {
    entry: './app.js',
    output: {
        filename: 'packed.js'
    },
    module: {
        loaders: [
            {
                test: /\.(m)?js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'es2016', 'es2017']
                }
            }
        ]
    }
}
