import {
  _ClassificationType,
  _UnmarshalledClassificationType
} from "./_ClassificationType";

/**
 * <p>The S3 resources that you want to associate with Amazon Macie for monitoring and data classification. This data type is used as a request parameter in the AssociateS3Resources action and a response parameter in the ListS3Resources action. </p>
 */
export interface _S3ResourceClassification {
  /**
   * <p>The name of the S3 bucket that you want to associate with Amazon Macie.</p>
   */
  bucketName: string;

  /**
   * <p>The prefix of the S3 bucket that you want to associate with Amazon Macie.</p>
   */
  prefix?: string;

  /**
   * <p>The classification type that you want to specify for the resource associated with Amazon Macie. </p>
   */
  classificationType: _ClassificationType;
}

export interface _UnmarshalledS3ResourceClassification
  extends _S3ResourceClassification {
  /**
   * <p>The classification type that you want to specify for the resource associated with Amazon Macie. </p>
   */
  classificationType: _UnmarshalledClassificationType;
}
