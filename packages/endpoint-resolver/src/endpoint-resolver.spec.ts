import {EndpointRules} from './endpoint-rules';
import {EndpointResolver} from './endpoint-resolver';
import {
    fizzPartition,
    fooPartition
} from './partitions.fixture';

describe('EndpointResolver', () => {
    const mockRules: EndpointRules = {
        partitions: [fooPartition, fizzPartition],
        version: 1
    };

    const endpointResolver = new EndpointResolver(mockRules);

    it('resolves an endpoint given a valid serviceId and region', () => {
        const endpointProperties = endpointResolver.resolveEndpoint('bar', 'foo-north-1');
        expect(endpointProperties.hostname).toBe('bar.foo-north-1.foo.com');
    });

    it('resolves an endpoint from correct partition', () => {
        const endpointProperties = endpointResolver.resolveEndpoint('bar', 'fizz-north-1');
        expect(endpointProperties.hostname).toBe('bar.fizz-north-1.fizz.com');
    });

    it(
        'merges endpoint data, preferring endpoints over service defaults',
        () => {
            const endpointProperties = endpointResolver.resolveEndpoint('buzz', 'foo-north-2');
            expect(endpointProperties.hostname).toBe('buzz.foo-north-2.foo.com');
            expect(endpointProperties.signatureVersions).toEqual(['v2']);
            expect(endpointProperties.protocols).toEqual(['https']);
            expect(endpointProperties.sslCommonName).toEqual('ssl-buzz');
        }
    );

    it(
        'merges endpoint data, preferring service defaults over partition defaults',
        () => {
            const endpointProperties = endpointResolver.resolveEndpoint('buzz', 'foo-north-1');
            expect(endpointProperties.hostname).toBe('buzz.foo-north-1.foo.com');
            expect(endpointProperties.signatureVersions).toEqual(['v2', 's3']);
            expect(endpointProperties.protocols).toEqual(['https']);
            expect(endpointProperties.sslCommonName).toEqual('ssl-buzz');
        }
    );

    it('substitutes hostname placeholders', () => {
        const endpointProperties = endpointResolver.resolveEndpoint('buzz', 'fizz-north-2');
        expect(endpointProperties.hostname).toBe('fizz-north-2-buzz.fizz.com');
    });

    it('will resolve using partition endpoint if service is not regionalized', () => {
        const endpointProperties = endpointResolver.resolveEndpoint('baz', 'foo-north-1');
        expect(endpointProperties.hostname).toBe('baz.foo.com');
        expect(endpointProperties.credentialScope).toEqual({
            region: 'foo-north-1'
        });
    });

    it('will validate region against regex if it is not found in a partition', () => {
        expect(fooPartition.regions['foo-south-1']).toBeUndefined();
        const endpointProperties = endpointResolver.resolveEndpoint('bar', 'foo-south-1');
        expect(endpointProperties.hostname).toBe('bar.foo-south-1.foo.com');
    });

    it('will use partition defaults if service not found', () => {
        expect(fooPartition.services['xyz']).toBeUndefined();
        expect(fizzPartition.services['xyz']).toBeUndefined();
        
        const endpointProperties = endpointResolver.resolveEndpoint('xyz', 'foo-north-1');
        expect(endpointProperties.hostname).toBe('xyz.foo-north-1.foo.com');
    });

    describe('throws', () => {
        it('if serviceId is not provided', () => {
            expect(() => {
                endpointResolver.resolveEndpoint('', 'foo-north-1');
            }).toThrow();
        });

        it('if region is not provided', () => {
            expect(() => {
                endpointResolver.resolveEndpoint('bar', '');
            }).toThrow();
        });

        it('if region is not found', () => {
            expect(fooPartition.regions['xyz-south-1']).toBeUndefined();
            expect(fizzPartition.regions['xyz-south-1']).toBeUndefined();

            expect(() => {
                endpointResolver.resolveEndpoint('bar', 'xyz-south-1');
            }).toThrow();
        });

        it('if hostname is not found', () => {
            expect((fizzPartition.services['blarg'] as any).endpoints['fizz-north-1'].hostname).toBeUndefined();
            expect(fizzPartition.services['blarg'].defaults).toBeUndefined();
            expect((fizzPartition.defaults as any).hostname).toBeUndefined();

            expect(() => {
                endpointResolver.resolveEndpoint('blarg', 'fizz-north-1');
            }).toThrow();
        });
    });
});