import {_Owner, _UnmarshalledOwner} from './_Owner';

/**
 * _Object shape
 */
export interface _Object {
    /**
     * _ObjectKey shape
     */
    Key?: string;

    /**
     * _LastModified shape
     */
    LastModified?: Date|string|number;

    /**
     * _ETag shape
     */
    ETag?: string;

    /**
     * _Size shape
     */
    Size?: number;

    /**
     * <p>The class of storage used to store the object.</p>
     */
    StorageClass?: 'STANDARD'|'REDUCED_REDUNDANCY'|'GLACIER'|'STANDARD_IA'|'ONEZONE_IA'|string;

    /**
     * _Owner shape
     */
    Owner?: _Owner;
}

export interface _UnmarshalledObject extends _Object {
    /**
     * _LastModified shape
     */
    LastModified?: Date;

    /**
     * _Owner shape
     */
    Owner?: _UnmarshalledOwner;
}