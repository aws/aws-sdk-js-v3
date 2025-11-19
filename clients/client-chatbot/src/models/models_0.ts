// smithy-typescript generated code
import { CustomActionAttachmentCriteriaOperator } from "./enums";

/**
 * <p>Preferences related to AWS Chatbot usage in the calling AWS account.</p>
 * @public
 */
export interface AccountPreferences {
  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>Turns on training data collection.</p>
   *          <p>This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AI technologies for AWS Chatbot.
   *   </p>
   * @public
   */
  TrainingDataCollectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface AssociateToConfigurationRequest {
  /**
   * <p>The resource Amazon Resource Name (ARN) to link.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>The channel configuration to associate with the resource.</p>
   * @public
   */
  ChatConfiguration: string | undefined;
}

/**
 * @public
 */
export interface AssociateToConfigurationResult {}

/**
 * <p>A listing of an association with a channel configuration.</p>
 * @public
 */
export interface AssociationListing {
  /**
   * <p>The Amazon Resource Name (ARN) of the resource (for example, a custom action).</p>
   * @public
   */
  Resource: string | undefined;
}

/**
 * <p>A key-value pair. A tag consists of a tag key and a tag value. Tag keys and tag values are both required, but tag values can be empty (null) strings.</p>
 *          <important>
 *             <p>Do not include confidential or sensitive information in this field. </p>
 *          </important>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management User Guide</i>.</p>
 * @public
 */
export interface Tag {
  /**
   * <p>The key of the tag.</p>
   * @public
   */
  TagKey: string | undefined;

  /**
   * <p>The value of the tag.</p>
   * @public
   */
  TagValue: string | undefined;
}

/**
 * <p>An AWS Chatbot configuration for Amazon Chime.</p>
 * @public
 */
export interface ChimeWebhookConfiguration {
  /**
   * <p>A description of the webhook. We recommend using the convention <code>RoomName/WebhookName</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html">Tutorial: Get started with Amazon Chime</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *  </p>
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Either <code>ENABLED</code> or <code>DISABLED</code>. The resource returns <code>DISABLED</code> if the organization's AWS Chatbot policy has explicitly denied that configuration.
   * 	  For example, if Amazon Chime is disabled.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provided if State is <code>DISABLED</code>. Provides context as to why the resource is disabled.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * <p>A Microsoft Teams team that is authorized with AWS Chatbot.</p>
 * @public
 */
export interface ConfiguredTeam {
  /**
   * <p>The ID of the Microsoft Teams tenant.</p>
   * @public
   */
  TenantId: string | undefined;

  /**
   * <p> The ID of the Microsoft Teams authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
   * @public
   */
  TeamId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams Team.</p>
   * @public
   */
  TeamName?: string | undefined;

