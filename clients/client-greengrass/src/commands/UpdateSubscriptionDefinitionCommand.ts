// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { UpdateSubscriptionDefinitionRequest, UpdateSubscriptionDefinitionResponse } from "../models/models_0";
import {
  de_UpdateSubscriptionDefinitionCommand,
  se_UpdateSubscriptionDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSubscriptionDefinitionCommand}.
 */
export interface UpdateSubscriptionDefinitionCommandInput extends UpdateSubscriptionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSubscriptionDefinitionCommand}.
 */
export interface UpdateSubscriptionDefinitionCommandOutput
  extends UpdateSubscriptionDefinitionResponse,
    __MetadataBearer {}

/**
 * Updates a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, UpdateSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, UpdateSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // UpdateSubscriptionDefinitionRequest
 *   Name: "STRING_VALUE",
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new UpdateSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSubscriptionDefinitionCommandInput - {@link UpdateSubscriptionDefinitionCommandInput}
 * @returns {@link UpdateSubscriptionDefinitionCommandOutput}
 * @see {@link UpdateSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link UpdateSubscriptionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 *
 * @public
 */
export class UpdateSubscriptionDefinitionCommand extends $Command
  .classBuilder<
    UpdateSubscriptionDefinitionCommandInput,
    UpdateSubscriptionDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "UpdateSubscriptionDefinition", {})
  .n("GreengrassClient", "UpdateSubscriptionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSubscriptionDefinitionCommand)
  .de(de_UpdateSubscriptionDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSubscriptionDefinitionRequest;
      output: {};
    };
    sdk: {
      input: UpdateSubscriptionDefinitionCommandInput;
      output: UpdateSubscriptionDefinitionCommandOutput;
    };
  };
}
