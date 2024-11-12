// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@smithy/smithy-client";

import { ChatbotServiceException as __BaseException } from "./ChatbotServiceException";

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
   * <p>The Amazon Resource Number (ARN) of the ChimeWebhookConfiguration.</p>
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
 * <p>There was an issue processing your request.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class CreateChimeWebhookConfigurationException extends __BaseException {
  readonly name: "CreateChimeWebhookConfigurationException" = "CreateChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateChimeWebhookConfigurationException, __BaseException>) {
    super({
      name: "CreateChimeWebhookConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateChimeWebhookConfigurationException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name: "InvalidParameterException" = "InvalidParameterException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidParameterException, __BaseException>) {
    super({
      name: "InvalidParameterException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidParameterException.prototype);
  }
}

/**
 * <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name: "InvalidRequestException" = "InvalidRequestException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InvalidRequestException, __BaseException>) {
    super({
      name: "InvalidRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InvalidRequestException.prototype);
  }
}

/**
 * <p>You have exceeded a service limit for AWS Chatbot.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name: "LimitExceededException" = "LimitExceededException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<LimitExceededException, __BaseException>) {
    super({
      name: "LimitExceededException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, LimitExceededException.prototype);
  }
}

/**
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class CreateTeamsChannelConfigurationException extends __BaseException {
  readonly name: "CreateTeamsChannelConfigurationException" = "CreateTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateTeamsChannelConfigurationException, __BaseException>) {
    super({
      name: "CreateTeamsChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateTeamsChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class CreateSlackChannelConfigurationException extends __BaseException {
  readonly name: "CreateSlackChannelConfigurationException" = "CreateSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<CreateSlackChannelConfigurationException, __BaseException>) {
    super({
      name: "CreateSlackChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, CreateSlackChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>The Amazon Resource Number (ARN) of the SlackChannelConfiguration.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteChimeWebhookConfigurationException extends __BaseException {
  readonly name: "DeleteChimeWebhookConfigurationException" = "DeleteChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteChimeWebhookConfigurationException, __BaseException>) {
    super({
      name: "DeleteChimeWebhookConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteChimeWebhookConfigurationException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>We were unable to find the resource for your request</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteTeamsChannelConfigurationException extends __BaseException {
  readonly name: "DeleteTeamsChannelConfigurationException" = "DeleteTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteTeamsChannelConfigurationException, __BaseException>) {
    super({
      name: "DeleteTeamsChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteTeamsChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteTeamsConfiguredTeamException extends __BaseException {
  readonly name: "DeleteTeamsConfiguredTeamException" = "DeleteTeamsConfiguredTeamException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteTeamsConfiguredTeamException, __BaseException>) {
    super({
      name: "DeleteTeamsConfiguredTeamException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteTeamsConfiguredTeamException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteMicrosoftTeamsUserIdentityException extends __BaseException {
  readonly name: "DeleteMicrosoftTeamsUserIdentityException" = "DeleteMicrosoftTeamsUserIdentityException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteMicrosoftTeamsUserIdentityException, __BaseException>) {
    super({
      name: "DeleteMicrosoftTeamsUserIdentityException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteMicrosoftTeamsUserIdentityException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteSlackChannelConfigurationException extends __BaseException {
  readonly name: "DeleteSlackChannelConfigurationException" = "DeleteSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteSlackChannelConfigurationException, __BaseException>) {
    super({
      name: "DeleteSlackChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteSlackChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteSlackUserIdentityException extends __BaseException {
  readonly name: "DeleteSlackUserIdentityException" = "DeleteSlackUserIdentityException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteSlackUserIdentityException, __BaseException>) {
    super({
      name: "DeleteSlackUserIdentityException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteSlackUserIdentityException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>There was an issue deleting your Slack workspace.</p>
 * @public
 */
export class DeleteSlackWorkspaceAuthorizationFault extends __BaseException {
  readonly name: "DeleteSlackWorkspaceAuthorizationFault" = "DeleteSlackWorkspaceAuthorizationFault";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DeleteSlackWorkspaceAuthorizationFault, __BaseException>) {
    super({
      name: "DeleteSlackWorkspaceAuthorizationFault",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DeleteSlackWorkspaceAuthorizationFault.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeChimeWebhookConfigurationsException extends __BaseException {
  readonly name: "DescribeChimeWebhookConfigurationsException" = "DescribeChimeWebhookConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeChimeWebhookConfigurationsException, __BaseException>) {
    super({
      name: "DescribeChimeWebhookConfigurationsException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeChimeWebhookConfigurationsException.prototype);
    this.Message = opts.Message;
  }
}

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
   * <p>An optional Amazon Resource Number (ARN) of a ChimeWebhookConfiguration to describe.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackChannelConfigurationsException extends __BaseException {
  readonly name: "DescribeSlackChannelConfigurationsException" = "DescribeSlackChannelConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeSlackChannelConfigurationsException, __BaseException>) {
    super({
      name: "DescribeSlackChannelConfigurationsException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeSlackChannelConfigurationsException.prototype);
    this.Message = opts.Message;
  }
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
   * <p>An optional Amazon Resource Number (ARN) of a SlackChannelConfiguration to describe.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackUserIdentitiesException extends __BaseException {
  readonly name: "DescribeSlackUserIdentitiesException" = "DescribeSlackUserIdentitiesException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeSlackUserIdentitiesException, __BaseException>) {
    super({
      name: "DescribeSlackUserIdentitiesException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeSlackUserIdentitiesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the SlackChannelConfiguration associated with the user identities to describe.</p>
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
   * <p>The Amazon Resource Number (ARN) of the SlackChannelConfiguration associated with the user identity to delete.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackWorkspacesException extends __BaseException {
  readonly name: "DescribeSlackWorkspacesException" = "DescribeSlackWorkspacesException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<DescribeSlackWorkspacesException, __BaseException>) {
    super({
      name: "DescribeSlackWorkspacesException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, DescribeSlackWorkspacesException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class GetAccountPreferencesException extends __BaseException {
  readonly name: "GetAccountPreferencesException" = "GetAccountPreferencesException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GetAccountPreferencesException, __BaseException>) {
    super({
      name: "GetAccountPreferencesException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GetAccountPreferencesException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class GetTeamsChannelConfigurationException extends __BaseException {
  readonly name: "GetTeamsChannelConfigurationException" = "GetTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<GetTeamsChannelConfigurationException, __BaseException>) {
    super({
      name: "GetTeamsChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, GetTeamsChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the MicrosoftTeamsChannelConfiguration to retrieve.</p>
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
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceError, __BaseException>) {
    super({
      name: "InternalServiceError",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceError.prototype);
    this.Message = opts.Message;
  }
}

/**
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListTeamsChannelConfigurationsException extends __BaseException {
  readonly name: "ListTeamsChannelConfigurationsException" = "ListTeamsChannelConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListTeamsChannelConfigurationsException, __BaseException>) {
    super({
      name: "ListTeamsChannelConfigurationsException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ListTeamsChannelConfigurationsException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListMicrosoftTeamsConfiguredTeamsException extends __BaseException {
  readonly name: "ListMicrosoftTeamsConfiguredTeamsException" = "ListMicrosoftTeamsConfiguredTeamsException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListMicrosoftTeamsConfiguredTeamsException, __BaseException>) {
    super({
      name: "ListMicrosoftTeamsConfiguredTeamsException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ListMicrosoftTeamsConfiguredTeamsException.prototype);
    this.Message = opts.Message;
  }
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListMicrosoftTeamsUserIdentitiesException extends __BaseException {
  readonly name: "ListMicrosoftTeamsUserIdentitiesException" = "ListMicrosoftTeamsUserIdentitiesException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ListMicrosoftTeamsUserIdentitiesException, __BaseException>) {
    super({
      name: "ListMicrosoftTeamsUserIdentitiesException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, ListMicrosoftTeamsUserIdentitiesException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.</p>
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
   * <p>The ARN you specified to list the tags of.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name: "ServiceUnavailableException" = "ServiceUnavailableException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ServiceUnavailableException, __BaseException>) {
    super({
      name: "ServiceUnavailableException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ServiceUnavailableException.prototype);
  }
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
 * <p>The supplied list of tags contains too many tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name: "TooManyTagsException" = "TooManyTagsException";
  readonly $fault: "client" = "client";
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<TooManyTagsException, __BaseException>) {
    super({
      name: "TooManyTagsException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, TooManyTagsException.prototype);
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateAccountPreferencesException extends __BaseException {
  readonly name: "UpdateAccountPreferencesException" = "UpdateAccountPreferencesException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateAccountPreferencesException, __BaseException>) {
    super({
      name: "UpdateAccountPreferencesException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateAccountPreferencesException.prototype);
    this.Message = opts.Message;
  }
}

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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateChimeWebhookConfigurationException extends __BaseException {
  readonly name: "UpdateChimeWebhookConfigurationException" = "UpdateChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateChimeWebhookConfigurationException, __BaseException>) {
    super({
      name: "UpdateChimeWebhookConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateChimeWebhookConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the ChimeWebhookConfiguration to update.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateTeamsChannelConfigurationException extends __BaseException {
  readonly name: "UpdateTeamsChannelConfigurationException" = "UpdateTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateTeamsChannelConfigurationException, __BaseException>) {
    super({
      name: "UpdateTeamsChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateTeamsChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the TeamsChannelConfiguration to update.</p>
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateSlackChannelConfigurationException extends __BaseException {
  readonly name: "UpdateSlackChannelConfigurationException" = "UpdateSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UpdateSlackChannelConfigurationException, __BaseException>) {
    super({
      name: "UpdateSlackChannelConfigurationException",
      $fault: "server",
      ...opts,
    });
    Object.setPrototypeOf(this, UpdateSlackChannelConfigurationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationRequest {
  /**
   * <p>The Amazon Resource Number (ARN) of the SlackChannelConfiguration to update.</p>
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

/**
 * @internal
 */
export const ChimeWebhookConfigurationFilterSensitiveLog = (obj: ChimeWebhookConfiguration): any => ({
  ...obj,
  ...(obj.WebhookDescription && { WebhookDescription: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChimeWebhookConfigurationRequestFilterSensitiveLog = (
  obj: CreateChimeWebhookConfigurationRequest
): any => ({
  ...obj,
  ...(obj.WebhookDescription && { WebhookDescription: SENSITIVE_STRING }),
  ...(obj.WebhookUrl && { WebhookUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateChimeWebhookConfigurationResultFilterSensitiveLog = (
  obj: CreateChimeWebhookConfigurationResult
): any => ({
  ...obj,
  ...(obj.WebhookConfiguration && {
    WebhookConfiguration: ChimeWebhookConfigurationFilterSensitiveLog(obj.WebhookConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateTeamsChannelConfigurationRequestFilterSensitiveLog = (
  obj: CreateTeamsChannelConfigurationRequest
): any => ({
  ...obj,
  ...(obj.ChannelName && { ChannelName: SENSITIVE_STRING }),
  ...(obj.TeamName && { TeamName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const TeamsChannelConfigurationFilterSensitiveLog = (obj: TeamsChannelConfiguration): any => ({
  ...obj,
  ...(obj.ChannelName && { ChannelName: SENSITIVE_STRING }),
  ...(obj.TeamName && { TeamName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateTeamsChannelConfigurationResultFilterSensitiveLog = (
  obj: CreateTeamsChannelConfigurationResult
): any => ({
  ...obj,
  ...(obj.ChannelConfiguration && {
    ChannelConfiguration: TeamsChannelConfigurationFilterSensitiveLog(obj.ChannelConfiguration),
  }),
});

/**
 * @internal
 */
export const CreateSlackChannelConfigurationRequestFilterSensitiveLog = (
  obj: CreateSlackChannelConfigurationRequest
): any => ({
  ...obj,
  ...(obj.SlackChannelName && { SlackChannelName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const SlackChannelConfigurationFilterSensitiveLog = (obj: SlackChannelConfiguration): any => ({
  ...obj,
  ...(obj.SlackChannelName && { SlackChannelName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const CreateSlackChannelConfigurationResultFilterSensitiveLog = (
  obj: CreateSlackChannelConfigurationResult
): any => ({
  ...obj,
  ...(obj.ChannelConfiguration && {
    ChannelConfiguration: SlackChannelConfigurationFilterSensitiveLog(obj.ChannelConfiguration),
  }),
});

/**
 * @internal
 */
export const DescribeChimeWebhookConfigurationsResultFilterSensitiveLog = (
  obj: DescribeChimeWebhookConfigurationsResult
): any => ({
  ...obj,
  ...(obj.WebhookConfigurations && {
    WebhookConfigurations: obj.WebhookConfigurations.map((item) => ChimeWebhookConfigurationFilterSensitiveLog(item)),
  }),
});

/**
 * @internal
 */
export const DescribeSlackChannelConfigurationsResultFilterSensitiveLog = (
  obj: DescribeSlackChannelConfigurationsResult
): any => ({
  ...obj,
  ...(obj.SlackChannelConfigurations && {
    SlackChannelConfigurations: obj.SlackChannelConfigurations.map((item) =>
      SlackChannelConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const GetTeamsChannelConfigurationResultFilterSensitiveLog = (obj: GetTeamsChannelConfigurationResult): any => ({
  ...obj,
  ...(obj.ChannelConfiguration && {
    ChannelConfiguration: TeamsChannelConfigurationFilterSensitiveLog(obj.ChannelConfiguration),
  }),
});

/**
 * @internal
 */
export const ListTeamsChannelConfigurationsResultFilterSensitiveLog = (
  obj: ListTeamsChannelConfigurationsResult
): any => ({
  ...obj,
  ...(obj.TeamChannelConfigurations && {
    TeamChannelConfigurations: obj.TeamChannelConfigurations.map((item) =>
      TeamsChannelConfigurationFilterSensitiveLog(item)
    ),
  }),
});

/**
 * @internal
 */
export const UpdateChimeWebhookConfigurationRequestFilterSensitiveLog = (
  obj: UpdateChimeWebhookConfigurationRequest
): any => ({
  ...obj,
  ...(obj.WebhookDescription && { WebhookDescription: SENSITIVE_STRING }),
  ...(obj.WebhookUrl && { WebhookUrl: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateChimeWebhookConfigurationResultFilterSensitiveLog = (
  obj: UpdateChimeWebhookConfigurationResult
): any => ({
  ...obj,
  ...(obj.WebhookConfiguration && {
    WebhookConfiguration: ChimeWebhookConfigurationFilterSensitiveLog(obj.WebhookConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateTeamsChannelConfigurationRequestFilterSensitiveLog = (
  obj: UpdateTeamsChannelConfigurationRequest
): any => ({
  ...obj,
  ...(obj.ChannelName && { ChannelName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateTeamsChannelConfigurationResultFilterSensitiveLog = (
  obj: UpdateTeamsChannelConfigurationResult
): any => ({
  ...obj,
  ...(obj.ChannelConfiguration && {
    ChannelConfiguration: TeamsChannelConfigurationFilterSensitiveLog(obj.ChannelConfiguration),
  }),
});

/**
 * @internal
 */
export const UpdateSlackChannelConfigurationRequestFilterSensitiveLog = (
  obj: UpdateSlackChannelConfigurationRequest
): any => ({
  ...obj,
  ...(obj.SlackChannelName && { SlackChannelName: SENSITIVE_STRING }),
});

/**
 * @internal
 */
export const UpdateSlackChannelConfigurationResultFilterSensitiveLog = (
  obj: UpdateSlackChannelConfigurationResult
): any => ({
  ...obj,
  ...(obj.ChannelConfiguration && {
    ChannelConfiguration: SlackChannelConfigurationFilterSensitiveLog(obj.ChannelConfiguration),
  }),
});
