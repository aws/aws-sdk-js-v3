import {
  _S3SignedObject,
  _UnmarshalledS3SignedObject
} from "./_S3SignedObject";

/**
 * <p>Points to an <code>S3SignedObject</code> object that contains information about your signed code image.</p>
 */
export interface _SignedObject {
  /**
   * <p>The <code>S3SignedObject</code>.</p>
   */
  s3?: _S3SignedObject;
}

export interface _UnmarshalledSignedObject extends _SignedObject {
  /**
   * <p>The <code>S3SignedObject</code>.</p>
   */
  s3?: _UnmarshalledS3SignedObject;
}
