/**
 * <p>A container for information about access control for replicas.</p>
 */
export interface _AccessControlTranslation {
  /**
   * <p>Specifies the replica ownership. For default and valid values, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTBucketPUTreplication.html">PUT bucket replication</a> in the <i>Amazon Simple Storage Service API Reference</i>.</p>
   */
  Owner: "Destination" | string;
}

export type _UnmarshalledAccessControlTranslation = _AccessControlTranslation;
