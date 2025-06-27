// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { ObservabilityAdminServiceException as __BaseException } from "./ObservabilityAdminServiceException";

/**
 * <p>
 *       Indicates you don't have permissions to perform the requested operation. The user or role that is making the request must have at least one IAM permissions policy attached that grants the required permissions. For more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management for AWS resources</a> in the IAM user guide.
 *     </p>
 * @public
 */
export class AccessDeniedException extends __BaseException {
  readonly name: "AccessDeniedException" = "AccessDeniedException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * <p>
   *       The name of the exception.
   *     </p>
   * @public
   */
  amznErrorType?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<AccessDeniedException, __BaseException>) {
    super({
      name: "AccessDeniedException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, AccessDeniedException.prototype);
    this.Message = opts.Message;
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 * @enum
 */
export const Status = {
  FAILED_START: "FAILED_START",
  FAILED_STOP: "FAILED_STOP",
  NOT_STARTED: "NOT_STARTED",
  RUNNING: "RUNNING",
  STARTING: "STARTING",
  STOPPED: "STOPPED",
  STOPPING: "STOPPING",
} as const;

/**
 * @public
 */
export type Status = (typeof Status)[keyof typeof Status];

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusOutput {
  /**
   * <p>
   *       The onboarding status of the telemetry config feature.
   *     </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>
   *       Describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>.
   *     </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>
 *       Indicates the request has failed to process because of an unknown server error, exception, or failure.
 *     </p>
 * @public
 */
export class InternalServerException extends __BaseException {
  readonly name: "InternalServerException" = "InternalServerException";
  readonly $fault: "server" = "server";
  Message?: string | undefined;
  /**
   * <p>
   *       The name of the exception.
   *     </p>
   * @public
   */
  amznErrorType?: string | undefined;
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
    this.amznErrorType = opts.amznErrorType;
  }
}

/**
 * @public
 */
export interface GetTelemetryEvaluationStatusForOrganizationOutput {
  /**
   * <p>
   *       The onboarding status of the telemetry config feature for the organization.
   *     </p>
   * @public
   */
  Status?: Status | undefined;

  /**
   * <p>
   *       This field describes the reason for the failure status. The field will only be populated if <code>Status</code> is <code>FAILED_START</code> or <code>FAILED_STOP</code>.
   *     </p>
   * @public
   */
  FailureReason?: string | undefined;
}

/**
 * <p>
 *      Indicates input validation failed. Check your request parameters and retry the request.
 *     </p>
 * @public
 */
export class ValidationException extends __BaseException {
  readonly name: "ValidationException" = "ValidationException";
  readonly $fault: "client" = "client";
  Message?: string | undefined;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<ValidationException, __BaseException>) {
    super({
      name: "ValidationException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, ValidationException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 * @enum
 */
export const ResourceType = {
  AWS_EC2_INSTANCE: "AWS::EC2::Instance",
  AWS_EC2_VPC: "AWS::EC2::VPC",
  AWS_LAMDBA_FUNCTION: "AWS::Lambda::Function",
} as const;

/**
 * @public
 */
export type ResourceType = (typeof ResourceType)[keyof typeof ResourceType];

/**
 * @public
 * @enum
 */
export const TelemetryType = {
  LOGS: "Logs",
  METRICS: "Metrics",
  TRACES: "Traces",
} as const;

/**
 * @public
 */
export type TelemetryType = (typeof TelemetryType)[keyof typeof TelemetryType];

/**
 * @public
 * @enum
 */
export const TelemetryState = {
  DISABLED: "Disabled",
  ENABLED: "Enabled",
  NOT_APPLICABLE: "NotApplicable",
} as const;

/**
 * @public
 */
export type TelemetryState = (typeof TelemetryState)[keyof typeof TelemetryState];

/**
 * @public
 */
export interface ListResourceTelemetryInput {
  /**
   * <p>
   *       A string used to filter resources which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>.
   *     </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p>
   *       A list of resource types used to filter resources supported by telemetry config. If this parameter is provided, the resources will be returned in the same order used in the request.
   *     </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *     </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources based on tags associated with the resource. For more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a>
   *          </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       A number field used to limit the number of results within the returned list.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * <p>
 *       A model representing the state of a resource within an account according to telemetry config.
 *     </p>
 * @public
 */
export interface TelemetryConfiguration {
  /**
   * <p>
   *       The account ID which contains the resource managed in telemetry configuration. An example of a valid account ID is <code>012345678901</code>.
   *     </p>
   * @public
   */
  AccountIdentifier?: string | undefined;

  /**
   * <p>
   *       The configuration state for the resource, for example <code>\{ Logs: NotApplicable; Metrics: Enabled; Traces: NotApplicable; \}</code>.
   *       </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       The type of resource, for example <code>AWS::EC2::Instance</code>.
   *     </p>
   * @public
   */
  ResourceType?: ResourceType | undefined;

  /**
   * <p>
   *      The identifier of the resource, for example <code>i-0b22a22eec53b9321</code>.
   *     </p>
   * @public
   */
  ResourceIdentifier?: string | undefined;

  /**
   * <p>
   *      Tags associated with the resource, for example <code>\{ Name: "ExampleInstance", Environment: "Development" \}</code>.
   *     </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       The timestamp of the last change to the telemetry configuration for the resource.  For example, <code>1728679196318</code>.
   *     </p>
   * @public
   */
  LastUpdateTimeStamp?: number | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryOutput {
  /**
   * <p>
   *       A list of telemetry configurations for AWS resources supported by telemetry config in the caller's account.
   *     </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call generates this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationInput {
  /**
   * <p>
   *       A list of AWS account IDs used to filter the resources to those associated with the specified accounts.
   *     </p>
   * @public
   */
  AccountIdentifiers?: string[] | undefined;

  /**
   * <p>
   *       A string used to filter resources in the organization which have a <code>ResourceIdentifier</code> starting with the <code>ResourceIdentifierPrefix</code>.
   *     </p>
   * @public
   */
  ResourceIdentifierPrefix?: string | undefined;

  /**
   * <p>
   *     A list of resource types used to filter resources in the organization. If this parameter is provided, the resources will be returned in the same order used in the request.
   *     </p>
   * @public
   */
  ResourceTypes?: ResourceType[] | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources in the organization based on the telemetry type and the state of the telemetry configuration. The key is the telemetry type and the value is the state.
   *     </p>
   * @public
   */
  TelemetryConfigurationState?: Partial<Record<TelemetryType, TelemetryState>> | undefined;

  /**
   * <p>
   *       A key-value pair to filter resources in the organization based on tags associated with the resource. Fore more information about tags, see <a href="https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/what-are-tags.html">What are tags?</a>
   *          </p>
   * @public
   */
  ResourceTags?: Record<string, string> | undefined;

  /**
   * <p>
   *       A number field used to limit the number of results within the returned list.
   *     </p>
   * @public
   */
  MaxResults?: number | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call provides this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}

/**
 * @public
 */
export interface ListResourceTelemetryForOrganizationOutput {
  /**
   * <p>
   *       A list of telemetry configurations for AWS resources supported by telemetry config in the organization.
   *     </p>
   * @public
   */
  TelemetryConfigurations?: TelemetryConfiguration[] | undefined;

  /**
   * <p>
   *       The token for the next set of items to return. A previous call provides this token.
   *     </p>
   * @public
   */
  NextToken?: string | undefined;
}
