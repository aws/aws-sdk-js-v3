/**
 * <p>Details about a version of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.</p>
 */
export interface _LayerVersionContentOutput {
  /**
   * <p>A link to the layer archive in Amazon S3 that is valid for 10 minutes.</p>
   */
  Location?: string;

  /**
   * <p>The SHA-256 hash of the layer archive.</p>
   */
  CodeSha256?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export type _UnmarshalledLayerVersionContentOutput = _LayerVersionContentOutput;
