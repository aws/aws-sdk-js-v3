import {KMSClient} from '../../KMSClient';
import {ListAliasesCommand} from '../../commands/ListAliasesCommand';
import {GetKeyPolicyCommand} from '../../commands/GetKeyPolicyCommand';
declare let defaultRegion: string;
declare const credentials: any;
describe('@aws-sdk/client-kms-browser Smoke Tests:', () => {
    defaultRegion = defaultRegion || 'us-west-2';
    it('ListAliases should succeed when given correct input', (done) => {
        const client = new KMSClient({
            region: defaultRegion,
            credentials
        });

        const listAliases = new ListAliasesCommand(
            {}
        );

        client.send(listAliases)
            .then((result) => {
                expect(typeof result).toBe('object');
                done();
            }).catch((err) => {
                expect(err).toBeUndefined();
                done();
            });
    });
    it('GetKeyPolicy should fail when given bad input', (done) => {
        const client = new KMSClient({
            region: defaultRegion,
            credentials
        });

        const getKeyPolicy = new GetKeyPolicyCommand(
            {
                "KeyId": "12345678-1234-1234-1234-123456789012",
                "PolicyName": "fakePolicy"
            }
        );

        client.send(getKeyPolicy)
            .then((result) => {
                expect(result).toBeUndefined();
                done();
            }).catch((err) => {
                expect(err).toBeDefined();
                done();
            });
    });
});