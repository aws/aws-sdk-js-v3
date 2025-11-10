// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionVersionsRequest, ListFunctionDefinitionVersionsResponse } from "../models/models_0";
import { ListFunctionDefinitionVersions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionDefinitionVersionsCommand}.
 */
export interface ListFunctionDefinitionVersionsCommandInput extends ListFunctionDefinitionVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionDefinitionVersionsCommand}.
 */
export interface ListFunctionDefinitionVersionsCommandOutput
  extends ListFunctionDefinitionVersionsResponse,
    __MetadataBearer {}

/**
 * Lists the versions of a Lambda function definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
 * const client = new GreengrassClient(config);
 * const input = { // ListFunctionDefinitionVersionsRequest
 *   FunctionDefinitionId: "STRING_VALUE", // required
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFunctionDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionDefinitionVersionsResponse
 * //   NextToken: "STRING_VALUE",
 * //   Versions: [ // __listOfVersionInformation
 * //     { // VersionInformation
 * //       Arn: "STRING_VALUE",
 * //       CreationTimestamp: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       Version: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListFunctionDefinitionVersionsCommandInput - {@link ListFunctionDefinitionVersionsCommandInput}
 * @returns {@link ListFunctionDefinitionVersionsCommandOutput}
 * @see {@link ListFunctionDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionVersionsCommandOutput} for command's `response` shape.
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
export class ListFunctionDefinitionVersionsCommand extends $Command
  .classBuilder<
    ListFunctionDefinitionVersionsCommandInput,
    ListFunctionDefinitionVersionsCommandOutput,
    GreengrassClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GreengrassClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Greengrass", "ListFunctionDefinitionVersions", {})
  .n("GreengrassClient", "ListFunctionDefinitionVersionsCommand")
  .sc(ListFunctionDefinitionVersions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionDefinitionVersionsRequest;
      output: ListFunctionDefinitionVersionsResponse;
    };
    sdk: {
      input: ListFunctionDefinitionVersionsCommandInput;
      output: ListFunctionDefinitionVersionsCommandOutput;
    };
  };
}
