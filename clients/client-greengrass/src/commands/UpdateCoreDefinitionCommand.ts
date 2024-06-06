// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateCoreDefinitionRequest, UpdateCoreDefinitionResponse } from "../models/models_0";
import { de_UpdateCoreDefinitionCommand, se_UpdateCoreDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCoreDefinitionCommand}.
 */
export interface UpdateCoreDefinitionCommandInput extends UpdateCoreDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCoreDefinitionCommand}.
 */
export interface UpdateCoreDefinitionCommandOutput extends UpdateCoreDefinitionResponse, __MetadataBearer {}

/**
 * Updates a core definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // UpdateCoreDefinitionRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 * };
 * const command = new UpdateCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCoreDefinitionCommandInput - {@link UpdateCoreDefinitionCommandInput}
 * @returns {@link UpdateCoreDefinitionCommandOutput}
 * @see {@link UpdateCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateCoreDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class UpdateCoreDefinitionCommand extends $Command
  .classBuilder<
    UpdateCoreDefinitionCommandInput,
    UpdateCoreDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateCoreDefinition", {})
  .n("GreengrassClient", "UpdateCoreDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateCoreDefinitionCommand)
  .de(de_UpdateCoreDefinitionCommand)
  .build() {}
