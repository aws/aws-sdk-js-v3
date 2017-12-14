import {_BlobMetadata, _UnmarshalledBlobMetadata} from './_BlobMetadata';

/**
 * <p>Returns information about a set of differences for a commit specifier.</p>
 */
export interface _Difference {
    /**
     * <p>Information about a <code>beforeBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>
     */
    beforeBlob?: _BlobMetadata;

    /**
     * <p>Information about an <code>afterBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>
     */
    afterBlob?: _BlobMetadata;

    /**
     * <p>Whether the change type of the difference is an addition (A), deletion (D), or modification (M).</p>
     */
    changeType?: 'A'|'M'|'D'|string;
}

export interface _UnmarshalledDifference extends _Difference {
    /**
     * <p>Information about a <code>beforeBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>
     */
    beforeBlob?: _UnmarshalledBlobMetadata;

    /**
     * <p>Information about an <code>afterBlob</code> data type object, including the ID, the file mode permission code, and the path.</p>
     */
    afterBlob?: _UnmarshalledBlobMetadata;
}