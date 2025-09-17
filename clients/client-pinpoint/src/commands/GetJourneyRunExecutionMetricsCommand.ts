// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJourneyRunExecutionMetricsRequest, GetJourneyRunExecutionMetricsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  de_GetJourneyRunExecutionMetricsCommand,
  se_GetJourneyRunExecutionMetricsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyRunExecutionMetricsCommand}.
 */
export interface GetJourneyRunExecutionMetricsCommandInput extends GetJourneyRunExecutionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyRunExecutionMetricsCommand}.
 */
export interface GetJourneyRunExecutionMetricsCommandOutput
  extends GetJourneyRunExecutionMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard run execution metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyRunExecutionMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyRunExecutionMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyRunExecutionMetricsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   RunId: "STRING_VALUE", // required
 * };
 * const command = new GetJourneyRunExecutionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyRunExecutionMetricsResponse
 * //   JourneyRunExecutionMetricsResponse: { // JourneyRunExecutionMetricsResponse
 * //     ApplicationId: "STRING_VALUE", // required
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
 * @param GetJourneyRunExecutionMetricsCommandInput - {@link GetJourneyRunExecutionMetricsCommandInput}
 * @returns {@link GetJourneyRunExecutionMetricsCommandOutput}
 * @see {@link GetJourneyRunExecutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyRunExecutionMetricsCommandOutput} for command's `response` shape.
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
 *
 * @example To get the execution metrics for a journey run
 * ```javascript
 * // The following example gets execution metrics for a single run of a journey.
 * const input = {
 *   ApplicationId: "11111111112222222222333333333344",
 *   JourneyId: "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *   RunId: "99999999998888888888777777777766"
 * };
 * const command = new GetJourneyRunExecutionMetricsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   JourneyRunExecutionMetricsResponse: {
 *     ApplicationId: "11111111112222222222333333333344",
 *     JourneyId: "aaaaaaaaaabbbbbbbbbbccccccccccdd",
 *     LastEvaluatedTime: "2000-01-01T00:00:05.000Z",
 *     Metrics: {
 *       ENDPOINT_ENTERED: "1",
 *       ENDPOINT_LEFT: "1",
 *       ENDPOINT_PRODUCED: "1"
 *     },
 *     RunId: "99999999998888888888777777777766"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetJourneyRunExecutionMetricsCommand extends $Command
  .classBuilder<
    GetJourneyRunExecutionMetricsCommandInput,
    GetJourneyRunExecutionMetricsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "GetJourneyRunExecutionMetrics", {})
  .n("PinpointClient", "GetJourneyRunExecutionMetricsCommand")
  .f(void 0, void 0)
  .ser(se_GetJourneyRunExecutionMetricsCommand)
  .de(de_GetJourneyRunExecutionMetricsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJourneyRunExecutionMetricsRequest;
      output: GetJourneyRunExecutionMetricsResponse;
    };
    sdk: {
      input: GetJourneyRunExecutionMetricsCommandInput;
      output: GetJourneyRunExecutionMetricsCommandOutput;
    };
  };
}
