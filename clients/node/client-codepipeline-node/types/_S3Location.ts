/**
 * <p>The Amazon S3 artifact location for an action's artifacts.</p>
 */
export interface _S3Location {
  /**
   * <p>The Amazon S3 artifact bucket for an action's artifacts.</p>
   */
  bucket?: string;

  /**
   * <p>The artifact name.</p>
   */
  key?: string;
}

export type _UnmarshalledS3Location = _S3Location;
