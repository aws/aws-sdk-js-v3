import { _UnmarshalledUserDefinedFunction } from "./_UserDefinedFunction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetUserDefinedFunctionOutput shape
 */
export interface GetUserDefinedFunctionOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The requested function definition.</p>
   */
  UserDefinedFunction?: _UnmarshalledUserDefinedFunction;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
