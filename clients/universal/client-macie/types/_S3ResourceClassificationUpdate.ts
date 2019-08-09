import {
  _ClassificationTypeUpdate,
  _UnmarshalledClassificationTypeUpdate
} from "./_ClassificationTypeUpdate";

/**
 * <p>The S3 resources whose classification types you want to update. This data type is used as a request parameter in the UpdateS3Resources action. </p>
 */
export interface _S3ResourceClassificationUpdate {
  /**
   * <p>The name of the S3 bucket whose classification types you want to update.</p>
   */
  bucketName: string;

  /**
   * <p>The prefix of the S3 bucket whose classification types you want to update.</p>
   */
  prefix?: string;

  /**
   * <p>The classification type that you want to update for the resource associated with Amazon Macie. </p>
   */
  classificationTypeUpdate: _ClassificationTypeUpdate;
}

export interface _UnmarshalledS3ResourceClassificationUpdate
  extends _S3ResourceClassificationUpdate {
  /**
   * <p>The classification type that you want to update for the resource associated with Amazon Macie. </p>
   */
  classificationTypeUpdate: _UnmarshalledClassificationTypeUpdate;
}
