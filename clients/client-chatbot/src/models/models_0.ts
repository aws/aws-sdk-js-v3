// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ChatbotServiceException as __BaseException } from "./ChatbotServiceException";

/**
 * Preferences which apply for AWS Chatbot usage in the calling AWS account.
 * @public
 */
export interface AccountPreferences {
  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
   * @public
   */
  TrainingDataCollectionEnabled?: boolean;
}

/**
 * A tag applied to the configuration.
 * @public
 */
export interface Tag {
  /**
   * The tag key.
   * @public
   */
  TagKey: string | undefined;

  /**
   * The tag value.
   * @public
   */
  TagValue: string | undefined;
}

/**
 * An AWS Chatbot configuration for Amazon Chime.
 * @public
 */
export interface ChimeWebhookConfiguration {
  /**
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * The ARN of the ChimeWebhookConfiguration.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName?: string;

  /**
   * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * A list of tags applied to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * A Microsoft Teams team that has been authorized with AWS Chatbot.
 * @public
 */
export interface ConfiguredTeam {
  /**
   * The ID of the Microsoft Teams tenant.
   * @public
   */
  TenantId: string | undefined;

  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   * @public
   */
  TeamName?: string;
}

/**
 * There was an issue processing your request.
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
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class CreateChimeWebhookConfigurationException extends __BaseException {
  readonly name: "CreateChimeWebhookConfigurationException" = "CreateChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   * @public
   */
  WebhookDescription: string | undefined;

