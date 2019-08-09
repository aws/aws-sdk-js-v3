import { _UnmarshalledExpressionStatus } from "./_ExpressionStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>DescribeExpressions</code> request. Contains the expressions configured for the domain specified in the request.</p>
 */
export interface DescribeExpressionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The expressions configured for the domain.</p>
   */
  Expressions: Array<_UnmarshalledExpressionStatus>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
