import {Logger} from './'
import {Logging} from '@aws/types'
describe('Logger', () => { 
    describe('all levels', () => {
        const mockConsole = {
            log: jest.fn(() => {}),
            error: jest.fn(() => {}),
            info: jest.fn(() => {}),
            warn: jest.fn(() => {})
        };
        it('log', () => {
            const logger = new Logger(mockConsole, Logging.allLogLevels);
            logger.log('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(1);
        });
    
        it('error', () => {
            const logger = new Logger(mockConsole, Logging.allLogLevels);
            logger.error('hello world');
            expect(mockConsole.error.mock.calls.length).toEqual(1);
        });
    
        it('info', () => {
            const logger = new Logger(mockConsole, Logging.allLogLevels);
            logger.info('hello world');
            expect(mockConsole.info.mock.calls.length).toEqual(1);
        });
    
        it('warn', () => {
            const logger = new Logger(mockConsole, Logging.allLogLevels);
            logger.warn('hello world');
            expect(mockConsole.warn.mock.calls.length).toEqual(1);
        });
    })

    describe('only allow log', () => {
        const mockConsole = {
            log: jest.fn(() => {}),
            error: jest.fn(() => {}),
            info: jest.fn(() => {}),
            warn: jest.fn(() => {})
        };
        it('log', () => {
            const logger = new Logger(mockConsole, 'log');
            logger.log('hello world');
            logger.error('hello world');
            logger.info('hello world');
            logger.warn('hello world');
            expect(mockConsole.log.mock.calls.length).toEqual(1);
            expect(mockConsole.error.mock.calls.length).toEqual(0);
            expect(mockConsole.info.mock.calls.length).toEqual(0);
            expect(mockConsole.warn.mock.calls.length).toEqual(0);
        })
    })
})
