import { _S3Tag, _UnmarshalledS3Tag } from "./_S3Tag";

/**
 * <p>Contains the configuration parameters for a Set Object Tagging operation. Amazon S3 batch operations passes each value through to the underlying PUT Object tagging API. For more information about the parameters for this operation, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/RESTObjectPUTtagging.html">PUT Object tagging</a>.</p>
 */
export interface _S3SetObjectTaggingOperation {
  /**
   * <p/>
   */
  TagSet?: Array<_S3Tag> | Iterable<_S3Tag>;
}

export interface _UnmarshalledS3SetObjectTaggingOperation
  extends _S3SetObjectTaggingOperation {
  /**
   * <p/>
   */
  TagSet?: Array<_UnmarshalledS3Tag>;
}
