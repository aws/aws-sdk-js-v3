// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@smithy/smithy-client";

import { SagemakerEdgeServiceException as __BaseException } from "./SagemakerEdgeServiceException";

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * @public
   * <p>The unique name of the device you want to get the configuration of active deployments from.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 * @enum
 */
export const ChecksumType = {
  Sha1: "SHA1",
} as const;

/**
 * @public
 */
export type ChecksumType = (typeof ChecksumType)[keyof typeof ChecksumType];

/**
 * @public
 * <p>Information about the checksum of a model deployed on a device.</p>
 */
export interface Checksum {
  /**
   * @public
   * <p>The type of the checksum.</p>
   */
  Type?: ChecksumType | string;

  /**
   * @public
   * <p>The checksum of the model.</p>
   */
  Sum?: string;
}

/**
 * @public
 * @enum
 */
export const ModelState = {
  Deploy: "DEPLOY",
  Undeploy: "UNDEPLOY",
} as const;

/**
 * @public
 */
export type ModelState = (typeof ModelState)[keyof typeof ModelState];

/**
 * @public
 * <p></p>
 */
export interface Definition {
  /**
   * @public
   * <p>The unique model handle.</p>
   */
  ModelHandle?: string;

  /**
   * @public
   * <p>The absolute S3 location of the model.</p>
   */
  S3Url?: string;

  /**
   * @public
   * <p>The checksum information of the model.</p>
   */
  Checksum?: Checksum;

  /**
   * @public
   * <p>The desired state of the model.</p>
   */
  State?: ModelState | string;
}

/**
 * @public
 * @enum
 */
export const FailureHandlingPolicy = {
  DoNothing: "DO_NOTHING",
  RollbackOnFailure: "ROLLBACK_ON_FAILURE",
} as const;

/**
 * @public
 */
export type FailureHandlingPolicy = (typeof FailureHandlingPolicy)[keyof typeof FailureHandlingPolicy];

/**
 * @public
 * @enum
 */
export const DeploymentType = {
  Model: "Model",
} as const;

/**
 * @public
 */
export type DeploymentType = (typeof DeploymentType)[keyof typeof DeploymentType];

/**
 * @public
 * <p>Information about a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface EdgeDeployment {
  /**
   * @public
   * <p>The name and unique ID of the deployment.</p>
   */
  DeploymentName?: string;

  /**
   * @public
   * <p>The type of the deployment.</p>
   */
  Type?: DeploymentType | string;

  /**
   * @public
   * <p>Determines whether to rollback to previous configuration if deployment fails.</p>
   */
  FailureHandlingPolicy?: FailureHandlingPolicy | string;

  /**
   * @public
   * <p>Returns a list of Definition objects.</p>
   */
  Definitions?: Definition[];
}

/**
 * @public
 */
export interface GetDeploymentsResult {
  /**
   * @public
   * <p>Returns a list of the configurations of the active deployments on the device.</p>
   */
  Deployments?: EdgeDeployment[];
}

/**
 * @public
 * <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact Amazon Web Services customer support.</p>
 */
export class InternalServiceException extends __BaseException {
  readonly name: "InternalServiceException" = "InternalServiceException";
  readonly $fault: "client" = "client";
  Message?: string;
  /**
   * @internal
   */
  constructor(opts: __ExceptionOptionType<InternalServiceException, __BaseException>) {
    super({
      name: "InternalServiceException",
      $fault: "client",
      ...opts,
    });
    Object.setPrototypeOf(this, InternalServiceException.prototype);
    this.Message = opts.Message;
  }
}

/**
 * @public
 */
export interface GetDeviceRegistrationRequest {
  /**
   * @public
   * <p>The unique name of the device you want to get the registration status from.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceRegistrationResult {
  /**
   * @public
   * <p>Describes if the device is currently registered with SageMaker Edge Manager.</p>
   */
  DeviceRegistration?: string;

  /**
   * @public
   * <p>The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.</p>
   */
  CacheTTL?: string;
}

/**
 * @public
 * <p>Information required for edge device metrics.</p>
 */
export interface EdgeMetric {
  /**
   * @public
   * <p>The dimension of metrics published.</p>
   */
  Dimension?: string;

  /**
   * @public
   * <p>Returns the name of the metric.</p>
   */
  MetricName?: string;

  /**
   * @public
   * <p>Returns the value of the metric.</p>
   */
  Value?: number;

  /**
   * @public
   * <p>Timestamp of when the metric was requested.</p>
   */
  Timestamp?: Date;
}

/**
 * @public
 * @enum
 */
export const DeploymentStatus = {
  Fail: "FAIL",
  Success: "SUCCESS",
} as const;

/**
 * @public
 */
export type DeploymentStatus = (typeof DeploymentStatus)[keyof typeof DeploymentStatus];

/**
 * @public
 * <p></p>
 */
export interface DeploymentModel {
  /**
   * @public
   * <p>The unique handle of the model.</p>
   */
  ModelHandle?: string;

  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * @public
   * <p>The desired state of the model.</p>
   */
  DesiredState?: ModelState | string;

  /**
   * @public
   * <p>Returns the current state of the model.</p>
   */
  State?: ModelState | string;

  /**
   * @public
   * <p>Returns the deployment status of the model.</p>
   */
  Status?: DeploymentStatus | string;

  /**
   * @public
   * <p>Returns the error message for the deployment status result.</p>
   */
  StatusReason?: string;

  /**
   * @public
   * <p>Returns the error message if there is a rollback.</p>
   */
  RollbackFailureReason?: string;
}

/**
 * @public
 * <p>Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface DeploymentResult {
  /**
   * @public
   * <p>The name and unique ID of the deployment.</p>
   */
  DeploymentName?: string;

  /**
   * @public
   * <p>Returns the bucket error code.</p>
   */
  DeploymentStatus?: string;

  /**
   * @public
   * <p>Returns the detailed error message.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * @public
   * <p>The timestamp of when the deployment was started on the agent.</p>
   */
  DeploymentStartTime?: Date;

  /**
   * @public
   * <p>The timestamp of when the deployment was ended, and the agent got the deployment results.</p>
   */
  DeploymentEndTime?: Date;

  /**
   * @public
   * <p>Returns a list of models deployed on the agent.</p>
   */
  DeploymentModels?: DeploymentModel[];
}

/**
 * @public
 * <p>Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface Model {
  /**
   * @public
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * @public
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * @public
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * @public
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;

  /**
   * @public
   * <p>Information required for model metrics.</p>
   */
  ModelMetrics?: EdgeMetric[];
}

/**
 * @public
 */
export interface SendHeartbeatRequest {
  /**
   * @public
   * <p>For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.</p>
   */
  AgentMetrics?: EdgeMetric[];

  /**
   * @public
   * <p>Returns a list of models deployed on the the device.</p>
   */
  Models?: Model[];

  /**
   * @public
   * <p>Returns the version of the agent.</p>
   */
  AgentVersion: string | undefined;

  /**
   * @public
   * <p>The unique name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * @public
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * @public
   * <p>Returns the result of a deployment on the device.</p>
   */
  DeploymentResult?: DeploymentResult;
}
