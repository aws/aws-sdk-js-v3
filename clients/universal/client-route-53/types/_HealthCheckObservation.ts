import { _StatusReport, _UnmarshalledStatusReport } from "./_StatusReport";

/**
 * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker.</p>
 */
export interface _HealthCheckObservation {
  /**
   * <p>The region of the Amazon Route 53 health checker that provided the status in <code>StatusReport</code>.</p>
   */
  Region?:
    | "us-east-1"
    | "us-west-1"
    | "us-west-2"
    | "eu-west-1"
    | "ap-southeast-1"
    | "ap-southeast-2"
    | "ap-northeast-1"
    | "sa-east-1"
    | string;

  /**
   * <p>The IP address of the Amazon Route 53 health checker that provided the failure reason in <code>StatusReport</code>.</p>
   */
  IPAddress?: string;

  /**
   * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.</p>
   */
  StatusReport?: _StatusReport;
}

export interface _UnmarshalledHealthCheckObservation
  extends _HealthCheckObservation {
  /**
   * <p>A complex type that contains the last failure reason as reported by one Amazon Route 53 health checker and the time of the failed health check.</p>
   */
  StatusReport?: _UnmarshalledStatusReport;
}
