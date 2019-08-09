/**
 * <p>Represents an AWS session credentials object. These credentials are temporary credentials that are issued by AWS Secure Token Service (STS). They can be used to access input and output artifacts in the Amazon S3 bucket used to store artifact for the pipeline in AWS CodePipeline.</p>
 */
export interface _AWSSessionCredentials {
  /**
   * <p>The access key for the session.</p>
   */
  accessKeyId: string;

  /**
   * <p>The secret access key for the session.</p>
   */
  secretAccessKey: string;

  /**
   * <p>The token for the session.</p>
   */
  sessionToken: string;
}

export type _UnmarshalledAWSSessionCredentials = _AWSSessionCredentials;
