import {
  _ElasticsearchVersionStatus,
  _UnmarshalledElasticsearchVersionStatus
} from "./_ElasticsearchVersionStatus";
import {
  _ElasticsearchClusterConfigStatus,
  _UnmarshalledElasticsearchClusterConfigStatus
} from "./_ElasticsearchClusterConfigStatus";
import {
  _EBSOptionsStatus,
  _UnmarshalledEBSOptionsStatus
} from "./_EBSOptionsStatus";
import {
  _AccessPoliciesStatus,
  _UnmarshalledAccessPoliciesStatus
} from "./_AccessPoliciesStatus";
import {
  _SnapshotOptionsStatus,
  _UnmarshalledSnapshotOptionsStatus
} from "./_SnapshotOptionsStatus";
import {
  _VPCDerivedInfoStatus,
  _UnmarshalledVPCDerivedInfoStatus
} from "./_VPCDerivedInfoStatus";
import {
  _CognitoOptionsStatus,
  _UnmarshalledCognitoOptionsStatus
} from "./_CognitoOptionsStatus";
import {
  _EncryptionAtRestOptionsStatus,
  _UnmarshalledEncryptionAtRestOptionsStatus
} from "./_EncryptionAtRestOptionsStatus";
import {
  _NodeToNodeEncryptionOptionsStatus,
  _UnmarshalledNodeToNodeEncryptionOptionsStatus
} from "./_NodeToNodeEncryptionOptionsStatus";
import {
  _AdvancedOptionsStatus,
  _UnmarshalledAdvancedOptionsStatus
} from "./_AdvancedOptionsStatus";
import {
  _LogPublishingOptionsStatus,
  _UnmarshalledLogPublishingOptionsStatus
} from "./_LogPublishingOptionsStatus";

/**
 * <p>The configuration of an Elasticsearch domain.</p>
 */
export interface _ElasticsearchDomainConfig {
  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   */
  ElasticsearchVersion?: _ElasticsearchVersionStatus;

  /**
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   */
  ElasticsearchClusterConfig?: _ElasticsearchClusterConfigStatus;

  /**
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   */
  EBSOptions?: _EBSOptionsStatus;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: _AccessPoliciesStatus;

  /**
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   */
  SnapshotOptions?: _SnapshotOptionsStatus;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: _VPCDerivedInfoStatus;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: _CognitoOptionsStatus;

  /**
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   */
  EncryptionAtRestOptions?: _EncryptionAtRestOptionsStatus;

  /**
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   */
  NodeToNodeEncryptionOptions?: _NodeToNodeEncryptionOptionsStatus;

  /**
   * <p>Specifies the <code>AdvancedOptions</code> for the domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: _AdvancedOptionsStatus;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: _LogPublishingOptionsStatus;
}

export interface _UnmarshalledElasticsearchDomainConfig
  extends _ElasticsearchDomainConfig {
  /**
   * <p>String of format X.Y to specify version for the Elasticsearch domain.</p>
   */
  ElasticsearchVersion?: _UnmarshalledElasticsearchVersionStatus;

  /**
   * <p>Specifies the <code>ElasticsearchClusterConfig</code> for the Elasticsearch domain.</p>
   */
  ElasticsearchClusterConfig?: _UnmarshalledElasticsearchClusterConfigStatus;

  /**
   * <p>Specifies the <code>EBSOptions</code> for the Elasticsearch domain.</p>
   */
  EBSOptions?: _UnmarshalledEBSOptionsStatus;

  /**
   * <p>IAM access policy as a JSON-formatted string.</p>
   */
  AccessPolicies?: _UnmarshalledAccessPoliciesStatus;

  /**
   * <p>Specifies the <code>SnapshotOptions</code> for the Elasticsearch domain.</p>
   */
  SnapshotOptions?: _UnmarshalledSnapshotOptionsStatus;

  /**
   * <p>The <code>VPCOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html" target="_blank">VPC Endpoints for Amazon Elasticsearch Service Domains</a>.</p>
   */
  VPCOptions?: _UnmarshalledVPCDerivedInfoStatus;

  /**
   * <p>The <code>CognitoOptions</code> for the specified domain. For more information, see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-cognito-auth.html" target="_blank">Amazon Cognito Authentication for Kibana</a>.</p>
   */
  CognitoOptions?: _UnmarshalledCognitoOptionsStatus;

  /**
   * <p>Specifies the <code>EncryptionAtRestOptions</code> for the Elasticsearch domain.</p>
   */
  EncryptionAtRestOptions?: _UnmarshalledEncryptionAtRestOptionsStatus;

  /**
   * <p>Specifies the <code>NodeToNodeEncryptionOptions</code> for the Elasticsearch domain.</p>
   */
  NodeToNodeEncryptionOptions?: _UnmarshalledNodeToNodeEncryptionOptionsStatus;

  /**
   * <p>Specifies the <code>AdvancedOptions</code> for the domain. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomain-configure-advanced-options" target="_blank">Configuring Advanced Options</a> for more information.</p>
   */
  AdvancedOptions?: _UnmarshalledAdvancedOptionsStatus;

  /**
   * <p>Log publishing options for the given domain.</p>
   */
  LogPublishingOptions?: _UnmarshalledLogPublishingOptionsStatus;
}
