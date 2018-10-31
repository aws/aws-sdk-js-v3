import {Logger} from './'
import {
    LoggerOptions,
    LogLevel,
    Logger as LoggerInterface
} from '@aws-sdk/types'

describe('Logger', () => { 
    describe('all levels (by default)', () => {
        let mockConsole: any;
        let logger: LoggerInterface;
        beforeEach(() => {
            mockConsole = {
                log: jest.fn(() => {}),
                error: jest.fn(() => {}),
                info: jest.fn(() => {}),
                warn: jest.fn(() => {})
            };
            logger = new Logger({logger: mockConsole});
        })
        it('should only log', () => {
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.log.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('should only error', () => {
            logger.error('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('should only info', () => {
            logger.info('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(1);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls[0][0]).toEqual('hello world');
        });
    
        it('should only warn', () => {
            logger.warn('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(1);
            expect(mockConsole.warn.mock.calls[0][0]).toEqual('hello world');
        });
    })

    describe('set a logLevel', () => {
        let mockConsole: any;
        let params: LoggerOptions;
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
        
        it('should print info, warn and error', () => {
            params.logLevel = 'info';
            const logger = new Logger(params);
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            for (const logLevel of ['error', 'warn', 'info']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(1);
                expect(mockConsole[logLevel].mock.calls[0][0]).toEqual('hello world');
            }
        });

        it('should print warn and error', () => {
            params.logLevel = 'warn';
            const logger = new Logger(params);
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            logger.info('hello world');
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            logger.warn('hello world');
            expect(mockConsole.warn.mock.calls.length).toEqual(1);
            expect(mockConsole.warn.mock.calls[0][0]).toEqual('hello world');
            logger.error('hello world');
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls[0][0]).toEqual('hello world');
        });

        it('should print only error', () => {
            params.logLevel = 'error';
            const logger = new Logger(params);
            logger.error('hello world');
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls[0][0]).toEqual('hello world');
            for (const logLevel of ['warn', 'info', 'log']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });

        it('should print nothing', () => {
            params.logLevel = 'off';
            const logger = new Logger(params);
            for (const logLevel of ['error', 'info', 'warn', 'log']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });
    })


})
