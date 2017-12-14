/**
 * <p>Returns information about a target for a pull request.</p>
 */
export interface _Target {
    /**
     * <p>The name of the repository that contains the pull request.</p>
     */
    repositoryName: string;

    /**
     * <p>The branch of the repository that contains the changes for the pull request. Also known as the source branch.</p>
     */
    sourceReference: string;

    /**
     * <p>The branch of the repository where the pull request changes will be merged into. Also known as the destination branch.</p>
     */
    destinationReference?: string;
}

export type _UnmarshalledTarget = _Target;