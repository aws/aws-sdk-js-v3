const cryptoModule = jest.genMockFromModule('crypto') as any;
const mockHash = {
    update: jest.fn(),
    digest: jest.fn(),
};
const mockHmac = {
    update: jest.fn(),
    digest: jest.fn(),
};

cryptoModule.createHash = jest.fn(() => mockHash);
cryptoModule.createHmac = jest.fn(() => mockHmac);

module.exports = cryptoModule;
