/**
 * GetDifferencesInput shape
 */
export interface GetDifferencesInput {
    /**
     * <p>The name of the repository where you want to get differences.</p>
     */
    repositoryName: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit. For example, the full commit ID. Optional. If not specified, all changes prior to the <code>afterCommitSpecifier</code> value will be shown. If you do not use <code>beforeCommitSpecifier</code> in your request, consider limiting the results with <code>maxResults</code>.</p>
     */
    beforeCommitSpecifier?: string;

    /**
     * <p>The branch, tag, HEAD, or other fully qualified reference used to identify a commit.</p>
     */
    afterCommitSpecifier: string;

    /**
     * <p>The file path in which to check for differences. Limits the results to this path. Can also be used to specify the previous name of a directory or folder. If <code>beforePath</code> and <code>afterPath</code> are not specified, differences will be shown for all paths.</p>
     */
    beforePath?: string;

    /**
     * <p>The file path in which to check differences. Limits the results to this path. Can also be used to specify the changed name of a directory or folder, if it has changed. If not specified, differences will be shown for all paths.</p>
     */
    afterPath?: string;

    /**
     * <p>A non-negative integer used to limit the number of returned results.</p>
     */
    MaxResults?: number;

    /**
     * <p>An enumeration token that when provided in a request, returns the next batch of the results.</p>
     */
    NextToken?: string;
}