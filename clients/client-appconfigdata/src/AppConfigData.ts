// smithy-typescript generated code
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
 * <p>AppConfig Data provides the data plane APIs your application uses to retrieve configuration data.
 *          Here's how it works:</p>
 *          <p>Your application retrieves configuration data by first establishing a configuration
 *          session using the AppConfig Data <a>StartConfigurationSession</a> API action. Your session's
 *          client then makes periodic calls to <a>GetLatestConfiguration</a> to check for
 *          and retrieve the latest data available.</p>
 *          <p>When calling <code>StartConfigurationSession</code>, your code sends the following
 *          information:</p>
 *          <ul>
 *             <li>
 *                <p>Identifiers (ID or name) of an AppConfig application, environment, and
 *                configuration profile that the session tracks.</p>
 *             </li>
 *             <li>
 *                <p>(Optional) The minimum amount of time the session's client must wait between calls
 *                to <code>GetLatestConfiguration</code>.</p>
 *             </li>
 *          </ul>
 *          <p>In response, AppConfig provides an <code>InitialConfigurationToken</code> to be given to
 *          the session's client and used the first time it calls <code>GetLatestConfiguration</code>
 *          for that session.</p>
 *          <p>When calling <code>GetLatestConfiguration</code>, your client code sends the most recent
 *             <code>ConfigurationToken</code> value it has and receives in response:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>NextPollConfigurationToken</code>: the <code>ConfigurationToken</code> value
 *                to use on the next call to <code>GetLatestConfiguration</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>NextPollIntervalInSeconds</code>: the duration the client should wait before
 *                making its next call to <code>GetLatestConfiguration</code>. This duration may vary
 *                over the course of the session, so it should be used instead of the value sent on the
 *                   <code>StartConfigurationSession</code> call.</p>
 *             </li>
 *             <li>
 *                <p>The configuration: the latest data intended for the session. This may be empty if
 *                the client already has the latest version of the configuration.</p>
 *             </li>
 *          </ul>
 *          <p>For more information and to view example CLI commands that show how to retrieve a
 *          configuration using the AppConfig Data <code>StartConfigurationSession</code> and
 *             <code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Receiving the
 *             configuration</a> in the <i>AppConfig User Guide</i>.</p>
 */
export class AppConfigData extends AppConfigDataClient {
  /**
   * <p>Retrieves the latest deployed configuration. This API may return empty configuration
   *          data if the client already has the latest version. For more information about this API
   *          action and to view example CLI commands that show how to use it with the <a>StartConfigurationSession</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Receiving the
   *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
   *          <important>
   *             <p>Note the following important information.</p>
   *             <ul>
   *                <li>
   *                   <p>Each configuration token is only valid for one call to <code>GetLatestConfiguration</code>.
   *                   The <code>GetLatestConfiguration</code> response includes a <code>NextPollConfigurationToken</code> that
   *                   should always replace the token used for the just-completed call in preparation
   *                   for the next one. </p>
   *                </li>
   *                <li>
   *                   <p>
   *                      <code>GetLatestConfiguration</code> is a priced call. For more information, see
   *                      <a href="https://aws.amazon.com/systems-manager/pricing/">Pricing</a>.</p>
   *                </li>
   *             </ul>
   *          </important>
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
   * <p>Starts a configuration session used to retrieve a deployed configuration. For more
   *          information about this API action and to view example CLI commands that show how to use
   *          it with the <a>GetLatestConfiguration</a> API action, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Receiving the
   *             configuration</a> in the <i>AppConfig User Guide</i>. </p>
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
