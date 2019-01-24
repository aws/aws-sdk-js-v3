/**
 * <p/>
 */
export interface _ServiceId {
    /**
     * <p/>
     */
    Name?: string;

    /**
     * <p/>
     */
    Names?: Array<string>|Iterable<string>;

    /**
     * <p/>
     */
    AccountId?: string;

    /**
     * <p/>
     */
    Type?: string;
}

export interface _UnmarshalledServiceId extends _ServiceId {
    /**
     * <p/>
     */
    Names?: Array<string>;
}