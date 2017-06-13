interface OsModule {
    homedir: () => string;
}

const os: OsModule = <OsModule>jest.genMockFromModule('os');
const path = require('path');

os.homedir = () => path.sep + path.join('home', 'user');

module.exports = os;
