import { _ElasticsearchClusterConfig } from "./_ElasticsearchClusterConfig";
import { _EBSOptions } from "./_EBSOptions";
import { _SnapshotOptions } from "./_SnapshotOptions";
import { _VPCOptions } from "./_VPCOptions";
import { _CognitoOptions } from "./_CognitoOptions";
import { _LogPublishingOption } from "./_LogPublishingOption";
import { HttpOptions as __HttpOptions__ } from "@aws-sdk/types";
import * as __aws_sdk_types from "@aws-sdk/types";

/**
 * <p>Container for the parameters to the <code><a>UpdateElasticsearchDomain</a></code> operation. Specifies the type and number of instances in the domain cluster.</p>
 */
export interface UpdateElasticsearchDomainConfigInput {
  /**
   * <p>The name of the Elasticsearch domain that you are updating. </p>
   */
  DomainName: string;

  /**
   * <p>The type and number of instances to instantiate for the domain cluster.</p>
   */
  ElasticsearchClusterConfig?: _ElasticsearchClusterConfig;

  /**
   * <p>Specify the type and size of the EBS volume that you want to use. </p>
   */
  EBSOptions?: _EBSOptions;

  /**
   * <p>Option to set the time, in UTC format, for the daily automated snapshot. Default value is <code>0</code> hours. </p>
   */
  SnapshotOptions?: _SnapshotOptions;

  /**
   * <p>Options to specify the subnets and security groups for VPC endpoint. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-creating-vpc" target="_blank">Creating a VPC</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i></p>
   */
  VPCOptions?: _VPCOptions;

  /**
   * <p>Options to specify the Cognito user and identity pools for Kibana authentication. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: _CognitoOptions;

  /**
   * <p>Modifies the advanced option to allow references to indices in an HTTP request body. Must be <code>false</code> when configuring access to individual sub-resources. By default, the value is <code>true</code>. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuration Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Map of <code>LogType</code> and <code>LogPublishingOption</code>, each containing options to publish a given type of Elasticsearch log.</p>
   */
  LogPublishingOptions?:
    | {
        [key in
          | "INDEX_SLOW_LOGS"
          | "SEARCH_SLOW_LOGS"
          | "ES_APPLICATION_LOGS"
          | string]: _LogPublishingOption
      }
    | Iterable<
        [

            | "INDEX_SLOW_LOGS"
            | "SEARCH_SLOW_LOGS"
            | "ES_APPLICATION_LOGS"
            | string,
          _LogPublishingOption
        ]
      >;

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
