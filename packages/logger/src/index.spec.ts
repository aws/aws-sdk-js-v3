import {Logger} from './'
import {
    LoggerOption,
    Logging,
    WritableLogger
} from '@aws/types'

describe('Logger', () => { 
    describe('all levels (by default)', () => {
        let mockConsole: any;
        let logger: WritableLogger;
        beforeEach(() => {
            mockConsole = {
                log: jest.fn(() => {}),
                error: jest.fn(() => {}),
                info: jest.fn(() => {}),
                warn: jest.fn(() => {})
            };
            logger = new Logger({logger: mockConsole});
        })
        it('log', () => {
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.log.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('error', () => {
            logger.error('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('info', () => {
            logger.info('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(1);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('warn', () => {
            logger.warn('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(1);
            expect(mockConsole.warn.mock.calls[0][0]).toEqual('hello world');
        });
    })

    describe('only allow one level', () => {
        let mockConsole: any;
        let params: LoggerOption;
        beforeEach(() => {
            mockConsole = {
                log: jest.fn(() => {}),
                error: jest.fn(() => {}),
                info: jest.fn(() => {}),
                warn: jest.fn(() => {})
            };
            params = {
                logger: mockConsole,
            }
        })
        it('log', () => {
            params.logLevels = ['log'];
            const logger = new Logger(params);
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(1);
            for (const logLevel of ['error', 'info', 'warn']) {
                (logger as any)[logLevel]('hellow world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });

        it('warn', () => {
            params.logLevels = ['warn'];
            const logger = new Logger(params);
            logger.warn('hello world');
            expect(mockConsole.warn.mock.calls.length).toEqual(1);
            for (const logLevel of ['error', 'info', 'log']) {
                (logger as any)[logLevel]('hellow world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });

        it('error', () => {
            params.logLevels = ['error'];
            const logger = new Logger(params);
            logger.error('hello world');
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            for (const logLevel of ['warn', 'info', 'log']) {
                (logger as any)[logLevel]('hellow world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });

        it('info', () => {
            params.logLevels = ['info'];
            const logger = new Logger(params);
            logger.info('hello world');
            expect(mockConsole.info.mock.calls.length).toEqual(1);
            for (const logLevel of ['error', 'warn', 'log']) {
                (logger as any)[logLevel]('hellow world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });
    })


})
