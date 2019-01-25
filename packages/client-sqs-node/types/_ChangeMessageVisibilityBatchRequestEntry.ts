/**
 * <p>Encloses a receipt handle and an entry id for each message in <code> <a>ChangeMessageVisibilityBatch</a>.</code> </p> <important> <p>All of the following list parameters must be prefixed with <code>ChangeMessageVisibilityBatchRequestEntry.n</code>, where <code>n</code> is an integer value starting with <code>1</code>. For example, a parameter list for this action might look like this:</p> </important> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.Id=change_visibility_msg_2</code> </p> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.ReceiptHandle=your_receipt_handle</code> </p> <p> <code>&amp;ChangeMessageVisibilityBatchRequestEntry.1.VisibilityTimeout=45</code> </p>
 */
export interface _ChangeMessageVisibilityBatchRequestEntry {
    /**
     * <p>An identifier for this particular receipt handle used to communicate the result.</p> <note> <p>The <code>Id</code>s of a batch request need to be unique within a request</p> </note>
     */
    Id: string;

    /**
     * <p>A receipt handle.</p>
     */
    ReceiptHandle: string;

    /**
     * <p>The new value (in seconds) for the message's visibility timeout.</p>
     */
    VisibilityTimeout?: number;
}

export type _UnmarshalledChangeMessageVisibilityBatchRequestEntry = _ChangeMessageVisibilityBatchRequestEntry;