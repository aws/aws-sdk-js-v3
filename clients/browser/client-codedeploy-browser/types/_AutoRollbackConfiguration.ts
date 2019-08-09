/**
 * <p>Information about a configuration for automatically rolling back to a previous version of an application revision when a deployment is not completed successfully.</p>
 */
export interface _AutoRollbackConfiguration {
  /**
   * <p>Indicates whether a defined automatic rollback configuration is currently enabled.</p>
   */
  enabled?: boolean;

  /**
   * <p>The event type or types that trigger a rollback.</p>
   */
  events?:
    | Array<
        | "DEPLOYMENT_FAILURE"
        | "DEPLOYMENT_STOP_ON_ALARM"
        | "DEPLOYMENT_STOP_ON_REQUEST"
        | string
      >
    | Iterable<
        | "DEPLOYMENT_FAILURE"
        | "DEPLOYMENT_STOP_ON_ALARM"
        | "DEPLOYMENT_STOP_ON_REQUEST"
        | string
      >;
}

export interface _UnmarshalledAutoRollbackConfiguration
  extends _AutoRollbackConfiguration {
  /**
   * <p>The event type or types that trigger a rollback.</p>
   */
  events?: Array<
    | "DEPLOYMENT_FAILURE"
    | "DEPLOYMENT_STOP_ON_ALARM"
    | "DEPLOYMENT_STOP_ON_REQUEST"
    | string
  >;
}
