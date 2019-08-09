import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of EvaluateExpression.</p>
 */
export interface EvaluateExpressionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The evaluated expression.</p>
   */
  evaluatedExpression: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
