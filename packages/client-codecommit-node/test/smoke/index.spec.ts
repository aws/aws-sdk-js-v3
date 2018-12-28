import {CodeCommitClient} from '../../CodeCommitClient';
import {ListRepositoriesCommand} from '../../commands/ListRepositoriesCommand';
import {ListBranchesCommand} from '../../commands/ListBranchesCommand';

async function smokeTestRunner() {
    const defaultRegion = process.env.AWS_SMOKE_TEST_REGION || 'us-west-2';
    let testFailed = false;
    console.log('1..2');
    console.log('# Running tests for CodeCommit.');

    await (async () => {
        const client = new CodeCommitClient({
            region: defaultRegion
        });

        const command = new ListRepositoriesCommand(
            {} as any
        );

        try {
            const result = await client.send(command);
            console.log('ok CodeCommit ListRepositories - no error expected from service');

        } catch (err) {
            console.log('not ok CodeCommit ListRepositories - no error expected from service');
            // output unexpected error information
            console.log('# ' + err.message);
            err.stack.split('\n').forEach((line: string) => {
                console.log('# ' + line);
            });
            testFailed = true;

        }
    })();
    await (async () => {
        const client = new CodeCommitClient({
            region: defaultRegion
        });

        const command = new ListBranchesCommand(
            {
                "repositoryName": "fake-repo"
            } as any
        );

        try {
            const result = await client.send(command);
            console.log('not ok CodeCommit ListBranches - error expected from service');
            testFailed = true;
        } catch (err) {
            console.log('ok CodeCommit ListBranches - error expected from service');

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