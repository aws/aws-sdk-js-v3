import { _UnmarshalledUserPendingChanges } from "./_UserPendingChanges";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeUserOutput shape
 */
export interface DescribeUserOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * Enables access to the the ActiveMQ Web Console for the ActiveMQ user.
   */
  ConsoleAccess?: boolean;

  /**
   * The list of groups (20 maximum) to which the ActiveMQ user belongs. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Groups?: Array<string>;

  /**
   * The status of the changes pending for the ActiveMQ user.
   */
  Pending?: _UnmarshalledUserPendingChanges;

  /**
   * Required. The username of the ActiveMQ user. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Username?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
