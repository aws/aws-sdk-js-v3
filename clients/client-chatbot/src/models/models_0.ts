// smithy-typescript generated code
import type { CustomActionAttachmentCriteriaOperator } from "./enums";

/**
 * Preferences related to AWS Chatbot usage in the calling AWS account.
 *
 * @public
 */
export interface AccountPreferences {
  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * Turns on training data collection.
   *
   * This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AI technologies for AWS Chatbot.
   *
   * @public
   */
  TrainingDataCollectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateToConfigurationRequest {
  /**
   * The resource Amazon Resource Name (ARN) to link.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * The channel configuration to associate with the resource.
   *
   * @public
   */
  ChatConfiguration: string | undefined;
}

/**
 * @public
 */
export interface AssociateToConfigurationResult {}

/**
 * A listing of an association with a channel configuration.
 *
 * @public
 */
export interface AssociationListing {
  /**
   * The Amazon Resource Name (ARN) of the resource (for example, a custom action).
   *
   * @public
   */
  Resource: string | undefined;
}

/**
 * A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.
 *
 * > **Important:** Do not include confidential or sensitive information in this field.
 *
 * For more information, see [User-Defined Tag Restrictions](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html) in the *AWS Billing and Cost Management User Guide*.
 *
 * @public
 */
export interface Tag {
  /**
   * The key of the tag.
   *
   * @public
   */
  TagKey: string | undefined;

  /**
   * The value of the tag.
   *
   * @public
   */
  TagValue: string | undefined;
}

/**
 * An AWS Chatbot configuration for Amazon Chime.
 *
 * @public
 */
export interface ChimeWebhookConfiguration {
  /**
   * A description of the webhook. We recommend using the convention `RoomName/WebhookName`.
   *
   * For more information, see [Tutorial: Get started with Amazon Chime](https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Either `ENABLED` or `DISABLED`. The resource returns `DISABLED` if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provided if State is `DISABLED`. Provides context as to why the resource is disabled.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * A Microsoft Teams team that is authorized with AWS Chatbot.
 *
 * @public
 */
export interface ConfiguredTeam {
  /**
   * The ID of the Microsoft Teams tenant.
   *
   * @public
   */
  TenantId: string | undefined;

  /**
   * The ID of the Microsoft Teams authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   *
   * @public
   */
  TeamName?: string | undefined;

