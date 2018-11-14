import {LambdaClient} from '../../LambdaClient';
import {ListFunctionsCommand} from '../../commands/ListFunctionsCommand';
import {InvokeCommand} from '../../commands/InvokeCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for Lambda.');

    await (async () => {
        const client = new LambdaClient({
            region: defaultRegion
        });

        const command = new ListFunctionsCommand(
            {}
        );

        try {
            const result = await client.send(command);
            console.log('ok Lambda ListFunctions - no error expected from service');

        } catch (err) {
            console.log('not ok Lambda ListFunctions - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new LambdaClient({
            region: defaultRegion
        });

        const command = new InvokeCommand(
            {
                "FunctionName": "bogus-function"
            }
        );

        try {
            const result = await client.send(command);
            console.log('not ok Lambda Invoke - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok Lambda Invoke - error expected from service');

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