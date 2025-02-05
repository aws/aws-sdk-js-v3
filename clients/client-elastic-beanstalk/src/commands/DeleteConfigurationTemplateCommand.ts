// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElasticBeanstalkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElasticBeanstalkClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteConfigurationTemplateMessage } from "../models/models_0";
import { de_DeleteConfigurationTemplateCommand, se_DeleteConfigurationTemplateCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteConfigurationTemplateCommand}.
 */
export interface DeleteConfigurationTemplateCommandInput extends DeleteConfigurationTemplateMessage {}
/**
 * @public
 *
 * The output of {@link DeleteConfigurationTemplateCommand}.
 */
export interface DeleteConfigurationTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the specified configuration template.</p>
 *          <note>
 *             <p>When you launch an environment using a configuration template, the environment gets a
 *         copy of the template. You can delete or modify the environment's copy of the template
 *         without affecting the running environment.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } from "@aws-sdk/client-elastic-beanstalk"; // ES Modules import
 * // const { ElasticBeanstalkClient, DeleteConfigurationTemplateCommand } = require("@aws-sdk/client-elastic-beanstalk"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticBeanstalkClient(config);
 * const input = { // DeleteConfigurationTemplateMessage
 *   ApplicationName: "STRING_VALUE", // required
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteConfigurationTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteConfigurationTemplateCommandInput - {@link DeleteConfigurationTemplateCommandInput}
 * @returns {@link DeleteConfigurationTemplateCommandOutput}
 * @see {@link DeleteConfigurationTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteConfigurationTemplateCommandOutput} for command's `response` shape.
 * @see {@link ElasticBeanstalkClientResolvedConfig | config} for ElasticBeanstalkClient's `config` shape.
 *
 * @throws {@link OperationInProgressException} (client fault)
 *  <p>Unable to perform the specified operation because another operation that effects an
 *       element in this activity is already in progress.</p>
 *
 * @throws {@link ElasticBeanstalkServiceException}
 * <p>Base exception class for all service exceptions from ElasticBeanstalk service.</p>
 *
 * @public
 * @example To delete a configuration template
 * ```javascript
 * // The following operation deletes a configuration template named my-template for an application named my-app:
 * const input = {
 *   "ApplicationName": "my-app",
 *   "TemplateName": "my-template"
 * };
 * const command = new DeleteConfigurationTemplateCommand(input);
 * await client.send(command);
 * // example id: to-delete-a-configuration-template-1456269836701
 * ```
 *
 */
export class DeleteConfigurationTemplateCommand extends $Command
  .classBuilder<
    DeleteConfigurationTemplateCommandInput,
    DeleteConfigurationTemplateCommandOutput,
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
  .s("AWSElasticBeanstalkService", "DeleteConfigurationTemplate", {})
  .n("ElasticBeanstalkClient", "DeleteConfigurationTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteConfigurationTemplateCommand)
  .de(de_DeleteConfigurationTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteConfigurationTemplateMessage;
      output: {};
    };
    sdk: {
      input: DeleteConfigurationTemplateCommandInput;
      output: DeleteConfigurationTemplateCommandOutput;
    };
  };
}
