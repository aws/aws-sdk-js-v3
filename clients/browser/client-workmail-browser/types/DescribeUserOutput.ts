import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserOutput shape
 */
export interface DescribeUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The identifier for the described user.</p>
   */
  UserId?: string;

  /**
   * <p>The name for the user.</p>
   */
  Name?: string;

  /**
   * <p>The email of the user.</p>
   */
  Email?: string;

  /**
   * <p>The display name of the user.</p>
   */
  DisplayName?: string;

  /**
   * <p>The state of a user: enabled (registered to Amazon WorkMail) or disabled (deregistered or never registered to WorkMail).</p>
   */
  State?: "ENABLED" | "DISABLED" | "DELETED" | string;

  /**
   * <p>In certain cases, other entities are modeled as users. If interoperability is enabled, resources are imported into Amazon WorkMail as users. Because different WorkMail organizations rely on different directory types, administrators can distinguish between an unregistered user (account is disabled and has a user role) and the directory administrators. The values are USER, RESOURCE, and SYSTEM_USER.</p>
   */
  UserRole?: "USER" | "RESOURCE" | "SYSTEM_USER" | string;

  /**
   * <p>The date and time at which the user was enabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  EnabledDate?: Date;

  /**
   * <p>The date and time at which the user was disabled for Amazon WorkMail usage, in UNIX epoch time format.</p>
   */
  DisabledDate?: Date;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
