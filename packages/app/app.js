import {
    CodeCommitClient,
    ListRepositoriesCommand,
} from '@aws/sdk-codecommit-browser'

export const instance = new CodeCommitClient({
    region: 'us-west-2',
    credentials: {
        accessKeyId: 'foo',
        secretAccessKey: 'bar',
    },
})

export const result = instance.send(new ListRepositoriesCommand({}))
