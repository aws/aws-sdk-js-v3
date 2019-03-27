import {KMSClient} from '../../KMSClient';
import {ListAliasesCommand} from '../../commands/ListAliasesCommand';
import {GetKeyPolicyCommand} from '../../commands/GetKeyPolicyCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for KMS.');

    await (async () => {
        const client = new KMSClient({
            region: defaultRegion
        });

        const command = new ListAliasesCommand(
            {} as any
        );

        try {
            const result = await client.send(command);
            console.log('ok KMS ListAliases - no error expected from service');

        } catch (err) {
            console.log('not ok KMS ListAliases - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new KMSClient({
            region: defaultRegion
        });

        const command = new GetKeyPolicyCommand(
            {
                "KeyId": "12345678-1234-1234-1234-123456789012",
                "PolicyName": "fakePolicy"
            } as any
        );

        try {
            const result = await client.send(command);
            console.log('not ok KMS GetKeyPolicy - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok KMS GetKeyPolicy - error expected from service');

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