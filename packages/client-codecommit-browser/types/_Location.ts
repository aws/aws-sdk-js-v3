/**
 * <p>Returns information about the location of a change or comment in the comparison between two commits or a pull request.</p>
 */
export interface _Location {
    /**
     * <p>The name of the file being compared, including its extension and subdirectory, if any.</p>
     */
    filePath?: string;

    /**
     * <p>The position of a change within a compared file, in line number format.</p>
     */
    filePosition?: number;

    /**
     * <p>In a comparison of commits or a pull request, whether the change is in the 'before' or 'after' of that comparison.</p>
     */
    relativeFileVersion?: 'BEFORE'|'AFTER'|string;
}

export type _UnmarshalledLocation = _Location;