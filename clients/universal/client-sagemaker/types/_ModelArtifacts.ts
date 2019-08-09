/**
 * <p>Provides information about the location that is configured for storing model artifacts. </p>
 */
export interface _ModelArtifacts {
  /**
   * <p>The path of the S3 object that contains the model artifacts. For example, <code>s3://bucket-name/keynameprefix/model.tar.gz</code>.</p>
   */
  S3ModelArtifacts: string;
}

export type _UnmarshalledModelArtifacts = _ModelArtifacts;