  /**
   * URL for the Chime webhook.
   * @public
   */
  WebhookUrl: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * A list of tags to apply to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationResult {
  /**
   * Chime webhook configuration.
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration;
}

/**
 * Your request input doesn't meet the constraints that AWS Chatbot requires.
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
 * Your request input doesn't meet the constraints that AWS Chatbot requires.
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
 * You have exceeded a service limit for AWS Chatbot.
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
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class CreateTeamsChannelConfigurationException extends __BaseException {
  readonly name: "CreateTeamsChannelConfigurationException" = "CreateTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ID of the Microsoft Teams channel.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   * @public
   */
  ChannelName?: string;

  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   * @public
   */
  TeamName?: string;

  /**
   * The ID of the Microsoft Teams tenant.
   * @public
   */
  TenantId: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns?: string[];

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * A list of tags to apply to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * An AWS Chatbot configuration for Microsoft Teams.
 * @public
 */
export interface TeamsChannelConfiguration {
  /**
   * The ID of the Microsoft Teams channel.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   * @public
   */
  ChannelName?: string;

  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId: string | undefined;

  /**
   * The name of the Microsoft Teams Team.
   * @public
   */
  TeamName?: string;

  /**
   * The ID of the Microsoft Teams tenant.
   * @public
   */
  TenantId: string | undefined;

  /**
   * The ARN of the MicrosoftTeamsChannelConfiguration.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName?: string;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * A list of tags applied to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationResult {
  /**
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class CreateSlackChannelConfigurationException extends __BaseException {
  readonly name: "CreateSlackChannelConfigurationException" = "CreateSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack Channel.
   * @public
   */
  SlackChannelName?: string;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns?: string[];

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName: string | undefined;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * A list of tags to apply to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * An AWS Chatbot configuration for Slack.
 * @public
 */
export interface SlackChannelConfiguration {
  /**
   * Name of the Slack Workspace.
   * @public
   */
  SlackTeamName: string | undefined;

  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack Channel.
   * @public
   */
  SlackChannelName: string | undefined;

  /**
   * The ARN of the SlackChannelConfiguration.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns: string[] | undefined;

  /**
   * The name of the configuration.
   * @public
   */
  ConfigurationName?: string;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * A list of tags applied to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {
  /**
   * The configuration for a Slack channel configured with AWS Chatbot.
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteChimeWebhookConfigurationException extends __BaseException {
  readonly name: "DeleteChimeWebhookConfigurationException" = "DeleteChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the ChimeWebhookConfiguration to delete.
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChimeWebhookConfigurationResult {}

/**
 * We were not able to find the resource for your request.
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
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
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteTeamsChannelConfigurationException extends __BaseException {
  readonly name: "DeleteTeamsChannelConfigurationException" = "DeleteTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the MicrosoftTeamsChannelConfiguration to delete.
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsChannelConfigurationResult {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteTeamsConfiguredTeamException extends __BaseException {
  readonly name: "DeleteTeamsConfiguredTeamException" = "DeleteTeamsConfiguredTeamException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsConfiguredTeamResult {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteMicrosoftTeamsUserIdentityException extends __BaseException {
  readonly name: "DeleteMicrosoftTeamsUserIdentityException" = "DeleteMicrosoftTeamsUserIdentityException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * Id from Microsoft Teams for user.
   * @public
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrosoftTeamsUserIdentityResult {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteSlackChannelConfigurationException extends __BaseException {
  readonly name: "DeleteSlackChannelConfigurationException" = "DeleteSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the SlackChannelConfiguration to delete.
   * @public
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationResult {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DeleteSlackUserIdentityException extends __BaseException {
  readonly name: "DeleteSlackUserIdentityException" = "DeleteSlackUserIdentityException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the SlackChannelConfiguration associated with the user identity to delete.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the user in Slack.
   * @public
   */
  SlackUserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackUserIdentityResult {}

/**
 * There was an issue deleting your Slack workspace.
 * @public
 */
export class DeleteSlackWorkspaceAuthorizationFault extends __BaseException {
  readonly name: "DeleteSlackWorkspaceAuthorizationFault" = "DeleteSlackWorkspaceAuthorizationFault";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackWorkspaceAuthorizationResult {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DescribeChimeWebhookConfigurationsException extends __BaseException {
  readonly name: "DescribeChimeWebhookConfigurationsException" = "DescribeChimeWebhookConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * An optional ARN of a ChimeWebhookConfiguration to describe.
   * @public
   */
  ChatConfigurationArn?: string;
}

/**
 * @public
 */
export interface DescribeChimeWebhookConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * A list of Chime webhooks associated with the account.
   * @public
   */
  WebhookConfigurations?: ChimeWebhookConfiguration[];
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DescribeSlackChannelConfigurationsException extends __BaseException {
  readonly name: "DescribeSlackChannelConfigurationsException" = "DescribeSlackChannelConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * An optional ARN of a SlackChannelConfiguration to describe.
   * @public
   */
  ChatConfigurationArn?: string;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * A list of Slack channel configurations.
   * @public
   */
  SlackChannelConfigurations?: SlackChannelConfiguration[];
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DescribeSlackUserIdentitiesException extends __BaseException {
  readonly name: "DescribeSlackUserIdentitiesException" = "DescribeSlackUserIdentitiesException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the SlackChannelConfiguration associated with the user identities to describe.
   * @public
   */
  ChatConfigurationArn?: string;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;
}

/**
 * Identifes a User level permission for a channel configuration.
 * @public
 */
export interface SlackUserIdentity {
  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARN of the SlackChannelConfiguration associated with the user identity.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * The ID of the user in Slack.
   * @public
   */
  SlackUserId: string | undefined;

  /**
   * The AWS user identity ARN used to associate a Slack User Identity with an IAM Role.
   * @public
   */
  AwsUserIdentity?: string;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesResult {
  /**
   * A list of Slack User Identities.
   * @public
   */
  SlackUserIdentities?: SlackUserIdentity[];

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class DescribeSlackWorkspacesException extends __BaseException {
  readonly name: "DescribeSlackWorkspacesException" = "DescribeSlackWorkspacesException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * A Slack Workspace.
 * @public
 */
export interface SlackWorkspace {
  /**
   * The ID of the Slack workspace authorized with AWS Chatbot.
   * @public
   */
  SlackTeamId: string | undefined;

  /**
   * Name of the Slack Workspace.
   * @public
   */
  SlackTeamName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesResult {
  /**
   * A list of Slack Workspaces registered with AWS Chatbot.
   * @public
   */
  SlackWorkspaces?: SlackWorkspace[];

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class GetAccountPreferencesException extends __BaseException {
  readonly name: "GetAccountPreferencesException" = "GetAccountPreferencesException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * Preferences which apply for AWS Chatbot usage in the calling AWS account.
   * @public
   */
  AccountPreferences?: AccountPreferences;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class GetTeamsChannelConfigurationException extends __BaseException {
  readonly name: "GetTeamsChannelConfigurationException" = "GetTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the MicrosoftTeamsChannelConfiguration to retrieve.
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
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * Customer/consumer-facing internal service exception.
 *         https://w.amazon.com/index.php/AWS/API_Standards/Exceptions#InternalServiceError
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name: "InternalServiceError" = "InternalServiceError";
  readonly $fault: "server" = "server";
  Message?: string;
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
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class ListTeamsChannelConfigurationsException extends __BaseException {
  readonly name: "ListTeamsChannelConfigurationsException" = "ListTeamsChannelConfigurationsException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId?: string;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsResult {
  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * A list of AWS Chatbot channel configurations for Microsoft Teams.
   * @public
   */
  TeamChannelConfigurations?: TeamsChannelConfiguration[];
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class ListMicrosoftTeamsConfiguredTeamsException extends __BaseException {
  readonly name: "ListMicrosoftTeamsConfiguredTeamsException" = "ListMicrosoftTeamsConfiguredTeamsException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsResult {
  /**
   * A list of teams in Microsoft Teams that have been configured with AWS Chatbot.
   * @public
   */
  ConfiguredTeams?: ConfiguredTeam[];

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class ListMicrosoftTeamsUserIdentitiesException extends __BaseException {
  readonly name: "ListMicrosoftTeamsUserIdentitiesException" = "ListMicrosoftTeamsUserIdentitiesException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.
   * @public
   */
  ChatConfigurationArn?: string;

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;

  /**
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   * @public
   */
  MaxResults?: number;
}

/**
 * Identifes a user level permission for a channel configuration.
 * @public
 */
export interface TeamsUserIdentity {
  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn: string | undefined;

  /**
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   * @public
   */
  TeamId: string | undefined;

  /**
   * Id from Microsoft Teams for user.
   * @public
   */
  UserId?: string;

  /**
   * The AWS user identity ARN used to associate a Microsoft Teams User Identity with an IAM Role.
   * @public
   */
  AwsUserIdentity?: string;

  /**
   * The ID of the Microsoft Teams channel.
   * @public
   */
  TeamsChannelId?: string;

  /**
   * The ID of the Microsoft Teams tenant.
   * @public
   */
  TeamsTenantId?: string;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesResult {
  /**
   * User level permissions associated to a channel configuration.
   * @public
   */
  TeamsUserIdentities?: TeamsUserIdentity[];

  /**
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   * @public
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListTagsForResourceRequest {
  /**
   * The ARN of the configuration.
   * @public
   */
  ResourceARN: string | undefined;
}

/**
 * @public
 */
export interface ListTagsForResourceResponse {
  /**
   * A list of tags applied to the configuration.
   * @public
   */
  Tags?: Tag[];
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
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
   * The ARN of the configuration.
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tags to apply to the configuration.
   * @public
   */
  Tags: Tag[] | undefined;
}

/**
 * @public
 */
export interface TagResourceResponse {}

/**
 * The supplied list of tags contains too many tags.
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
   * The ARN of the configuration.
   * @public
   */
  ResourceARN: string | undefined;

  /**
   * A list of tag keys to remove from the configuration.
   * @public
   */
  TagKeys: string[] | undefined;
}

/**
 * @public
 */
export interface UntagResourceResponse {}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class UpdateAccountPreferencesException extends __BaseException {
  readonly name: "UpdateAccountPreferencesException" = "UpdateAccountPreferencesException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;

  /**
   * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
   * @public
   */
  TrainingDataCollectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateAccountPreferencesResult {
  /**
   * Preferences which apply for AWS Chatbot usage in the calling AWS account.
   * @public
   */
  AccountPreferences?: AccountPreferences;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class UpdateChimeWebhookConfigurationException extends __BaseException {
  readonly name: "UpdateChimeWebhookConfigurationException" = "UpdateChimeWebhookConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the ChimeWebhookConfiguration to update.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   * @public
   */
  WebhookDescription?: string;

  /**
   * URL for the Chime webhook.
   * @public
   */
  WebhookUrl?: string;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns?: string[];

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn?: string;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationResult {
  /**
   * Chime webhook configuration.
   * @public
   */
  WebhookConfiguration?: ChimeWebhookConfiguration;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class UpdateTeamsChannelConfigurationException extends __BaseException {
  readonly name: "UpdateTeamsChannelConfigurationException" = "UpdateTeamsChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the MicrosoftTeamsChannelConfiguration to update.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Microsoft Teams channel.
   * @public
   */
  ChannelId: string | undefined;

  /**
   * The name of the Microsoft Teams channel.
   * @public
   */
  ChannelName?: string;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns?: string[];

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn?: string;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationResult {
  /**
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   * @public
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * We can’t process your request right now because of a server issue. Try again later.
 * @public
 */
export class UpdateSlackChannelConfigurationException extends __BaseException {
  readonly name: "UpdateSlackChannelConfigurationException" = "UpdateSlackChannelConfigurationException";
  readonly $fault: "server" = "server";
  Message?: string;
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
   * The ARN of the SlackChannelConfiguration to update.
   * @public
   */
  ChatConfigurationArn: string | undefined;

  /**
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   * @public
   */
  SlackChannelId: string | undefined;

  /**
   * The name of the Slack Channel.
   * @public
   */
  SlackChannelName?: string;

  /**
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   * @public
   */
  SnsTopicArns?: string[];

  /**
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   * @public
   */
  IamRoleArn?: string;

  /**
   * Logging levels include ERROR, INFO, or NONE.
   * @public
   */
  LoggingLevel?: string;

  /**
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   * @public
   */
  GuardrailPolicyArns?: string[];

  /**
   * Enables use of a user role requirement in your chat configuration.
   * @public
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * The configuration for a Slack channel configured with AWS Chatbot.
   * @public
   */
  ChannelConfiguration?: SlackChannelConfiguration;
}
