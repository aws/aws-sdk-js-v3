// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQuestionSetsRequest, ListQuestionSetsResponse } from "../models/models_0";
import { ListQuestionSets$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQuestionSetsCommand}.
 */
export interface ListQuestionSetsCommandInput extends ListQuestionSetsRequest {}
/**
 * @public
 *
 * The output of {@link ListQuestionSetsCommand}.
 */
export interface ListQuestionSetsCommandOutput extends ListQuestionSetsResponse, __MetadataBearer {}

/**
 * <p>Lists the question sets in your account. The response doesn't include the questions in each question set. To retrieve them, use GetQuestionSet. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListQuestionSetsCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListQuestionSetsCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListQuestionSetsRequest
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListQuestionSetsCommand(input);
 * const response = await client.send(command);
 * // { // ListQuestionSetsResponse
 * //   questionSets: [ // QuestionSetSummaryList // required
 * //     { // QuestionSetSummary
 * //       arn: "STRING_VALUE", // required
 * //       id: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       latestVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuestionSetsCommandInput - {@link ListQuestionSetsCommandInput}
 * @returns {@link ListQuestionSetsCommandOutput}
 * @see {@link ListQuestionSetsCommandInput} for command's `input` shape.
 * @see {@link ListQuestionSetsCommandOutput} for command's `response` shape.
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
export class ListQuestionSetsCommand extends command<ListQuestionSetsCommandInput, ListQuestionSetsCommandOutput>(
  _ep0,
  _mw0,
  "ListQuestionSets",
  ListQuestionSets$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuestionSetsRequest;
      output: ListQuestionSetsResponse;
    };
    sdk: {
      input: ListQuestionSetsCommandInput;
      output: ListQuestionSetsCommandOutput;
    };
  };
}
