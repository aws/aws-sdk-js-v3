/**
 * <p>Specifies whether Amazon S3 should replicate delete makers.</p>
 */
export interface _DeleteMarkerReplication {
  /**
   * <p>The status of the delete marker replication.</p> <note> <p> In the current implementation, Amazon S3 doesn't replicate the delete markers. The status must be <code>Disabled</code>. </p> </note>
   */
  Status?: "Enabled" | "Disabled" | string;
}

export type _UnmarshalledDeleteMarkerReplication = _DeleteMarkerReplication;
