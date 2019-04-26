import {_Tag, _UnmarshalledTag} from './_Tag';

/**
 * _Tagging shape
 */
export interface _Tagging {
    /**
     * _TagSet shape
     */
    TagSet: Array<_Tag>|Iterable<_Tag>;
}

export interface _UnmarshalledTagging extends _Tagging {
    /**
     * _TagSet shape
     */
    TagSet: Array<_UnmarshalledTag>;
}