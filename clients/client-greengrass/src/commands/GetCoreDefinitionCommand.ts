// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { GetCoreDefinitionRequest, GetCoreDefinitionResponse } from "../models/models_0";
import { GetCoreDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetCoreDefinitionCommand}.
 */
export interface GetCoreDefinitionCommandInput extends GetCoreDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetCoreDefinitionCommand}.
 */
export interface GetCoreDefinitionCommandOutput extends GetCoreDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a core definition version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetCoreDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetCoreDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetCoreDefinitionRequest
 *   CoreDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetCoreDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetCoreDefinitionResponse
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
 * @param GetCoreDefinitionCommandInput - {@link GetCoreDefinitionCommandInput}
 * @returns {@link GetCoreDefinitionCommandOutput}
 * @see {@link GetCoreDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetCoreDefinitionCommandOutput} for command's `response` shape.
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
export class GetCoreDefinitionCommand extends $Command
  .classBuilder<
    GetCoreDefinitionCommandInput,
    GetCoreDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetCoreDefinition", {})
  .n("GreengrassClient", "GetCoreDefinitionCommand")
  .sc(GetCoreDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetCoreDefinitionRequest;
      output: GetCoreDefinitionResponse;
    };
    sdk: {
      input: GetCoreDefinitionCommandInput;
      output: GetCoreDefinitionCommandOutput;
    };
  };
}
