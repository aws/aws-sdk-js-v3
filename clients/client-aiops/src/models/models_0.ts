// smithy-typescript generated code
import type { EncryptionConfigurationType } from "./enums";

/**
 * This structure contains information about the cross-account configuration in the account.
 *
 * @public
 */
export interface CrossAccountConfiguration {
  /**
   * The ARN of an existing role which will be used to do investigations on your behalf.
   *
   * @public
   */
  sourceRoleArn?: string | undefined;
}

/**
 * Use this structure to specify a customer managed KMS key to use to encrypt investigation data.
 *
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * Displays whether investigation data is encrypted by a customer managed key or an Amazon Web Services owned key.
   *
   * @public
   */
  type?: EncryptionConfigurationType | undefined;

  /**
   * If the investigation group uses a customer managed key for encryption, this field displays the ID of that key.
   *
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationGroupInput {
  /**
   * Provides a name for the investigation group.
   *
   * @public
   */
  name: string | undefined;

  /**
   * Specify the ARN of the IAM role that CloudWatch investigations will use when it gathers investigation data. The permissions in this role determine which of your resources that CloudWatch investigations will have access to during investigations.
   *
   * For more information, see [How to control what data CloudWatch investigations has access to during investigations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-Security-Data).
   *
   * @public
   */
  roleArn: string | undefined;

  /**
   * Use this structure if you want to use a customer managed KMS key to encrypt your investigation data. If you omit this parameter, CloudWatch investigations will use an Amazon Web Services key to encrypt the data. For more information, see [Encryption of investigation data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-KMS).
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Specify how long that investigation data is kept. For more information, see [Operational investigation data retention](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Retention.html).
   *
   * If you omit this parameter, the default of 90 days is used.
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * A list of key-value pairs to associate with the investigation group. You can associate as many as 50 tags with an investigation group. To be able to associate tags when you create the investigation group, you must have the `cloudwatch:TagResource` permission.
   *
   * Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * Enter the existing custom tag keys for custom applications in your system. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources. For example, to discover that an Amazon ECS service depends on an Amazon RDS database, CloudWatch investigations can discover this relationship using data sources such as X-Ray and CloudWatch Application Signals. However, if you haven't deployed these features, CloudWatch investigations will attempt to identify possible relationships. Tag boundaries can be used to narrow the resources that will be discovered by CloudWatch investigations in these cases.
   *
   * You don't need to enter tags created by myApplications or CloudFormation, because CloudWatch investigations can automatically detect those tags.
   *
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * Use this structure to integrate CloudWatch investigations with chat applications. This structure is a string array. For the first string, specify the ARN of an Amazon SNS topic. For the array of strings, specify the ARNs of one or more chat applications configurations that you want to associate with that topic. For more information about these configuration ARNs, see [Getting started with Amazon Q in chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html) and [Resource type defined by Amazon Web Services Chatbot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies).
   *
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * Specify `true` to enable CloudWatch investigations to have access to change events that are recorded by CloudTrail. The default is `true`.
   *
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * List of `sourceRoleArn` values that have been configured for cross-account access.
   *
   * @public
   */
  crossAccountConfigurations?: CrossAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationGroupOutput {
  /**
   * The ARN of the investigation group that you just created.
   *
   * @public
   */
  arn?: string | undefined;
}

/**
 * @public
 */
export interface DeleteInvestigationGroupRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to delete.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to view. This is used to set the name of the investigation group.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupResponse {
  /**
   * The name of the user who created the investigation group.
   *
   * @public
   */
  createdBy?: string | undefined;

  /**
   * The date and time that the investigation group was created.
   *
   * @public
   */
  createdAt?: number | undefined;

  /**
   * The name of the user who created the investigation group.
   *
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * The date and time that the investigation group was most recently modified.
   *
   * @public
   */
  lastModifiedAt?: number | undefined;

