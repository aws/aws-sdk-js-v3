// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchFixturesRequest, SearchFixturesResponse } from "../models/models_0";
import { SearchFixtures$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchFixturesCommand}.
 */
export interface SearchFixturesCommandInput extends SearchFixturesRequest {}
/**
 * @public
 *
 * The output of {@link SearchFixturesCommand}.
 */
export interface SearchFixturesCommandOutput extends SearchFixturesResponse, __MetadataBearer {}

/**
 * <p>Searches for the fixtures (sports events, such as a specific basketball game) that are available for a sport in a date window. Each fixture in the response includes a fixtureId that you specify in the clipping output of a feed, so that Elemental Inference maps the event data for that fixture onto the clipping metadata. This operation is paginated: if there are more fixtures than fit in one page, the response includes a nextToken that you pass in a subsequent request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, SearchFixturesCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, SearchFixturesCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // SearchFixturesRequest
 *   sport: "basketball" || "american-football", // required
 *   startDate: "STRING_VALUE", // required
 *   endDate: "STRING_VALUE",
 *   filters: [ // SearchFilterList
 *     { // SearchFilter
 *       name: "COMPETITOR", // required
 *       values: [ // FilterValueList // required
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new SearchFixturesCommand(input);
 * const response = await client.send(command);
 * // { // SearchFixturesResponse
 * //   fixtures: [ // FixtureSummaryList // required
 * //     { // FixtureSummary
 * //       fixtureId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       fixtureGroup: "STRING_VALUE",
 * //       scheduledStart: new Date("TIMESTAMP"),
 * //       status: "STRING_VALUE", // required
 * //       competitors: [ // CompetitorList // required
 * //         { // Competitor
 * //           name: "STRING_VALUE",
 * //           isHome: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param SearchFixturesCommandInput - {@link SearchFixturesCommandInput}
 * @returns {@link SearchFixturesCommandOutput}
 * @see {@link SearchFixturesCommandInput} for command's `input` shape.
 * @see {@link SearchFixturesCommandOutput} for command's `response` shape.
 * @see {@link ElementalInferenceClientResolvedConfig | config} for ElementalInferenceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link GatewayTimedOutException} (server fault)
 *  <p>The request timed out before the service returned a response. This is a temporary condition. Retry the request. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error occurred. This is a temporary condition and the request can be retried. If the problem persists, contact AWS Support. </p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is temporarily unable to handle the request. Retry the request. If the problem persists, contact AWS Support. </p>
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
export class SearchFixturesCommand extends command<SearchFixturesCommandInput, SearchFixturesCommandOutput>(
  _ep0,
  _mw0,
  "SearchFixtures",
  SearchFixtures$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchFixturesRequest;
      output: SearchFixturesResponse;
    };
    sdk: {
      input: SearchFixturesCommandInput;
      output: SearchFixturesCommandOutput;
    };
  };
}
