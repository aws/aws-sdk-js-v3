import { _UnmarshalledGroupIdentifier } from "./_GroupIdentifier";
import { _UnmarshalledInstance } from "./_Instance";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Describes a reservation.</p>
 */
export interface RunInstancesOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The instances.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;

  /**
   * <p>The ID of the AWS account that owns the reservation.</p>
   */
  OwnerId?: string;

  /**
   * <p>The ID of the requester that launched the instances on your behalf (for example, AWS Management Console or Auto Scaling).</p>
   */
  RequesterId?: string;

  /**
   * <p>The ID of the reservation.</p>
   */
  ReservationId?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
