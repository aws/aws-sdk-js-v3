import { _UnmarshalledRuntimeConfiguration } from "./_RuntimeConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Represents the returned data in response to a request action.</p>
 */
export interface UpdateRuntimeConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The run-time configuration currently in force. If the update was successful, this object matches the one in the request.</p>
   */
  RuntimeConfiguration?: _UnmarshalledRuntimeConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
