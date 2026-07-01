// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDataAutomationLibrariesRequest, ListDataAutomationLibrariesResponse } from "../models/models_0";
import { ListDataAutomationLibraries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListDataAutomationLibrariesCommand}.
 */
export interface ListDataAutomationLibrariesCommandInput extends ListDataAutomationLibrariesRequest {}
/**
 * @public
 *
 * The output of {@link ListDataAutomationLibrariesCommand}.
 */
export interface ListDataAutomationLibrariesCommandOutput extends ListDataAutomationLibrariesResponse, __MetadataBearer {}

/**
 * Lists all existing Amazon Bedrock Data Automation Libraries
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BedrockDataAutomationClient, ListDataAutomationLibrariesCommand } from "@aws-sdk/client-bedrock-data-automation"; // ES Modules import
 * // const { BedrockDataAutomationClient, ListDataAutomationLibrariesCommand } = require("@aws-sdk/client-bedrock-data-automation"); // CommonJS import
 * // import type { BedrockDataAutomationClientConfig } from "@aws-sdk/client-bedrock-data-automation";
 * const config = {}; // type is BedrockDataAutomationClientConfig
 * const client = new BedrockDataAutomationClient(config);
 * const input = { // ListDataAutomationLibrariesRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 *   projectFilter: { // DataAutomationProjectFilter
 *     projectArn: "STRING_VALUE", // required
 *     projectStage: "DEVELOPMENT" || "LIVE",
 *   },
 * };
 * const command = new ListDataAutomationLibrariesCommand(input);
 * const response = await client.send(command);
 * // { // ListDataAutomationLibrariesResponse
 * //   libraries: [ // DataAutomationLibrarySummaries
 * //     { // DataAutomationLibrarySummary
 * //       libraryArn: "STRING_VALUE", // required
 * //       libraryName: "STRING_VALUE",
 * //       creationTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataAutomationLibrariesCommandInput - {@link ListDataAutomationLibrariesCommandInput}
 * @returns {@link ListDataAutomationLibrariesCommandOutput}
 * @see {@link ListDataAutomationLibrariesCommandInput} for command's `input` shape.
 * @see {@link ListDataAutomationLibrariesCommandOutput} for command's `response` shape.
 * @see {@link BedrockDataAutomationClientResolvedConfig | config} for BedrockDataAutomationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  This exception is thrown when a request is denied per access permissions
 *
 * @throws {@link InternalServerException} (server fault)
 *  This exception is thrown if there was an unexpected error during processing of request
 *
 * @throws {@link ThrottlingException} (client fault)
 *  This exception is thrown when the number of requests exceeds the limit
 *
 * @throws {@link ValidationException} (client fault)
 *  This exception is thrown when the request's input validation fails
 *
 * @throws {@link BedrockDataAutomationServiceException}
 * <p>Base exception class for all service exceptions from BedrockDataAutomation service.</p>
 *
 *
 * @public
 */
export class ListDataAutomationLibrariesCommand extends command<ListDataAutomationLibrariesCommandInput, ListDataAutomationLibrariesCommandOutput>(
  _ep0,
  _mw0,
  "ListDataAutomationLibraries",
  ListDataAutomationLibraries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDataAutomationLibrariesRequest;
      output: ListDataAutomationLibrariesResponse;
    };
    sdk: {
      input: ListDataAutomationLibrariesCommandInput;
      output: ListDataAutomationLibrariesCommandOutput;
    };
  };
}
