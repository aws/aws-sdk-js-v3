/**
 * _ServiceId shape
 */
export interface _ServiceId {
    /**
     * _String shape
     */
    Name?: string;

    /**
     * _ServiceNames shape
     */
    Names?: Array<string>|Iterable<string>;

    /**
     * _String shape
     */
    AccountId?: string;

    /**
     * _String shape
     */
    Type?: string;
}

export interface _UnmarshalledServiceId extends _ServiceId {
    /**
     * _ServiceNames shape
     */
    Names?: Array<string>;
}