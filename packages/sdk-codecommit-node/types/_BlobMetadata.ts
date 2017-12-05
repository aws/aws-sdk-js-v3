/**
 * <p>Returns information about a specific Git blob object.</p>
 */
export interface _BlobMetadata {
    /**
     * <p>The full ID of the blob.</p>
     */
    blobId?: string;

    /**
     * <p>The path to the blob and any associated file name, if any.</p>
     */
    path?: string;

    /**
     * <p>The file mode permissions of the blob. File mode permission codes include:</p> <ul> <li> <p> <code>100644</code> indicates read/write</p> </li> <li> <p> <code>100755</code> indicates read/write/execute</p> </li> <li> <p> <code>160000</code> indicates a submodule</p> </li> <li> <p> <code>120000</code> indicates a symlink</p> </li> </ul>
     */
    mode?: string;
}

export type _UnmarshalledBlobMetadata = _BlobMetadata;