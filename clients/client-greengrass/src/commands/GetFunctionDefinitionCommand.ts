// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { GetFunctionDefinitionRequest, GetFunctionDefinitionResponse } from "../models/models_0";
import { de_GetFunctionDefinitionCommand, se_GetFunctionDefinitionCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetFunctionDefinitionCommand}.
 */
export interface GetFunctionDefinitionCommandInput extends GetFunctionDefinitionRequest {}
/**
 * @public
 *
 * The output of {@link GetFunctionDefinitionCommand}.
 */
export interface GetFunctionDefinitionCommandOutput extends GetFunctionDefinitionResponse, __MetadataBearer {}

/**
 * Retrieves information about a Lambda function definition, including its creation time and latest version.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, GetFunctionDefinitionCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, GetFunctionDefinitionCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // GetFunctionDefinitionRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 * };
 * const command = new GetFunctionDefinitionCommand(input);
 * const response = await client.send(command);
 * // { // GetFunctionDefinitionResponse
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
 * @param GetFunctionDefinitionCommandInput - {@link GetFunctionDefinitionCommandInput}
 * @returns {@link GetFunctionDefinitionCommandOutput}
 * @see {@link GetFunctionDefinitionCommandInput} for command's `input` shape.
 * @see {@link GetFunctionDefinitionCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  General error information.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class GetFunctionDefinitionCommand extends $Command
  .classBuilder<
    GetFunctionDefinitionCommandInput,
    GetFunctionDefinitionCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Greengrass", "GetFunctionDefinition", {})
  .n("GreengrassClient", "GetFunctionDefinitionCommand")
  .f(void 0, void 0)
  .ser(se_GetFunctionDefinitionCommand)
  .de(de_GetFunctionDefinitionCommand)
  .build() {}
