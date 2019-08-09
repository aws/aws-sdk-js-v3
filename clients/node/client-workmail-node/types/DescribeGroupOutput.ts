import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeGroupOutput shape
 */
export interface DescribeGroupOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier of the described group.</p>
   */
  GroupId?: string;

  /**
   * <p>The name of the described group.</p>
   */
  Name?: string;

  /**
   * <p>The email of the described group.</p>
   */
  Email?: string;

  /**
   * <p>The state of the user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to WorkMail).</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>The date and time when a user was registered to WorkMail, in UNIX epoch time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time when a user was deregistered from WorkMail, in UNIX epoch time format.</p>
   */
  DisabledDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
