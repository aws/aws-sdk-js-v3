// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { GetConnectorDefinitionRequest, GetConnectorDefinitionResponse } from "../models/models_0";
import { GetConnectorDefinition } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandInput extends GetConnectorDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetConnectorDefinitionCommand}.
 */
export interface GetConnectorDefinitionCommandOutput extends GetConnectorDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a connector definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetConnectorDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetConnectorDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetConnectorDefinitionRequest
 *   ConnectorDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetConnectorDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetConnectorDefinitionResponse
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
 * @param GetConnectorDefinitionCommandInput - {@link GetConnectorDefinitionCommandInput}
 * @returns {@link GetConnectorDefinitionCommandOutput}
 * @see {@link GetConnectorDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetConnectorDefinitionCommandOutput} for command's `response` shape.
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
export class GetConnectorDefinitionCommand extends $Command
  .classBuilder<
    GetConnectorDefinitionCommandInput,
    GetConnectorDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetConnectorDefinition", {})
  .n("GreengrassClient", "GetConnectorDefinitionCommand")
  .sc(GetConnectorDefinition)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetConnectorDefinitionRequest;
      output: GetConnectorDefinitionResponse;
    };
    sdk: {
      input: GetConnectorDefinitionCommandInput;
      output: GetConnectorDefinitionCommandOutput;
    };
  };
}
