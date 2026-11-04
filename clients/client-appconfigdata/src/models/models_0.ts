// smithy-typescript generated code
import type { InvalidParameterProblem } from "./enums";

/**
 * Information about an invalid parameter.
 *
 * @public
 */
export interface InvalidParameterDetail {
  /**
   * The reason the parameter is invalid.
   *
   * @public
   */
  Problem?: InvalidParameterProblem | undefined;
}

/**
 * Detailed information about the input that failed to satisfy the constraints specified by a call.
 *
 * @public
 */
export type BadRequestDetails =
  | BadRequestDetails.InvalidParametersMember
  | BadRequestDetails.$UnknownMember;

/**
 * @public
 */
export namespace BadRequestDetails {
  /**
   * One or more specified parameters are not valid for the call.
   *
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

  /**
   * @deprecated unused in schema-serde mode.
   *
   */
  export interface Visitor<T> {
    InvalidParameters: (value: Record<string, InvalidParameterDetail>) => T;
    _: (name: string, value: any) => T;
  }
}

/**
 * @public
 */
export interface StartConfigurationSessionRequest {
  /**
   * The application ID or the application name.
   *
   * @public
   */
  ApplicationIdentifier: string | undefined;

  /**
   * The environment ID or the environment name.
   *
   * @public
   */
  EnvironmentIdentifier: string | undefined;

  /**
   * The configuration profile ID or the configuration profile name.
   *
   * @public
   */
  ConfigurationProfileIdentifier: string | undefined;

  /**
   * Sets a constraint on a session. If you specify a value of, for example, 60 seconds, then the client that established the session can't call GetLatestConfiguration more frequently than every 60 seconds.
   *
   * @public
   */
  RequiredMinimumPollIntervalInSeconds?: number | undefined;
}

/**
 * @public
 */
export interface StartConfigurationSessionResponse {
  /**
   * Token encapsulating state about the configuration session. Provide this token to the `GetLatestConfiguration` API to retrieve configuration data.
   *
   * > **Important:**
   * >
   * > This token should only be used once in your first call to `GetLatestConfiguration`. You *must* use the new token in the `GetLatestConfiguration` response (`NextPollConfigurationToken`) in each subsequent call to `GetLatestConfiguration`.
   * >
   * > The `InitialConfigurationToken` and `NextPollConfigurationToken` should only be used once. To support long poll use cases, the tokens are valid for up to 24 hours. If a `GetLatestConfiguration` call uses an expired token, the system returns `BadRequestException`.
   *
   * @public
   */
  InitialConfigurationToken?: string | undefined;
}

/**
 * @public
 */
export interface GetLatestConfigurationRequest {
  /**
   * Token describing the current state of the configuration session. To obtain a token, first call the StartConfigurationSession API. Note that every call to `GetLatestConfiguration` will return a new `ConfigurationToken` (`NextPollConfigurationToken` in the response) and *must* be provided to subsequent `GetLatestConfiguration` API calls.
   *
   * > **Important:** This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a `GetLatestConfiguration` call uses an expired token, the system returns `BadRequestException`.
   *
   * @public
   */
  ConfigurationToken: string | undefined;
}

/**
 * @public
 */
export interface GetLatestConfigurationResponse {
  /**
   * The latest token describing the current state of the configuration session. This *must* be provided to the next call to `GetLatestConfiguration.`
   *
   * > **Important:** This token should only be used once. To support long poll use cases, the token is valid for up to 24 hours. If a `GetLatestConfiguration` call uses an expired token, the system returns `BadRequestException`.
   *
   * @public
   */
  NextPollConfigurationToken?: string | undefined;

  /**
   * The amount of time the client should wait before polling for configuration updates again. Use `RequiredMinimumPollIntervalInSeconds` to set the desired poll interval.
   *
   * @public
   */
  NextPollIntervalInSeconds?: number | undefined;

  /**
   * A standard MIME type describing the format of the configuration content.
   *
   * @public
   */
  ContentType?: string | undefined;

  /**
   * The data of the configuration. This may be empty if the client already has the latest version of configuration.
   *
   * @public
   */
  Configuration?: Uint8Array | undefined;

  /**
   * The user-defined label for the AppConfig hosted configuration version. This attribute doesn't apply if the configuration is not from an AppConfig hosted configuration version. If the client already has the latest version of the configuration data, this value is empty.
   *
   * @public
   */
  VersionLabel?: string | undefined;
}
