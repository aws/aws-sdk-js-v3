// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AIOpsServiceException as __BaseException } from "./AIOpsServiceException";

/**
 * <p>You don't have sufficient permissions to perform this action.</p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
  }
}

/**
 * <p>This operation couldn't be completed because of a conflict in resource states.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name: "ConflictException" = "ConflictException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ConflictException, __BaseException>) {
    super({
      name: "ConflictException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ConflictException.prototype);
  }
}

/**
 * <p>Access id denied for this operation, or this operation is not valid for the specified resource.</p>
 * @public
 */
export class ForbiddenException extends __BaseException {
  readonly name: "ForbiddenException" = "ForbiddenException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ForbiddenException, __BaseException>) {
    super({
      name: "ForbiddenException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ForbiddenException.prototype);
  }
}

/**
 * <p>An internal server error occurred. You can try again later.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServerException, __BaseException>) {
    super({
      name: "InternalServerException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServerException.prototype);
  }
}

/**
 * <p>This structure contains information about the cross-account configuration in the account. </p>
 * @public
 */
export interface CrossAccountConfiguration {
  /**
   * <p>The ARN of an existing role which will be used to do investigations on your behalf. </p>
   * @public
   */
  sourceRoleArn?: string | undefined;
}

/**
 * @public
 * @enum
 */
export const EncryptionConfigurationType = {
  AWS_OWNED_KEY: "AWS_OWNED_KEY",
  CUSTOMER_MANAGED_KMS_KEY: "CUSTOMER_MANAGED_KMS_KEY",
} as const;

/**
 * @public
 */
export type EncryptionConfigurationType =
  (typeof EncryptionConfigurationType)[keyof typeof EncryptionConfigurationType];

/**
 * <p>Use this structure to specify a customer managed KMS key to use to encrypt investigation data. </p>
 * @public
 */
export interface EncryptionConfiguration {
  /**
   * <p>Displays whether investigation data is encrypted by a customer managed key or an Amazon Web Services owned key.</p>
   * @public
   */
  type?: EncryptionConfigurationType | undefined;

