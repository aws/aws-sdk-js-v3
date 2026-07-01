// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFunctionDefinitionsRequest, ListFunctionDefinitionsResponse } from "../models/models_0";
import { ListFunctionDefinitions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * // import type { GreengrassClientConfig } from "@aws-sdk/client-greengrass";
 * const config = {}; // type is GreengrassClientConfig
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
 *
 * @public
 */
export class ListFunctionDefinitionsCommand extends command<ListFunctionDefinitionsCommandInput, ListFunctionDefinitionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFunctionDefinitions",
  ListFunctionDefinitions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionDefinitionsRequest;
      output: ListFunctionDefinitionsResponse;
    };
    sdk: {
      input: ListFunctionDefinitionsCommandInput;
      output: ListFunctionDefinitionsCommandOutput;
    };
  };
}
