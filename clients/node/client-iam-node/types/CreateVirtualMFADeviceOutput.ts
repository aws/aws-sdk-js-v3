import { _UnmarshalledVirtualMFADevice } from "./_VirtualMFADevice";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the response to a successful <a>CreateVirtualMFADevice</a> request. </p>
 */
export interface CreateVirtualMFADeviceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A structure containing details about the new virtual MFA device.</p>
   */
  VirtualMFADevice: _UnmarshalledVirtualMFADevice;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
