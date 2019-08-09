import { _UnmarshalledScript } from "./_Script";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * ListScriptsOutput shape
 */
export interface ListScriptsOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Set of properties describing the requested script.</p>
   */
  Scripts?: Array<_UnmarshalledScript>;

  /**
   * <p>Token that indicates where to resume retrieving results on the next call to this action. If no token is returned, these results represent the end of the list.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
