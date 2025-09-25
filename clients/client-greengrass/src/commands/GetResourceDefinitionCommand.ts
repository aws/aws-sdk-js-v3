// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetResourceDefinitionRequest, GetResourceDefinitionResponse } from "../models/models_0";
import { GetResourceDefinition } from "../schemas/schemas_33_GetResourceDefinition";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetResourceDefinitionCommand}.
 */
export interface GetResourceDefinitionCommandInput extends GetResourceDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetResourceDefinitionCommand}.
 */
export interface GetResourceDefinitionCommandOutput extends GetResourceDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a resource definition, including its creation time and latest version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetResourceDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetResourceDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetResourceDefinitionRequest
 *   ResourceDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetResourceDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetResourceDefinitionResponse
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
 * @param GetResourceDefinitionCommandInput - {@link GetResourceDefinitionCommandInput}
 * @returns {@link GetResourceDefinitionCommandOutput}
 * @see {@link GetResourceDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetResourceDefinitionCommandOutput} for command's `response` shape.
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
export class GetResourceDefinitionCommand extends $Command
  .classBuilder<
    GetResourceDefinitionCommandInput,
    GetResourceDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetResourceDefinition", {})
  .n("GreengrassClient", "GetResourceDefinitionCommand")
  .sc(GetResourceDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetResourceDefinitionRequest;
      output: GetResourceDefinitionResponse;
    };
    sdk: {
      input: GetResourceDefinitionCommandInput;
      output: GetResourceDefinitionCommandOutput;
    };
  };
}
