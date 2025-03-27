// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSubscriptionDefinitionRequest, CreateSubscriptionDefinitionResponse } from "../models/models_0";
import {
  de_CreateSubscriptionDefinitionCommand,
  se_CreateSubscriptionDefinitionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSubscriptionDefinitionCommand}.
 */
export interface CreateSubscriptionDefinitionCommandInput extends CreateSubscriptionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link CreateSubscriptionDefinitionCommand}.
 */
export interface CreateSubscriptionDefinitionCommandOutput
  extends CreateSubscriptionDefinitionResponse,
    __MetadataBearer {}

/**
 * Creates a subscription definition. You may provide the initial version of the subscription definition now or use ''CreateSubscriptionDefinitionVersion'' at a later time.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, CreateSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, CreateSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // CreateSubscriptionDefinitionRequest
 *   AmznClientToken: "STRING_VALUE",
 *   InitialVersion: { // SubscriptionDefinitionVersion
 *     Subscriptions: [ // __listOfSubscription
 *       { // Subscription
 *         Id: "STRING_VALUE", // required
 *         Source: "STRING_VALUE", // required
 *         Subject: "STRING_VALUE", // required
 *         Target: "STRING_VALUE", // required
 *       },
 *     ],
 *   },
 *   Name: "STRING_VALUE",
 *   tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreateSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // CreateSubscriptionDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSubscriptionDefinitionCommandInput - {@link CreateSubscriptionDefinitionCommandInput}
 * @returns {@link CreateSubscriptionDefinitionCommandOutput}
 * @see {@link CreateSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link CreateSubscriptionDefinitionCommandOutput} for command's `response` shape.
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
export class CreateSubscriptionDefinitionCommand extends $Command
  .classBuilder<
    CreateSubscriptionDefinitionCommandInput,
    CreateSubscriptionDefinitionCommandOutput,
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
  .s("Greengrass", "CreateSubscriptionDefinition", {})
  .n("GreengrassClient", "CreateSubscriptionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_CreateSubscriptionDefinitionCommand)
  .de(de_CreateSubscriptionDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSubscriptionDefinitionRequest;
      output: CreateSubscriptionDefinitionResponse;
    };
    sdk: {
      input: CreateSubscriptionDefinitionCommandInput;
      output: CreateSubscriptionDefinitionCommandOutput;
    };
  };
}
