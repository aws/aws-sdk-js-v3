import { _UnmarshalledConnection } from "./_Connection";
import { _UnmarshalledTag } from "./_Tag";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Information about a link aggregation group (LAG).</p>
 */
export interface DeleteLagOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The individual bandwidth of the physical connections bundled by the LAG. The possible values are 1Gbps and 10Gbps. </p>
   */
  connectionsBandwidth?: string;

  /**
   * <p>The number of physical connections bundled by the LAG, up to a maximum of 10.</p>
   */
  numberOfConnections?: number;

  /**
   * <p>The ID of the LAG.</p>
   */
  lagId?: string;

  /**
   * <p>The ID of the AWS account that owns the LAG.</p>
   */
  ownerAccount?: string;

  /**
   * <p>The name of the LAG.</p>
   */
  lagName?: string;

  /**
   * <p>The state of the LAG. The following are the possible values:</p> <ul> <li> <p> <code>requested</code>: The initial state of a LAG. The LAG stays in the requested state until the Letter of Authorization (LOA) is available.</p> </li> <li> <p> <code>pending</code>: The LAG has been approved and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is established and the LAG is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The LAG is being deleted.</p> </li> <li> <p> <code>deleted</code>: The LAG is deleted.</p> </li> <li> <p> <code>unknown</code>: The state of the LAG is not available.</p> </li> </ul>
   */
  lagState?:
    | "requested"
    | "pending"
    | "available"
    | "down"
    | "deleting"
    | "deleted"
    | "unknown"
    | string;

  /**
   * <p>The location of the LAG.</p>
   */
  location?: string;

  /**
   * <p>The AWS Region where the connection is located.</p>
   */
  region?: string;

  /**
   * <p>The minimum number of physical connections that must be operational for the LAG itself to be operational.</p>
   */
  minimumLinks?: number;

  /**
   * <p>The AWS Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDevice?: string;

  /**
   * <p>The AWS Direct Connect endpoint that hosts the LAG.</p>
   */
  awsDeviceV2?: string;

  /**
   * <p>The connections bundled by the LAG.</p>
   */
  connections?: Array<_UnmarshalledConnection>;

  /**
   * <p>Indicates whether the LAG can host other connections.</p>
   */
  allowsHostedConnections?: boolean;

  /**
   * <p>Indicates whether jumbo frames (9001 MTU) are supported.</p>
   */
  jumboFrameCapable?: boolean;

  /**
   * <p>Indicates whether the LAG supports a secondary BGP peer in the same address family (IPv4/IPv6).</p>
   */
  hasLogicalRedundancy?: "unknown" | "yes" | "no" | string;

  /**
   * <p>Any tags assigned to link aggregation group (LAG).</p>
   */
  tags?: Array<_UnmarshalledTag>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
