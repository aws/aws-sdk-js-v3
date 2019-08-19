/**
 * <p>Information about the current health of a target.</p>
 */
export interface _TargetHealth {
  /**
   * <p>The state of the target.</p>
   */
  State?:
    | "initial"
    | "healthy"
    | "unhealthy"
    | "unused"
    | "draining"
    | "unavailable"
    | string;

  /**
   * <p>The reason code.</p> <p>If the target state is <code>healthy</code>, a reason code is not provided.</p> <p>If the target state is <code>initial</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Elb.RegistrationInProgress</code> - The target is in the process of being registered with the load balancer.</p> </li> <li> <p> <code>Elb.InitialHealthChecking</code> - The load balancer is still sending the target the minimum number of health checks required to determine its health status.</p> </li> </ul> <p>If the target state is <code>unhealthy</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.ResponseCodeMismatch</code> - The health checks did not return an expected HTTP code.</p> </li> <li> <p> <code>Target.Timeout</code> - The health check requests timed out.</p> </li> <li> <p> <code>Target.FailedHealthChecks</code> - The health checks failed because the connection to the target timed out, the target response was malformed, or the target failed the health check for an unknown reason.</p> </li> <li> <p> <code>Elb.InternalError</code> - The health checks failed due to an internal error.</p> </li> </ul> <p>If the target state is <code>unused</code>, the reason code can be one of the following values:</p> <ul> <li> <p> <code>Target.NotRegistered</code> - The target is not registered with the target group.</p> </li> <li> <p> <code>Target.NotInUse</code> - The target group is not used by any load balancer or the target is in an Availability Zone that is not enabled for its load balancer.</p> </li> <li> <p> <code>Target.IpUnusable</code> - The target IP address is reserved for use by a load balancer.</p> </li> <li> <p> <code>Target.InvalidState</code> - The target is in the stopped or terminated state.</p> </li> </ul> <p>If the target state is <code>draining</code>, the reason code can be the following value:</p> <ul> <li> <p> <code>Target.DeregistrationInProgress</code> - The target is in the process of being deregistered and the deregistration delay period has not expired.</p> </li> </ul> <p>If the target state is <code>unavailable</code>, the reason code can be the following value:</p> <ul> <li> <p> <code>Target.HealthCheckDisabled</code> - Health checks are disabled for the target group.</p> </li> </ul>
   */
  Reason?:
    | "Elb.RegistrationInProgress"
    | "Elb.InitialHealthChecking"
    | "Target.ResponseCodeMismatch"
    | "Target.Timeout"
    | "Target.FailedHealthChecks"
    | "Target.NotRegistered"
    | "Target.NotInUse"
    | "Target.DeregistrationInProgress"
    | "Target.InvalidState"
    | "Target.IpUnusable"
    | "Target.HealthCheckDisabled"
    | "Elb.InternalError"
    | string;

  /**
   * <p>A description of the target health that provides additional details. If the state is <code>healthy</code>, a description is not provided.</p>
   */
  Description?: string;
}

export type _UnmarshalledTargetHealth = _TargetHealth;
