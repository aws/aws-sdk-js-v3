import { _UnmarshalledBookingOptions } from "./_BookingOptions";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeResourceOutput shape
 */
export interface DescribeResourceOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the described resource.</p>
   */
  ResourceId?: string;

  /**
   * <p>The email of the described resource.</p>
   */
  Email?: string;

  /**
   * <p>The name of the described resource.</p>
   */
  Name?: string;

  /**
   * <p>The type of the described resource.</p>
   */
  Type?: "ROOM" | "EQUIPMENT" | string;

  /**
   * <p>The booking options for the described resource.</p>
   */
  BookingOptions?: _UnmarshalledBookingOptions;

  /**
   * <p>The state of the resource: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to WorkMail).</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date and time when a resource was enabled for WorkMail, in UNIX epoch time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a resource was disabled from WorkMail, in UNIX epoch time format.</p>
   */
  DisabledDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
