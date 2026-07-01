// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFunctionDefinitionRequest, GetFunctionDefinitionResponse } from "../models/models_0";
import { GetFunctionDefinition$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
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
 *
 * @public
 */
export class GetFunctionDefinitionCommand extends command<GetFunctionDefinitionCommandInput, GetFunctionDefinitionCommandOutput>(
  _ep0,
  _mw0,
  "GetFunctionDefinition",
  GetFunctionDefinition$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFunctionDefinitionRequest;
      output: GetFunctionDefinitionResponse;
    };
    sdk: {
      input: GetFunctionDefinitionCommandInput;
      output: GetFunctionDefinitionCommandOutput;
    };
  };
}
