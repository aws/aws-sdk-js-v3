import { _UnmarshalledBrokerInstance } from "./_BrokerInstance";
import { _UnmarshalledConfigurations } from "./_Configurations";
import { _UnmarshalledEncryptionOptions } from "./_EncryptionOptions";
import { _UnmarshalledLogsSummary } from "./_LogsSummary";
import { _UnmarshalledWeeklyStartTime } from "./_WeeklyStartTime";
import { _UnmarshalledUserSummary } from "./_UserSummary";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeBrokerOutput shape
 */
export interface DescribeBrokerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * The Amazon Resource Name (ARN) of the broker.
   */
  BrokerArn?: string;

  /**
   * The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * A list of information about allocated brokers.
   */
  BrokerInstances?: Array<_UnmarshalledBrokerInstance>;

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
   * The list of all revisions for the specified configuration.
   */
  Configurations?: _UnmarshalledConfigurations;

  /**
   * The time when the broker was created.
   */
  Created?: Date;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: "SINGLE_INSTANCE" | "ACTIVE_STANDBY_MULTI_AZ" | string;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: _UnmarshalledEncryptionOptions;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * The list of information about logs currently enabled and pending to be deployed for the specified broker.
   */
  Logs?: _UnmarshalledLogsSummary;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: _UnmarshalledWeeklyStartTime;

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  PendingEngineVersion?: string;

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * Required. The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
   */
  SecurityGroups?: Array<string>;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: Array<string>;

  /**
   * The list of all tags associated with this broker.
   */
  Tags?: { [key: string]: string };

  /**
   * The list of all ActiveMQ usernames for the specified broker.
   */
  Users?: Array<_UnmarshalledUserSummary>;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
