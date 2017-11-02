/**
 * _StreamSpecification shape
 */
export interface _StreamSpecification {
    /**
     * _StreamEnabled shape
     */
    StreamEnabled?: boolean;
    
    /**
     * _StreamViewType shape
     */
    StreamViewType?: 'NEW_IMAGE'|'OLD_IMAGE'|'NEW_AND_OLD_IMAGES'|'KEYS_ONLY'|string;
}

export type _UnmarshalledStreamSpecification = _StreamSpecification;