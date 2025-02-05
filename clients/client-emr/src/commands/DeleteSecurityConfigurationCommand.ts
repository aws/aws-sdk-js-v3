// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteSecurityConfigurationInput, DeleteSecurityConfigurationOutput } from "../models/models_0";
import { de_DeleteSecurityConfigurationCommand, se_DeleteSecurityConfigurationCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSecurityConfigurationCommand}.
 */
export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationInput {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityConfigurationCommand}.
 */
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationOutput, __MetadataBearer {}

/**
 * <p>Deletes a security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EMRClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-emr"; // ES Modules import
 * // const { EMRClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-emr"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new EMRClient(config);
 * const input = { // DeleteSecurityConfigurationInput
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new DeleteSecurityConfigurationCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSecurityConfigurationCommandInput - {@link DeleteSecurityConfigurationCommandInput}
 * @returns {@link DeleteSecurityConfigurationCommandOutput}
 * @see {@link DeleteSecurityConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteSecurityConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EMRClientResolvedConfig | config} for EMRClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>This exception occurs when there is an internal failure in the Amazon EMR
 *          service.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>This exception occurs when there is something wrong with user input.</p>
 *
 * @throws {@link EMRServiceException}
 * <p>Base exception class for all service exceptions from EMR service.</p>
 *
 * @public
 */
export class DeleteSecurityConfigurationCommand extends $Command
  .classBuilder<
    DeleteSecurityConfigurationCommandInput,
    DeleteSecurityConfigurationCommandOutput,
    EMRClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EMRClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticMapReduce", "DeleteSecurityConfiguration", {})
  .n("EMRClient", "DeleteSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSecurityConfigurationCommand)
  .de(de_DeleteSecurityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityConfigurationInput;
      output: {};
    };
    sdk: {
      input: DeleteSecurityConfigurationCommandInput;
      output: DeleteSecurityConfigurationCommandOutput;
    };
  };
}
