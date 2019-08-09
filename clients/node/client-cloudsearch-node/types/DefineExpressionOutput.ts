import { _UnmarshalledExpressionStatus } from "./_ExpressionStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DefineExpression</code> request. Contains the status of the newly-configured expression.</p>
 */
export interface DefineExpressionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The value of an <code>Expression</code> and its current status.</p>
   */
  Expression: _UnmarshalledExpressionStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
