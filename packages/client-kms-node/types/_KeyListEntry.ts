/**
 * <p>Contains information about each entry in the key list.</p>
 */
export interface _KeyListEntry {
    /**
     * <p>Unique identifier of the key.</p>
     */
    KeyId?: string;

    /**
     * <p>ARN of the key.</p>
     */
    KeyArn?: string;
}

export type _UnmarshalledKeyListEntry = _KeyListEntry;