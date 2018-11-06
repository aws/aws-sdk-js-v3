import {Route53Client} from '../../Route53Client';
import {ListHostedZonesCommand} from '../../commands/ListHostedZonesCommand';
import {GetHostedZoneCommand} from '../../commands/GetHostedZoneCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-east-1';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for Route 53.');

    await (async () => {
        const client = new Route53Client({
            region: defaultRegion
        });

        const command = new ListHostedZonesCommand(
            {}
        );

        try {
            const result = await client.send(command);
            console.log('ok Route 53 ListHostedZones - no error expected from service');

        } catch (err) {
            console.log('not ok Route 53 ListHostedZones - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new Route53Client({
            region: defaultRegion
        });

        const command = new GetHostedZoneCommand(
            {
                "Id": "fake-zone"
            }
        );

        try {
            const result = await client.send(command);
            console.log('not ok Route 53 GetHostedZone - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok Route 53 GetHostedZone - error expected from service');

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