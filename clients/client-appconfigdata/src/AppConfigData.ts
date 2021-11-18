import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";

import { AppConfigDataClient } from "./AppConfigDataClient";
import {
  GetLatestConfigurationCommand,
  GetLatestConfigurationCommandInput,
  GetLatestConfigurationCommandOutput,
} from "./commands/GetLatestConfigurationCommand";
import {
  StartConfigurationSessionCommand,
  StartConfigurationSessionCommandInput,
  StartConfigurationSessionCommandOutput,
} from "./commands/StartConfigurationSessionCommand";

/**
 * <p>Use the AppConfigData API, a capability of AWS AppConfig, to retrieve deployed configuration.</p>
 */
export class AppConfigData extends AppConfigDataClient {
  /**
   * <p>Retrieves the latest deployed configuration. This API may return empty Configuration data if the client already has the latest version. See StartConfigurationSession to obtain an InitialConfigurationToken to call this API.</p>
   *         <important>
   *             <p>Each call to GetLatestConfiguration returns a new ConfigurationToken (NextPollConfigurationToken
   *                 in the response). This new token MUST be provided to the next call to GetLatestConfiguration when
   *                 polling for configuration updates.</p>
   *             <p>To avoid excess charges, we recommend that you include the
   *                 <code>ClientConfigurationVersion</code> value with every call to
   *                 <code>GetConfiguration</code>. This value must be saved on your client. Subsequent
   *                 calls to <code>GetConfiguration</code> must pass this value by using the
   *                 <code>ClientConfigurationVersion</code> parameter. </p>
   *         </important>
   */
  public getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLatestConfigurationCommandOutput>;
  public getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    cb: (err: any, data?: GetLatestConfigurationCommandOutput) => void
  ): void;
  public getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLatestConfigurationCommandOutput) => void
  ): void;
  public getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: GetLatestConfigurationCommandOutput) => void),
    cb?: (err: any, data?: GetLatestConfigurationCommandOutput) => void
  ): Promise<GetLatestConfigurationCommandOutput> | void {
    const command = new GetLatestConfigurationCommand(args);
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
   * <p>Starts a configuration session used to retrieve a deployed configuration. See the GetLatestConfiguration API for more details.</p>
   */
  public startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationSessionCommandOutput>;
  public startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    cb: (err: any, data?: StartConfigurationSessionCommandOutput) => void
  ): void;
  public startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationSessionCommandOutput) => void
  ): void;
  public startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    optionsOrCb?: __HttpHandlerOptions | ((err: any, data?: StartConfigurationSessionCommandOutput) => void),
    cb?: (err: any, data?: StartConfigurationSessionCommandOutput) => void
  ): Promise<StartConfigurationSessionCommandOutput> | void {
    const command = new StartConfigurationSessionCommand(args);
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
