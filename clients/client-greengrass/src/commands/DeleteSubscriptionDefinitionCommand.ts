// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/models_0";
import { DeleteSubscriptionDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteSubscriptionDefinitionCommand}.
 */
export interface DeleteSubscriptionDefinitionCommandInput extends DeleteSubscriptionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSubscriptionDefinitionCommand}.
 */
export interface DeleteSubscriptionDefinitionCommandOutput
  extends DeleteSubscriptionDefinitionResponse,
    __MetadataBearer {}

/**
 * Deletes a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, DeleteSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, DeleteSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // DeleteSubscriptionDefinitionRequest
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteSubscriptionDefinitionCommandInput - {@link DeleteSubscriptionDefinitionCommandInput}
 * @returns {@link DeleteSubscriptionDefinitionCommandOutput}
 * @see {@link DeleteSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionDefinitionCommandOutput} for command's `response` shape.
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
export class DeleteSubscriptionDefinitionCommand extends $Command
  .classBuilder<
    DeleteSubscriptionDefinitionCommandInput,
    DeleteSubscriptionDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "DeleteSubscriptionDefinition", {})
  .n("GreengrassClient", "DeleteSubscriptionDefinitionCommand")
  .sc(DeleteSubscriptionDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSubscriptionDefinitionRequest;
      output: {};
    };
    sdk: {
      input: DeleteSubscriptionDefinitionCommandInput;
      output: DeleteSubscriptionDefinitionCommandOutput;
    };
  };
}