  /**
   * Either `ENABLED` or `DISABLED`. The resource returns `DISABLED` if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provided if State is `DISABLED`. Provides context as to why the resource is disabled.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationRequest {
  /**
   * A description of the webhook. We recommend using the convention `RoomName/WebhookName`.
   *
   * For more information, see [Tutorial: Get started with Amazon Chime](https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * The URL for the Amazon Chime webhook.
   *
   * @public
   */
  WebhookUrl: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationResult {
  /**
   * An Amazon Chime webhook configuration.
   *
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration | undefined;
}

/**
 * A criteria for when a button should be shown based on values in the notification
 *
 * @public
 */
export interface CustomActionAttachmentCriteria {
  /**
   * The operation to perform on the named variable.
   *
   * @public
   */
  Operator: CustomActionAttachmentCriteriaOperator | undefined;

  /**
   * The name of the variable to operate on.
   *
   * @public
   */
  VariableName: string | undefined;

  /**
   * A value that is compared with the actual value of the variable based on the behavior of the operator.
   *
   * @public
   */
  Value?: string | undefined;
}

/**
 * Defines when a custom action button should be attached to a notification.
 *
 * @public
 */
export interface CustomActionAttachment {
  /**
   * The type of notification that the custom action should be attached to.
   *
   * @public
   */
  NotificationType?: string | undefined;

  /**
   * The text of the button that appears on the notification.
   *
   * @public
   */
  ButtonText?: string | undefined;

  /**
   * The criteria for when a button should be shown based on values in the notification.
   *
   * @public
   */
  Criteria?: CustomActionAttachmentCriteria[] | undefined;

  /**
   * The variables to extract from the notification.
   *
   * @public
   */
  Variables?: Record<string, string> | undefined;
}

/**
 * The definition of the command to run when invoked as an alias or as an action button.
 *
 * @public
 */
export interface CustomActionDefinition {
  /**
   * The command string to run which may include variables by prefixing with a dollar sign ($).
   *
   * @public
   */
  CommandText: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomActionRequest {
  /**
   * The definition of the command to run when invoked as an alias or as an action button.
   *
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * The name used to invoke this action in a chat channel. For example, `@aws run my-alias`.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * Defines when this custom action button should be attached to a notification.
   *
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.
   *
   * If you do not specify a client token, one is automatically generated by the SDK.
   *
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * The name of the custom action. This name is included in the Amazon Resource Name (ARN).
   *
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomActionResult {
  /**
   * The fully defined ARN of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationRequest {
  /**
   * The ID of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The ID of the Microsoft Teams authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   *
   * @public
   */
  TeamName?: string | undefined;

  /**
   * The ID of the Microsoft Teams tenant.
   *
   * @public
   */
  TenantId: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An AWS Chatbot configuration for Microsoft Teams.
 *
 * @public
 */
export interface TeamsChannelConfiguration {
  /**
   * The ID of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The ID of the Microsoft Teams authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   *
   * @public
   */
  TeamName?: string | undefined;

  /**
   * The ID of the Microsoft Teams tenant.
   *
   * @public
   */
  TenantId: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Either `ENABLED` or `DISABLED`. The resource returns `DISABLED` if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provided if State is `DISABLED`. Provides context as to why the resource is disabled.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationResult {
  /**
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   *
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationRequest {
  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   *
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the Slack channel.
   *
   * To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack channel.
   *
   * @public
   */
  SlackChannelName?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * An AWS Chatbot configuration for Slack.
 *
 * @public
 */
export interface SlackChannelConfiguration {
  /**
   * Name of the Slack workspace.
   *
   * @public
   */
  SlackTeamName: string | undefined;

  /**
   * The ID of the Slack workspace authorized with Amazon Chime.
   *
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the Slack channel.
   *
   * To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack channel.
   *
   * @public
   */
  SlackChannelName: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SlackChannelConfiguration.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   *
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.
   *
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * Either `ENABLED` or `DISABLED`. The resource returns `DISABLED` if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provided if State is `DISABLED`. Provides context as to why the resource is disabled.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {
  /**
   * The configuration for a Slack channel configured with AWS Chatbot.
   *
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration | undefined;
}

/**
 * Represents a parameterized command that can be invoked as an alias or as a notification button in the chat client.
 *
 * @public
 */
export interface CustomAction {
  /**
   * The fully defined Amazon Resource Name (ARN) of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;

  /**
   * The definition of the command to run when invoked an alias or as an action button.
   *
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * The name used to invoke this action in the chat channel. For example, `@aws run my-alias`.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * Defines when this custom action button should be attached to a notification.
   *
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;

  /**
   * The name of the custom action that is included in the ARN.
   *
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomActionRequest {
  /**
   * The fully defined ARN of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomActionResult {}

/**
 * @public
 */
export interface GetCustomActionRequest {
  /**
   * Returns the fully defined Amazon Resource Name (ARN) of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface GetCustomActionResult {
  /**
   * Returns the custom action.
   *
   * @public
   */
  CustomAction?: CustomAction | undefined;
}

/**
 * @public
 */
export interface ListCustomActionsRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomActionsResult {
  /**
   * A list of custom actions.
   *
   * @public
   */
  CustomActions: string[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomActionRequest {
  /**
   * The fully defined Amazon Resource Name (ARN) of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;

  /**
   * The definition of the command to run when invoked as an alias or as an action button.
   *
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * The name used to invoke this action in the chat channel. For example, `@aws run my-alias`.
   *
   * @public
   */
  AliasName?: string | undefined;

  /**
   * Defines when this custom action button should be attached to a notification.
   *
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomActionResult {
  /**
   * The fully defined ARN of the custom action.
   *
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChimeWebhookConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChimeWebhookConfigurationResult {}

/**
 * @public
 */
export interface DeleteTeamsChannelConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsChannelConfigurationResult {}

/**
 * @public
 */
export interface DeleteTeamsConfiguredTeamRequest {
  /**
   * The ID of the Microsoft Teams team authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsConfiguredTeamResult {}

/**
 * @public
 */
export interface DeleteMicrosoftTeamsUserIdentityRequest {
  /**
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The Microsoft Teams user ID.
   *
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrosoftTeamsUserIdentityResult {}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the SlackChannelConfiguration to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationResult {}

/**
 * @public
 */
export interface DeleteSlackUserIdentityRequest {
  /**
   * The ARN of the SlackChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   *
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the user in Slack
   *
   * @public
   */
  SlackUserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackUserIdentityResult {}

/**
 * @public
 */
export interface DeleteSlackWorkspaceAuthorizationRequest {
  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   *
   * @public
   */
  SlackTeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackWorkspaceAuthorizationResult {}

/**
 * @public
 */
export interface DescribeChimeWebhookConfigurationsRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional Amazon Resource Name (ARN) of a ChimeWebhookConfiguration to describe.
   *
   * @public
   */
  ChatConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChimeWebhookConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Amazon Chime webhooks associated with the account.
   *
   * @public
   */
  WebhookConfigurations?: ChimeWebhookConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * An optional Amazon Resource Name (ARN) of a SlackChannelConfiguration to describe.
   *
   * @public
   */
  ChatConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of Slack channel configurations.
   *
   * @public
   */
  SlackChannelConfigurations?: SlackChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesRequest {
  /**
   * The Amazon Resource Name (ARN) of the SlackChannelConfiguration associated with the user identities to describe.
   *
   * @public
   */
  ChatConfigurationArn?: string | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Identifes a user level permission for a channel configuration.
 *
 * @public
 */
export interface SlackUserIdentity {
  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the SlackChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   *
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the user in Slack
   *
   * @public
   */
  SlackUserId: string | undefined;

  /**
   * The AWS user identity ARN used to associate a Slack user ID with an IAM Role.
   *
   * @public
   */
  AwsUserIdentity?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesResult {
  /**
   * A list of Slack User Identities.
   *
   * @public
   */
  SlackUserIdentities?: SlackUserIdentity[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * A Slack workspace.
 *
 * @public
 */
export interface SlackWorkspace {
  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   *
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The name of the Slack workspace.
   *
   * @public
   */
  SlackTeamName: string | undefined;

  /**
   * Either `ENABLED` or `DISABLED`. The resource returns `DISABLED` if the organization's AWS Chatbot policy has explicitly denied that configuration. For example, if Amazon Chime is disabled.
   *
   * @public
   */
  State?: string | undefined;

  /**
   * Provided if State is `DISABLED`. Provides context as to why the resource is disabled.
   *
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesResult {
  /**
   * A list of Slack workspaces registered with AWS Chatbot.
   *
   * @public
   */
  SlackWorkspaces?: SlackWorkspace[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromConfigurationRequest {
  /**
   * The resource (for example, a custom action) Amazon Resource Name (ARN) to unlink.
   *
   * @public
   */
  Resource: string | undefined;

  /**
   * The channel configuration the resource is being disassociated from.
   *
   * @public
   */
  ChatConfiguration: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromConfigurationResult {}

/**
 * @public
 */
export interface GetAccountPreferencesRequest {}

/**
 * @public
 */
export interface GetAccountPreferencesResult {
  /**
   * The preferences related to AWS Chatbot usage in the calling AWS account.
   *
   * @public
   */
  AccountPreferences?: AccountPreferences | undefined;
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration to retrieve.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationResult {
  /**
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   *
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * The channel configuration to list associations for.
   *
   * @public
   */
  ChatConfiguration: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResult {
  /**
   * The resources associated with this channel configuration.
   *
   * @public
   */
  Associations: AssociationListing[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The ID of the Microsoft Teams authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId?: string | undefined;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * A list of AWS Chatbot channel configurations for Microsoft Teams.
   *
   * @public
   */
  TeamChannelConfigurations?: TeamsChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsRequest {
  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsResult {
  /**
   * A list of teams in Microsoft Teams that are configured with AWS Chatbot.
   *
   * @public
   */
  ConfiguredTeams?: ConfiguredTeam[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesRequest {
  /**
   * The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.
   *
   * @public
   */
  ChatConfigurationArn?: string | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * Identifes a user level permission for a channel configuration.
 *
 * @public
 */
export interface TeamsUserIdentity {
  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Microsoft Teams authorized with AWS Chatbot.
   *
   * To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see [Step 1: Configure a Microsoft Teams client](https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  TeamId: string | undefined;

  /**
   * The Microsoft Teams user ID.
   *
   * @public
   */
  UserId?: string | undefined;

  /**
   * The AWS user identity ARN used to associate a Microsoft Teams user Identity with an IAM Role.
   *
   * @public
   */
  AwsUserIdentity?: string | undefined;

  /**
   * The ID of the Microsoft Teams channel.
   *
   * @public
   */
  TeamsChannelId?: string | undefined;

  /**
   * The ID of the Microsoft Teams tenant.
   *
   * @public
   */
  TeamsTenantId?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesResult {
  /**
   * User level permissions associated to a channel configuration.
   *
   * @public
   */
  TeamsUserIdentities?: TeamsUserIdentity[] | undefined;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the resource to list tags for.
   *
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define.
   *
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * The ARN of the configuration.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags to apply to the configuration.
   *
   * @public
   */
  Tags: Tag[] | undefined;
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
   * The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific AWS resource, such as a server, user, or role.
   *
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.
   *
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * @public
 */
export interface UpdateAccountPreferencesRequest {
  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * Turns on training data collection.
   *
   * This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AI technologies for AWS Chatbot.
   *
   * @public
   */
  TrainingDataCollectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPreferencesResult {
  /**
   * Preferences related to AWS Chatbot usage in the calling AWS account.
   *
   * @public
   */
  AccountPreferences?: AccountPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration to update.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * A description of the webhook. We recommend using the convention `RoomName/WebhookName`.
   *
   * For more information, see [Tutorial: Get started with Amazon Chime](https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  WebhookDescription?: string | undefined;

  /**
   * The URL for the Amazon Chime webhook.
   *
   * @public
   */
  WebhookUrl?: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationResult {
  /**
   * A Amazon Chime webhook configuration.
   *
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the TeamsChannelConfiguration to update.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   *
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationResult {
  /**
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   *
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationRequest {
  /**
   * The Amazon Resource Name (ARN) of the SlackChannelConfiguration to update.
   *
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack channel.
   *
   * To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack channel.
   *
   * @public
   */
  SlackChannelName?: string | undefined;

  /**
   * The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.
   *
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * A user-defined role that AWS Chatbot assumes. This is not the service-linked role.
   *
   * For more information, see [IAM policies for AWS Chatbot](https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html) in the *AWS Chatbot Administrator Guide*.
   *
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * Logging levels include `ERROR`, `INFO`, or `NONE`.
   *
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed `AdministratorAccess` policy is applied by default if this is not set.
   *
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * Enables use of a user role requirement in your chat configuration.
   *
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * The configuration for a Slack channel configured with AWS Chatbot.
   *
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration | undefined;
}
