import { SSOOIDCClient } from "./SSOOIDCClient";
import { CreateTokenCommand, CreateTokenCommandInput, CreateTokenCommandOutput } from "./commands/CreateTokenCommand";
import {
  RegisterClientCommand,
  RegisterClientCommandInput,
  RegisterClientCommandOutput,
} from "./commands/RegisterClientCommand";
import {
  StartDeviceAuthorizationCommand,
  StartDeviceAuthorizationCommandInput,
  StartDeviceAuthorizationCommandOutput,
} from "./commands/StartDeviceAuthorizationCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

export class SSOOIDC extends SSOOIDCClient {
  public createToken(args: CreateTokenCommandInput, options?: __HttpHandlerOptions): Promise<CreateTokenCommandOutput>;
  public createToken(args: CreateTokenCommandInput, cb: (err: any, data?: CreateTokenCommandOutput) => void): void;
  public createToken(
    args: CreateTokenCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: CreateTokenCommandOutput) => void
  ): void;
  public createToken(
    args: CreateTokenCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: CreateTokenCommandOutput) => void),
    cb?: (err: any, data?: CreateTokenCommandOutput) => void
  ): Promise<CreateTokenCommandOutput> | void {
    const command = new CreateTokenCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public registerClient(
    args: RegisterClientCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<RegisterClientCommandOutput>;
  public registerClient(
    args: RegisterClientCommandInput,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  public registerClient(
    args: RegisterClientCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: RegisterClientCommandOutput) => void
  ): void;
  public registerClient(
    args: RegisterClientCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: RegisterClientCommandOutput) => void),
    cb?: (err: any, data?: RegisterClientCommandOutput) => void
  ): Promise<RegisterClientCommandOutput> | void {
    const command = new RegisterClientCommand(args);
    if (typeof optionsOrCb === "function") {
      this.send(command, optionsOrCb);
    } else if (typeof cb === "function") {
      if (typeof optionsOrCb !== "object") throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
      this.send(command, optionsOrCb || {}, cb);
    } else {
      return this.send(command, optionsOrCb);
    }
  }

  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartDeviceAuthorizationCommandOutput>;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): void;
  public startDeviceAuthorization(
    args: StartDeviceAuthorizationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartDeviceAuthorizationCommandOutput) => void),
    cb?: (err: any, data?: StartDeviceAuthorizationCommandOutput) => void
  ): Promise<StartDeviceAuthorizationCommandOutput> | void {
    const command = new StartDeviceAuthorizationCommand(args);
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
