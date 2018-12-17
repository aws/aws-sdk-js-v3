import {GlacierClient} from '../../GlacierClient';
import {ListVaultsCommand} from '../../commands/ListVaultsCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for Glacier.');

    await (async () => {
        const client = new GlacierClient({
            region: defaultRegion
        });

        const command = new ListVaultsCommand(
            {} as any
        );

        try {
            const result = await client.send(command);
            console.log('ok Glacier ListVaults - no error expected from service');

        } catch (err) {
            console.log('not ok Glacier ListVaults - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new GlacierClient({
            region: defaultRegion
        });

        const command = new ListVaultsCommand(
            {
                "accountId": "abcmnoxyz"
            } as any
        );

        try {
            const result = await client.send(command);
            console.log('not ok Glacier ListVaults - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok Glacier ListVaults - error expected from service');

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