// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionVersionRequest, GetSubscriptionDefinitionVersionResponse } from "../models/models_0";
import {
  de_GetSubscriptionDefinitionVersionCommand,
  se_GetSubscriptionDefinitionVersionCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionDefinitionVersionCommand}.
 */
export interface GetSubscriptionDefinitionVersionCommandInput extends GetSubscriptionDefinitionVersionRequest {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionDefinitionVersionCommand}.
 */
export interface GetSubscriptionDefinitionVersionCommandOutput
  extends GetSubscriptionDefinitionVersionResponse,
    __MetadataBearer {}

/**
 * Retrieves information about a subscription definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionVersionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionVersionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetSubscriptionDefinitionVersionRequest
 *   NextToken: "STRING_VALUE",
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 *   SubscriptionDefinitionVersionId: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionDefinitionVersionCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionDefinitionVersionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Definition: { // SubscriptionDefinitionVersion
 * //     Subscriptions: [ // __listOfSubscription
 * //       { // Subscription
 * //         Id: "STRING_VALUE", // required
 * //         Source: "STRING_VALUE", // required
 * //         Subject: "STRING_VALUE", // required
 * //         Target: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   Id: "STRING_VALUE",
 * //   NextToken: "STRING_VALUE",
 * //   Version: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetSubscriptionDefinitionVersionCommandInput - {@link GetSubscriptionDefinitionVersionCommandInput}
 * @returns {@link GetSubscriptionDefinitionVersionCommandOutput}
 * @see {@link GetSubscriptionDefinitionVersionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionVersionCommandOutput} for command's `response` shape.
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
export class GetSubscriptionDefinitionVersionCommand extends $Command
  .classBuilder<
    GetSubscriptionDefinitionVersionCommandInput,
    GetSubscriptionDefinitionVersionCommandOutput,
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
  .s("Greengrass", "GetSubscriptionDefinitionVersion", {})
  .n("GreengrassClient", "GetSubscriptionDefinitionVersionCommand")
  .f(void 0, void 0)
  .ser(se_GetSubscriptionDefinitionVersionCommand)
  .de(de_GetSubscriptionDefinitionVersionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionDefinitionVersionRequest;
      output: GetSubscriptionDefinitionVersionResponse;
    };
    sdk: {
      input: GetSubscriptionDefinitionVersionCommandInput;
      output: GetSubscriptionDefinitionVersionCommandOutput;
    };
  };
}
