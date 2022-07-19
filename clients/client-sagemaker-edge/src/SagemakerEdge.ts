// smithy-typescript generated code
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

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
import { SagemakerEdgeClient } from "./SagemakerEdgeClient";

/**
 * <p>SageMaker Edge Manager dataplane service for communicating with active agents.</p>
 */
export class SagemakerEdge extends SagemakerEdgeClient {
  /**
   * <p>Use to get the active deployments from a device.</p>
   */
  public getDeployments(
    args: GetDeploymentsCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeploymentsCommandOutput>;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): void;
  public getDeployments(
    args: GetDeploymentsCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeploymentsCommandOutput) => void),
    cb?: (err: any, data?: GetDeploymentsCommandOutput) => void
  ): Promise<GetDeploymentsCommandOutput> | void {
    const command = new GetDeploymentsCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use to check if a device is registered with SageMaker Edge Manager.</p>
   */
  public getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetDeviceRegistrationCommandOutput>;
  public getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;
  public getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): void;
  public getDeviceRegistration(
    args: GetDeviceRegistrationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetDeviceRegistrationCommandOutput) => void),
    cb?: (err: any, data?: GetDeviceRegistrationCommandOutput) => void
  ): Promise<GetDeviceRegistrationCommandOutput> | void {
    const command = new GetDeviceRegistrationCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  /**
   * <p>Use to get the current status of devices registered on SageMaker Edge Manager.</p>
   */
  public sendHeartbeat(
    args: SendHeartbeatCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<SendHeartbeatCommandOutput>;
  public sendHeartbeat(
    args: SendHeartbeatCommandInput,
    cb: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): void;
  public sendHeartbeat(
    args: SendHeartbeatCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): void;
  public sendHeartbeat(
    args: SendHeartbeatCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: SendHeartbeatCommandOutput) => void),
    cb?: (err: any, data?: SendHeartbeatCommandOutput) => void
  ): Promise<SendHeartbeatCommandOutput> | void {
    const command = new SendHeartbeatCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }
}
