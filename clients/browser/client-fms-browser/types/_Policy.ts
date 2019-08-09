import {
  _SecurityServicePolicyData,
  _UnmarshalledSecurityServicePolicyData
} from "./_SecurityServicePolicyData";
import { _ResourceTag, _UnmarshalledResourceTag } from "./_ResourceTag";

/**
 * <p>An AWS Firewall Manager policy.</p>
 */
export interface _Policy {
  /**
   * <p>The ID of the AWS Firewall Manager policy.</p>
   */
  PolicyId?: string;

  /**
   * <p>The friendly name of the AWS Firewall Manager policy.</p>
   */
  PolicyName: string;

  /**
   * <p>A unique identifier for each update to the policy. When issuing a <code>PutPolicy</code> request, the <code>PolicyUpdateToken</code> in the request must match the <code>PolicyUpdateToken</code> of the current policy version. To get the <code>PolicyUpdateToken</code> of the current policy version, use a <code>GetPolicy</code> request.</p>
   */
  PolicyUpdateToken?: string;

  /**
   * <p>Details about the security service that is being used to protect the resources.</p>
   */
  SecurityServicePolicyData: _SecurityServicePolicyData;

  /**
   * <p>The type of resource to protect with the policy. This is in the format shown in <a href="https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-template-resource-type-ref.html">AWS Resource Types Reference</a>. For example: <code>AWS::ElasticLoadBalancingV2::LoadBalancer</code> or <code>AWS::CloudFront::Distribution</code>.</p>
   */
  ResourceType: string;

  /**
   * <p>An array of <code>ResourceType</code>.</p>
   */
  ResourceTypeList?: Array<string> | Iterable<string>;

  /**
   * <p>An array of <code>ResourceTag</code> objects.</p>
   */
  ResourceTags?: Array<_ResourceTag> | Iterable<_ResourceTag>;

  /**
   * <p>If set to <code>True</code>, resources with the tags that are specified in the <code>ResourceTag</code> array are not protected by the policy. If set to <code>False</code>, and the <code>ResourceTag</code> array is not null, only resources with the specified tags are associated with the policy.</p>
   */
  ExcludeResourceTags: boolean;

  /**
   * <p>Indicates if the policy should be automatically applied to new resources.</p>
   */
  RemediationEnabled: boolean;

  /**
   * <p>Specifies the AWS account IDs to include in the policy. If <code>IncludeMap</code> is null, all accounts in the organization in AWS Organizations are included in the policy. If <code>IncludeMap</code> is not null, only values listed in <code>IncludeMap</code> are included in the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>IncludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   */
  IncludeMap?:
    | { [key in "ACCOUNT" | string]: Array<string> | Iterable<string> }
    | Iterable<["ACCOUNT" | string, Array<string> | Iterable<string>]>;

  /**
   * <p>Specifies the AWS account IDs to exclude from the policy. The <code>IncludeMap</code> values are evaluated first, with all the appropriate account IDs added to the policy. Then the accounts listed in <code>ExcludeMap</code> are removed, resulting in the final list of accounts to add to the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>ExcludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   */
  ExcludeMap?:
    | { [key in "ACCOUNT" | string]: Array<string> | Iterable<string> }
    | Iterable<["ACCOUNT" | string, Array<string> | Iterable<string>]>;
}

export interface _UnmarshalledPolicy extends _Policy {
  /**
   * <p>Details about the security service that is being used to protect the resources.</p>
   */
  SecurityServicePolicyData: _UnmarshalledSecurityServicePolicyData;

  /**
   * <p>An array of <code>ResourceType</code>.</p>
   */
  ResourceTypeList?: Array<string>;

  /**
   * <p>An array of <code>ResourceTag</code> objects.</p>
   */
  ResourceTags?: Array<_UnmarshalledResourceTag>;

  /**
   * <p>Specifies the AWS account IDs to include in the policy. If <code>IncludeMap</code> is null, all accounts in the organization in AWS Organizations are included in the policy. If <code>IncludeMap</code> is not null, only values listed in <code>IncludeMap</code> are included in the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>IncludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   */
  IncludeMap?: { [key in "ACCOUNT" | string]: Array<string> };

  /**
   * <p>Specifies the AWS account IDs to exclude from the policy. The <code>IncludeMap</code> values are evaluated first, with all the appropriate account IDs added to the policy. Then the accounts listed in <code>ExcludeMap</code> are removed, resulting in the final list of accounts to add to the policy.</p> <p>The key to the map is <code>ACCOUNT</code>. For example, a valid <code>ExcludeMap</code> would be <code>{“ACCOUNT” : [“accountID1”, “accountID2”]}</code>.</p>
   */
  ExcludeMap?: { [key in "ACCOUNT" | string]: Array<string> };
}
