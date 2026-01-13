// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import type { DeleteSecurityConfigurationRequest, DeleteSecurityConfigurationResponse } from "../models/models_1";
import { DeleteSecurityConfiguration$ } from "../schemas/schemas_0";

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
export interface DeleteSecurityConfigurationCommandOutput extends DeleteSecurityConfigurationResponse, __MetadataBearer {}

/**
 * <p>Deletes a specified security configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteSecurityConfigurationCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteSecurityConfigurationCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * // import type { GlueClientConfig } from "@aws-sdk/client-glue";
 * const config = {}; // type is GlueClientConfig
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSGlue", "DeleteSecurityConfiguration", {})
  .n("GlueClient", "DeleteSecurityConfigurationCommand")
  .sc(DeleteSecurityConfiguration$)
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
