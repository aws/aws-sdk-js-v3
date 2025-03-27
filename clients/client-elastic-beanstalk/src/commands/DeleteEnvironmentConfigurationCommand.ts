// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteEnvironmentConfigurationMessage } from "../models/models_0";
import {
  de_DeleteEnvironmentConfigurationCommand,
  se_DeleteEnvironmentConfigurationCommand,
} from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteEnvironmentConfigurationCommand}.
 */
export interface DeleteEnvironmentConfigurationCommandInput extends DeleteEnvironmentConfigurationMessage {}
/**
 * @public
 *
 * The output of {@link DeleteEnvironmentConfigurationCommand}.
 */
export interface DeleteEnvironmentConfigurationCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the draft configuration associated with the running environment.</p>
 *          <p>Updating a running environment with any configuration changes creates a draft
 *       configuration set. You can get the draft configuration using <a>DescribeConfigurationSettings</a> while the update is in progress or if the update
 *       fails. The <code>DeploymentStatus</code> for the draft configuration indicates whether the
 *       deployment is in process or has failed. The draft configuration remains in existence until it
 *       is deleted with this action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteEnvironmentConfigurationCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteEnvironmentConfigurationCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DeleteEnvironmentConfigurationMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   EnvironmentName: "STRING_VALUE", // required
 * };
 * const command = new DeleteEnvironmentConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteEnvironmentConfigurationCommandInput - {@link DeleteEnvironmentConfigurationCommandInput}
 * @returns {@link DeleteEnvironmentConfigurationCommandOutput}
 * @see {@link DeleteEnvironmentConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteEnvironmentConfigurationCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 *
 * @example To delete a draft configuration
 * ```javascript
 * // The following operation deletes a draft configuration for an environment named my-env:
 * const input = {
 *   ApplicationName: "my-app",
 *   EnvironmentName: "my-env"
 * };
 * const command = new DeleteEnvironmentConfigurationCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DeleteEnvironmentConfigurationCommand extends $Command
  .classBuilder<
    DeleteEnvironmentConfigurationCommandInput,
    DeleteEnvironmentConfigurationCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DeleteEnvironmentConfiguration", {})
  .n("ElasticBeanstalkClient", "DeleteEnvironmentConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteEnvironmentConfigurationCommand)
  .de(de_DeleteEnvironmentConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteEnvironmentConfigurationMessage;
      output: {};
    };
    sdk: {
      input: DeleteEnvironmentConfigurationCommandInput;
      output: DeleteEnvironmentConfigurationCommandOutput;
    };
  };
}
