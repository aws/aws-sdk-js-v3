/**
 * <p>Information about notification triggers for the deployment group.</p>
 */
export interface _TriggerConfig {
  /**
   * <p>The name of the notification trigger.</p>
   */
  triggerName?: string;

  /**
   * <p>The ARN of the Amazon Simple Notification Service topic through which notifications about deployment or instance events are sent.</p>
   */
  triggerTargetArn?: string;

  /**
   * <p>The event type or types for which notifications are triggered.</p>
   */
  triggerEvents?:
    | Array<
        | "DeploymentStart"
        | "DeploymentSuccess"
        | "DeploymentFailure"
        | "DeploymentStop"
        | "DeploymentRollback"
        | "DeploymentReady"
        | "InstanceStart"
        | "InstanceSuccess"
        | "InstanceFailure"
        | "InstanceReady"
        | string
      >
    | Iterable<
        | "DeploymentStart"
        | "DeploymentSuccess"
        | "DeploymentFailure"
        | "DeploymentStop"
        | "DeploymentRollback"
        | "DeploymentReady"
        | "InstanceStart"
        | "InstanceSuccess"
        | "InstanceFailure"
        | "InstanceReady"
        | string
      >;
}

export interface _UnmarshalledTriggerConfig extends _TriggerConfig {
  /**
   * <p>The event type or types for which notifications are triggered.</p>
   */
  triggerEvents?: Array<
    | "DeploymentStart"
    | "DeploymentSuccess"
    | "DeploymentFailure"
    | "DeploymentStop"
    | "DeploymentRollback"
    | "DeploymentReady"
    | "InstanceStart"
    | "InstanceSuccess"
    | "InstanceFailure"
    | "InstanceReady"
    | string
  >;
}
