// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ChatbotServiceException as __BaseException } from "./ChatbotServiceException";

/**
 * @public
 * Preferences which apply for AWS Chatbot usage in the calling AWS account.
 */
export interface AccountPreferences {
  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;

  /**
   * @public
   * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
   */
  TrainingDataCollectionEnabled?: boolean;
}

/**
 * @public
 * An AWS Chatbot configuration for Amazon Chime.
 */
export interface ChimeWebhookConfiguration {
  /**
   * @public
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   */
  WebhookDescription: string | undefined;

  /**
   * @public
   * The ARN of the ChimeWebhookConfiguration.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns: string[] | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName?: string;

  /**
   * @public
   * Specifies the logging level for this configuration. This property affects the log entries pushed to Amazon CloudWatch Logs.Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;
}

/**
 * @public
 * A Microsoft Teams team that has been authorized with AWS Chatbot.
 */
export interface ConfiguredTeam {
  /**
   * @public
   * The ID of the Microsoft Teams tenant.
   */
  TenantId: string | undefined;

  /**
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams Team.
   */
  TeamName?: string;
}

/**
 * @public
 * There was an issue processing your request.
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
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   */
  WebhookDescription: string | undefined;

  /**
   * @public
   * URL for the Chime webhook.
   */
  WebhookUrl: string | undefined;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns: string[] | undefined;

  /**
   * @public
   * This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName: string | undefined;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;
}

/**
 * @public
 */
export interface CreateChimeWebhookConfigurationResult {
  /**
   * @public
   * Chime webhook configuration.
   */
  WebhookConfiguration?: ChimeWebhookConfiguration;
}

/**
 * @public
 * Your request input doesn't meet the constraints that AWS Chatbot requires.
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
 * @public
 * Your request input doesn't meet the constraints that AWS Chatbot requires.
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
 * @public
 * You have exceeded a service limit for AWS Chatbot.
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
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ID of the Microsoft Teams channel.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams channel.
   */
  ChannelName?: string;

  /**
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams Team.
   */
  TeamName?: string;

  /**
   * @public
   * The ID of the Microsoft Teams tenant.
   */
  TenantId: string | undefined;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns?: string[];

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName: string | undefined;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 * An AWS Chatbot configuration for Microsoft Teams.
 */
export interface TeamsChannelConfiguration {
  /**
   * @public
   * The ID of the Microsoft Teams channel.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams channel.
   */
  ChannelName?: string;

  /**
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams Team.
   */
  TeamName?: string;

  /**
   * @public
   * The ID of the Microsoft Teams tenant.
   */
  TenantId: string | undefined;

  /**
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns: string[] | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName?: string;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface CreateTeamsChannelConfigurationResult {
  /**
   * @public
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;

  /**
   * @public
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   */
  SlackChannelId: string | undefined;

  /**
   * @public
   * The name of the Slack Channel.
   */
  SlackChannelName?: string;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns?: string[];

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName: string | undefined;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 * An AWS Chatbot configuration for Slack.
 */
export interface SlackChannelConfiguration {
  /**
   * @public
   * Name of the Slack Workspace.
   */
  SlackTeamName: string | undefined;

  /**
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;

  /**
   * @public
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   */
  SlackChannelId: string | undefined;

  /**
   * @public
   * The name of the Slack Channel.
   */
  SlackChannelName: string | undefined;

