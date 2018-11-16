import {KinesisClient} from '../../KinesisClient';
import {ListStreamsCommand} from '../../commands/ListStreamsCommand';
import {DescribeStreamCommand} from '../../commands/DescribeStreamCommand';
declare let defaultRegion: string;
declare const credentials: any;
describe('@aws-sdk/client-kinesis-browser Smoke Tests:', () => {
    defaultRegion = defaultRegion || 'us-west-2';
    it('ListStreams should succeed when given correct input', (done) => {
        const client = new KinesisClient({
            region: defaultRegion,
            credentials
        });

        const listStreams = new ListStreamsCommand(
            {}
        );

        client.send(listStreams)
            .then((result) => {
                expect(typeof result).toBe('object');
                done();
            }).catch((err) => {
                expect(err).toBeUndefined();
                done();
            });
    });
    it('DescribeStream should fail when given bad input', (done) => {
        const client = new KinesisClient({
            region: defaultRegion,
            credentials
        });

        const describeStream = new DescribeStreamCommand(
            {
                "StreamName": "bogus-stream-name"
            }
        );

        client.send(describeStream)
            .then((result) => {
                expect(result).toBeUndefined();
                done();
            }).catch((err) => {
                expect(err).toBeDefined();
                done();
            });
    });
});