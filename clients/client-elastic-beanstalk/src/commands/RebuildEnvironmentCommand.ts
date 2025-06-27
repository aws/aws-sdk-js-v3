// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { RebuildEnvironmentMessage } from "../models/models_0";
import { de_RebuildEnvironmentCommand, se_RebuildEnvironmentCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link RebuildEnvironmentCommand}.
 */
export interface RebuildEnvironmentCommandInput extends RebuildEnvironmentMessage {}
/**
 * @public
 *
 * The output of {@link RebuildEnvironmentCommand}.
 */
export interface RebuildEnvironmentCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes and recreates all of the AWS resources (for example: the Auto Scaling group,
 *       load balancer, etc.) for a specified environment and forces a restart.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, RebuildEnvironmentCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, RebuildEnvironmentCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // RebuildEnvironmentMessage
 *   EnvironmentId: "STRING_VALUE",
 *   EnvironmentName: "STRING_VALUE",
 * };
 * const command = new RebuildEnvironmentCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RebuildEnvironmentCommandInput - {@link RebuildEnvironmentCommandInput}
 * @returns {@link RebuildEnvironmentCommandOutput}
 * @see {@link RebuildEnvironmentCommandInput} for command's `input` shape.
 * @see {@link RebuildEnvironmentCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link InsufficientPrivilegesException} (client fault)
 *  <p>The specified account does not have sufficient privileges for one or more AWS
 *       services.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To rebuild an environment
 * ```javascript
 * // The following operation terminates and recreates the resources in an environment named my-env:
 * const input = {
 *   EnvironmentName: "my-env"
 * };
 * const command = new RebuildEnvironmentCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RebuildEnvironmentCommand extends $Command
  .classBuilder<
    RebuildEnvironmentCommandInput,
    RebuildEnvironmentCommandOutput,
    ElasticBeanstalkClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticBeanstalkClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSElasticBeanstalkService", "RebuildEnvironment", {})
  .n("ElasticBeanstalkClient", "RebuildEnvironmentCommand")
  .f(void 0, void 0)
  .ser(se_RebuildEnvironmentCommand)
  .de(de_RebuildEnvironmentCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RebuildEnvironmentMessage;
      output: {};
    };
    sdk: {
      input: RebuildEnvironmentCommandInput;
      output: RebuildEnvironmentCommandOutput;
    };
  };
}
