/**
 * <p>Specifies whether Amazon S3 should replicate delete makers.</p>
 */
export interface _DeleteMarkerReplication {
    /**
     * <p>The status of the delete marker replication.</p> <note> <p> In the current implementation, Amazon S3 does not replicate the delete markers. Therefore, the status must be <code>Disabled</code>. </p> </note>
     */
    Status?: 'Enabled'|'Disabled'|string;
}

export type _UnmarshalledDeleteMarkerReplication = _DeleteMarkerReplication;