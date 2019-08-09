import { _UnmarshalledConfigurationId } from "./_ConfigurationId";
import { _UnmarshalledLogs } from "./_Logs";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * UpdateBrokerOutput shape
 */
export interface UpdateBrokerOutput extends __aws_sdk_types.MetadataBearer {
  /**
   * The new value of automatic upgrades to new minor version for brokers.
   */
  AutoMinorVersionUpgrade?: boolean;

  /**
   * Required. The unique ID that Amazon MQ generates for the broker.
   */
  BrokerId?: string;

  /**
   * The ID of the updated configuration.
   */
  Configuration?: _UnmarshalledConfigurationId;

  /**
   * The version of the broker engine to upgrade to. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * The list of information about logs to be enabled for the specified broker.
   */
  Logs?: _UnmarshalledLogs;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
