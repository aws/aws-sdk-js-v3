// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListFunctionsRequest, ListFunctionsResponse } from "../models/models_0";
import { ListFunctions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandInput extends ListFunctionsRequest {}
/**
 * @public
 *
 * The output of {@link ListFunctionsCommand}.
 */
export interface ListFunctionsCommandOutput extends ListFunctionsResponse, __MetadataBearer {}

/**
 * <p>Lists the functions in this account, in this Region. Each entry is a summary. To get the expressions of a function, use GetFunction. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListFunctionsCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListFunctionsCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListFunctionsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListFunctionsCommand(input);
 * const response = await client.send(command);
 * // { // ListFunctionsResponse
 * //   functions: [ // FunctionSummaryList // required
 * //     { // FunctionSummary
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       status: "CREATING" || "AVAILABLE" || "REFERENCED" || "DELETING" || "DELETED", // required
 * //       target: { // FunctionTarget Union: only one key present
 * //         bedrock: { // BedrockFunctionTarget
 * //           api: "INVOKE_MODEL", // required
 * //           model: "STRING_VALUE", // required
 * //         },
 * //         passthrough: {},
 * //       },
 * //       contextTypes: [ // ContextTypeList
 * //         "FRAMES" || "SUBTITLES" || "CONTEXTUAL_METADATA" || "CLIP_METADATA",
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListFunctionsCommandInput - {@link ListFunctionsCommandInput}
 * @returns {@link ListFunctionsCommandOutput}
 * @see {@link ListFunctionsCommandInput} for command's `input` shape.
 * @see {@link ListFunctionsCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link TooManyRequestException} (client fault)
 *  <p>The request was denied due to request throttling. Too many requests have been made within a given time period. Reduce the frequency of requests and use exponential backoff when retrying. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service. Check the error message for details about which parameter or field is invalid and correct the request before retrying. </p>
 *
 * @throws {@link ElementalInferenceServiceException}
 * <p>Base exception class for all service exceptions from ElementalInference service.</p>
 *
 *
 * @public
 */
export class ListFunctionsCommand extends command<ListFunctionsCommandInput, ListFunctionsCommandOutput>(
  _ep0,
  _mw0,
  "ListFunctions",
  ListFunctions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListFunctionsRequest;
      output: ListFunctionsResponse;
    };
    sdk: {
      input: ListFunctionsCommandInput;
      output: ListFunctionsCommandOutput;
    };
  };
}
