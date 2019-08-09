import {
  _InstanceStatusDetails,
  _UnmarshalledInstanceStatusDetails
} from "./_InstanceStatusDetails";

/**
 * <p>Describes the status of an instance.</p>
 */
export interface _InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   */
  Details?: Array<_InstanceStatusDetails> | Iterable<_InstanceStatusDetails>;

  /**
   * <p>The status.</p>
   */
  Status?:
    | "ok"
    | "impaired"
    | "insufficient-data"
    | "not-applicable"
    | "initializing"
    | string;
}

export interface _UnmarshalledInstanceStatusSummary
  extends _InstanceStatusSummary {
  /**
   * <p>The system instance health or application instance health.</p>
   */
  Details?: Array<_UnmarshalledInstanceStatusDetails>;
}