  /**
   * <p>Either <code>ENABLED</code> or <code>DISABLED</code>. The resource returns <code>DISABLED</code> if the organization's AWS Chatbot policy has explicitly denied that configuration.
   * 	  For example, if Amazon Chime is disabled.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provided if State is <code>DISABLED</code>. Provides context as to why the resource is disabled.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationRequest {
  /**
   * <p>A description of the webhook. We recommend using the convention <code>RoomName/WebhookName</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html">Tutorial: Get started with Amazon Chime</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *  </p>
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * <p>The URL for the Amazon Chime webhook.</p>
   * @public
   */
  WebhookUrl: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationResult {
  /**
   * <p>An Amazon Chime webhook configuration.</p>
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration | undefined;
}

/**
 * <p>A criteria for when a button should be shown based on values in the notification</p>
 * @public
 */
export interface CustomActionAttachmentCriteria {
  /**
   * <p>The operation to perform on the named variable.</p>
   * @public
   */
  Operator: CustomActionAttachmentCriteriaOperator | undefined;

  /**
   * <p>The name of the variable to operate on.</p>
   * @public
   */
  VariableName: string | undefined;

  /**
   * <p>A value that is compared with the actual value of the variable based on the behavior of the operator.</p>
   * @public
   */
  Value?: string | undefined;
}

/**
 * <p>Defines when a custom action button should be attached to a notification.</p>
 * @public
 */
export interface CustomActionAttachment {
  /**
   * <p>The type of notification that the custom action should be attached to.</p>
   * @public
   */
  NotificationType?: string | undefined;

  /**
   * <p>The text of the button that appears on the notification.</p>
   * @public
   */
  ButtonText?: string | undefined;

  /**
   * <p>The criteria for when a button should be shown based on values in the notification.</p>
   * @public
   */
  Criteria?: CustomActionAttachmentCriteria[] | undefined;

  /**
   * <p>The variables to extract from the notification.</p>
   * @public
   */
  Variables?: Record<string, string> | undefined;
}

/**
 * <p>The definition of the command to run when invoked as an alias or as an action button.</p>
 * @public
 */
export interface CustomActionDefinition {
  /**
   * <p>The command string to run which may include variables by prefixing with a dollar sign ($).</p>
   * @public
   */
  CommandText: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomActionRequest {
  /**
   * <p>The definition of the command to run when invoked as an alias or as an action button.</p>
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * <p>The name used to invoke this action in a chat channel. For example, <code>@aws run my-alias</code>.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>Defines when this custom action button should be attached to a notification.</p>
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>A unique, case-sensitive identifier that you provide to ensure the idempotency of the request. Idempotency ensures that an API request completes only once. With an idempotent request, if the original request completes successfully, subsequent retries with the same client token returns the result from the original successful request.</p>
   *          <p>If you do not specify a client token, one is automatically generated by the SDK.</p>
   * @public
   */
  ClientToken?: string | undefined;

  /**
   * <p>The name of the custom action. This name is included in the Amazon Resource Name (ARN).</p>
   * @public
   */
  ActionName: string | undefined;
}

/**
 * @public
 */
export interface CreateCustomActionResult {
  /**
   * <p>The fully defined ARN of the custom action.</p>
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationRequest {
  /**
   * <p>The ID of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p> The ID of the Microsoft Teams authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
   * @public
   */
  TeamId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams Team.</p>
   * @public
   */
  TeamName?: string | undefined;

  /**
   * <p>The ID of the Microsoft Teams tenant.</p>
   * @public
   */
  TenantId: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>An AWS Chatbot configuration for Microsoft Teams.</p>
 * @public
 */
export interface TeamsChannelConfiguration {
  /**
   * <p>The ID of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p> The ID of the Microsoft Teams authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
   * @public
   */
  TeamId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams Team.</p>
   * @public
   */
  TeamName?: string | undefined;

  /**
   * <p>The ID of the Microsoft Teams tenant.</p>
   * @public
   */
  TenantId: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Either <code>ENABLED</code> or <code>DISABLED</code>. The resource returns <code>DISABLED</code> if the organization's AWS Chatbot policy has explicitly denied that configuration.
   * 	  For example, if Amazon Chime is disabled.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provided if State is <code>DISABLED</code>. Provides context as to why the resource is disabled.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationResult {
  /**
   * <p>The configuration for a Microsoft Teams channel configured with AWS Chatbot.</p>
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationRequest {
  /**
   * <p>The ID of the Slack workspace authorized with AWS Chatbot.</p>
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * <p>The ID of the Slack channel.</p>
   *          <p>To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *   </p>
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * <p>The name of the Slack channel.</p>
   * @public
   */
  SlackChannelName?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * <p>An AWS Chatbot configuration for Slack.</p>
 * @public
 */
export interface SlackChannelConfiguration {
  /**
   * <p>Name of the Slack workspace.</p>
   * @public
   */
  SlackTeamName: string | undefined;

  /**
   * <p>The ID of the Slack workspace authorized with Amazon Chime.</p>
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * <p>The ID of the Slack channel.</p>
   *          <p>To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *   </p>
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * <p>The name of the Slack channel.</p>
   * @public
   */
  SlackChannelName: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SlackChannelConfiguration.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The ARNs of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * <p>The name of the configuration.</p>
   * @public
   */
  ConfigurationName?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>A map of tags assigned to a resource. A tag is a string-to-string map of key-value pairs.</p>
   * @public
   */
  Tags?: Tag[] | undefined;

  /**
   * <p>Either <code>ENABLED</code> or <code>DISABLED</code>. The resource returns <code>DISABLED</code> if the organization's AWS Chatbot policy has explicitly denied that configuration.
   * 	  For example, if Amazon Chime is disabled.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provided if State is <code>DISABLED</code>. Provides context as to why the resource is disabled.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {
  /**
   * <p>The configuration for a Slack channel configured with AWS Chatbot.</p>
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration | undefined;
}

/**
 * <p>Represents a parameterized command that can be invoked as an alias or as a notification button in the chat client.</p>
 * @public
 */
export interface CustomAction {
  /**
   * <p>The fully defined Amazon Resource Name (ARN) of the custom action.</p>
   * @public
   */
  CustomActionArn: string | undefined;

  /**
   * <p>The definition of the command to run when invoked an alias or as an action button.</p>
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * <p>The name used to invoke this action in the chat channel. For example, <code>@aws run my-alias</code>.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>Defines when this custom action button should be attached to a notification.</p>
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;

  /**
   * <p>The name of the custom action that is included in the ARN.</p>
   * @public
   */
  ActionName?: string | undefined;
}

/**
 * @public
 */
export interface DeleteCustomActionRequest {
  /**
   * <p>The fully defined ARN of the custom action.</p>
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
   * <p>Returns the fully defined Amazon Resource Name (ARN) of the custom action.</p>
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface GetCustomActionResult {
  /**
   * <p>Returns the custom action.</p>
   * @public
   */
  CustomAction?: CustomAction | undefined;
}

/**
 * @public
 */
export interface ListCustomActionsRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListCustomActionsResult {
  /**
   * <p>A list of custom actions.</p>
   * @public
   */
  CustomActions: string[] | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface UpdateCustomActionRequest {
  /**
   * <p>The fully defined Amazon Resource Name (ARN) of the custom action.</p>
   * @public
   */
  CustomActionArn: string | undefined;

  /**
   * <p>The definition of the command to run when invoked as an alias or as an action button.</p>
   * @public
   */
  Definition: CustomActionDefinition | undefined;

  /**
   * <p>The name used to invoke this action in the chat channel. For example, <code>@aws run my-alias</code>.</p>
   * @public
   */
  AliasName?: string | undefined;

  /**
   * <p>Defines when this custom action button should be attached to a notification.</p>
   * @public
   */
  Attachments?: CustomActionAttachment[] | undefined;
}

/**
 * @public
 */
export interface UpdateCustomActionResult {
  /**
   * <p>The fully defined ARN of the custom action.</p>
   * @public
   */
  CustomActionArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChimeWebhookConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration to delete.</p>
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
   * <p>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.</p>
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
   * <p>The ID of the Microsoft Teams team authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
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
   * <p>The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>The Microsoft Teams user ID.</p>
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
   * <p>The Amazon Resource Name (ARN) of the SlackChannelConfiguration to delete.</p>
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
   * <p>The ARN of the SlackChannelConfiguration associated with the user identity to delete.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>The ID of the Slack workspace authorized with AWS Chatbot.</p>
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * <p>The ID of the user in Slack</p>
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
   * <p>The ID of the Slack workspace authorized with AWS Chatbot.</p>
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
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional Amazon Resource Name (ARN) of a ChimeWebhookConfiguration to describe.</p>
   * @public
   */
  ChatConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeChimeWebhookConfigurationsResult {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *  </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Amazon Chime webhooks associated with the account.</p>
   * @public
   */
  WebhookConfigurations?: ChimeWebhookConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>An optional Amazon Resource Name (ARN) of a SlackChannelConfiguration to describe.</p>
   * @public
   */
  ChatConfigurationArn?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsResult {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of Slack channel configurations.</p>
   * @public
   */
  SlackChannelConfigurations?: SlackChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SlackChannelConfiguration associated with the user identities to describe.</p>
   * @public
   */
  ChatConfigurationArn?: string | undefined;

  /**
   * <p> An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Identifes a user level permission for a channel configuration. </p>
 * @public
 */
export interface SlackUserIdentity {
  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the SlackChannelConfiguration associated with the user identity to delete.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>The ID of the Slack workspace authorized with AWS Chatbot.</p>
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * <p>The ID of the user in Slack</p>
   * @public
   */
  SlackUserId: string | undefined;

  /**
   * <p>The AWS user identity ARN used to associate a Slack user ID with an IAM Role.</p>
   * @public
   */
  AwsUserIdentity?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesResult {
  /**
   * <p>A list of Slack User Identities.</p>
   * @public
   */
  SlackUserIdentities?: SlackUserIdentity[] | undefined;

  /**
   * <p> An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p> An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>A Slack workspace. </p>
 * @public
 */
export interface SlackWorkspace {
  /**
   * <p>The ID of the Slack workspace authorized with AWS Chatbot.</p>
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * <p>The name of the Slack workspace.</p>
   * @public
   */
  SlackTeamName: string | undefined;

  /**
   * <p>Either <code>ENABLED</code> or <code>DISABLED</code>. The resource returns <code>DISABLED</code> if the organization's AWS Chatbot policy has explicitly denied that configuration.
   * 	  For example, if Amazon Chime is disabled.</p>
   * @public
   */
  State?: string | undefined;

  /**
   * <p>Provided if State is <code>DISABLED</code>. Provides context as to why the resource is disabled.</p>
   * @public
   */
  StateReason?: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesResult {
  /**
   * <p>A list of Slack workspaces registered with AWS Chatbot.</p>
   * @public
   */
  SlackWorkspaces?: SlackWorkspace[] | undefined;

  /**
   * <p> An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface DisassociateFromConfigurationRequest {
  /**
   * <p>The resource (for example, a custom action) Amazon Resource Name (ARN) to unlink.</p>
   * @public
   */
  Resource: string | undefined;

  /**
   * <p>The channel configuration the resource is being disassociated from.</p>
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
   * <p>The preferences related to AWS Chatbot usage in the calling AWS account.</p>
   * @public
   */
  AccountPreferences?: AccountPreferences | undefined;
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration to retrieve.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationResult {
  /**
   * <p>The configuration for a Microsoft Teams channel configured with AWS Chatbot.</p>
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface ListAssociationsRequest {
  /**
   * <p>The channel configuration to list associations for.</p>
   * @public
   */
  ChatConfiguration: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListAssociationsResult {
  /**
   * <p>The resources associated with this channel configuration.</p>
   * @public
   */
  Associations: AssociationListing[] | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p> The ID of the Microsoft Teams authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
   * @public
   */
  TeamId?: string | undefined;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsResult {
  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>A list of AWS Chatbot channel configurations for Microsoft Teams.</p>
   * @public
   */
  TeamChannelConfigurations?: TeamsChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsRequest {
  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.</p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsResult {
  /**
   * <p>A list of teams in Microsoft Teams that are configured with AWS Chatbot.</p>
   * @public
   */
  ConfiguredTeams?: ConfiguredTeam[] | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.</p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.</p>
   * @public
   */
  ChatConfigurationArn?: string | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;

  /**
   * <p>The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   *   </p>
   * @public
   */
  MaxResults?: number | undefined;
}

/**
 * <p>Identifes a user level permission for a channel configuration.</p>
 * @public
 */
export interface TeamsUserIdentity {
  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * <p>The Amazon Resource Name (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p> The ID of the Microsoft Teams authorized with AWS Chatbot.</p>
   *          <p>To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/teams-setup.html#teams-client-setup">Step 1: Configure a Microsoft Teams client</a> in the <i> AWS Chatbot Administrator Guide</i>.
   * </p>
   * @public
   */
  TeamId: string | undefined;

  /**
   * <p>The Microsoft Teams user ID.</p>
   * @public
   */
  UserId?: string | undefined;

  /**
   * <p>The AWS user identity ARN used to associate a Microsoft Teams user Identity with an IAM Role.</p>
   * @public
   */
  AwsUserIdentity?: string | undefined;

  /**
   * <p>The ID of the Microsoft Teams channel.</p>
   * @public
   */
  TeamsChannelId?: string | undefined;

  /**
   * <p>The ID of the Microsoft Teams tenant.</p>
   * @public
   */
  TeamsTenantId?: string | undefined;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesResult {
  /**
   * <p>User level permissions associated to a channel configuration.</p>
   * @public
   */
  TeamsUserIdentities?: TeamsUserIdentity[] | undefined;

  /**
   * <p>An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   *   </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * <p>The ARN of the resource to list tags for.</p>
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * <p>Key-value pairs that are assigned to a resource, usually for the purpose of grouping and searching for items. Tags are metadata that you define.</p>
   * @public
   */
  Tags?: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceRequest {
  /**
   * <p>The ARN of the configuration.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>A list of tags to apply to the configuration.</p>
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
   * <p>The value of the resource that will have the tag removed. An Amazon Resource Name (ARN) is an identifier for a specific AWS resource, such as a server, user, or role.</p>
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * <p>TagKeys are key-value pairs assigned to ARNs that can be used to group and search for resources by type. This metadata can be attached to resources for any purpose.</p>
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
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;

  /**
   * <p>Turns on training data collection.</p>
   *          <p>This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AI technologies for AWS Chatbot.
   *   </p>
   * @public
   */
  TrainingDataCollectionEnabled?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateAccountPreferencesResult {
  /**
   * <p>Preferences related to AWS Chatbot usage in the calling AWS account.</p>
   * @public
   */
  AccountPreferences?: AccountPreferences | undefined;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the ChimeWebhookConfiguration to update.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>A description of the webhook. We recommend using the convention <code>RoomName/WebhookName</code>.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html">Tutorial: Get started with Amazon Chime</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *  </p>
   * @public
   */
  WebhookDescription?: string | undefined;

  /**
   * <p>The URL for the Amazon Chime webhook.</p>
   * @public
   */
  WebhookUrl?: string | undefined;

  /**
   * <p>The ARNs of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationResult {
  /**
   * <p>A Amazon Chime webhook configuration.</p>
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the TeamsChannelConfiguration to update.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>The ID of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelId: string | undefined;

  /**
   * <p>The name of the Microsoft Teams channel.</p>
   * @public
   */
  ChannelName?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationResult {
  /**
   * <p>The configuration for a Microsoft Teams channel configured with AWS Chatbot.</p>
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Name (ARN) of the SlackChannelConfiguration to update.</p>
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * <p>The ID of the Slack channel.</p>
   *          <p>To get this ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   *   </p>
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * <p>The name of the Slack channel.</p>
   * @public
   */
  SlackChannelName?: string | undefined;

  /**
   * <p>The Amazon Resource Names (ARNs) of the SNS topics that deliver notifications to AWS Chatbot.</p>
   * @public
   */
  SnsTopicArns?: string[] | undefined;

  /**
   * <p>A user-defined role that AWS Chatbot assumes. This is not the service-linked role.</p>
   *          <p>For more information, see <a href="https://docs.aws.amazon.com/chatbot/latest/adminguide/chatbot-iam-policies.html">IAM policies for AWS Chatbot</a> in the <i> AWS Chatbot Administrator Guide</i>.
   *   </p>
   * @public
   */
  IamRoleArn?: string | undefined;

  /**
   * <p>Logging levels include <code>ERROR</code>, <code>INFO</code>, or <code>NONE</code>.</p>
   * @public
   */
  LoggingLevel?: string | undefined;

  /**
   * <p>The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed <code>AdministratorAccess</code> policy is applied by default if this is not set.
   *   </p>
   * @public
   */
  GuardrailPolicyArns?: string[] | undefined;

  /**
   * <p>Enables use of a user role requirement in your chat configuration.</p>
   * @public
   */
  UserAuthorizationRequired?: boolean | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * <p>The configuration for a Slack channel configured with AWS Chatbot.</p>
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration | undefined;
}
