import {_Target} from './_Target';

/**
 * CreatePullRequestInput shape
 */
export interface CreatePullRequestInput {
    /**
     * <p>The title of the pull request. This title will be used to identify the pull request to other users in the repository.</p>
     */
    title: string;

    /**
     * <p>A description of the pull request.</p>
     */
    description?: string;

    /**
     * <p>The targets for the pull request, including the source of the code to be reviewed (the source branch), and the destination where the creator of the pull request intends the code to be merged after the pull request is closed (the destination branch).</p>
     */
    targets: Array<_Target>|Iterable<_Target>;

    /**
     * <p>A unique, client-generated idempotency token that when provided in a request, ensures the request cannot be repeated with a changed parameter. If a request is received with the same parameters and a token is included, the request will return information about the initial request that used that token.</p> <note> <p>The AWS SDKs prepopulate client request tokens. If using an AWS SDK, you do not have to generate an idempotency token, as this will be done for you.</p> </note>
     */
    clientRequestToken?: string;
}