// smithy-typescript generated code
import type { AccountType, NotificationSeverityLevel } from "./enums";

/**
 * @public
 */
export interface CreateSlackChannelConfigurationRequest {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;

  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The name of the Slack channel that you configure for the Amazon Web Services Support App.
   *
   * @public
   */
  channelName?: string | undefined;

  /**
   * Whether you want to get notified when a support case is created or reopened.
   *
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case has a new correspondence.
   *
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case is resolved.
   *
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * The case severity for a support case that you want to receive notifications.
   *
   * If you specify `high` or `all`, you must specify `true` for at least one of the following parameters:
   *
   * - `notifyOnAddCorrespondenceToCase`
   * - `notifyOnCreateOrReopenCase`
   * - `notifyOnResolveCase`
   *
   * If you specify `none`, the following parameters must be null or `false`:
   *
   * - `notifyOnAddCorrespondenceToCase`
   * - `notifyOnCreateOrReopenCase`
   * - `notifyOnResolveCase`
   *
   * > **Note:** If you don't specify these parameters in your request, they default to `false`.
   *
   * @public
   */
  notifyOnCaseSeverity: NotificationSeverityLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see [Managing access to the Amazon Web Services Support App](https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html) in the *Amazon Web Services Support User Guide*.
   *
   * @public
   */
  channelRoleArn: string | undefined;
}

/**
 * @public
 */
export interface CreateSlackChannelConfigurationResult {}

/**
 * @public
 */
export interface DeleteAccountAliasRequest {}

/**
 * @public
 */
export interface DeleteAccountAliasResult {}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationRequest {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;

  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * @public
   */
  channelId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackChannelConfigurationResult {}

/**
 * @public
 */
export interface DeleteSlackWorkspaceConfigurationRequest {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;
}

/**
 * @public
 */
export interface DeleteSlackWorkspaceConfigurationResult {}

/**
 * @public
 */
export interface GetAccountAliasRequest {}

/**
 * @public
 */
export interface GetAccountAliasResult {
  /**
   * An alias or short name for an Amazon Web Services account.
   *
   * @public
   */
  accountAlias?: string | undefined;
}

/**
 * @public
 */
export interface ListSlackChannelConfigurationsRequest {
  /**
   * If the results of a search are large, the API only returns a portion of the results and includes a `nextToken` pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration for a Slack channel that you added for your Amazon Web Services account.
 *
 * @public
 */
export interface SlackChannelConfiguration {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;

  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The name of the Slack channel that you configured with the Amazon Web Services Support App for your Amazon Web Services account.
   *
   * @public
   */
  channelName?: string | undefined;

  /**
   * Whether you want to get notified when a support case is created or reopened.
   *
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case has a new correspondence.
   *
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case is resolved.
   *
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * The case severity for a support case that you want to receive notifications.
   *
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see [Managing access to the Amazon Web Services Support App](https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html) in the *Amazon Web Services Support User Guide*.
   *
   * @public
   */
  channelRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface ListSlackChannelConfigurationsResult {
  /**
   * The point where pagination should resume when the response returns only partial results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The configurations for a Slack channel.
   *
   * @public
   */
  slackChannelConfigurations: SlackChannelConfiguration[] | undefined;
}

/**
 * @public
 */
export interface ListSlackWorkspaceConfigurationsRequest {
  /**
   * If the results of a search are large, the API only returns a portion of the results and includes a `nextToken` pagination token in the response. To retrieve the next batch of results, reissue the search request and include the returned token. When the API returns the last set of results, the response doesn't include a pagination token value.
   *
   * @public
   */
  nextToken?: string | undefined;
}

/**
 * The configuration for a Slack workspace that you added to an Amazon Web Services account.
 *
 * @public
 */
export interface SlackWorkspaceConfiguration {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;

  /**
   * The name of the Slack workspace.
   *
   * @public
   */
  teamName?: string | undefined;

