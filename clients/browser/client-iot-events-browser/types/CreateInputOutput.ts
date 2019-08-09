import { _UnmarshalledInputConfiguration } from "./_InputConfiguration";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateInputOutput shape
 */
export interface CreateInputOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about the configuration of the input.</p>
   */
  inputConfiguration?: _UnmarshalledInputConfiguration;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
