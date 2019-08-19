import { _Http, _UnmarshalledHttp } from "./_Http";
import {
  _ValueWithServiceIds,
  _UnmarshalledValueWithServiceIds
} from "./_ValueWithServiceIds";
import { _TraceUser, _UnmarshalledTraceUser } from "./_TraceUser";
import { _ServiceId, _UnmarshalledServiceId } from "./_ServiceId";
import {
  _ResourceARNDetail,
  _UnmarshalledResourceARNDetail
} from "./_ResourceARNDetail";
import {
  _InstanceIdDetail,
  _UnmarshalledInstanceIdDetail
} from "./_InstanceIdDetail";
import {
  _AvailabilityZoneDetail,
  _UnmarshalledAvailabilityZoneDetail
} from "./_AvailabilityZoneDetail";
import {
  _FaultRootCause,
  _UnmarshalledFaultRootCause
} from "./_FaultRootCause";
import {
  _ErrorRootCause,
  _UnmarshalledErrorRootCause
} from "./_ErrorRootCause";
import {
  _ResponseTimeRootCause,
  _UnmarshalledResponseTimeRootCause
} from "./_ResponseTimeRootCause";

/**
 * <p>Metadata generated from the segment documents in a trace.</p>
 */
export interface _TraceSummary {
  /**
   * <p>The unique identifier for the request that generated the trace's segments and subsegments.</p>
   */
  Id?: string;

  /**
   * <p>The length of time in seconds between the start time of the root segment and the end time of the last segment that completed.</p>
   */
  Duration?: number;

  /**
   * <p>The length of time in seconds between the start and end times of the root segment. If the service performs work asynchronously, the response time measures the time before the response is sent to the user, while the duration measures the amount of time before the last traced activity completes.</p>
   */
  ResponseTime?: number;

  /**
   * <p>One or more of the segment documents has a 500 series error.</p>
   */
  HasFault?: boolean;

  /**
   * <p>One or more of the segment documents has a 400 series error.</p>
   */
  HasError?: boolean;

  /**
   * <p>One or more of the segment documents has a 429 throttling error.</p>
   */
  HasThrottle?: boolean;

  /**
   * <p>One or more of the segment documents is in progress.</p>
   */
  IsPartial?: boolean;

  /**
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: _Http;

  /**
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?:
    | {
        [key: string]:
          | Array<_ValueWithServiceIds>
          | Iterable<_ValueWithServiceIds>;
      }
    | Iterable<
        [string, Array<_ValueWithServiceIds> | Iterable<_ValueWithServiceIds>]
      >;

  /**
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: Array<_TraceUser> | Iterable<_TraceUser>;

  /**
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: Array<_ServiceId> | Iterable<_ServiceId>;

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: Array<_ResourceARNDetail> | Iterable<_ResourceARNDetail>;

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace segments.</p>
   */
  InstanceIds?: Array<_InstanceIdDetail> | Iterable<_InstanceIdDetail>;

  /**
   * <p>A list of availability zones for any zone corresponding to the trace segments.</p>
   */
  AvailabilityZones?:
    | Array<_AvailabilityZoneDetail>
    | Iterable<_AvailabilityZoneDetail>;

  /**
   * <p>The root of a trace.</p>
   */
  EntryPoint?: _ServiceId;

  /**
   * <p>A collection of FaultRootCause structures corresponding to the the trace segments.</p>
   */
  FaultRootCauses?: Array<_FaultRootCause> | Iterable<_FaultRootCause>;

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace segments.</p>
   */
  ErrorRootCauses?: Array<_ErrorRootCause> | Iterable<_ErrorRootCause>;

  /**
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace segments.</p>
   */
  ResponseTimeRootCauses?:
    | Array<_ResponseTimeRootCause>
    | Iterable<_ResponseTimeRootCause>;

  /**
   * <p>The revision number of a trace.</p>
   */
  Revision?: number;

  /**
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date | string | number;
}

export interface _UnmarshalledTraceSummary extends _TraceSummary {
  /**
   * <p>Information about the HTTP request served by the trace.</p>
   */
  Http?: _UnmarshalledHttp;

  /**
   * <p>Annotations from the trace's segment documents.</p>
   */
  Annotations?: { [key: string]: Array<_UnmarshalledValueWithServiceIds> };

  /**
   * <p>Users from the trace's segment documents.</p>
   */
  Users?: Array<_UnmarshalledTraceUser>;

  /**
   * <p>Service IDs from the trace's segment documents.</p>
   */
  ServiceIds?: Array<_UnmarshalledServiceId>;

  /**
   * <p>A list of resource ARNs for any resource corresponding to the trace segments.</p>
   */
  ResourceARNs?: Array<_UnmarshalledResourceARNDetail>;

  /**
   * <p>A list of EC2 instance IDs for any instance corresponding to the trace segments.</p>
   */
  InstanceIds?: Array<_UnmarshalledInstanceIdDetail>;

  /**
   * <p>A list of availability zones for any zone corresponding to the trace segments.</p>
   */
  AvailabilityZones?: Array<_UnmarshalledAvailabilityZoneDetail>;

  /**
   * <p>The root of a trace.</p>
   */
  EntryPoint?: _UnmarshalledServiceId;

  /**
   * <p>A collection of FaultRootCause structures corresponding to the the trace segments.</p>
   */
  FaultRootCauses?: Array<_UnmarshalledFaultRootCause>;

  /**
   * <p>A collection of ErrorRootCause structures corresponding to the trace segments.</p>
   */
  ErrorRootCauses?: Array<_UnmarshalledErrorRootCause>;

  /**
   * <p>A collection of ResponseTimeRootCause structures corresponding to the trace segments.</p>
   */
  ResponseTimeRootCauses?: Array<_UnmarshalledResponseTimeRootCause>;

  /**
   * <p>The matched time stamp of a defined event.</p>
   */
  MatchedEventTime?: Date;
}
