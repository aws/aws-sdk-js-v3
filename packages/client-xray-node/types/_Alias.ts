/**
 * _Alias shape
 */
export interface _Alias {
    /**
     * _String shape
     */
    Name?: string;

    /**
     * _AliasNames shape
     */
    Names?: Array<string>|Iterable<string>;

    /**
     * _String shape
     */
    Type?: string;
}

export interface _UnmarshalledAlias extends _Alias {
    /**
     * _AliasNames shape
     */
    Names?: Array<string>;
}