/**
 * <p>An object representing the enabled or disabled Kubernetes control plane logs for your cluster.</p>
 */
export interface _LogSetup {
  /**
   * <p>The available cluster control plane log types.</p>
   */
  types?:
    | Array<
        | "api"
        | "audit"
        | "authenticator"
        | "controllerManager"
        | "scheduler"
        | string
      >
    | Iterable<
        | "api"
        | "audit"
        | "authenticator"
        | "controllerManager"
        | "scheduler"
        | string
      >;

  /**
   * <p>If a log type is enabled, that log type exports its control plane logs to CloudWatch Logs. If a log type isn't enabled, that log type doesn't export its control plane logs. Each individual log type can be enabled or disabled independently.</p>
   */
  enabled?: boolean;
}

export interface _UnmarshalledLogSetup extends _LogSetup {
  /**
   * <p>The available cluster control plane log types.</p>
   */
  types?: Array<
    | "api"
    | "audit"
    | "authenticator"
    | "controllerManager"
    | "scheduler"
    | string
  >;
}
