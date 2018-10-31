import { clientModuleIdentifier } from './clientModuleIdentifier';
import { ServiceMetadata } from '@aws-sdk/types';

const minimalMetadata: ServiceMetadata = {
    apiVersion: '2018-02-06',
    endpointPrefix: 'foo',
    protocol: 'json',
    serviceFullName: 'Amazon Simple Foo Service',
    signatureVersion: 'none',
    uid: 'foo-2018-02-06',
};

describe('clientModuleIdentifier', () => {
    it('should use the service ID when available', () => {
        expect(
            clientModuleIdentifier({
                ...minimalMetadata,
                serviceId: 'Foo Control Plane'
            })
        ).toBe('client-foo-control-plane');
    });

    it('should use the service abbreviation in the absence of a service ID', () => {
        expect(
            clientModuleIdentifier({
                ...minimalMetadata,
                serviceAbbreviation: 'SFS'
            })
        ).toBe('client-sfs');
    });

    it('should fall back to the service full name', () => {
        expect(clientModuleIdentifier(minimalMetadata))
            .toBe('client-simple-foo-service');
    });

    it('should apply known version identifiers', () => {
        expect(
            clientModuleIdentifier({
                ...minimalMetadata,
                serviceId: 'DynamoDB',
                apiVersion: '2012-08-10',
            })
        ).toBe('client-dynamodb-v2');
    });

    it('should append the runtime target', () => {
        expect(clientModuleIdentifier(minimalMetadata, 'node'))
            .toBe('client-simple-foo-service-node');
    });

    it('should omit the runtime for universal packages', () => {
        expect(clientModuleIdentifier(minimalMetadata, 'universal'))
            .toBe('client-simple-foo-service');
    });
});
