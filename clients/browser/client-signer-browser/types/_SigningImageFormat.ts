/**
 * <p>The image format of an AWS Signer platform or profile.</p>
 */
export interface _SigningImageFormat {
  /**
   * <p>The supported formats of an AWS Signer signing image.</p>
   */
  supportedFormats: Array<"JSON" | string> | Iterable<"JSON" | string>;

  /**
   * <p>The default format of an AWS Signer signing image.</p>
   */
  defaultFormat: "JSON" | string;
}

export interface _UnmarshalledSigningImageFormat extends _SigningImageFormat {
  /**
   * <p>The supported formats of an AWS Signer signing image.</p>
   */
  supportedFormats: Array<"JSON" | string>;
}
