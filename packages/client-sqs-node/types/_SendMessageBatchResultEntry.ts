/**
 * <p>Encloses a <code>MessageId</code> for a successfully-enqueued message in a <code> <a>SendMessageBatch</a>.</code> </p>
 */
export interface _SendMessageBatchResultEntry {
    /**
     * <p>An identifier for the message in this batch.</p>
     */
    Id: string;

    /**
     * <p>An identifier for the message.</p>
     */
    MessageId: string;

    /**
     * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
     */
    MD5OfMessageBody: string;

    /**
     * <p>An MD5 digest of the non-URL-encoded message attribute string. You can use this attribute to verify that Amazon SQS received the message correctly. Amazon SQS URL-decodes the message before creating the MD5 digest. For information about MD5, see <a href="https://www.ietf.org/rfc/rfc1321.txt">RFC1321</a>.</p>
     */
    MD5OfMessageAttributes?: string;

    /**
     * <p>This parameter applies only to FIFO (first-in-first-out) queues.</p> <p>The large, non-consecutive number that Amazon SQS assigns to each message.</p> <p>The length of <code>SequenceNumber</code> is 128 bits. As <code>SequenceNumber</code> continues to increase for a particular <code>MessageGroupId</code>.</p>
     */
    SequenceNumber?: string;
}

export type _UnmarshalledSendMessageBatchResultEntry = _SendMessageBatchResultEntry;