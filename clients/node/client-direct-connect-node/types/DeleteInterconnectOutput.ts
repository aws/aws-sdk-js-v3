import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DeleteInterconnectOutput shape
 */
export interface DeleteInterconnectOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>The state of the interconnect. The following are the possible values:</p> <ul> <li> <p> <code>requested</code>: The initial state of an interconnect. The interconnect stays in the requested state until the Letter of Authorization (LOA) is sent to the customer.</p> </li> <li> <p> <code>pending</code>: The interconnect is approved, and is being initialized.</p> </li> <li> <p> <code>available</code>: The network link is up, and the interconnect is ready for use.</p> </li> <li> <p> <code>down</code>: The network link is down.</p> </li> <li> <p> <code>deleting</code>: The interconnect is being deleted.</p> </li> <li> <p> <code>deleted</code>: The interconnect is deleted.</p> </li> <li> <p> <code>unknown</code>: The state of the interconnect is not available.</p> </li> </ul>
   */
  interconnectState?:
    | "requested"
    | "pending"
    | "available"
    | "down"
    | "deleting"
    | "deleted"
    | "unknown"
    | string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
