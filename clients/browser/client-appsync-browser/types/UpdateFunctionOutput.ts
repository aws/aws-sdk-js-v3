import { _UnmarshalledFunctionConfiguration } from "./_FunctionConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateFunctionOutput shape
 */
export interface UpdateFunctionOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The <code>Function</code> object.</p>
   */
  functionConfiguration?: _UnmarshalledFunctionConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
