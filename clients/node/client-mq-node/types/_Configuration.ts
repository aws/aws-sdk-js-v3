import {
  _ConfigurationRevision,
  _UnmarshalledConfigurationRevision
} from "./_ConfigurationRevision";

/**
 * Returns information about all configurations.
 */
export interface _Configuration {
  /**
   * Required. The ARN of the configuration.
   */
  Arn?: string;

  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date | string | number;

  /**
   * Required. The description of the configuration.
   */
  Description?: string;

  /**
   * Required. The type of broker engine. Note: Currently, Amazon MQ supports only ACTIVEMQ.
   */
  EngineType?: "ACTIVEMQ" | string;

  /**
   * Required. The version of the broker engine. For a list of supported engine versions, see https://docs.aws.amazon.com/amazon-mq/latest/developer-guide/broker-engine.html
   */
  EngineVersion?: string;

  /**
   * Required. The unique ID that Amazon MQ generates for the configuration.
   */
  Id?: string;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: _ConfigurationRevision;

  /**
   * Required. The name of the configuration. This value can contain only alphanumeric characters, dashes, periods, underscores, and tildes (- . _ ~). This value must be 1-150 characters long.
   */
  Name?: string;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string } | Iterable<[string, string]>;
}

export interface _UnmarshalledConfiguration extends _Configuration {
  /**
   * Required. The date and time of the configuration revision.
   */
  Created?: Date;

  /**
   * Required. The latest revision of the configuration.
   */
  LatestRevision?: _UnmarshalledConfigurationRevision;

  /**
   * The list of all tags associated with this configuration.
   */
  Tags?: { [key: string]: string };
}
