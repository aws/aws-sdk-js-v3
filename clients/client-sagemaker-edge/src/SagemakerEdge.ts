// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/core/client";
import type { HttpHandlerOptions as __HttpHandlerOptions, MetricsRecorder as __MetricsRecorder } from "@smithy/types";

import {
  type GetDeploymentsCommandInput,
  type GetDeploymentsCommandOutput,
  GetDeploymentsCommand,
} from "./commands/GetDeploymentsCommand";
import {
  type GetDeviceRegistrationCommandInput,
  type GetDeviceRegistrationCommandOutput,
  GetDeviceRegistrationCommand,
} from "./commands/GetDeviceRegistrationCommand";
import {
  type SendHeartbeatCommandInput,
  type SendHeartbeatCommandOutput,
  SendHeartbeatCommand,
} from "./commands/SendHeartbeatCommand";
import { SagemakerEdgeClient } from "./SagemakerEdgeClient";

const commands = {
  GetDeploymentsCommand,
  GetDeviceRegistrationCommand,
  SendHeartbeatCommand,
};

/**
 * @public
 */
export interface SagemakerEdgeRequestOptions extends __HttpHandlerOptions {
  metricsRecorder?: __MetricsRecorder<unknown>;
}

export interface SagemakerEdge {
  /**
   * @see {@link GetDeploymentsCommand}
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: SagemakerEdgeRequestOptions
  ): Promise<GetDeploymentsCommandOutput>;
  getDeployments(
    args: GetDeploymentsCommandInput,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: SagemakerEdgeRequestOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceRegistrationCommand}
   */
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options?: SagemakerEdgeRequestOptions
  ): Promise<GetDeviceRegistrationCommandOutput>;
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options: SagemakerEdgeRequestOptions,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendHeartbeatCommand}
   */
  sendHeartbeat(
    args: SendHeartbeatCommandInput,
    options?: SagemakerEdgeRequestOptions
  ): Promise<SendHeartbeatCommandOutput>;
  sendHeartbeat(
    args: SendHeartbeatCommandInput,
    cb: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): void;
  sendHeartbeat(
    args: SendHeartbeatCommandInput,
    options: SagemakerEdgeRequestOptions,
    cb: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): void;
}

/**
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 * @public
 */
export class SagemakerEdge extends SagemakerEdgeClient implements SagemakerEdge {}
createAggregatedClient(commands, SagemakerEdge);
