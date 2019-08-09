/**
 * <p>Contains the configuration parameters for an Initiate Glacier Restore job. Amazon S3 batch operations passes each value through to the underlying POST Object restore API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPOSTrestore.html#RESTObjectPOSTrestore-restore-request">Restoring Archives</a>.</p>
 */
export interface _S3InitiateRestoreObjectOperation {
  /**
   * <p/>
   */
  ExpirationInDays?: number;

  /**
   * <p/>
   */
  GlacierJobTier?: "BULK" | "STANDARD" | string;
}

export type _UnmarshalledS3InitiateRestoreObjectOperation = _S3InitiateRestoreObjectOperation;
