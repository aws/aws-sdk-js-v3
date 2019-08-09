import {
  _GroupIdentifier,
  _UnmarshalledGroupIdentifier
} from "./_GroupIdentifier";
import { _Instance, _UnmarshalledInstance } from "./_Instance";

/**
 * <p>Describes a reservation.</p>
 */
export interface _Reservation {
  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: Array<_GroupIdentifier> | Iterable<_GroupIdentifier>;

  /**
   * <p>The instances.</p>
   */
  Instances?: Array<_Instance> | Iterable<_Instance>;

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
}

export interface _UnmarshalledReservation extends _Reservation {
  /**
   * <p>[EC2-Classic only] The security groups.</p>
   */
  Groups?: Array<_UnmarshalledGroupIdentifier>;

  /**
   * <p>The instances.</p>
   */
  Instances?: Array<_UnmarshalledInstance>;
}
