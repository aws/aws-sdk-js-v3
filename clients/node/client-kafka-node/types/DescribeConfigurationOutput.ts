import { _UnmarshalledConfigurationRevision } from "./_ConfigurationRevision";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * DescribeConfigurationOutput shape
 */
export interface DescribeConfigurationOutput
  extends __aws_sdk_types.MetadataBearer {
  /**
   *
   *             <p>The Amazon Resource Name (ARN) of the configuration.</p>
   *
   */
  Arn?: string;

  /**
   *
   *             <p>The time when the configuration was created.</p>
   *
   */
  CreationTime?: Date;

  /**
   *
   *             <p>The description of the configuration.</p>
   *
   */
  Description?: string;

  /**
   *
   *             <p>The versions of Apache Kafka with which you can use this MSK configuration.</p>
   *
   */
  KafkaVersions?: Array<string>;

  /**
   *
   *             <p>Latest revision of the configuration.</p>
   *
   */
  LatestRevision?: _UnmarshalledConfigurationRevision;

  /**
   *
   *             <p>The name of the configuration.</p>
   *
   */
  Name?: string;

  /**
   * Metadata about the response received, including the HTTP status code, HTTP headers, and any request identifiers recognized by the SDK.
   */
  $metadata: __aws_sdk_types.ResponseMetadata;
}