  /**
   * The name of the investigation group.
   *
   * @public
   */
  name?: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the investigation group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The ARN of the IAM role that the investigation group uses for permissions to gather data.
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Specifies the customer managed KMS key that the investigation group uses to encrypt data, if there is one. If not, the investigation group uses an Amazon Web Services key to encrypt the data.
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Specifies how long that investigation data is kept.
   *
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * This structure is a string array. The first string is the ARN of a Amazon SNS topic. The array of strings display the ARNs of chat applications configurations that are associated with that topic. For more information about these configuration ARNs, see [Getting started with Amazon Q in chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html) and [Resource type defined by Amazon Web Services Chatbot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies).
   *
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * Displays the custom tag keys for custom applications in your system that you have specified in the investigation group. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources.
   *
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * Specifies whether CloudWatch investigationshas access to change events that are recorded by CloudTrail.
   *
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * Lists the `AWSAccountId` of the accounts configured for cross-account access and the results of the last scan performed on each account.
   *
   * @public
   */
  crossAccountConfigurations?: CrossAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListInvestigationGroupsInput {
  /**
   * Include this value, if it was returned by the previous operation, to get the next set of service operations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.
   *
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * This structure contains information about one investigation group in the account.
 *
 * @public
 */
export interface ListInvestigationGroupsModel {
  /**
   * The Amazon Resource Name (ARN) of the investigation group.
   *
   * @public
   */
  arn?: string | undefined;

  /**
   * The name of the investigation group.
   *
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface ListInvestigationGroupsOutput {
  /**
   * Include this value in your next use of this operation to get the next set of service operations.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * An array of structures, where each structure contains the information about one investigation group in the account.
   *
   * @public
   */
  investigationGroups?: ListInvestigationGroupsModel[] | undefined;
}

/**
 * @public
 */
export interface UpdateInvestigationGroupOutput {}

/**
 * @public
 */
export interface UpdateInvestigationGroupRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to modify.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * Specify this field if you want to change the IAM role that CloudWatch investigations will use when it gathers investigation data. To do so, specify the ARN of the new role.
   *
   * The permissions in this role determine which of your resources that CloudWatch investigations will have access to during investigations.
   *
   * For more information, see [How to control what data CloudWatch investigations has access to during investigations](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-Security-Data).
   *
   * @public
   */
  roleArn?: string | undefined;

  /**
   * Use this structure if you want to use a customer managed KMS key to encrypt your investigation data. If you omit this parameter, CloudWatch investigations will use an Amazon Web Services key to encrypt the data. For more information, see [Encryption of investigation data](https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-KMS).
   *
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * Enter the existing custom tag keys for custom applications in your system. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources. For example, to discover that an Amazon ECS service depends on an Amazon RDS database, CloudWatch investigations can discover this relationship using data sources such as X-Ray and CloudWatch Application Signals. However, if you haven't deployed these features, CloudWatch investigations will attempt to identify possible relationships. Tag boundaries can be used to narrow the resources that will be discovered by CloudWatch investigations in these cases.
   *
   * You don't need to enter tags created by myApplications or CloudFormation, because CloudWatch investigations can automatically detect those tags.
   *
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * Use this structure to integrate CloudWatch investigations with chat applications. This structure is a string array. For the first string, specify the ARN of an Amazon SNS topic. For the array of strings, specify the ARNs of one or more chat applications configurations that you want to associate with that topic. For more information about these configuration ARNs, see [Getting started with Amazon Q in chat applications](https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html) and [Resource type defined by Amazon Web Services Chatbot](https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies).
   *
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * Specify `true` to enable CloudWatch investigations to have access to change events that are recorded by CloudTrail. The default is `true`.
   *
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * Used to configure cross-account access for an investigation group. It allows the investigation group to access resources in other accounts.
   *
   * @public
   */
  crossAccountConfigurations?: CrossAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DeleteInvestigationGroupPolicyOutput {}

/**
 * @public
 */
export interface DeleteInvestigationGroupPolicyRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to remove the policy from.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupPolicyRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to view the policy of.
   *
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupPolicyResponse {
  /**
   * The Amazon Resource Name (ARN) of the investigation group that you want to view the policy of.
   *
   * @public
   */
  investigationGroupArn?: string | undefined;

  /**
   * The policy, in JSON format.
   *
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface PutInvestigationGroupPolicyRequest {
  /**
   * Specify either the name or the ARN of the investigation group that you want to assign the policy to.
   *
   * @public
   */
  identifier: string | undefined;

  /**
   * The policy, in JSON format.
   *
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutInvestigationGroupPolicyResponse {
  /**
   * The ARN of the investigation group that will use this policy.
   *
   * @public
   */
  investigationGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * The list of tag keys and values associated with the resource you specified.
   *
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the CloudWatch investigations resource that you want to view tags for. You can use the `ListInvestigationGroups` operation to find the ARNs of investigation groups.
   *
   * The ARN format for an investigation group is `arn:aws:aiops:Region:account-id:investigation-group:investigation-group-id`.
   *
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to apply the tags to. You can use the `ListInvestigationGroups` operation to find the ARNs of investigation groups.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of key-value pairs to associate with the resource.
   *
   * @public
   */
  tags: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * @public
 */
export interface UntagResourceRequest {
  /**
   * The Amazon Resource Name (ARN) of the resource that you want to remove the tags from. You can use the`ListInvestigationGroups` operation to find the ARNs of investigation groups.
   *
   * @public
   */
  resourceArn: string | undefined;

  /**
   * The list of tag keys to remove from the resource.
   *
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
