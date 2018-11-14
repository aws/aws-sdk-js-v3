import {DynamoDBClient} from '../../DynamoDBClient';
import {ListTablesCommand} from '../../commands/ListTablesCommand';
import {DescribeTableCommand} from '../../commands/DescribeTableCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for DynamoDB.');

    await (async () => {
        const client = new DynamoDBClient({
            region: defaultRegion
        });

        const command = new ListTablesCommand(
            {
                "Limit": 1
            }
        );

        try {
            const result = await client.send(command);
            console.log('ok DynamoDB ListTables - no error expected from service');

        } catch (err) {
            console.log('not ok DynamoDB ListTables - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new DynamoDBClient({
            region: defaultRegion
        });

        const command = new DescribeTableCommand(
            {
                "TableName": "fake-table"
            }
        );

        try {
            const result = await client.send(command);
            console.log('not ok DynamoDB DescribeTable - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok DynamoDB DescribeTable - error expected from service');

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