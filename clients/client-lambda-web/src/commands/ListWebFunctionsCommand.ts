// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebFunctionsRequest, ListWebFunctionsResponse } from "../models/models_0";
import { ListWebFunctions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWebFunctionsCommand}.
 */
export interface ListWebFunctionsCommandInput extends ListWebFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebFunctionsCommand}.
 */
export interface ListWebFunctionsCommandOutput extends ListWebFunctionsResponse, __MetadataBearer {}

/**
 * <p>Lists web functions in your account. We recommend using pagination to ensure that the operation returns quickly and successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, ListWebFunctionsCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, ListWebFunctionsCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // ListWebFunctionsRequest
 *   filters: [ // FilterList
 *     { // Filter
 *       name: "STRING_VALUE", // required
 *       values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListWebFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebFunctionsResponse
 * //   functions: [ // FunctionSummaryList // required
 * //     { // FunctionSummary
 * //       functionName: "STRING_VALUE", // required
 * //       functionArn: "STRING_VALUE", // required
 * //       state: "Pending" || "Active" || "Failed" || "Deleting", // required
 * //       stateReason: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebFunctionsCommandInput - {@link ListWebFunctionsCommandInput}
 * @returns {@link ListWebFunctionsCommandOutput}
 * @see {@link ListWebFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListWebFunctionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled. Reduce the frequency of requests and try again.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. Check the request parameters and try again.</p>
 *
 * @throws {@link LambdaWebServiceException}
 * <p>Base exception class for all service exceptions from LambdaWeb service.</p>
 *
 *
 * @public
 */
export class ListWebFunctionsCommand extends command<ListWebFunctionsCommandInput, ListWebFunctionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebFunctions",
  ListWebFunctions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebFunctionsRequest;
      output: ListWebFunctionsResponse;
    };
    sdk: {
      input: ListWebFunctionsCommandInput;
      output: ListWebFunctionsCommandOutput;
    };
  };
}
