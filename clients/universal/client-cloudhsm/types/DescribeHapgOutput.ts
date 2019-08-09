import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Contains the output of the <a>DescribeHapg</a> action.</p>
 */
export interface DescribeHapgOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the high-availability partition group.</p>
   */
  HapgArn?: string;

  /**
   * <p>The serial number of the high-availability partition group.</p>
   */
  HapgSerial?: string;

  /**
   * <p/>
   */
  HsmsLastActionFailed?: Array<string>;

  /**
   * <p/>
   */
  HsmsPendingDeletion?: Array<string>;

  /**
   * <p/>
   */
  HsmsPendingRegistration?: Array<string>;

  /**
   * <p>The label for the high-availability partition group.</p>
   */
  Label?: string;

  /**
   * <p>The date and time the high-availability partition group was last modified.</p>
   */
  LastModifiedTimestamp?: string;

  /**
   * <p>The list of partition serial numbers that belong to the high-availability partition group.</p>
   */
  PartitionSerialList?: Array<string>;

  /**
   * <p>The state of the high-availability partition group.</p>
   */
  State?: "READY" | "UPDATING" | "DEGRADED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
