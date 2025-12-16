// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import type { GetLoggerDefinitionRequest, GetLoggerDefinitionResponse } from "../models/models_0";
import { GetLoggerDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetLoggerDefinitionCommand}.
 */
export interface GetLoggerDefinitionCommandInput extends GetLoggerDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetLoggerDefinitionCommand}.
 */
export interface GetLoggerDefinitionCommandOutput extends GetLoggerDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a logger definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetLoggerDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetLoggerDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // GetLoggerDefinitionRequest
 *   LoggerDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetLoggerDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetLoggerDefinitionResponse
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
 * @param GetLoggerDefinitionCommandInput - {@link GetLoggerDefinitionCommandInput}
 * @returns {@link GetLoggerDefinitionCommandOutput}
 * @see {@link GetLoggerDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetLoggerDefinitionCommandOutput} for command's `response` shape.
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
export class GetLoggerDefinitionCommand extends $Command
  .classBuilder<
    GetLoggerDefinitionCommandInput,
    GetLoggerDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "GetLoggerDefinition", {})
  .n("GreengrassClient", "GetLoggerDefinitionCommand")
  .sc(GetLoggerDefinition$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetLoggerDefinitionRequest;
      output: GetLoggerDefinitionResponse;
    };
    sdk: {
      input: GetLoggerDefinitionCommandInput;
      output: GetLoggerDefinitionCommandOutput;
    };
  };
}
