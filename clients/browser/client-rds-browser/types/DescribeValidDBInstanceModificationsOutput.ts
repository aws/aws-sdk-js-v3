import { _UnmarshalledValidDBInstanceModificationsMessage } from "./_ValidDBInstanceModificationsMessage";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeValidDBInstanceModificationsOutput shape
 */
export interface DescribeValidDBInstanceModificationsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>Information about valid modifications that you can make to your DB instance. Contains the result of a successful call to the <code>DescribeValidDBInstanceModifications</code> action. You can use this information when you call <code>ModifyDBInstance</code>. </p>
   */
  ValidDBInstanceModificationsMessage?: _UnmarshalledValidDBInstanceModificationsMessage;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
