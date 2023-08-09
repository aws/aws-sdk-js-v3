// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import {
  GetDeploymentsCommand,
  GetDeploymentsCommandInput,
  GetDeploymentsCommandOutput,
} from "./commands/GetDeploymentsCommand";
import {
  GetDeviceRegistrationCommand,
  GetDeviceRegistrationCommandInput,
  GetDeviceRegistrationCommandOutput,
} from "./commands/GetDeviceRegistrationCommand";
import {
  SendHeartbeatCommand,
  SendHeartbeatCommandInput,
  SendHeartbeatCommandOutput,
} from "./commands/SendHeartbeatCommand";
import { SagemakerEdgeClient, SagemakerEdgeClientConfig } from "./SagemakerEdgeClient";

const commands = {
  GetDeploymentsCommand,
  GetDeviceRegistrationCommand,
  SendHeartbeatCommand,
};

export interface SagemakerEdge {
  /**
   * @see {@link GetDeploymentsCommand}
   */
  getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  getDeployments(args: GetDeploymentsCommandInput, cb: (err: any, data?: GetDeploymentsCommandOutput) => void): void;
  getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;

  /**
   * @see {@link GetDeviceRegistrationCommand}
   */
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceRegistrationCommandOutput>;
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;
  getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;

  /**
   * @see {@link SendHeartbeatCommand}
   */
  sendHeartbeat(args: SendHeartbeatCommandInput, options?: __HttpHandlerOptions): Promise<SendHeartbeatCommandOutput>;
  sendHeartbeat(args: SendHeartbeatCommandInput, cb: (err: any, data?: SendHeartbeatCommandOutput) => void): void;
  sendHeartbeat(
    args: SendHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 */
export class SagemakerEdge extends SagemakerEdgeClient implements SagemakerEdge {}
createAggregatedClient(commands, SagemakerEdge);
