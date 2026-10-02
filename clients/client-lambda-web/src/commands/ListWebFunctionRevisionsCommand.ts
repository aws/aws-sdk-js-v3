// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListWebFunctionRevisionsRequest, ListWebFunctionRevisionsResponse } from "../models/models_0";
import { ListWebFunctionRevisions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListWebFunctionRevisionsCommand}.
 */
export interface ListWebFunctionRevisionsCommandInput extends ListWebFunctionRevisionsRequest {}
/**
 * @public
 *
 * The output of {@link ListWebFunctionRevisionsCommand}.
 */
export interface ListWebFunctionRevisionsCommandOutput extends ListWebFunctionRevisionsResponse, __MetadataBearer {}

/**
 * <p>Lists revisions for a web function. We recommend using pagination to ensure that the operation returns quickly and successfully.</p> <note> <p>This API is experimental and for internal AWS use only. It is not yet available to external customers.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LambdaWebClient, ListWebFunctionRevisionsCommand } from "@aws-sdk/client-lambda-web"; // ES Modules import
 * // const { LambdaWebClient, ListWebFunctionRevisionsCommand } = require("@aws-sdk/client-lambda-web"); // CommonJS import
 * // import type { LambdaWebClientConfig } from "@aws-sdk/client-lambda-web";
 * const config = {}; // type is LambdaWebClientConfig
 * const client = new LambdaWebClient(config);
 * const input = { // ListWebFunctionRevisionsRequest
 *   functionName: "STRING_VALUE", // required
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
 * const command = new ListWebFunctionRevisionsCommand(input);
 * const response = await client.send(command);
 * // { // ListWebFunctionRevisionsResponse
 * //   revisions: [ // FunctionRevisionSummaryList // required
 * //     { // FunctionRevisionSummary
 * //       revisionArn: "STRING_VALUE", // required
 * //       revisionId: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       state: "Pending" || "Active" || "Failed", // required
 * //       stateReason: "STRING_VALUE", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListWebFunctionRevisionsCommandInput - {@link ListWebFunctionRevisionsCommandInput}
 * @returns {@link ListWebFunctionRevisionsCommandOutput}
 * @see {@link ListWebFunctionRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListWebFunctionRevisionsCommandOutput} for command's `response` shape.
 * @see {@link LambdaWebClientResolvedConfig | config} for LambdaWebClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred. Try again later.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found. Verify the resource identifier and try again.</p>
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
export class ListWebFunctionRevisionsCommand extends command<ListWebFunctionRevisionsCommandInput, ListWebFunctionRevisionsCommandOutput>(
  _ep0,
  _mw0,
  "ListWebFunctionRevisions",
  ListWebFunctionRevisions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListWebFunctionRevisionsRequest;
      output: ListWebFunctionRevisionsResponse;
    };
    sdk: {
      input: ListWebFunctionRevisionsCommandInput;
      output: ListWebFunctionRevisionsCommandOutput;
    };
  };
}
