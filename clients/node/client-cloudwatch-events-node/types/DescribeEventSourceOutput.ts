import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeEventSourceOutput shape
 */
export interface DescribeEventSourceOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The ARN of the partner event source.</p>
   */
  Arn?: string;

  /**
   * <p>The name of the SaaS partner that created the event source.</p>
   */
  CreatedBy?: string;

  /**
   * <p>The date and time that the event source was created.</p>
   */
  CreationTime?: Date;

  /**
   * <p>The date and time that the event source will expire if you don't create a matching event bus.</p>
   */
  ExpirationTime?: Date;

  /**
   * <p>The name of the partner event source.</p>
   */
  Name?: string;

  /**
   * <p>The state of the event source. If it's <code>ACTIVE</code>, you have already created a matching event bus for this event source, and that event bus is active. If it's <code>PENDING</code>, either you haven't yet created a matching event bus, or that event bus is deactivated. If it's <code>DELETED</code>, you have created a matching event bus, but the event source has since been deleted.</p>
   */
  State?: "PENDING" | "ACTIVE" | "DELETED" | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
