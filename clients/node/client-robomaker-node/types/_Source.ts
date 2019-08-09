/**
 * <p>Information about a source.</p>
 */
export interface _Source {
  /**
   * <p>The s3 bucket name.</p>
   */
  s3Bucket?: string;

  /**
   * <p>The s3 object key.</p>
   */
  s3Key?: string;

  /**
   * <p>A hash of the object specified by <code>s3Bucket</code> and <code>s3Key</code>.</p>
   */
  etag?: string;

  /**
   * <p>The taget processor architecture for the application.</p>
   */
  architecture?: "X86_64" | "ARM64" | "ARMHF" | string;
}

export type _UnmarshalledSource = _Source;
