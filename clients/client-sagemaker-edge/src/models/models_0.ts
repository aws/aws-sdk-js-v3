// smithy-typescript generated code
import { ExceptionOptionType as __ExceptionOptionType } from "@aws-sdk/smithy-client";

import { SagemakerEdgeServiceException as __BaseException } from "./SagemakerEdgeServiceException";

export interface GetDeploymentsRequest {
  /**
   * <p>The unique name of the device you want to get the configuration of active deployments from.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace GetDeploymentsRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentsRequest): any => ({
    ...obj,
  });
}

export enum ChecksumType {
  Sha1 = "SHA1",
}

/**
 * <p>Information about the checksum of a model deployed on a device.</p>
 */
export interface Checksum {
  /**
   * <p>The type of the checksum.</p>
   */
  Type?: ChecksumType | string;

  /**
   * <p>The checksum of the model.</p>
   */
  Sum?: string;
}

export namespace Checksum {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Checksum): any => ({
    ...obj,
  });
}

export enum ModelState {
  Deploy = "DEPLOY",
  Undeploy = "UNDEPLOY",
}

/**
 * <p></p>
 */
export interface Definition {
  /**
   * <p>The unique model handle.</p>
   */
  ModelHandle?: string;

  /**
   * <p>The absolute S3 location of the model.</p>
   */
  S3Url?: string;

  /**
   * <p>The checksum information of the model.</p>
   */
  Checksum?: Checksum;

  /**
   * <p>The desired state of the model.</p>
   */
  State?: ModelState | string;
}

export namespace Definition {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Definition): any => ({
    ...obj,
  });
}

export enum FailureHandlingPolicy {
  DoNothing = "DO_NOTHING",
  RollbackOnFailure = "ROLLBACK_ON_FAILURE",
}

export enum DeploymentType {
  Model = "Model",
}

/**
 * <p>Information about a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface EdgeDeployment {
  /**
   * <p>The name and unique ID of the deployment.</p>
   */
  DeploymentName?: string;

  /**
   * <p>The type of the deployment.</p>
   */
  Type?: DeploymentType | string;

  /**
   * <p>Determines whether to rollback to previous configuration if deployment fails.</p>
   */
  FailureHandlingPolicy?: FailureHandlingPolicy | string;

  /**
   * <p>Returns a list of Definition objects.</p>
   */
  Definitions?: Definition[];
}

export namespace EdgeDeployment {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeDeployment): any => ({
    ...obj,
  });
}

export interface GetDeploymentsResult {
  /**
   * <p>Returns a list of the configurations of the active deployments on the device.</p>
   */
  Deployments?: EdgeDeployment[];
}

export namespace GetDeploymentsResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeploymentsResult): any => ({
    ...obj,
  });
}

/**
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

export interface GetDeviceRegistrationRequest {
  /**
   * <p>The unique name of the device you want to get the registration status from.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;
}

export namespace GetDeviceRegistrationRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceRegistrationRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceRegistrationResult {
  /**
   * <p>Describes if the device is currently registered with SageMaker Edge Manager.</p>
   */
  DeviceRegistration?: string;

  /**
   * <p>The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.</p>
   */
  CacheTTL?: string;
}

export namespace GetDeviceRegistrationResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: GetDeviceRegistrationResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information required for edge device metrics.</p>
 */
export interface EdgeMetric {
  /**
   * <p>The dimension of metrics published.</p>
   */
  Dimension?: string;

  /**
   * <p>Returns the name of the metric.</p>
   */
  MetricName?: string;

  /**
   * <p>Returns the value of the metric.</p>
   */
  Value?: number;

  /**
   * <p>Timestamp of when the metric was requested.</p>
   */
  Timestamp?: Date;
}

export namespace EdgeMetric {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: EdgeMetric): any => ({
    ...obj,
  });
}

export enum DeploymentStatus {
  Fail = "FAIL",
  Success = "SUCCESS",
}

/**
 * <p></p>
 */
export interface DeploymentModel {
  /**
   * <p>The unique handle of the model.</p>
   */
  ModelHandle?: string;

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The desired state of the model.</p>
   */
  DesiredState?: ModelState | string;

  /**
   * <p>Returns the current state of the model.</p>
   */
  State?: ModelState | string;

  /**
   * <p>Returns the deployment status of the model.</p>
   */
  Status?: DeploymentStatus | string;

  /**
   * <p>Returns the error message for the deployment status result.</p>
   */
  StatusReason?: string;

  /**
   * <p>Returns the error message if there is a rollback.</p>
   */
  RollbackFailureReason?: string;
}

export namespace DeploymentModel {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentModel): any => ({
    ...obj,
  });
}

/**
 * <p>Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface DeploymentResult {
  /**
   * <p>The name and unique ID of the deployment.</p>
   */
  DeploymentName?: string;

  /**
   * <p>Returns the bucket error code.</p>
   */
  DeploymentStatus?: string;

  /**
   * <p>Returns the detailed error message.</p>
   */
  DeploymentStatusMessage?: string;

  /**
   * <p>The timestamp of when the deployment was started on the agent.</p>
   */
  DeploymentStartTime?: Date;

  /**
   * <p>The timestamp of when the deployment was ended, and the agent got the deployment results.</p>
   */
  DeploymentEndTime?: Date;

  /**
   * <p>Returns a list of models deployed on the agent.</p>
   */
  DeploymentModels?: DeploymentModel[];
}

export namespace DeploymentResult {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: DeploymentResult): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface Model {
  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;

  /**
   * <p>Information required for model metrics.</p>
   */
  ModelMetrics?: EdgeMetric[];
}

export namespace Model {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: Model): any => ({
    ...obj,
  });
}

export interface SendHeartbeatRequest {
  /**
   * <p>For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.</p>
   */
  AgentMetrics?: EdgeMetric[];

  /**
   * <p>Returns a list of models deployed on the the device.</p>
   */
  Models?: Model[];

  /**
   * <p>Returns the version of the agent.</p>
   */
  AgentVersion: string | undefined;

  /**
   * <p>The unique name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>Returns the result of a deployment on the device.</p>
   */
  DeploymentResult?: DeploymentResult;
}

export namespace SendHeartbeatRequest {
  /**
   * @internal
   */
  export const filterSensitiveLog = (obj: SendHeartbeatRequest): any => ({
    ...obj,
  });
}
