// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetJourneyRunExecutionActivityMetricsRequest,
  GetJourneyRunExecutionActivityMetricsResponse,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_GetJourneyRunExecutionActivityMetricsCommand,
  se_GetJourneyRunExecutionActivityMetricsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyRunExecutionActivityMetricsCommand}.
 */
export interface GetJourneyRunExecutionActivityMetricsCommandInput
  extends GetJourneyRunExecutionActivityMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyRunExecutionActivityMetricsCommand}.
 */
export interface GetJourneyRunExecutionActivityMetricsCommandOutput
  extends GetJourneyRunExecutionActivityMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyRunExecutionActivityMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyRunExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyRunExecutionActivityMetricsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyActivityId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetJourneyRunExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyRunExecutionActivityMetricsResponse
 * //   JourneyRunExecutionActivityMetricsResponse: { // JourneyRunExecutionActivityMetricsResponse
 * //     ActivityType: "STRING_VALUE", // required
 * //     ApplicationId: "STRING_VALUE", // required
 * //     JourneyActivityId: "STRING_VALUE", // required
 * //     JourneyId: "STRING_VALUE", // required
 * //     LastEvaluatedTime: "STRING_VALUE", // required
 * //     Metrics: { // MapOf__string // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     RunId: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyRunExecutionActivityMetricsCommandInput - {@link GetJourneyRunExecutionActivityMetricsCommandInput}
 * @returns {@link GetJourneyRunExecutionActivityMetricsCommandOutput}
 * @see {@link GetJourneyRunExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyRunExecutionActivityMetricsCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 * @example To get the activity execution metrics for a journey run
 * ```javascript
 * // The following example gets activity execution metrics for a single run of a journey.
 * const input = {
 *   "ApplicationId": "11111111112222222222333333333344",
 *   "JourneyId": "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *   "RunId": "99999999998888888888777777777766",
 *   "JourneyActivityId": "AAAAAAAAAA"
 * };
 * const command = new GetJourneyRunExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "JourneyRunExecutionActivityMetricsResponse": {
 *     "ApplicationId": "11111111112222222222333333333344",
 *     "JourneyId": "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *     "RunId": "99999999998888888888777777777766",
 *     "JourneyActivityId": "AAAAAAAAAA",
 *     "ActivityType": "EMAIL",
 *     "LastEvaluatedTime": "2000-01-01T00:00:05.000Z",
 *     "Metrics": {
 *       "SUCCESS": "1"
 *     }
 *   }
 * }
 * *\/
 * // example id: to-get-the-activity-execution-metrics-for-a-journey-run
 * ```
 *
 */
export class GetJourneyRunExecutionActivityMetricsCommand extends $Command
  .classBuilder<
    GetJourneyRunExecutionActivityMetricsCommandInput,
    GetJourneyRunExecutionActivityMetricsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetJourneyRunExecutionActivityMetrics", {})
  .n("PinpointClient", "GetJourneyRunExecutionActivityMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetJourneyRunExecutionActivityMetricsCommand)
  .de(de_GetJourneyRunExecutionActivityMetricsCommand)
  .build() {}
