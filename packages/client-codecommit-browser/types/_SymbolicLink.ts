/**
 * <p>Returns information about a symbolic link in a repository folder.</p>
 */
export interface _SymbolicLink {
    /**
     * <p>The blob ID that contains the information about the symbolic link.</p>
     */
    blobId?: string;

    /**
     * <p>The fully-qualified path to the folder that contains the symbolic link.</p>
     */
    absolutePath?: string;

    /**
     * <p>The relative path of the symbolic link from the folder where the query originated.</p>
     */
    relativePath?: string;

    /**
     * <p>The file mode permissions of the blob that cotains information about the symbolic link.</p>
     */
    fileMode?: 'EXECUTABLE'|'NORMAL'|'SYMLINK'|string;
}

export type _UnmarshalledSymbolicLink = _SymbolicLink;