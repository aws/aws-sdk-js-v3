import { _UnmarshalledManagedAction } from "./_ManagedAction";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>The result message containing a list of managed actions.</p>
 */
export interface DescribeEnvironmentManagedActionsOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A list of upcoming and in-progress managed actions.</p>
   */
  ManagedActions?: Array<_UnmarshalledManagedAction>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
