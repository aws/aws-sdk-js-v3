/**
 * <p>An <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>.</p>
 */
export interface _Layer {
  /**
   * <p>The Amazon Resource Name (ARN) of the function layer.</p>
   */
  Arn?: string;

  /**
   * <p>The size of the layer archive in bytes.</p>
   */
  CodeSize?: number;
}

export type _UnmarshalledLayer = _Layer;
