import { _UnmarshalledAvailabilityOptionsStatus } from "./_AvailabilityOptionsStatus";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result of a <code>UpdateAvailabilityOptions</code> request. Contains the status of the domain's availability options. </p>
 */
export interface UpdateAvailabilityOptionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The newly-configured availability options. Indicates whether Multi-AZ is enabled for the domain. </p>
   */
  AvailabilityOptions?: _UnmarshalledAvailabilityOptionsStatus;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
