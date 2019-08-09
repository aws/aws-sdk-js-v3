import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateServiceOutput shape
 */
export interface CreateServiceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the new service.</p>
   */
  Service?: _UnmarshalledService;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
