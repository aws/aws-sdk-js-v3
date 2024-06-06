// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RestartAppServerMessage } from "../models/models_0";
import { de_RestartAppServerCommand, se_RestartAppServerCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To restart application servers
 * ```javascript
 * // The following operation restarts application servers on all instances in an environment named my-env:
 * const input = {
 *   "EnvironmentName": "my-env"
 * };
 * const command = new RestartAppServerCommand(input);
 * await client.send(command);
 * // example id: to-restart-application-servers-1456277739302
 * ```
 *
 */
export class RestartAppServerCommand extends $Command
  .classBuilder<
    RestartAppServerCommandInput,
    RestartAppServerCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "RestartAppServer", {})
  .n("ElasticBeanstalkClient", "RestartAppServerCommand")
  .f(void 0, void 0)
  .ser(se_RestartAppServerCommand)
  .de(de_RestartAppServerCommand)
  .build() {}
