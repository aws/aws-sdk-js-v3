// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListQuestionSetVersionsRequest, ListQuestionSetVersionsResponse } from "../models/models_0";
import { ListQuestionSetVersions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListQuestionSetVersionsCommand}.
 */
export interface ListQuestionSetVersionsCommandInput extends ListQuestionSetVersionsRequest {}
/**
 * @public
 *
 * The output of {@link ListQuestionSetVersionsCommand}.
 */
export interface ListQuestionSetVersionsCommandOutput extends ListQuestionSetVersionsResponse, __MetadataBearer {}

/**
 * <p>Lists the versions of the specified question set. The list starts with the DRAFT version, followed by the published versions from the highest version number to the lowest. The list doesn't include deleted versions. </p> <p>The response doesn't include the questions in each version. To retrieve them, use GetQuestionSet and specify questionSetVersion. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, ListQuestionSetVersionsCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, ListQuestionSetVersionsCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // ListQuestionSetVersionsRequest
 *   id: "STRING_VALUE", // required
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListQuestionSetVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListQuestionSetVersionsResponse
 * //   versions: [ // QuestionSetVersionSummaryList // required
 * //     { // QuestionSetVersionSummary
 * //       version: "STRING_VALUE", // required
 * //       description: "STRING_VALUE",
 * //       sha256: "STRING_VALUE", // required
 * //       lastModifiedAt: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListQuestionSetVersionsCommandInput - {@link ListQuestionSetVersionsCommandInput}
 * @returns {@link ListQuestionSetVersionsCommandOutput}
 * @see {@link ListQuestionSetVersionsCommandInput} for command's `input` shape.
 * @see {@link ListQuestionSetVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
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
export class ListQuestionSetVersionsCommand extends command<ListQuestionSetVersionsCommandInput, ListQuestionSetVersionsCommandOutput>(
  _ep0,
  _mw0,
  "ListQuestionSetVersions",
  ListQuestionSetVersions$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListQuestionSetVersionsRequest;
      output: ListQuestionSetVersionsResponse;
    };
    sdk: {
      input: ListQuestionSetVersionsCommandInput;
      output: ListQuestionSetVersionsCommandOutput;
    };
  };
}
