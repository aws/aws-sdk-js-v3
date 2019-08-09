import { _UnmarshalledUserDefinedFunction } from "./_UserDefinedFunction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUserDefinedFunctionsOutput shape
 */
export interface GetUserDefinedFunctionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of requested function definitions.</p>
   */
  UserDefinedFunctions?: Array<_UnmarshalledUserDefinedFunction>;

  /**
   * <p>A continuation token, if the list of functions returned does not include the last requested function.</p>
   */
  NextToken?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
