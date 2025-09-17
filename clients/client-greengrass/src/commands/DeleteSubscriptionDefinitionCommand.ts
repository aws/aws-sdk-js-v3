// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { DeleteSubscriptionDefinitionRequest, DeleteSubscriptionDefinitionResponse } from "../models/models_0";
import {
  de_DeleteSubscriptionDefinitionCommand,
  se_DeleteSubscriptionDefinitionCommand,
} from "../protocols/Aws_restJson1";

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
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "DeleteSubscriptionDefinition", {})
  .n("GreengrassClient", "DeleteSubscriptionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_DeleteSubscriptionDefinitionCommand)
  .de(de_DeleteSubscriptionDefinitionCommand)
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
