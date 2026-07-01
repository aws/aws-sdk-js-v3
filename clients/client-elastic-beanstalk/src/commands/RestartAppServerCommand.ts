// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RestartAppServerMessage } from "../models/models_0";
import { RestartAppServer$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RestartAppServerCommand}.
 */
export interface RestartAppServerCommandInput extends RestartAppServerMessage {}
/**
 * @public
 *
 * The output of {@link RestartAppServerCommand}.
 */
export interface RestartAppServerCommandOutput extends __MetadataBearer {}

/**
 * <p>Causes the environment to restart the application container server running on each
 *       Amazon EC2 instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RestartAppServerCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RestartAppServerCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // import type { ElasticBeanstalkClientConfig } from "@aws-sdk/client-elastic-beanstalk";
 * const config = {}; // type is ElasticBeanstalkClientConfig
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // RestartAppServerMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new RestartAppServerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RestartAppServerCommandInput - {@link RestartAppServerCommandInput}
 * @returns {@link RestartAppServerCommandOutput}
 * @see {@link RestartAppServerCommandInput} for command's `input` shape.
 * @see {@link RestartAppServerCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkSyntheticServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To restart application servers
 * ```javascript
 * // The following operation restarts application servers on all instances in an environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new RestartAppServerCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RestartAppServerCommand extends command<RestartAppServerCommandInput, RestartAppServerCommandOutput>(
  _ep0,
  _mw0,
  "RestartAppServer",
  RestartAppServer$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RestartAppServerMessage;
      output: {};
    };
    sdk: {
      input: RestartAppServerCommandInput;
      output: RestartAppServerCommandOutput;
    };
  };
}
