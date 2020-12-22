import { SmithyException as __SmithyException } from "@aws-sdk/smithy-client";
import { MetadataBearer as $MetadataBearer } from "@aws-sdk/types";

export interface GetDeviceRegistrationRequest {
  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique name of the device you want to get the registration status from.</p>
   */
  DeviceName: string | undefined;
}

export namespace GetDeviceRegistrationRequest {
  export const filterSensitiveLog = (obj: GetDeviceRegistrationRequest): any => ({
    ...obj,
  });
}

export interface GetDeviceRegistrationResult {
  /**
   * <p>The amount of time, in seconds, that the registration status is stored on the device’s cache before it is refreshed.</p>
   */
  CacheTTL?: string;

  /**
   * <p>Describes if the device is currently registered with SageMaker Edge Manager.</p>
   */
  DeviceRegistration?: string;
}

export namespace GetDeviceRegistrationResult {
  export const filterSensitiveLog = (obj: GetDeviceRegistrationResult): any => ({
    ...obj,
  });
}

/**
 * <p>An internal failure occurred. Try your request again. If the problem
 *       persists, contact AWS customer support.</p>
 */
export interface InternalServiceException extends __SmithyException, $MetadataBearer {
  name: "InternalServiceException";
  $fault: "client";
  Message?: string;
}

export namespace InternalServiceException {
  export const filterSensitiveLog = (obj: InternalServiceException): any => ({
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
   * <p>Timestamp of when the metric was requested.</p>
   */
  Timestamp?: Date;

  /**
   * <p>Returns the value of the metric.</p>
   */
  Value?: number;
}

export namespace EdgeMetric {
  export const filterSensitiveLog = (obj: EdgeMetric): any => ({
    ...obj,
  });
}

/**
 * <p>Information about a model deployed on an edge device that is registered with SageMaker Edge Manager.</p>
 */
export interface Model {
  /**
   * <p>The timestamp of the last inference that was made.</p>
   */
  LatestInference?: Date;

  /**
   * <p>The timestamp of the last data sample taken.</p>
   */
  LatestSampleTime?: Date;

  /**
   * <p>Information required for model metrics.</p>
   */
  ModelMetrics?: EdgeMetric[];

  /**
   * <p>The name of the model.</p>
   */
  ModelName?: string;

  /**
   * <p>The version of the model.</p>
   */
  ModelVersion?: string;
}

export namespace Model {
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
   * <p>Returns the version of the agent.</p>
   */
  AgentVersion: string | undefined;

  /**
   * <p>The name of the fleet that the device belongs to.</p>
   */
  DeviceFleetName: string | undefined;

  /**
   * <p>The unique name of the device.</p>
   */
  DeviceName: string | undefined;

  /**
   * <p>Returns a list of models deployed on the the device.</p>
   */
  Models?: Model[];
}

export namespace SendHeartbeatRequest {
  export const filterSensitiveLog = (obj: SendHeartbeatRequest): any => ({
    ...obj,
  });
}
