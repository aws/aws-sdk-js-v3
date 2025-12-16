// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type {
  CreateSubscriptionDefinitionVersionRequest,
  CreateSubscriptionDefinitionVersionResponse,
} from "../models/models_0";
import { CreateSubscriptionDefinitionVersion$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionDefinitionVersionCommand}.
 */
export interface CreateSubscriptionDefinitionVersionCommandInput extends CreateSubscriptionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionDefinitionVersionCommand}.
 */
export interface CreateSubscriptionDefinitionVersionCommandOutput
  extends CreateSubscriptionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Creates a version of a subscription definition which has already been defined.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // CreateSubscriptionDefinitionVersionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 *   Subscriptions: [ // __listOfSubscription
 *     { // Subscription
 *       Id: "STRING_VALUE", // required
 *       Source: "STRING_VALUE", // required
 *       Subject: "STRING_VALUE", // required
 *       Target: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionDefinitionVersionCommandInput - {@link CreateSubscriptionDefinitionVersionCommandInput}
 * @returns {@link CreateSubscriptionDefinitionVersionCommandOutput}
 * @see {@link CreateSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
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
export class CreateSubscriptionDefinitionVersionCommand extends $Command
  .classBuilder<
    CreateSubscriptionDefinitionVersionCommandInput,
    CreateSubscriptionDefinitionVersionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "CreateSubscriptionDefinitionVersion", {})
  .n("GreengrassClient", "CreateSubscriptionDefinitionVersionCommand")
  .sc(CreateSubscriptionDefinitionVersion$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionDefinitionVersionRequest;
      output: CreateSubscriptionDefinitionVersionResponse;
    };
    sdk: {
      input: CreateSubscriptionDefinitionVersionCommandInput;
      output: CreateSubscriptionDefinitionVersionCommandOutput;
    };
  };
}
