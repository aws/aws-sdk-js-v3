/**
 * <p>A ZIP archive that contains the contents of an <a href="https://docs.aws.amazon.com/lambda/latest/dg/configuration-layers.html">AWS Lambda layer</a>. You can specify either an Amazon S3 location, or upload a layer archive directly.</p>
 */
export interface _LayerVersionContentInput {
  /**
   * <p>The Amazon S3 bucket of the layer archive.</p>
   */
  S3Bucket?: string;

  /**
   * <p>The Amazon S3 key of the layer archive.</p>
   */
  S3Key?: string;

  /**
   * <p>For versioned objects, the version of the layer archive object to use.</p>
   */
  S3ObjectVersion?: string;

  /**
   * <p>The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: ArrayBuffer | ArrayBufferView | string;
}

export interface _UnmarshalledLayerVersionContentInput
  extends _LayerVersionContentInput {
  /**
   * <p>The base64-encoded contents of the layer archive. AWS SDK and AWS CLI clients handle the encoding for you.</p>
   */
  ZipFile?: Uint8Array;
}
