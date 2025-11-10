// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { AppConfigDataServiceException as __BaseException } from "./AppConfigDataServiceException";

/**
 * @public
 * @enum
 */
export const InvalidParameterProblem = {
  /**
   * The parameter was corrupted and could not be understood by the service.
   */
  CORRUPTED: "Corrupted",
  /**
   * The parameter was expired and can no longer be used.
   */
  EXPIRED: "Expired",
  /**
   * The client called the service before the time specified in the poll interval.
   */
  POLL_INTERVAL_NOT_SATISFIED: "PollIntervalNotSatisfied",
} as const;

/**
 * @public
 */
export type InvalidParameterProblem = (typeof InvalidParameterProblem)[keyof typeof InvalidParameterProblem];

/**
 * <p>Information about an invalid parameter.</p>
 * @public
 */
export interface InvalidParameterDetail {
  /**
   * <p>The reason the parameter is invalid.</p>
   * @public
   */
  Problem?: InvalidParameterProblem | undefined;
}

/**
 * <p>Detailed information about the input that failed to satisfy the constraints specified by
 *          a call.</p>
 * @public
 */
export type BadRequestDetails = BadRequestDetails.InvalidParametersMember | BadRequestDetails.$UnknownMember;

/**
 * @public
 */
export namespace BadRequestDetails {
  /**
   * <p>One or more specified parameters are not valid for the call.</p>
   * @public
   */
  export interface InvalidParametersMember {
    InvalidParameters: Record<string, InvalidParameterDetail>;
    $unknown?: never;
  }

  /**
   * @public
   */
  export interface $UnknownMember {
    InvalidParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    InvalidParameters: (value: Record<string, InvalidParameterDetail>) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BadRequestDetails, visitor: Visitor<T>): T => {
    if (value.InvalidParameters !== undefined) return visitor.InvalidParameters(value.InvalidParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };
}

/**
 * @public
 * @enum
 */
export const BadRequestReason = {
  /**
   * Indicates there was a problem with one or more of the parameters.
   * See InvalidParameters in the BadRequestDetails for more information.
   */
  INVALID_PARAMETERS: "InvalidParameters",
} as const;

/**
 * @public
 */
export type BadRequestReason = (typeof BadRequestReason)[keyof typeof BadRequestReason];

/**
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 * @public
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>Code indicating the reason the request was invalid.</p>
   * @public
   */
  Reason?: BadRequestReason | undefined;

  /**
   * <p>Details describing why the request was invalid.</p>
   * @public
   */
  Details?: BadRequestDetails | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<BadRequestException, __BaseException>) {
    super({
      name: "BadRequestException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, BadRequestException.prototype);
    this.Message = opts.Message;
    this.Reason = opts.Reason;
    this.Details = opts.Details;
  }
}

/**
 * <p>There was an internal failure in the service.</p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  /**
   * Resource type value for the Application resource.
   */
  APPLICATION: "Application",
  /**
   * Resource type value for the Configuration resource.
   */
  CONFIGURATION: "Configuration",
  /**
   * Resource type value for the ConfigurationProfile resource.
   */
  CONFIGURATION_PROFILE: "ConfigurationProfile",
  /**
   * Resource type value for the Deployment resource.
   */
  DEPLOYMENT: "Deployment",
  /**
   * Resource type value for the Environment resource.
   */
  ENVIRONMENT: "Environment",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * <p>The requested resource could not be found.</p>
 * @public
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>The type of resource that was not found.</p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>A map indicating which parameters in the request reference the resource that was not
   *          found.</p>
   * @public
   */
  ReferencedBy?: Record<string, string> | undefined;
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
    this.ResourceType = opts.ResourceType;
    this.ReferencedBy = opts.ReferencedBy;
  }
}

/**
 * @public
 */
export interface StartConfigurationSessionRequest {
  /**
   * <p>The application ID or the application name.</p>
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The environment ID or the environment name.</p>
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The configuration profile ID or the configuration profile name.</p>
   * @public
   */
  ConfigurationProfileIdentifier: string | undefined;

  /**
   * <p>Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then
   *          the client that established the session can't call <a>GetLatestConfiguration</a>
   *          more frequently than every 60 seconds.</p>
   * @public
   */
  RequiredMinimumPollIntervalInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartConfigurationSessionResponse {
  /**
   * <p>Token encapsulating state about the configuration session. Provide this token to the
   *             <code>GetLatestConfiguration</code> API to retrieve configuration data.</p>
   *          <important>
   *             <p>This token should only be used once in your first call to
   *                <code>GetLatestConfiguration</code>. You <i>must</i> use the new token
   *             in the <code>GetLatestConfiguration</code> response
   *                (<code>NextPollConfigurationToken</code>) in each subsequent call to
   *                <code>GetLatestConfiguration</code>.</p>
   *             <p>The <code>InitialConfigurationToken</code> and
   *             <code>NextPollConfigurationToken</code> should only be used once. To support long poll
   *             use cases, the tokens are valid for up to 24 hours. If a
   *             <code>GetLatestConfiguration</code> call uses an expired token, the system returns
   *             <code>BadRequestException</code>.</p>
   *          </important>
   * @public
   */
  InitialConfigurationToken?: string | undefined;
}

/**
 * <p>The request was denied due to request throttling.</p>
 * @public
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
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
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetLatestConfigurationRequest {
  /**
   * <p>Token describing the current state of the configuration session. To obtain a token,
   *          first call the <a>StartConfigurationSession</a> API. Note that every call to
   *             <code>GetLatestConfiguration</code> will return a new <code>ConfigurationToken</code>
   *             (<code>NextPollConfigurationToken</code> in the response) and <i>must</i>
   *          be provided to subsequent <code>GetLatestConfiguration</code> API calls.</p>
   *          <important>
   *             <p>This token should only be used once. To support long poll
   *             use cases, the token is valid for up to 24 hours. If a
   *             <code>GetLatestConfiguration</code> call uses an expired token, the system returns
   *             <code>BadRequestException</code>.</p>
   *          </important>
   * @public
   */
  ConfigurationToken: string | undefined;
}

/**
 * @public
 */
export interface GetLatestConfigurationResponse {
  /**
   * <p>The latest token describing the current state of the configuration session. This
   *             <i>must</i> be provided to the next call to
   *             <code>GetLatestConfiguration.</code>
   *          </p>
   *          <important>
   *             <p>This token should only be used once. To support long poll
   *             use cases, the token is valid for up to 24 hours. If a
   *             <code>GetLatestConfiguration</code> call uses an expired token, the system returns
   *             <code>BadRequestException</code>.</p>
   *          </important>
   * @public
   */
  NextPollConfigurationToken?: string | undefined;

  /**
   * <p>The amount of time the client should wait before polling for configuration updates
   *          again. Use <code>RequiredMinimumPollIntervalInSeconds</code> to set the desired poll
   *          interval.</p>
   * @public
   */
  NextPollIntervalInSeconds?: number | undefined;

  /**
   * <p>A standard MIME type describing the format of the configuration content.</p>
   * @public
   */
  ContentType?: string | undefined;

  /**
   * <p>The data of the configuration. This may be empty if the client already has the latest
   *          version of configuration.</p>
   * @public
   */
  Configuration?: Uint8Array | undefined;

  /**
   * <p>The user-defined label for the AppConfig hosted configuration version. This attribute doesn't apply if the configuration is not from an AppConfig hosted configuration version. If the client already has the latest version of the configuration data, this value is empty.</p>
   * @public
   */
  VersionLabel?: string | undefined;
}
