// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType, SENSITIVE_STRING } from "@aws-sdk/smithy-client";

import { AppConfigDataServiceException as __BaseException } from "./AppConfigDataServiceException";

export enum InvalidParameterProblem {
  /**
   * The parameter was corrupted and could not be understood by the service.
   */
  CORRUPTED = "Corrupted",
  /**
   * The parameter was expired and can no longer be used.
   */
  EXPIRED = "Expired",
  /**
   * The client called the service before the time specified in the poll interval.
   */
  POLL_INTERVAL_NOT_SATISFIED = "PollIntervalNotSatisfied",
}

/**
 * <p>Information about an invalid parameter.</p>
 */
export interface InvalidParameterDetail {
  /**
   * <p>The reason the parameter is invalid.</p>
   */
  Problem?: InvalidParameterProblem | string;
}

/**
 * <p>Detailed information about the input that failed to satisfy the constraints specified by
 *          a call.</p>
 */
export type BadRequestDetails = BadRequestDetails.InvalidParametersMember | BadRequestDetails.$UnknownMember;

export namespace BadRequestDetails {
  /**
   * <p>One or more specified parameters are not valid for the call.</p>
   */
  export interface InvalidParametersMember {
    InvalidParameters: Record<string, InvalidParameterDetail>;
    $unknown?: never;
  }

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

export enum BadRequestReason {
  /**
   * Indicates there was a problem with one or more of the parameters.
   * See InvalidParameters in the BadRequestDetails for more information.
   */
  INVALID_PARAMETERS = "InvalidParameters",
}

/**
 * <p>The input fails to satisfy the constraints specified by the service.</p>
 */
export class BadRequestException extends __BaseException {
  readonly name: "BadRequestException" = "BadRequestException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>Code indicating the reason the request was invalid.</p>
   */
  Reason?: BadRequestReason | string;

  /**
   * <p>Details describing why the request was invalid.</p>
   */
  Details?: BadRequestDetails;
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
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string;
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

export enum ResourceType {
  /**
   * Resource type value for the Application resource.
   */
  APPLICATION = "Application",
  /**
   * Resource type value for the Configuration resource.
   */
  CONFIGURATION = "Configuration",
  /**
   * Resource type value for the ConfigurationProfile resource.
   */
  CONFIGURATION_PROFILE = "ConfigurationProfile",
  /**
   * Resource type value for the Deployment resource.
   */
  DEPLOYMENT = "Deployment",
  /**
   * Resource type value for the Environment resource.
   */
  ENVIRONMENT = "Environment",
}

/**
 * <p>The requested resource could not be found.</p>
 */
export class ResourceNotFoundException extends __BaseException {
  readonly name: "ResourceNotFoundException" = "ResourceNotFoundException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * <p>The type of resource that was not found.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>A map indicating which parameters in the request reference the resource that was not found.</p>
   */
  ReferencedBy?: Record<string, string>;
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

export interface StartConfigurationSessionRequest {
  /**
   * <p>The application ID or the application name.</p>
   */
  ApplicationIdentifier: string | undefined;

  /**
   * <p>The environment ID or the environment name.</p>
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * <p>The configuration profile ID or the configuration profile name.</p>
   */
  ConfigurationProfileIdentifier: string | undefined;

  /**
   * <p>Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then
   *          the client that established the session can't call <a>GetLatestConfiguration</a>
   *          more frequently then every 60 seconds.</p>
   */
  RequiredMinimumPollIntervalInSeconds?: number;
}

export interface StartConfigurationSessionResponse {
  /**
   * <p>Token encapsulating state about the configuration session. Provide this token to the
   *             <code>GetLatestConfiguration</code> API to retrieve configuration data.</p>
   *          <important>
   *             <p>This token should only be used once in your first call to
   *                <code>GetLatestConfiguration</code>. You MUST use the new token in the
   *                <code>GetLatestConfiguration</code> response
   *             (<code>NextPollConfigurationToken</code>) in each subsequent call to
   *                <code>GetLatestConfiguration</code>.</p>
   *          </important>
   */
  InitialConfigurationToken?: string;
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export class ThrottlingException extends __BaseException {
  readonly name: "ThrottlingException" = "ThrottlingException";
  readonly $fault: "client" = "client";
  Message?: string;
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

export interface GetLatestConfigurationRequest {
  /**
   * <p>Token describing the current state of the configuration session. To obtain a token,
   *          first call the <a>StartConfigurationSession</a> API. Note that every call to
   *             <code>GetLatestConfiguration</code> will return a new <code>ConfigurationToken</code>
   *             (<code>NextPollConfigurationToken</code> in the response) and MUST be provided to
   *          subsequent <code>GetLatestConfiguration</code> API calls.</p>
   */
  ConfigurationToken: string | undefined;
}

export interface GetLatestConfigurationResponse {
  /**
   * <p>The latest token describing the current state of the configuration session. This MUST be
   *          provided to the next call to <code>GetLatestConfiguration.</code>
   *          </p>
   */
  NextPollConfigurationToken?: string;

  /**
   * <p>The amount of time the client should wait before polling for configuration updates
   *          again. Use <code>RequiredMinimumPollIntervalInSeconds</code> to set the desired poll
   *          interval.</p>
   */
  NextPollIntervalInSeconds?: number;

  /**
   * <p>A standard MIME type describing the format of the configuration content.</p>
   */
  ContentType?: string;

  /**
   * <p>The data of the configuration. This may be empty if the client already has the latest
   *          version of configuration.</p>
   */
  Configuration?: Uint8Array;
}

/**
 * @internal
 */
export const InvalidParameterDetailFilterSensitiveLog = (obj: InvalidParameterDetail): any => ({
  ...obj,
});

/**
 * @internal
 */
export const BadRequestDetailsFilterSensitiveLog = (obj: BadRequestDetails): any => {
  if (obj.InvalidParameters !== undefined)
    return {
      InvalidParameters: Object.entries(obj.InvalidParameters).reduce(
        (acc: any, [key, value]: [string, InvalidParameterDetail]) => (
          (acc[key] = InvalidParameterDetailFilterSensitiveLog(value)), acc
        ),
        {}
      ),
    };
  if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
};

/**
 * @internal
 */
export const StartConfigurationSessionRequestFilterSensitiveLog = (obj: StartConfigurationSessionRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const StartConfigurationSessionResponseFilterSensitiveLog = (obj: StartConfigurationSessionResponse): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLatestConfigurationRequestFilterSensitiveLog = (obj: GetLatestConfigurationRequest): any => ({
  ...obj,
});

/**
 * @internal
 */
export const GetLatestConfigurationResponseFilterSensitiveLog = (obj: GetLatestConfigurationResponse): any => ({
  ...obj,
  ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
});
