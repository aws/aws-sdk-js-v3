// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteSecurityConfigurationInput, DeleteSecurityConfigurationOutput } from "../models/models_0";
import { DeleteSecurityConfiguration } from "../schemas/schemas_0";

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
 * // import type { EMRClientConfig } from "@aws-sdk/client-emr";
 * const config = {}; // type is EMRClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ElasticMapReduce", "DeleteSecurityConfiguration", {})
  .n("EMRClient", "DeleteSecurityConfigurationCommand")
  .sc(DeleteSecurityConfiguration)
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
