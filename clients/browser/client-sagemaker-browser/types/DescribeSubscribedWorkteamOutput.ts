import { _UnmarshalledSubscribedWorkteam } from "./_SubscribedWorkteam";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeSubscribedWorkteamOutput shape
 */
export interface DescribeSubscribedWorkteamOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>A <code>Workteam</code> instance that contains information about the work team.</p>
   */
  SubscribedWorkteam: _UnmarshalledSubscribedWorkteam;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
