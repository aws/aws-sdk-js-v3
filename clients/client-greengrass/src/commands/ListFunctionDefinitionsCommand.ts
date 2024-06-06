// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/models_0";
import { de_ListFunctionDefinitionsCommand, se_ListFunctionDefinitionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListFunctionDefinitionsCommand}.
 */
export interface ListFunctionDefinitionsCommandInput extends ListFunctionDefinitionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionDefinitionsCommand}.
 */
export interface ListFunctionDefinitionsCommandOutput extends ListFunctionDefinitionsResponse, __MetadataBearer {}

/**
 * Retrieves a list of Lambda function definitions.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListFunctionDefinitionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListFunctionDefinitionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const input = { // ListFunctionDefinitionsRequest
 *   MaxResults: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListFunctionDefinitionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionDefinitionsResponse
 * //   Definitions: [ // __listOfDefinitionInformation
 * //     { // DefinitionInformation
 * //       Arn: "STRING_VALUE",
 * //       CreationTimestamp: "STRING_VALUE",
 * //       Id: "STRING_VALUE",
 * //       LastUpdatedTimestamp: "STRING_VALUE",
 * //       LatestVersion: "STRING_VALUE",
 * //       LatestVersionArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionDefinitionsCommandInput - {@link ListFunctionDefinitionsCommandInput}
 * @returns {@link ListFunctionDefinitionsCommandOutput}
 * @see {@link ListFunctionDefinitionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionDefinitionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for GreengrassClient's `config` shape.
 *
 * @throws {@link GreengrassServiceException}
 * <p>Base exception class for all service exceptions from Greengrass service.</p>
 *
 * @public
 */
export class ListFunctionDefinitionsCommand extends $Command
  .classBuilder<
    ListFunctionDefinitionsCommandInput,
    ListFunctionDefinitionsCommandOutput,
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
  .s("Greengrass", "ListFunctionDefinitions", {})
  .n("GreengrassClient", "ListFunctionDefinitionsCommand")
  .f(void 0, void 0)
  .ser(se_ListFunctionDefinitionsCommand)
  .de(de_ListFunctionDefinitionsCommand)
  .build() {}
