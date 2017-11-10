import {Logger} from './'
import {
    LoggerOption,
    LogLevel,
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
            params.logLevel = LogLevel.Log;
            const logger = new Logger(params);
            for (const logLevel of ['error', 'info', 'warn', 'log']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(1);
                expect(mockConsole[logLevel].mock.calls[0][0]).toEqual('hello world');
            }
        });

        it('info', () => {
            params.logLevel = LogLevel.Info;
            const logger = new Logger(params);
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(0);
            for (const logLevel of ['error', 'warn', 'info']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(1);
                expect(mockConsole[logLevel].mock.calls[0][0]).toEqual('hello world');
            }
        });

        it('warn', () => {
            params.logLevel = LogLevel.Warn;
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

        it('error', () => {
            params.logLevel = LogLevel.Error;
            const logger = new Logger(params);
            logger.error('hello world');
            expect(mockConsole.error.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls[0][0]).toEqual('hello world');
            for (const logLevel of ['warn', 'info', 'log']) {
                (logger as any)[logLevel]('hello world');
                expect(mockConsole[logLevel].mock.calls.length).toEqual(0);
            }
        });
    })


})
