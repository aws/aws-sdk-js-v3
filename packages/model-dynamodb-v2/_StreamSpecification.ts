/**
 * <p>Represents the DynamoDB Streams configuration for a table in DynamoDB.</p>
 */
export interface _StreamSpecification {
    /**
     * <p>Indicates whether DynamoDB Streams is enabled (true) or disabled (false) on the table.</p>
     */
    StreamEnabled?: boolean;
    
    /**
     * <p> When an item in the table is modified, <code>StreamViewType</code> determines what information is written to the stream for this table. Valid values for <code>StreamViewType</code> are:</p> <ul> <li> <p> <code>KEYS_ONLY</code> - Only the key attributes of the modified item are written to the stream.</p> </li> <li> <p> <code>NEW_IMAGE</code> - The entire item, as it appears after it was modified, is written to the stream.</p> </li> <li> <p> <code>OLD_IMAGE</code> - The entire item, as it appeared before it was modified, is written to the stream.</p> </li> <li> <p> <code>NEW_AND_OLD_IMAGES</code> - Both the new and the old item images of the item are written to the stream.</p> </li> </ul>
     */
    StreamViewType?: 'NEW_IMAGE'|'OLD_IMAGE'|'NEW_AND_OLD_IMAGES'|'KEYS_ONLY'|string;
}

export type _UnmarshalledStreamSpecification = _StreamSpecification;