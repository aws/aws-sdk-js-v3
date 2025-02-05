// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteSecurityConfigurationRequest, DeleteSecurityConfigurationResponse } from "../models/models_1";
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
export interface DeleteSecurityConfigurationCommandInput extends DeleteSecurityConfigurationRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSecurityConfigurationCommand}.
 */
export interface DeleteSecurityConfigurationCommandOutput
  extends DeleteSecurityConfigurationResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GlueClient(config);
 * const input = { // DeleteSecurityConfigurationRequest
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
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 * @public
 */
export class DeleteSecurityConfigurationCommand extends $Command
  .classBuilder<
    DeleteSecurityConfigurationCommandInput,
    DeleteSecurityConfigurationCommandOutput,
    GlueClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GlueClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSGlue", "DeleteSecurityConfiguration", {})
  .n("GlueClient", "DeleteSecurityConfigurationCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSecurityConfigurationCommand)
  .de(de_DeleteSecurityConfigurationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSecurityConfigurationRequest;
      output: {};
    };
    sdk: {
      input: DeleteSecurityConfigurationCommandInput;
      output: DeleteSecurityConfigurationCommandOutput;
    };
  };
}
