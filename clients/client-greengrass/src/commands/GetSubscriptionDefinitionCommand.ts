// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetSubscriptionDefinitionRequest, GetSubscriptionDefinitionResponse } from "../models/models_0";
import { de_GetSubscriptionDefinitionCommand, se_GetSubscriptionDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetSubscriptionDefinitionCommand}.
 */
export interface GetSubscriptionDefinitionCommandInput extends GetSubscriptionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetSubscriptionDefinitionCommand}.
 */
export interface GetSubscriptionDefinitionCommandOutput extends GetSubscriptionDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a subscription definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetSubscriptionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetSubscriptionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetSubscriptionDefinitionRequest
 *   SubscriptionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetSubscriptionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetSubscriptionDefinitionResponse
 * //   Arn: "STRING_VALUE",
 * //   CreationTimestamp: "STRING_VALUE",
 * //   Id: "STRING_VALUE",
 * //   LastUpdatedTimestamp: "STRING_VALUE",
 * //   LatestVersion: "STRING_VALUE",
 * //   LatestVersionArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSubscriptionDefinitionCommandInput - {@link GetSubscriptionDefinitionCommandInput}
 * @returns {@link GetSubscriptionDefinitionCommandOutput}
 * @see {@link GetSubscriptionDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetSubscriptionDefinitionCommandOutput} for command's `response` shape.
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
export class GetSubscriptionDefinitionCommand extends $Command
  .classBuilder<
    GetSubscriptionDefinitionCommandInput,
    GetSubscriptionDefinitionCommandOutput,
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
  .s("Greengrass", "GetSubscriptionDefinition", {})
  .n("GreengrassClient", "GetSubscriptionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetSubscriptionDefinitionCommand)
  .de(de_GetSubscriptionDefinitionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSubscriptionDefinitionRequest;
      output: GetSubscriptionDefinitionResponse;
    };
    sdk: {
      input: GetSubscriptionDefinitionCommandInput;
      output: GetSubscriptionDefinitionCommandOutput;
    };
  };
}