  /**
   * @public
   * The ARN of the SlackChannelConfiguration.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns: string[] | undefined;

  /**
   * @public
   * The name of the configuration.
   */
  ConfigurationName?: string;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {
  /**
   * @public
   * The configuration for a Slack channel configured with AWS Chatbot.
   */
  ChannelConfiguration?: SlackChannelConfiguration;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the ChimeWebhookConfiguration to delete.
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteChimeWebhookConfigurationResult {}

/**
 * @public
 * We were not able to find the resource for your request.
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
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration to delete.
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsChannelConfigurationResult {}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteTeamsConfiguredTeamResult {}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity to delete.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * Id from Microsoft Teams for user.
   */
  UserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteMicrosoftTeamsUserIdentityResult {}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the SlackChannelConfiguration to delete.
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationResult {}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the SlackChannelConfiguration associated with the user identity to delete.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;

  /**
   * @public
   * The ID of the user in Slack.
   */
  SlackUserId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackUserIdentityResult {}

/**
 * @public
 * There was an issue deleting your Slack workspace.
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
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackWorkspaceAuthorizationResult {}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * An optional ARN of a ChimeWebhookConfiguration to describe.
   */
  ChatConfigurationArn?: string;
}

/**
 * @public
 */
export interface DescribeChimeWebhookConfigurationsResult {
  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * A list of Chime webhooks associated with the account.
   */
  WebhookConfigurations?: ChimeWebhookConfiguration[];
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * An optional ARN of a SlackChannelConfiguration to describe.
   */
  ChatConfigurationArn?: string;
}

/**
 * @public
 */
export interface DescribeSlackChannelConfigurationsResult {
  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * A list of Slack channel configurations.
   */
  SlackChannelConfigurations?: SlackChannelConfiguration[];
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the SlackChannelConfiguration associated with the user identities to describe.
   */
  ChatConfigurationArn?: string;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;
}

/**
 * @public
 * Identifes a User level permission for a channel configuration.
 */
export interface SlackUserIdentity {
  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The ARN of the SlackChannelConfiguration associated with the user identity.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;

  /**
   * @public
   * The ID of the user in Slack.
   */
  SlackUserId: string | undefined;

  /**
   * @public
   * The AWS user identity ARN used to associate a Slack User Identity with an IAM Role.
   */
  AwsUserIdentity?: string;
}

/**
 * @public
 */
export interface DescribeSlackUserIdentitiesResult {
  /**
   * @public
   * A list of Slack User Identities.
   */
  SlackUserIdentities?: SlackUserIdentity[];

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 * A Slack Workspace.
 */
export interface SlackWorkspace {
  /**
   * @public
   * The ID of the Slack workspace authorized with AWS Chatbot.
   */
  SlackTeamId: string | undefined;

  /**
   * @public
   * Name of the Slack Workspace.
   */
  SlackTeamName: string | undefined;
}

/**
 * @public
 */
export interface DescribeSlackWorkspacesResult {
  /**
   * @public
   * A list of Slack Workspaces registered with AWS Chatbot.
   */
  SlackWorkspaces?: SlackWorkspace[];

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * Preferences which apply for AWS Chatbot usage in the calling AWS account.
   */
  AccountPreferences?: AccountPreferences;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration to retrieve.
   */
  ChatConfigurationArn: string | undefined;
}

/**
 * @public
 */
export interface GetTeamsChannelConfigurationResult {
  /**
   * @public
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId?: string;
}

/**
 * @public
 */
export interface ListTeamsChannelConfigurationsResult {
  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * A list of AWS Chatbot channel configurations for Microsoft Teams.
   */
  TeamChannelConfigurations?: TeamsChannelConfiguration[];
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsConfiguredTeamsResult {
  /**
   * @public
   * A list of teams in Microsoft Teams that have been configured with AWS Chatbot.
   */
  ConfiguredTeams?: ConfiguredTeam[];

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identities to list.
   */
  ChatConfigurationArn?: string;

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;

  /**
   * @public
   * The maximum number of results to include in the response. If more results exist than the specified MaxResults value, a token is included in the response so that the remaining results can be retrieved.
   */
  MaxResults?: number;
}

/**
 * @public
 * Identifes a user level permission for a channel configuration.
 */
export interface TeamsUserIdentity {
  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn: string | undefined;

  /**
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration associated with the user identity.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ID of the Microsoft Team authorized with AWS Chatbot. To get the team ID, you must perform the initial authorization flow with Microsoft Teams in the AWS Chatbot console. Then you can copy and paste the team ID from the console. For more details, see steps 1-4 in Get started with Microsoft Teams in the AWS Chatbot Administrator Guide.
   */
  TeamId: string | undefined;

  /**
   * @public
   * Id from Microsoft Teams for user.
   */
  UserId?: string;

  /**
   * @public
   * The AWS user identity ARN used to associate a Microsoft Teams User Identity with an IAM Role.
   */
  AwsUserIdentity?: string;

  /**
   * @public
   * The ID of the Microsoft Teams channel.
   */
  TeamsChannelId?: string;

