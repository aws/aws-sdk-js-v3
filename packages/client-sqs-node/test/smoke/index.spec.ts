import {SQSClient} from '../../SQSClient';
import {ListQueuesCommand} from '../../commands/ListQueuesCommand';
import {GetQueueUrlCommand} from '../../commands/GetQueueUrlCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for SQS.');

    await (async () => {
        const client = new SQSClient({
            region: defaultRegion
        });

        const command = new ListQueuesCommand(
            {} as any
        );

        try {
            const result = await client.send(command);
            console.log('ok SQS ListQueues - no error expected from service');

        } catch (err) {
            console.log('not ok SQS ListQueues - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new SQSClient({
            region: defaultRegion
        });

        const command = new GetQueueUrlCommand(
            {
                "QueueName": "fake_queue"
            } as any
        );

        try {
            const result = await client.send(command);
            console.log('not ok SQS GetQueueUrl - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok SQS GetQueueUrl - error expected from service');

        }
    })();

    if (testFailed) {
        process.exit(1);
    } else {
        process.exit(0);
    }
}

// execute the test runner
smokeTestRunner();