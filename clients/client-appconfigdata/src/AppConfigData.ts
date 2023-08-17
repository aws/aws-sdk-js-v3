// smithy-typescript generated code
import { createAggregatedClient } from "@smithy/smithy-client";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@smithy/types";

import { AppConfigDataClient, AppConfigDataClientConfig } from "./AppConfigDataClient";
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

const commands = {
  GetLatestConfigurationCommand,
  StartConfigurationSessionCommand,
};

export interface AppConfigData {
  /**
   * @see {@link GetLatestConfigurationCommand}
   */
  getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<GetLatestConfigurationCommandOutput>;
  getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    cb: (err: any, data?: GetLatestConfigurationCommandOutput) => void
  ): void;
  getLatestConfiguration(
    args: GetLatestConfigurationCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: GetLatestConfigurationCommandOutput) => void
  ): void;

  /**
   * @see {@link StartConfigurationSessionCommand}
   */
  startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    options?: __HttpHandlerOptions
  ): Promise<StartConfigurationSessionCommandOutput>;
  startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    cb: (err: any, data?: StartConfigurationSessionCommandOutput) => void
  ): void;
  startConfigurationSession(
    args: StartConfigurationSessionCommandInput,
    options: __HttpHandlerOptions,
    cb: (err: any, data?: StartConfigurationSessionCommandOutput) => void
  ): void;
}

/**
 * @public
 * <p>AppConfig Data provides the data plane APIs your application uses to retrieve
 *          configuration data. Here's how it works:</p>
 *          <p>Your application retrieves configuration data by first establishing a configuration
 *          session using the AppConfig Data <a>StartConfigurationSession</a> API action.
 *          Your session's client then makes periodic calls to <a>GetLatestConfiguration</a>
 *          to check for and retrieve the latest data available.</p>
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
 *          <important>
 *             <p>This token should only be used once in your first call to
 *                <code>GetLatestConfiguration</code>. You <i>must</i> use the new token
 *             in the <code>GetLatestConfiguration</code> response
 *                (<code>NextPollConfigurationToken</code>) in each subsequent call to
 *                <code>GetLatestConfiguration</code>.</p>
 *          </important>
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
 *          <important>
 *             <p>The <code>InitialConfigurationToken</code> and
 *             <code>NextPollConfigurationToken</code> should only be used once. To support long poll
 *             use cases, the tokens are valid for up to 24 hours. If a
 *             <code>GetLatestConfiguration</code> call uses an expired token, the system returns
 *             <code>BadRequestException</code>.</p>
 *          </important>
 *          <p>For more information and to view example CLI commands that show how to retrieve a
 *          configuration using the AppConfig Data <code>StartConfigurationSession</code> and
 *             <code>GetLatestConfiguration</code> API actions, see <a href="http://docs.aws.amazon.com/appconfig/latest/userguide/appconfig-retrieving-the-configuration">Retrieving the
 *             configuration</a> in the <i>AppConfig User Guide</i>.</p>
 */
export class AppConfigData extends AppConfigDataClient implements AppConfigData {}
createAggregatedClient(commands, AppConfigData);
