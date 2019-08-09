import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeDeviceOutput shape
 */
export interface DescribeDeviceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The current state of the device.</p>
   */
  Status?: "ACTIVE" | "SIGNED_OUT" | string;

  /**
   * <p>The model of the device.</p>
   */
  Model?: string;

  /**
   * <p>The manufacturer of the device.</p>
   */
  Manufacturer?: string;

  /**
   * <p>The operating system of the device.</p>
   */
  OperatingSystem?: string;

  /**
   * <p>The operating system version of the device.</p>
   */
  OperatingSystemVersion?: string;

  /**
   * <p>The operating system patch level of the device.</p>
   */
  PatchLevel?: string;

  /**
   * <p>The date that the device first signed in to Amazon WorkLink.</p>
   */
  FirstAccessedTime?: Date;

  /**
   * <p>The date that the device last accessed Amazon WorkLink.</p>
   */
  LastAccessedTime?: Date;

  /**
   * <p>The user name associated with the device.</p>
   */
  Username?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
