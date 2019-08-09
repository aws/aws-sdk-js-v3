import {
  _ElasticsearchClusterConfig,
  _UnmarshalledElasticsearchClusterConfig
} from "./_ElasticsearchClusterConfig";
import { _EBSOptions, _UnmarshalledEBSOptions } from "./_EBSOptions";
import {
  _SnapshotOptions,
  _UnmarshalledSnapshotOptions
} from "./_SnapshotOptions";
import {
  _VPCDerivedInfo,
  _UnmarshalledVPCDerivedInfo
} from "./_VPCDerivedInfo";
import {
  _CognitoOptions,
  _UnmarshalledCognitoOptions
} from "./_CognitoOptions";
import {
  _EncryptionAtRestOptions,
  _UnmarshalledEncryptionAtRestOptions
} from "./_EncryptionAtRestOptions";
import {
  _NodeToNodeEncryptionOptions,
  _UnmarshalledNodeToNodeEncryptionOptions
} from "./_NodeToNodeEncryptionOptions";
import {
  _LogPublishingOption,
  _UnmarshalledLogPublishingOption
} from "./_LogPublishingOption";
import {
  _ServiceSoftwareOptions,
  _UnmarshalledServiceSoftwareOptions
} from "./_ServiceSoftwareOptions";

/**
 * <p>The current status of an Elasticsearch domain.</p>
 */
export interface _ElasticsearchDomainStatus {
  /**
   * <p>The unique identifier for the specified Elasticsearch domain.</p>
   */
  DomainId: string;

  /**
   * <p>The name of an Elasticsearch domain. Domain names are unique across the domains owned by an account within an AWS region. Domain names start with a letter or number and can contain the following characters: a-z (lowercase), 0-9, and - (hyphen).</p>
   */
  DomainName: string;

  /**
   * <p>The Amazon resource name (ARN) of an Elasticsearch domain. See <a href="http://docs.aws.amazon.com/IAM/latest/UserGuide/index.html?Using_Identifiers.html" target="_blank">Identifiers for IAM Entities</a> in <i>Using AWS Identity and Access Management</i> for more information.</p>
   */
  ARN: string;

  /**
   * <p>The domain creation status. <code>True</code> if the creation of an Elasticsearch domain is complete. <code>False</code> if domain creation is still in progress.</p>
   */
  Created?: boolean;

  /**
   * <p>The domain deletion status. <code>True</code> if a delete request has been received for the domain but resource cleanup is still in progress. <code>False</code> if the domain has not been deleted. Once domain deletion is complete, the status of the domain is no longer returned.</p>
   */
  Deleted?: boolean;

  /**
   * <p>The Elasticsearch domain endpoint that you use to submit index and search requests.</p>
   */
  Endpoint?: string;

  /**
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>The status of the Elasticsearch domain configuration. <code>True</code> if Amazon Elasticsearch Service is processing configuration changes. <code>False</code> if the configuration is active.</p>
   */
  Processing?: boolean;

  /**
   * <p>The status of an Elasticsearch domain version upgrade. <code>True</code> if Amazon Elasticsearch Service is undergoing a version upgrade. <code>False</code> if the configuration is active.</p>
   */
  UpgradeProcessing?: boolean;

  /**
   * _ElasticsearchVersionString shape
   */
  ElasticsearchVersion?: string;

  /**
   * <p>The type and number of instances in the domain cluster.</p>
   */
  ElasticsearchClusterConfig: _ElasticsearchClusterConfig;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   */
  EBSOptions?: _EBSOptions;

  /**
   * <p> IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: string;

  /**
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   */
  SnapshotOptions?: _SnapshotOptions;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: _VPCDerivedInfo;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: _CognitoOptions;

  /**
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   */
  EncryptionAtRestOptions?: _EncryptionAtRestOptions;

  /**
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   */
  NodeToNodeEncryptionOptions?: _NodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   */
  AdvancedOptions?: { [key: string]: string } | Iterable<[string, string]>;

  /**
   * <p>Log publishing options for the given domain.</p>
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
   * <p>The current status of the Elasticsearch domain's service software.</p>
   */
  ServiceSoftwareOptions?: _ServiceSoftwareOptions;
}

export interface _UnmarshalledElasticsearchDomainStatus
  extends _ElasticsearchDomainStatus {
  /**
   * <p>Map containing the Elasticsearch domain endpoints used to submit index and search requests. Example <code>key, value</code>: <code>'vpc','vpc-endpoint-h2dsd34efgyghrtguk5gt6j2foh4.us-east-1.es.amazonaws.com'</code>.</p>
   */
  Endpoints?: { [key: string]: string };

  /**
   * <p>The type and number of instances in the domain cluster.</p>
   */
  ElasticsearchClusterConfig: _UnmarshalledElasticsearchClusterConfig;

  /**
   * <p>The <code>EBSOptions</code> for the specified domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-ebs" target="_blank">Configuring EBS-based Storage</a> for more information.</p>
   */
  EBSOptions?: _UnmarshalledEBSOptions;

  /**
   * <p>Specifies the status of the <code>SnapshotOptions</code></p>
   */
  SnapshotOptions?: _UnmarshalledSnapshotOptions;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: _UnmarshalledVPCDerivedInfo;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: _UnmarshalledCognitoOptions;

  /**
   * <p> Specifies the status of the <code>EncryptionAtRestOptions</code>.</p>
   */
  EncryptionAtRestOptions?: _UnmarshalledEncryptionAtRestOptions;

  /**
   * <p>Specifies the status of the <code>NodeToNodeEncryptionOptions</code>.</p>
   */
  NodeToNodeEncryptionOptions?: _UnmarshalledNodeToNodeEncryptionOptions;

  /**
   * <p>Specifies the status of the <code>AdvancedOptions</code></p>
   */
  AdvancedOptions?: { [key: string]: string };

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: {
    [key in
      | "INDEX_SLOW_LOGS"
      | "SEARCH_SLOW_LOGS"
      | "ES_APPLICATION_LOGS"
      | string]: _UnmarshalledLogPublishingOption
  };

  /**
   * <p>The current status of the Elasticsearch domain's service software.</p>
   */
  ServiceSoftwareOptions?: _UnmarshalledServiceSoftwareOptions;
}
