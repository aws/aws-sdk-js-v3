import {
  _InstanceStatusEvent,
  _UnmarshalledInstanceStatusEvent
} from "./_InstanceStatusEvent";
import { _InstanceState, _UnmarshalledInstanceState } from "./_InstanceState";
import {
  _InstanceStatusSummary,
  _UnmarshalledInstanceStatusSummary
} from "./_InstanceStatusSummary";

/**
 * <p>Describes the status of an instance.</p>
 */
export interface _InstanceStatus {
  /**
   * <p>The Availability Zone of the instance.</p>
   */
  AvailabilityZone?: string;

  /**
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: Array<_InstanceStatusEvent> | Iterable<_InstanceStatusEvent>;

  /**
   * <p>The ID of the instance.</p>
   */
  InstanceId?: string;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: _InstanceState;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.</p>
   */
  InstanceStatus?: _InstanceStatusSummary;

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: _InstanceStatusSummary;
}

export interface _UnmarshalledInstanceStatus extends _InstanceStatus {
  /**
   * <p>Any scheduled events associated with the instance.</p>
   */
  Events?: Array<_UnmarshalledInstanceStatusEvent>;

  /**
   * <p>The intended state of the instance. <a>DescribeInstanceStatus</a> requires that an instance be in the <code>running</code> state.</p>
   */
  InstanceState?: _UnmarshalledInstanceState;

  /**
   * <p>Reports impaired functionality that stems from issues internal to the instance, such as impaired reachability.</p>
   */
  InstanceStatus?: _UnmarshalledInstanceStatusSummary;

  /**
   * <p>Reports impaired functionality that stems from issues related to the systems that support an instance, such as hardware failures and network connectivity problems.</p>
   */
  SystemStatus?: _UnmarshalledInstanceStatusSummary;
}
