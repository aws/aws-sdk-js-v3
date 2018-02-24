import resolve from 'rollup-plugin-node-resolve'

export default {
    input: './app.js',
    output: {
        format: 'es',
        file: './bundle.mjs'
    },
    plugins: [
        resolve({
            main: false,
            module: true,
            modulesOnly: true
        })
    ]
}