  /**
   * @public
   * The ID of the Microsoft Teams tenant.
   */
  TeamsTenantId?: string;
}

/**
 * @public
 */
export interface ListMicrosoftTeamsUserIdentitiesResult {
  /**
   * @public
   * User level permissions associated to a channel configuration.
   */
  TeamsUserIdentities?: TeamsUserIdentity[];

  /**
   * @public
   * An optional token returned from a prior request. Use this token for pagination of results from this action. If this parameter is specified, the response includes only results beyond the token, up to the value specified by MaxResults.
   */
  NextToken?: string;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;

  /**
   * @public
   * Turns on training data collection. This helps improve the AWS Chatbot experience by allowing AWS Chatbot to store and use your customer information, such as AWS Chatbot configurations, notifications, user inputs, AWS Chatbot generated responses, and interaction data. This data helps us to continuously improve and develop Artificial Intelligence (AI) technologies. Your data is not shared with any third parties and is protected using sophisticated controls to prevent unauthorized access and misuse. AWS Chatbot does not store or use interactions in chat channels with Amazon Q for training AWS Chatbot’s AI technologies.
   */
  TrainingDataCollectionEnabled?: boolean;
}

/**
 * @public
 */
export interface UpdateAccountPreferencesResult {
  /**
   * @public
   * Preferences which apply for AWS Chatbot usage in the calling AWS account.
   */
  AccountPreferences?: AccountPreferences;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the ChimeWebhookConfiguration to update.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * Description of the webhook. Recommend using the convention `RoomName/WebhookName`. See Chime setup tutorial for more details: https://docs.aws.amazon.com/chatbot/latest/adminguide/chime-setup.html.
   */
  WebhookDescription?: string;

  /**
   * @public
   * URL for the Chime webhook.
   */
  WebhookUrl?: string;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns?: string[];

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn?: string;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;
}

/**
 * @public
 */
export interface UpdateChimeWebhookConfigurationResult {
  /**
   * @public
   * Chime webhook configuration.
   */
  WebhookConfiguration?: ChimeWebhookConfiguration;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the MicrosoftTeamsChannelConfiguration to update.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ID of the Microsoft Teams channel.
   */
  ChannelId: string | undefined;

  /**
   * @public
   * The name of the Microsoft Teams channel.
   */
  ChannelName?: string;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns?: string[];

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn?: string;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface UpdateTeamsChannelConfigurationResult {
  /**
   * @public
   * The configuration for a Microsoft Teams channel configured with AWS Chatbot.
   */
  ChannelConfiguration?: TeamsChannelConfiguration;
}

/**
 * @public
 * We can’t process your request right now because of a server issue. Try again later.
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
   * @public
   * The ARN of the SlackChannelConfiguration to update.
   */
  ChatConfigurationArn: string | undefined;

  /**
   * @public
   * The ID of the Slack channel. To get the ID, open Slack, right click on the channel name in the left pane, then choose Copy Link. The channel ID is the 9-character string at the end of the URL. For example, ABCBBLZZZ.
   */
  SlackChannelId: string | undefined;

  /**
   * @public
   * The name of the Slack Channel.
   */
  SlackChannelName?: string;

  /**
   * @public
   * The ARNs of the SNS topics that deliver notifications to AWS Chatbot.
   */
  SnsTopicArns?: string[];

  /**
   * @public
   * The ARN of the IAM role that defines the permissions for AWS Chatbot. This is a user-defined role that AWS Chatbot will assume. This is not the service-linked role. For more information, see IAM Policies for AWS Chatbot.
   */
  IamRoleArn?: string;

  /**
   * @public
   * Logging levels include ERROR, INFO, or NONE.
   */
  LoggingLevel?: string;

  /**
   * @public
   * The list of IAM policy ARNs that are applied as channel guardrails. The AWS managed 'AdministratorAccess' policy is applied by default if this is not set.
   */
  GuardrailPolicyArns?: string[];

  /**
   * @public
   * Enables use of a user role requirement in your chat configuration.
   */
  UserAuthorizationRequired?: boolean;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * @public
   * The configuration for a Slack channel configured with AWS Chatbot.
   */
  ChannelConfiguration?: SlackChannelConfiguration;
}
