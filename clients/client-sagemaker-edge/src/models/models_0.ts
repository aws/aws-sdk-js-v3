// smithy-typescript generated code
import type { ChecksumType, DeploymentStatus, DeploymentType, FailureHandlingPolicy, ModelState } from "./enums";

/**
 * @public
 */
export interface GetDeploymentsRequest {
  /**
   * The unique name of the device you want to get the configuration of active deployments from.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * The name of the fleet that the device belongs to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * Information about the checksum of a model deployed on a device.
 *
 * @public
 */
export interface Checksum {
  /**
   * The type of the checksum.
   *
   * @public
   */
  Type?: ChecksumType | undefined;

  /**
   * The checksum of the model.
   *
   * @public
   */
  Sum?: string | undefined;
}

/**
 * @public
 */
export interface Definition {
  /**
   * The unique model handle.
   *
   * @public
   */
  ModelHandle?: string | undefined;

  /**
   * The absolute S3 location of the model.
   *
   * @public
   */
  S3Url?: string | undefined;

  /**
   * The checksum information of the model.
   *
   * @public
   */
  Checksum?: Checksum | undefined;

  /**
   * The desired state of the model.
   *
   * @public
   */
  State?: ModelState | undefined;
}

/**
 * Information about a deployment on an edge device that is registered with SageMaker Edge Manager.
 *
 * @public
 */
export interface EdgeDeployment {
  /**
   * The name and unique ID of the deployment.
   *
   * @public
   */
  DeploymentName?: string | undefined;

  /**
   * The type of the deployment.
   *
   * @public
   */
  Type?: DeploymentType | undefined;

  /**
   * Determines whether to rollback to previous configuration if deployment fails.
   *
   * @public
   */
  FailureHandlingPolicy?: FailureHandlingPolicy | undefined;

  /**
   * Returns a list of Definition objects.
   *
   * @public
   */
  Definitions?: Definition[] | undefined;
}

/**
 * @public
 */
export interface GetDeploymentsResult {
  /**
   * Returns a list of the configurations of the active deployments on the device.
   *
   * @public
   */
  Deployments?: EdgeDeployment[] | undefined;
}

/**
 * @public
 */
export interface GetDeviceRegistrationRequest {
  /**
   * The unique name of the device you want to get the registration status from.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * The name of the fleet that the device belongs to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;
}

/**
 * @public
 */
export interface GetDeviceRegistrationResult {
  /**
   * Describes if the device is currently registered with SageMaker Edge Manager.
   *
   * @public
   */
  DeviceRegistration?: string | undefined;

  /**
   * The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.
   *
   * @public
   */
  CacheTTL?: string | undefined;
}

/**
 * Information required for edge device metrics.
 *
 * @public
 */
export interface EdgeMetric {
  /**
   * The dimension of metrics published.
   *
   * @public
   */
  Dimension?: string | undefined;

  /**
   * Returns the name of the metric.
   *
   * @public
   */
  MetricName?: string | undefined;

  /**
   * Returns the value of the metric.
   *
   * @public
   */
  Value?: number | undefined;

  /**
   * Timestamp of when the metric was requested.
   *
   * @public
   */
  Timestamp?: Date | undefined;
}

/**
 * @public
 */
export interface DeploymentModel {
  /**
   * The unique handle of the model.
   *
   * @public
   */
  ModelHandle?: string | undefined;

  /**
   * The name of the model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The version of the model.
   *
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * The desired state of the model.
   *
   * @public
   */
  DesiredState?: ModelState | undefined;

  /**
   * Returns the current state of the model.
   *
   * @public
   */
  State?: ModelState | undefined;

  /**
   * Returns the deployment status of the model.
   *
   * @public
   */
  Status?: DeploymentStatus | undefined;

  /**
   * Returns the error message for the deployment status result.
   *
   * @public
   */
  StatusReason?: string | undefined;

  /**
   * Returns the error message if there is a rollback.
   *
   * @public
   */
  RollbackFailureReason?: string | undefined;
}

/**
 * Information about the result of a deployment on an edge device that is registered with SageMaker Edge Manager.
 *
 * @public
 */
export interface DeploymentResult {
  /**
   * The name and unique ID of the deployment.
   *
   * @public
   */
  DeploymentName?: string | undefined;

  /**
   * Returns the bucket error code.
   *
   * @public
   */
  DeploymentStatus?: string | undefined;

  /**
   * Returns the detailed error message.
   *
   * @public
   */
  DeploymentStatusMessage?: string | undefined;

  /**
   * The timestamp of when the deployment was started on the agent.
   *
   * @public
   */
  DeploymentStartTime?: Date | undefined;

  /**
   * The timestamp of when the deployment was ended, and the agent got the deployment results.
   *
   * @public
   */
  DeploymentEndTime?: Date | undefined;

  /**
   * Returns a list of models deployed on the agent.
   *
   * @public
   */
  DeploymentModels?: DeploymentModel[] | undefined;
}

/**
 * Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.
 *
 * @public
 */
export interface Model {
  /**
   * The name of the model.
   *
   * @public
   */
  ModelName?: string | undefined;

  /**
   * The version of the model.
   *
   * @public
   */
  ModelVersion?: string | undefined;

  /**
   * The timestamp of the last data sample taken.
   *
   * @public
   */
  LatestSampleTime?: Date | undefined;

  /**
   * The timestamp of the last inference that was made.
   *
   * @public
   */
  LatestInference?: Date | undefined;

  /**
   * Information required for model metrics.
   *
   * @public
   */
  ModelMetrics?: EdgeMetric[] | undefined;
}

/**
 * @public
 */
export interface SendHeartbeatRequest {
  /**
   * For internal use. Returns a list of SageMaker Edge Manager agent operating metrics.
   *
   * @public
   */
  AgentMetrics?: EdgeMetric[] | undefined;

  /**
   * Returns a list of models deployed on the the device.
   *
   * @public
   */
  Models?: Model[] | undefined;

  /**
   * Returns the version of the agent.
   *
   * @public
   */
  AgentVersion: string | undefined;

  /**
   * The unique name of the device.
   *
   * @public
   */
  DeviceName: string | undefined;

  /**
   * The name of the fleet that the device belongs to.
   *
   * @public
   */
  DeviceFleetName: string | undefined;

  /**
   * Returns the result of a deployment on the device.
   *
   * @public
   */
  DeploymentResult?: DeploymentResult | undefined;
}