  /**
   * <p>If the investigation group uses a customer managed key for encryption, this field displays the ID of that key.</p>
   * @public
   */
  kmsKeyId?: string | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationGroupInput {
  /**
   * <p>Provides a name for the investigation group.</p>
   * @public
   */
  name: string | undefined;

  /**
   * <p>Specify the ARN of the IAM role that CloudWatch investigations will use when it gathers investigation data. The permissions in this role determine which of your resources that CloudWatch investigations will have access to during investigations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-Security-Data">How to control what data CloudWatch investigations has access to during investigations</a>.</p>
   * @public
   */
  roleArn: string | undefined;

  /**
   * <p>Use this structure if you want to use a customer managed KMS key to encrypt your investigation data. If you omit this parameter, CloudWatch investigations will use an Amazon Web Services key to encrypt the data. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-KMS">Encryption of investigation data</a>.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Specify how long that investigation data is kept. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Retention.html">Operational investigation data retention</a>. </p> <p>If you omit this parameter, the default of 90 days is used.</p>
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * <p>A list of key-value pairs to associate with the investigation group. You can associate as many as 50 tags with an investigation group. To be able to associate tags when you create the investigation group, you must have the <code>cloudwatch:TagResource</code> permission.</p> <p>Tags can help you organize and categorize your resources. You can also use them to scope user permissions by granting a user permission to access or change only resources with certain tag values.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;

  /**
   * <p>Enter the existing custom tag keys for custom applications in your system. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources. For example, to discover that an Amazon ECS service depends on an Amazon RDS database, CloudWatch investigations can discover this relationship using data sources such as X-Ray and CloudWatch Application Signals. However, if you haven't deployed these features, CloudWatch investigations will attempt to identify possible relationships. Tag boundaries can be used to narrow the resources that will be discovered by CloudWatch investigations in these cases.</p> <p>You don't need to enter tags created by myApplications or CloudFormation, because CloudWatch investigations can automatically detect those tags.</p>
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * <p>Use this structure to integrate CloudWatch investigations with chat applications. This structure is a string array. For the first string, specify the ARN of an Amazon SNS topic. For the array of strings, specify the ARNs of one or more chat applications configurations that you want to associate with that topic. For more information about these configuration ARNs, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html">Getting started with Amazon Q in chat applications</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies">Resource type defined by Amazon Web Services Chatbot</a>.</p>
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * <p>Specify <code>true</code> to enable CloudWatch investigations to have access to change events that are recorded by CloudTrail. The default is <code>true</code>.</p>
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * <p>List of <code>sourceRoleArn</code> values that have been configured for cross-account access.</p>
   * @public
   */
  crossAccountConfigurations?: CrossAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface CreateInvestigationGroupOutput {
  /**
   * <p>The ARN of the investigation group that you just created.</p>
   * @public
   */
  arn?: string | undefined;
}

/**
 * <p>The specified resource doesn't exist.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ResourceNotFoundException, __BaseException>) {
    super({
      name: "ResourceNotFoundException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
  }
}

/**
 * <p>This request exceeds a service quota.</p>
 * @public
 */
export class ServiceQuotaExceededException extends __BaseException {
  readonly name: "ServiceQuotaExceededException" = "ServiceQuotaExceededException";
  readonly $fault: "client" = "client";
  /**
   * <p>The resource that caused the quota exception.</p>
   * @public
   */
  resourceId?: string | undefined;

  /**
   * <p>The type of resource that caused the quota exception.</p>
   * @public
   */
  resourceType?: string | undefined;

  /**
   * <p>This name of the service associated with the error.</p>
   * @public
   */
  serviceCode?: string | undefined;

  /**
   * <p>This quota that was exceeded.</p>
   * @public
   */
  quotaCode?: string | undefined;

  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceQuotaExceededException, __BaseException>) {
    super({
      name: "ServiceQuotaExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceQuotaExceededException.prototype);
    this.resourceId = opts.resourceId;
    this.resourceType = opts.resourceType;
    this.serviceCode = opts.serviceCode;
    this.quotaCode = opts.quotaCode;
  }
}

/**
 * <p>The request was throttled because of quota limits. You can try again later.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ThrottlingException, __BaseException>) {
    super({
      name: "ThrottlingException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ThrottlingException.prototype);
  }
}

/**
 * <p>This operation or its parameters aren't formatted correctly.</p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
  }
}

/**
 * @public
 */
export interface DeleteInvestigationGroupRequest {
  /**
   * <p>Specify either the name or the ARN of the investigation group that you want to delete.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupRequest {
  /**
   * <p>Specify either the name or the ARN of the investigation group that you want to view. This is used to set the name of the investigation group.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupResponse {
  /**
   * <p>The name of the user who created the investigation group.</p>
   * @public
   */
  createdBy?: string | undefined;

  /**
   * <p>The date and time that the investigation group was created.</p>
   * @public
   */
  createdAt?: number | undefined;

  /**
   * <p>The name of the user who created the investigation group.</p>
   * @public
   */
  lastModifiedBy?: string | undefined;

  /**
   * <p>The date and time that the investigation group was most recently modified.</p>
   * @public
   */
  lastModifiedAt?: number | undefined;

  /**
   * <p>The name of the investigation group.</p>
   * @public
   */
  name?: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the investigation group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The ARN of the IAM role that the investigation group uses for permissions to gather data.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Specifies the customer managed KMS key that the investigation group uses to encrypt data, if there is one. If not, the investigation group uses an Amazon Web Services key to encrypt the data.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Specifies how long that investigation data is kept.</p>
   * @public
   */
  retentionInDays?: number | undefined;

  /**
   * <p>This structure is a string array. The first string is the ARN of a Amazon SNS topic. The array of strings display the ARNs of chat applications configurations that are associated with that topic. For more information about these configuration ARNs, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html">Getting started with Amazon Q in chat applications</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies">Resource type defined by Amazon Web Services Chatbot</a>.</p>
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * <p>Displays the custom tag keys for custom applications in your system that you have specified in the investigation group. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources. </p>
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * <p>Specifies whether CloudWatch investigationshas access to change events that are recorded by CloudTrail.</p>
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * <p>Lists the <code>AWSAccountId</code> of the accounts configured for cross-account access and the results of the last scan performed on each account.</p>
   * @public
   */
  crossAccountConfigurations?: CrossAccountConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListInvestigationGroupsInput {
  /**
   * <p>Include this value, if it was returned by the previous operation, to get the next set of service operations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>The maximum number of results to return in one operation. If you omit this parameter, the default of 50 is used.</p>
   * @public
   */
  maxResults?: number | undefined;
}

/**
 * <p>This structure contains information about one investigation group in the account.</p>
 * @public
 */
export interface ListInvestigationGroupsModel {
  /**
   * <p>The Amazon Resource Name (ARN) of the investigation group.</p>
   * @public
   */
  arn?: string | undefined;

  /**
   * <p>The name of the investigation group.</p>
   * @public
   */
  name?: string | undefined;
}

/**
 * @public
 */
export interface ListInvestigationGroupsOutput {
  /**
   * <p>Include this value in your next use of this operation to get the next set of service operations.</p>
   * @public
   */
  nextToken?: string | undefined;

  /**
   * <p>An array of structures, where each structure contains the information about one investigation group in the account.</p>
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
   * <p>Specify either the name or the ARN of the investigation group that you want to modify.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>Specify this field if you want to change the IAM role that CloudWatch investigations will use when it gathers investigation data. To do so, specify the ARN of the new role.</p> <p>The permissions in this role determine which of your resources that CloudWatch investigations will have access to during investigations.</p> <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-Security-Data">How to control what data CloudWatch investigations has access to during investigations</a>.</p>
   * @public
   */
  roleArn?: string | undefined;

  /**
   * <p>Use this structure if you want to use a customer managed KMS key to encrypt your investigation data. If you omit this parameter, CloudWatch investigations will use an Amazon Web Services key to encrypt the data. For more information, see <a href="https://docs.aws.amazon.com/AmazonCloudWatch/latest/monitoring/Investigations-Security.html#Investigations-KMS">Encryption of investigation data</a>.</p>
   * @public
   */
  encryptionConfiguration?: EncryptionConfiguration | undefined;

  /**
   * <p>Enter the existing custom tag keys for custom applications in your system. Resource tags help CloudWatch investigations narrow the search space when it is unable to discover definite relationships between resources. For example, to discover that an Amazon ECS service depends on an Amazon RDS database, CloudWatch investigations can discover this relationship using data sources such as X-Ray and CloudWatch Application Signals. However, if you haven't deployed these features, CloudWatch investigations will attempt to identify possible relationships. Tag boundaries can be used to narrow the resources that will be discovered by CloudWatch investigations in these cases.</p> <p>You don't need to enter tags created by myApplications or CloudFormation, because CloudWatch investigations can automatically detect those tags.</p>
   * @public
   */
  tagKeyBoundaries?: string[] | undefined;

  /**
   * <p>Use this structure to integrate CloudWatch investigations with chat applications. This structure is a string array. For the first string, specify the ARN of an Amazon SNS topic. For the array of strings, specify the ARNs of one or more chat applications configurations that you want to associate with that topic. For more information about these configuration ARNs, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/getting-started.html">Getting started with Amazon Q in chat applications</a> and <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awschatbot.html#awschatbot-resources-for-iam-policies">Resource type defined by Amazon Web Services Chatbot</a>.</p>
   * @public
   */
  chatbotNotificationChannel?: Record<string, string[]> | undefined;

  /**
   * <p>Specify <code>true</code> to enable CloudWatch investigations to have access to change events that are recorded by CloudTrail. The default is <code>true</code>.</p>
   * @public
   */
  isCloudTrailEventHistoryEnabled?: boolean | undefined;

  /**
   * <p>Used to configure cross-account access for an investigation group. It allows the investigation group to access resources in other accounts. </p>
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
   * <p>Specify either the name or the ARN of the investigation group that you want to remove the policy from.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupPolicyRequest {
  /**
   * <p>Specify either the name or the ARN of the investigation group that you want to view the policy of.</p>
   * @public
   */
  identifier: string | undefined;
}

/**
 * @public
 */
export interface GetInvestigationGroupPolicyResponse {
  /**
   * <p>The Amazon Resource Name (ARN) of the investigation group that you want to view the policy of.</p>
   * @public
   */
  investigationGroupArn?: string | undefined;

  /**
   * <p>The policy, in JSON format.</p>
   * @public
   */
  policy?: string | undefined;
}

/**
 * @public
 */
export interface PutInvestigationGroupPolicyRequest {
  /**
   * <p>Specify either the name or the ARN of the investigation group that you want to assign the policy to.</p>
   * @public
   */
  identifier: string | undefined;

  /**
   * <p>The policy, in JSON format.</p>
   * @public
   */
  policy: string | undefined;
}

/**
 * @public
 */
export interface PutInvestigationGroupPolicyResponse {
  /**
   * <p>The ARN of the investigation group that will use this policy.</p>
   * @public
   */
  investigationGroupArn?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceOutput {
  /**
   * <p>The list of tag keys and values associated with the resource you specified.</p>
   * @public
   */
  tags?: Record<string, string> | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the CloudWatch investigations resource that you want to view tags for. You can use the <code>ListInvestigationGroups</code> operation to find the ARNs of investigation groups.</p> <p>The ARN format for an investigation group is <code>arn:aws:aiops:<i>Region</i>:<i>account-id</i>:investigation-group:<i>investigation-group-id</i> </code>.</p>
   * @public
   */
  resourceArn: string | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource that you want to apply the tags to. You can use the <code>ListInvestigationGroups</code> operation to find the ARNs of investigation groups.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of key-value pairs to associate with the resource.</p>
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
   * <p>The Amazon Resource Name (ARN) of the resource that you want to remove the tags from. You can use the<code>ListInvestigationGroups</code> operation to find the ARNs of investigation groups.</p>
   * @public
   */
  resourceArn: string | undefined;

  /**
   * <p>The list of tag keys to remove from the resource.</p>
   * @public
   */
  tagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}
