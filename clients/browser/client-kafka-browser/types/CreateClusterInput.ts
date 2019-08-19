import { _BrokerNodeGroupInfo } from "./_BrokerNodeGroupInfo";
import { _ClientAuthentication } from "./_ClientAuthentication";
import { _ConfigurationInfo } from "./_ConfigurationInfo";
import { _EncryptionInfo } from "./_EncryptionInfo";
import { BrowserHttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * CreateClusterInput shape
 */
export interface CreateClusterInput {
  /**
   *
   *             <p>Information about the broker nodes in the cluster.</p>
   *
   */
  BrokerNodeGroupInfo: _BrokerNodeGroupInfo;

  /**
   *
   *             <p>Includes all client authentication related information.</p>
   *
   */
  ClientAuthentication?: _ClientAuthentication;

  /**
   *
   *             <p>The name of the cluster.</p>
   *
   */
  ClusterName: string;

  /**
   *
   *             <p>Represents the configuration that you want MSK to use for the brokers in a cluster.</p>
   *
   */
  ConfigurationInfo?: _ConfigurationInfo;

  /**
   *
   *             <p>Includes all encryption-related information.</p>
   *
   */
  EncryptionInfo?: _EncryptionInfo;

  /**
   *
   *             <p>Specifies the level of monitoring for the MSK cluster. The possible values are DEFAULT, PER_BROKER, and PER_TOPIC_PER_BROKER.</p>
   *
   */
  EnhancedMonitoring?:
    | "DEFAULT"
    | "PER_BROKER"
    | "PER_TOPIC_PER_BROKER"
    | string;

  /**
   *
   *             <p>The version of Apache Kafka.</p>
   *
   */
  KafkaVersion: string;

  /**
   *
   *             <p>The number of broker nodes in the cluster.</p>
   *
   */
  NumberOfBrokerNodes: number;

  /**
   *
   *             <p>Create tags when creating the cluster.</p>
   *
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;

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
