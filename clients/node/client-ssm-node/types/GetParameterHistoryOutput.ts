import { _UnmarshalledParameterHistory } from "./_ParameterHistory";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetParameterHistoryOutput shape
 */
export interface GetParameterHistoryOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of parameters returned by the request.</p>
   */
  Parameters?: Array<_UnmarshalledParameterHistory>;

  /**
   * <p>The token to use when requesting the next set of items. If there are no additional items to return, the string is empty.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
