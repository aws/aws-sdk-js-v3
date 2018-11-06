/**
 * <p>Contains information about an alias.</p>
 */
export interface _AliasListEntry {
    /**
     * <p>String that contains the alias.</p>
     */
    AliasName?: string;

    /**
     * <p>String that contains the key ARN.</p>
     */
    AliasArn?: string;

    /**
     * <p>String that contains the key identifier referred to by the alias.</p>
     */
    TargetKeyId?: string;
}

export type _UnmarshalledAliasListEntry = _AliasListEntry;