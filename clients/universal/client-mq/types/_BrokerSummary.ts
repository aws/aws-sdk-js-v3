/**
 * The Amazon Resource Name (ARN) of the broker.
 */
export interface _BrokerSummary {
  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * The status of the broker.
   */
  BrokerState?:
    | "CREATION_IN_PROGRESS"
    | "CREATION_FAILED"
    | "DELETION_IN_PROGRESS"
    | "RUNNING"
    | "REBOOT_IN_PROGRESS"
    | string;

  /**
   * The time when the broker was created.
   */
  Created?: Date | string | number;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: "SINGLE_INSTANCE" | "ACTIVE_STANDBY_MULTI_AZ" | string;

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;
}

export interface _UnmarshalledBrokerSummary extends _BrokerSummary {
  /**
   * The time when the broker was created.
   */
  Created?: Date;
}
