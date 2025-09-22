// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetJourneyExecutionActivityMetricsRequest,
  GetJourneyExecutionActivityMetricsResponse,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyExecutionActivityMetrics } from "../schemas/schemas_20_GetJourneyExecutionActivityMetrics";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyExecutionActivityMetricsCommand}.
 */
export interface GetJourneyExecutionActivityMetricsCommandInput extends GetJourneyExecutionActivityMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyExecutionActivityMetricsCommand}.
 */
export interface GetJourneyExecutionActivityMetricsCommandOutput
  extends GetJourneyExecutionActivityMetricsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey activity.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionActivityMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionActivityMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyExecutionActivityMetricsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyActivityId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 * };
 * const command = new GetJourneyExecutionActivityMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyExecutionActivityMetricsResponse
 * //   JourneyExecutionActivityMetricsResponse: { // JourneyExecutionActivityMetricsResponse
 * //     ActivityType: "STRING_VALUE", // required
 * //     ApplicationId: "STRING_VALUE", // required
 * //     JourneyActivityId: "STRING_VALUE", // required
 * //     JourneyId: "STRING_VALUE", // required
 * //     LastEvaluatedTime: "STRING_VALUE", // required
 * //     Metrics: { // MapOf__string // required
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyExecutionActivityMetricsCommandInput - {@link GetJourneyExecutionActivityMetricsCommandInput}
 * @returns {@link GetJourneyExecutionActivityMetricsCommandOutput}
 * @see {@link GetJourneyExecutionActivityMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionActivityMetricsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetJourneyExecutionActivityMetricsCommand extends $Command
  .classBuilder<
    GetJourneyExecutionActivityMetricsCommandInput,
    GetJourneyExecutionActivityMetricsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetJourneyExecutionActivityMetrics", {})
  .n("PinpointClient", "GetJourneyExecutionActivityMetricsCommand")
  .sc(GetJourneyExecutionActivityMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJourneyExecutionActivityMetricsRequest;
      output: GetJourneyExecutionActivityMetricsResponse;
    };
    sdk: {
      input: GetJourneyExecutionActivityMetricsCommandInput;
      output: GetJourneyExecutionActivityMetricsCommandOutput;
    };
  };
}
