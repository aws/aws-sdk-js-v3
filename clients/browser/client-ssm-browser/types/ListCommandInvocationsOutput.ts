import { _UnmarshalledCommandInvocation } from "./_CommandInvocation";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListCommandInvocationsOutput shape
 */
export interface ListCommandInvocationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>(Optional) A list of all invocations. </p>
   */
  CommandInvocations?: Array<_UnmarshalledCommandInvocation>;

  /**
   * <p>(Optional) The token for the next set of items to return. (You received this token from a previous call.)</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
