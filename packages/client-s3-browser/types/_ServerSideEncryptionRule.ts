import {_ServerSideEncryptionByDefault, _UnmarshalledServerSideEncryptionByDefault} from './_ServerSideEncryptionByDefault';

/**
 * <p>Container for information about a particular server-side encryption configuration rule.</p>
 */
export interface _ServerSideEncryptionRule {
    /**
     * <p>Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.</p>
     */
    ApplyServerSideEncryptionByDefault?: _ServerSideEncryptionByDefault;
}

export interface _UnmarshalledServerSideEncryptionRule extends _ServerSideEncryptionRule {
    /**
     * <p>Describes the default server-side encryption to apply to new objects in the bucket. If Put Object request does not specify any server-side encryption, this default encryption will be applied.</p>
     */
    ApplyServerSideEncryptionByDefault?: _UnmarshalledServerSideEncryptionByDefault;
}