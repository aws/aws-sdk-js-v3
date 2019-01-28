import {PinpointClient} from '../../PinpointClient';
import {CreateAppCommand} from '../../commands/CreateAppCommand';
declare let defaultRegion: string;
declare const credentials: any;
describe('@aws-sdk/client-pinpoint-browser Smoke Tests:', () => {
    defaultRegion = defaultRegion || 'us-west-2';
    it('CreateApp should succeed when given correct input', (done) => {
        const client = new PinpointClient({
            region: defaultRegion,
            credentials
        });

        const createApp = new CreateAppCommand(
            {
                "CreateApplicationRequest": {
                    "Name": "TestApp"
                }
            }
        );

        client.send(createApp)
            .then((result) => {
                expect(typeof result).toBe('object');
                done();
            }).catch((err) => {
                expect(err).toBeUndefined();
                done();
            });
    });
});
