// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetFixtureRequest, GetFixtureResponse } from "../models/models_0";
import { GetFixture$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetFixtureCommand}.
 */
export interface GetFixtureCommandInput extends GetFixtureRequest {}
/**
 * @public
 *
 * The output of {@link GetFixtureCommand}.
 */
export interface GetFixtureCommandOutput extends GetFixtureResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified fixture (a sports event, such as a specific basketball game). You obtain a fixtureId from SearchFixtures, or from the clipping output of a feed. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElementalInferenceClient, GetFixtureCommand } from "@aws-sdk/client-elementalinference"; // ES Modules import
 * // const { ElementalInferenceClient, GetFixtureCommand } = require("@aws-sdk/client-elementalinference"); // CommonJS import
 * // import type { ElementalInferenceClientConfig } from "@aws-sdk/client-elementalinference";
 * const config = {}; // type is ElementalInferenceClientConfig
 * const client = new ElementalInferenceClient(config);
 * const input = { // GetFixtureRequest
 *   fixtureId: "STRING_VALUE", // required
 * };
 * const command = new GetFixtureCommand(input);
 * const response = await client.send(command);
 * // { // GetFixtureResponse
 * //   fixtureId: "STRING_VALUE", // required
 * //   name: "STRING_VALUE", // required
 * //   fixtureGroup: "STRING_VALUE",
 * //   scheduledStart: new Date("TIMESTAMP"),
 * //   status: "STRING_VALUE", // required
 * //   competitors: [ // CompetitorList // required
 * //     { // Competitor
 * //       name: "STRING_VALUE",
 * //       isHome: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetFixtureCommandInput - {@link GetFixtureCommandInput}
 * @returns {@link GetFixtureCommandOutput}
 * @see {@link GetFixtureCommandInput} for command's `input` shape.
 * @see {@link GetFixtureCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource specified in the action doesn't exist.</p>
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
export class GetFixtureCommand extends command<GetFixtureCommandInput, GetFixtureCommandOutput>(
  _ep0,
  _mw0,
  "GetFixture",
  GetFixture$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetFixtureRequest;
      output: GetFixtureResponse;
    };
    sdk: {
      input: GetFixtureCommandInput;
      output: GetFixtureCommandOutput;
    };
  };
}
