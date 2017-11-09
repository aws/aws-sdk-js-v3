import {Formatter} from './Formatter';

describe('Formatter', () => {
    const stats = {
        operation: 'fooOperation',
        service: 'BarService',
    }

    it('can correctly format stats', () => {
        let formatter = new Formatter('Operation: ${operation} and Service: ${service}');
        expect(formatter.format(stats)).toEqual('Operation: fooOperation and Service: BarService');
        formatter = new Formatter('${operation} and ${service}');
        expect(formatter.format(stats)).toEqual('fooOperation and BarService');
    });

    it('can format pattern without expression', () => {
        const formatter = new Formatter('a plain text');
        expect(formatter.format(stats)).toEqual('a plain text');
    })

    it('can format pattern with empty expression', () => {
        const formatter = new Formatter('Operation: ${}');
        expect(formatter.format(stats)).toEqual('Operation: ');
    })

    it('should replace unknown value with "undefined"', () => {
        const formatter = new Formatter('Service: ${service}; \nProtocol: ${protocol}');
        expect(formatter.format(stats)).toEqual('Service: BarService; \nProtocol: undefined');
    })

    it('can ignore expression with half bracket', () => {
        let formatter = new Formatter('Operation: ${fooOperation');
        expect(formatter.format(stats)).toEqual('Operation: ${fooOperation');
        formatter = new Formatter('Operation: fooOperation and } should be ignored');
        expect(formatter.format(stats)).toEqual('Operation: fooOperation and } should be ignored');
        formatter = new Formatter('}}}}$$${{{{}}}$}}${${} ${operation} }}}${');
        expect(formatter.format(stats)).toEqual('}}}}$$undefined}}$}}undefined fooOperation }}}${');
    })
})
