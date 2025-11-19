// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ChatbotServiceException as __BaseException } from "./ChatbotServiceException";

/**
 * <p>Unexpected error during processing of request.</p>
 * @public
 */
export class InternalServiceError extends __BaseException {
  readonly name = "InternalServiceError" as const;
  readonly $fault = "server" as const;
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
 * <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 * @public
 */
export class InvalidRequestException extends __BaseException {
  readonly name = "InvalidRequestException" as const;
  readonly $fault = "client" as const;
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
 * <p>The request was rejected because it doesn't have valid credentials for the target resource.</p>
 * @public
 */
export class UnauthorizedException extends __BaseException {
  readonly name = "UnauthorizedException" as const;
  readonly $fault = "client" as const;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<UnauthorizedException, __BaseException>) {
    super({
      name: "UnauthorizedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, UnauthorizedException.prototype);
  }
}

/**
 * <p>There was an issue processing your request.</p>
 * @public
 */
export class ConflictException extends __BaseException {
  readonly name = "ConflictException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CreateChimeWebhookConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>Your request input doesn't meet the constraints required by AWS Chatbot.</p>
 * @public
 */
export class InvalidParameterException extends __BaseException {
  readonly name = "InvalidParameterException" as const;
  readonly $fault = "client" as const;
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
 * <p>You have exceeded a service limit for AWS Chatbot.</p>
 * @public
 */
export class LimitExceededException extends __BaseException {
  readonly name = "LimitExceededException" as const;
  readonly $fault = "client" as const;
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
  readonly name = "CreateTeamsChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class CreateSlackChannelConfigurationException extends __BaseException {
  readonly name = "CreateSlackChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We were unable to find the resource for your request</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name = "ResourceNotFoundException" as const;
  readonly $fault = "client" as const;
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
export class DeleteChimeWebhookConfigurationException extends __BaseException {
  readonly name = "DeleteChimeWebhookConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteTeamsChannelConfigurationException extends __BaseException {
  readonly name = "DeleteTeamsChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteTeamsConfiguredTeamException extends __BaseException {
  readonly name = "DeleteTeamsConfiguredTeamException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteMicrosoftTeamsUserIdentityException extends __BaseException {
  readonly name = "DeleteMicrosoftTeamsUserIdentityException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteSlackChannelConfigurationException extends __BaseException {
  readonly name = "DeleteSlackChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DeleteSlackUserIdentityException extends __BaseException {
  readonly name = "DeleteSlackUserIdentityException" as const;
  readonly $fault = "server" as const;
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
 * <p>There was an issue deleting your Slack workspace.</p>
 * @public
 */
export class DeleteSlackWorkspaceAuthorizationFault extends __BaseException {
  readonly name = "DeleteSlackWorkspaceAuthorizationFault" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeChimeWebhookConfigurationsException extends __BaseException {
  readonly name = "DescribeChimeWebhookConfigurationsException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackChannelConfigurationsException extends __BaseException {
  readonly name = "DescribeSlackChannelConfigurationsException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackUserIdentitiesException extends __BaseException {
  readonly name = "DescribeSlackUserIdentitiesException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class DescribeSlackWorkspacesException extends __BaseException {
  readonly name = "DescribeSlackWorkspacesException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class GetAccountPreferencesException extends __BaseException {
  readonly name = "GetAccountPreferencesException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class GetTeamsChannelConfigurationException extends __BaseException {
  readonly name = "GetTeamsChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListTeamsChannelConfigurationsException extends __BaseException {
  readonly name = "ListTeamsChannelConfigurationsException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListMicrosoftTeamsConfiguredTeamsException extends __BaseException {
  readonly name = "ListMicrosoftTeamsConfiguredTeamsException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ListMicrosoftTeamsUserIdentitiesException extends __BaseException {
  readonly name = "ListMicrosoftTeamsUserIdentitiesException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class ServiceUnavailableException extends __BaseException {
  readonly name = "ServiceUnavailableException" as const;
  readonly $fault = "client" as const;
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
 * <p>The supplied list of tags contains too many tags.</p>
 * @public
 */
export class TooManyTagsException extends __BaseException {
  readonly name = "TooManyTagsException" as const;
  readonly $fault = "client" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateAccountPreferencesException extends __BaseException {
  readonly name = "UpdateAccountPreferencesException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateChimeWebhookConfigurationException extends __BaseException {
  readonly name = "UpdateChimeWebhookConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateTeamsChannelConfigurationException extends __BaseException {
  readonly name = "UpdateTeamsChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
 * <p>We can’t process your request right now because of a server issue. Try again later.</p>
 * @public
 */
export class UpdateSlackChannelConfigurationException extends __BaseException {
  readonly name = "UpdateSlackChannelConfigurationException" as const;
  readonly $fault = "server" as const;
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
