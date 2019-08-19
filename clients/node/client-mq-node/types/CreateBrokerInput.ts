import { _ConfigurationId } from "./_ConfigurationId";
import { _EncryptionOptions } from "./_EncryptionOptions";
import { _Logs } from "./_Logs";
import { _WeeklyStartTime } from "./_WeeklyStartTime";
import { _User } from "./_User";
import { NodeHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * Creates a broker using the specified properties.
 */
export interface CreateBrokerInput {
  /**
   * Required. Enables automatic upgrades to new minor versions for brokers, as Apache releases the versions. The automatic upgrades occur during the maintenance window of the broker or after a manual broker reboot.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * Required. The name of the broker. This value must be unique in your AWS account, 1-50 characters long, must contain only letters, numbers, dashes, and underscores, and must not contain whitespaces, brackets, wildcard characters, or special characters.
   */
  BrokerName?: string;

  /**
   * A list of information about the configuration.
   */
  Configuration?: _ConfigurationId;

  /**
   * The unique ID that the requester receives for the created broker. Amazon MQ passes your ID with the API action. Note: We recommend using a Universally Unique Identifier (UUID) for the creatorRequestId. You may omit the creatorRequestId if your application doesn't require idempotency.
   */
  CreatorRequestId?: string;

  /**
   * Required. The deployment mode of the broker.
   */
  DeploymentMode?: "SINGLE_INSTANCE" | "ACTIVE_STANDBY_MULTI_AZ" | string;

  /**
   * Encryption options for the broker.
   */
  EncryptionOptions?: _EncryptionOptions;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The broker's instance type.
   */
  HostInstanceType?: string;

  /**
   * Enables Amazon CloudWatch logging for brokers.
   */
  Logs?: _Logs;

  /**
   * The parameters that determine the WeeklyStartTime.
   */
  MaintenanceWindowStartTime?: _WeeklyStartTime;

  /**
   * Required. Enables connections from applications outside of the VPC that hosts the broker's subnets.
   */
  PubliclyAccessible?: boolean;

  /**
   * The list of rules (1 minimum, 125 maximum) that authorize connections to brokers.
   */
  SecurityGroups?: Array<string> | Iterable<string>;

  /**
   * The list of groups (2 maximum) that define which subnets and IP ranges the broker can use from different Availability Zones. A SINGLE_INSTANCE deployment requires one subnet (for example, the default subnet). An ACTIVE_STANDBY_MULTI_AZ deployment requires two subnets.
   */
  SubnetIds?: Array<string> | Iterable<string>;

  /**
   * Create tags when creating the broker.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * Required. The list of ActiveMQ users (persons or applications) who can access queues and topics. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 2-100 characters long.
   */
  Users?: Array<_User> | Iterable<_User>;

  /**
   * The maximum number of times this operation should be retried. If set, this value will override the `maxRetries` configuration set on the client for this command.
   */
  $maxRetries?: number;

  /**
   * An object that may be queried to determine if the underlying operation has been aborted.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal
   */
  $abortSignal?: __aws_sdk_types.AbortSignal;

  /**
   * Per-request HTTP configuration options. If set, any options specified will override the corresponding HTTP option set on the client for this command.
   */
  $httpOptions?: __HttpOptions__;
}
