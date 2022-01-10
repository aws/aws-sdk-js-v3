import { SENSITIVE_STRING } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer, SmithyException as __SmithyException } from "@aws-sdk/types";

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
 * <p>Contains details about an invalid parameter.</p>
 */
export interface InvalidParameterDetail {
  /**
   * <p>Detail describing why an individual parameter did not satisfy the constraints specified by the service</p>
   */
  Problem?: InvalidParameterProblem | string;
}

export namespace InvalidParameterDetail {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: InvalidParameterDetail): any => ({
    ...obj,
  });
}

/**
 * <p>Details describing why the request was invalid</p>
 */
export type BadRequestDetails = BadRequestDetails.InvalidParametersMember | BadRequestDetails.$UnknownMember;

export namespace BadRequestDetails {
  /**
   * <p>Present if the Reason for the bad request was 'InvalidParameters'</p>
   */
  export interface InvalidParametersMember {
    InvalidParameters: { [key: string]: InvalidParameterDetail };
    $unknown?: never;
  }

  export interface $UnknownMember {
    InvalidParameters?: never;
    $unknown: [string, any];
  }

  export interface Visitor<T> {
    InvalidParameters: (value: { [key: string]: InvalidParameterDetail }) => T;
    _: (name: string, value: any) => T;
  }

  export const visit = <T>(value: BadRequestDetails, visitor: Visitor<T>): T => {
    if (value.InvalidParameters !== undefined) return visitor.InvalidParameters(value.InvalidParameters);
    return visitor._(value.$unknown[0], value.$unknown[1]);
  };

  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: BadRequestDetails): any => {
    if (obj.InvalidParameters !== undefined)
      return {
        InvalidParameters: Object.entries(obj.InvalidParameters).reduce(
          (acc: any, [key, value]: [string, InvalidParameterDetail]) => ({
            ...acc,
            [key]: InvalidParameterDetail.filterSensitiveLog(value),
          }),
          {}
        ),
      };
    if (obj.$unknown !== undefined) return { [obj.$unknown[0]]: "UNKNOWN" };
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
export interface BadRequestException extends __SmithyException, $MetadataBearer {
  name: "BadRequestException";
  $fault: "client";
  Message?: string;
  /**
   * <p>Code indicating the reason the request was invalid.</p>
   */
  Reason?: BadRequestReason | string;

  /**
   * <p>Details describing why the request was invalid</p>
   */
  Details?: BadRequestDetails;
}

/**
 * <p>There was an internal failure in the service.</p>
 */
export interface InternalServerException extends __SmithyException, $MetadataBearer {
  name: "InternalServerException";
  $fault: "server";
  Message?: string;
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
export interface ResourceNotFoundException extends __SmithyException, $MetadataBearer {
  name: "ResourceNotFoundException";
  $fault: "client";
  Message?: string;
  /**
   * <p>The type of resource that was not found.</p>
   */
  ResourceType?: ResourceType | string;

  /**
   * <p>A map indicating which parameters in the request reference the resource that was not found.</p>
   */
  ReferencedBy?: { [key: string]: string };
}

/**
 * <p>Request parameters for the StartConfigurationSession API.</p>
 */
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
   * <p>The interval at which your client will poll for configuration. If provided, the service
   *         will throw a BadRequestException if the client polls before the specified poll interval. By default,
   *         client poll intervals are not enforced.</p>
   */
  RequiredMinimumPollIntervalInSeconds?: number;
}

export namespace StartConfigurationSessionRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConfigurationSessionRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response parameters for the StartConfigurationSession API.</p>
 */
export interface StartConfigurationSessionResponse {
  /**
   * <p>Token encapsulating state about the configuration session. Provide this token to the GetLatestConfiguration API to retrieve configuration data.</p>
   *         <important>
   *             <p>This token should only be used once in your first call to GetLatestConfiguration. You MUST use the
   *                 new token in the GetConfiguration response (NextPollConfigurationToken) in each subsequent call to
   *                 GetLatestConfiguration.</p>
   *         </important>
   */
  InitialConfigurationToken?: string;
}

export namespace StartConfigurationSessionResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: StartConfigurationSessionResponse): any => ({
    ...obj,
  });
}

/**
 * <p>The request was denied due to request throttling.</p>
 */
export interface ThrottlingException extends __SmithyException, $MetadataBearer {
  name: "ThrottlingException";
  $fault: "client";
  Message?: string;
}

/**
 * <p>Request parameters for the GetLatestConfiguration API</p>
 */
export interface GetLatestConfigurationRequest {
  /**
   * <p>Token describing the current state of the configuration session. To obtain a token, first call the StartConfigurationSession API. Note that every call to GetLatestConfiguration will return a new ConfigurationToken (NextPollConfigurationToken in the response) and MUST be provided to subsequent GetLatestConfiguration API calls.</p>
   */
  ConfigurationToken: string | undefined;
}

export namespace GetLatestConfigurationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLatestConfigurationRequest): any => ({
    ...obj,
  });
}

/**
 * <p>Response parameters for the GetLatestConfiguration API</p>
 */
export interface GetLatestConfigurationResponse {
  /**
   * <p>The latest token describing the current state of the configuration session. This MUST be provided to the next call to GetLatestConfiguration.</p>
   */
  NextPollConfigurationToken?: string;

  /**
   * <p>The amount of time the client should wait before polling for configuration updates again. See RequiredMinimumPollIntervalInSeconds to set the desired poll interval.</p>
   */
  NextPollIntervalInSeconds?: number;

  /**
   * <p>A standard MIME type describing the format of the configuration content.</p>
   */
  ContentType?: string;

  /**
   * <p>The data of the configuration. Note that this may be empty if the client already has the latest version of configuration.</p>
   */
  Configuration?: Uint8Array;
}

export namespace GetLatestConfigurationResponse {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetLatestConfigurationResponse): any => ({
    ...obj,
    ...(obj.Configuration && { Configuration: SENSITIVE_STRING }),
  });
}
