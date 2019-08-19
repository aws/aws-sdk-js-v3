import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateAlgorithmOutput shape
 */
export interface CreateAlgorithmOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The Amazon Resource Name (ARN) of the new algorithm.</p>
   */
  AlgorithmArn: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
