import { _UnmarshalledCreateFleetError } from "./_CreateFleetError";
import { _UnmarshalledCreateFleetInstance } from "./_CreateFleetInstance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateFleetOutput shape
 */
export interface CreateFleetOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ID of the EC2 Fleet.</p>
   */
  FleetId?: string;

  /**
   * <p>Information about the instances that could not be launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Errors?: Array<_UnmarshalledCreateFleetError>;

  /**
   * <p>Information about the instances that were launched by the fleet. Valid only when <b>Type</b> is set to <code>instant</code>.</p>
   */
  Instances?: Array<_UnmarshalledCreateFleetInstance>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