  /**
   * Whether to allow member accounts to authorize Slack workspaces. Member accounts must be part of an organization in Organizations.
   *
   * @public
   */
  allowOrganizationMemberAccount?: boolean | undefined;
}

/**
 * @public
 */
export interface ListSlackWorkspaceConfigurationsResult {
  /**
   * The point where pagination should resume when the response returns only partial results.
   *
   * @public
   */
  nextToken?: string | undefined;

  /**
   * The configurations for a Slack workspace.
   *
   * @public
   */
  slackWorkspaceConfigurations?: SlackWorkspaceConfiguration[] | undefined;
}

/**
 * @public
 */
export interface PutAccountAliasRequest {
  /**
   * An alias or short name for an Amazon Web Services account.
   *
   * @public
   */
  accountAlias: string | undefined;
}

/**
 * @public
 */
export interface PutAccountAliasResult {}

/**
 * @public
 */
export interface RegisterSlackWorkspaceForOrganizationRequest {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`. Specify the Slack workspace that you want to use for your organization.
   *
   * @public
   */
  teamId: string | undefined;
}

/**
 * @public
 */
export interface RegisterSlackWorkspaceForOrganizationResult {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId?: string | undefined;

  /**
   * The name of the Slack workspace.
   *
   * @public
   */
  teamName?: string | undefined;

  /**
   * Whether the Amazon Web Services account is a management or member account that's part of an organization in Organizations.
   *
   * @public
   */
  accountType?: AccountType | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationRequest {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId: string | undefined;

  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * @public
   */
  channelId: string | undefined;

  /**
   * The Slack channel name that you want to update.
   *
   * @public
   */
  channelName?: string | undefined;

  /**
   * Whether you want to get notified when a support case is created or reopened.
   *
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case has a new correspondence.
   *
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case is resolved.
   *
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * The case severity for a support case that you want to receive notifications.
   *
   * If you specify `high` or `all`, at least one of the following parameters must be `true`:
   *
   * - `notifyOnAddCorrespondenceToCase`
   * - `notifyOnCreateOrReopenCase`
   * - `notifyOnResolveCase`
   *
   * If you specify `none`, any of the following parameters that you specify in your request must be `false`:
   *
   * - `notifyOnAddCorrespondenceToCase`
   * - `notifyOnCreateOrReopenCase`
   * - `notifyOnResolveCase`
   *
   * > **Note:** If you don't specify these parameters in your request, the Amazon Web Services Support App uses the current values by default.
   *
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see [Managing access to the Amazon Web Services Support App](https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html) in the *Amazon Web Services Support User Guide*.
   *
   * @public
   */
  channelRoleArn?: string | undefined;
}

/**
 * @public
 */
export interface UpdateSlackChannelConfigurationResult {
  /**
   * The team ID in Slack. This ID uniquely identifies a Slack workspace, such as `T012ABCDEFG`.
   *
   * @public
   */
  teamId?: string | undefined;

  /**
   * The channel ID in Slack. This ID identifies a channel within a Slack workspace.
   *
   * @public
   */
  channelId?: string | undefined;

  /**
   * The name of the Slack channel that you configure for the Amazon Web Services Support App.
   *
   * @public
   */
  channelName?: string | undefined;

  /**
   * Whether you want to get notified when a support case is created or reopened.
   *
   * @public
   */
  notifyOnCreateOrReopenCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case has a new correspondence.
   *
   * @public
   */
  notifyOnAddCorrespondenceToCase?: boolean | undefined;

  /**
   * Whether you want to get notified when a support case is resolved.
   *
   * @public
   */
  notifyOnResolveCase?: boolean | undefined;

  /**
   * The case severity for a support case that you want to receive notifications.
   *
   * @public
   */
  notifyOnCaseSeverity?: NotificationSeverityLevel | undefined;

  /**
   * The Amazon Resource Name (ARN) of an IAM role that you want to use to perform operations on Amazon Web Services. For more information, see [Managing access to the Amazon Web Services Support App](https://docs.aws.amazon.com/awssupport/latest/user/support-app-permissions.html) in the *Amazon Web Services Support User Guide*.
   *
   * @public
   */
  channelRoleArn?: string | undefined;
}
