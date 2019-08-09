import { _UnmarshalledService } from "./_Service";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * GetServiceOutput shape
 */
export interface GetServiceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A complex type that contains information about the service.</p>
   */
  Service?: _UnmarshalledService;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
