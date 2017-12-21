/**
 * <p>Returns information about a merge or potential merge between a source reference and a destination reference in a pull request.</p>
 */
export interface _MergeMetadata {
    /**
     * <p>A Boolean value indicating whether the merge has been made.</p>
     */
    isMerged?: boolean;

    /**
     * <p>The Amazon Resource Name (ARN) of the user who merged the branches.</p>
     */
    mergedBy?: string;
}

export type _UnmarshalledMergeMetadata = _MergeMetadata;