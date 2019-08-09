import { _UnmarshalledExpressionStatus } from "./_ExpressionStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code><a>DeleteExpression</a></code> request. Specifies the expression being deleted.</p>
 */
export interface DeleteExpressionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The status of the expression being deleted.</p>
   */
  Expression: _UnmarshalledExpressionStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
