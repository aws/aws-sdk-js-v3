/**
 * <p>An object with identifying information for an Amazon ECR image.</p>
 */
export interface _ImageIdentifier {
  /**
   * <p>The <code>sha256</code> digest of the image manifest.</p>
   */
  imageDigest?: string;

  /**
   * <p>The tag used for the image.</p>
   */
  imageTag?: string;
}

export type _UnmarshalledImageIdentifier = _ImageIdentifier;
