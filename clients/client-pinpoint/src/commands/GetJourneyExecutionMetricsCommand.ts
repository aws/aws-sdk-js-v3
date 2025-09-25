// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJourneyExecutionMetricsRequest, GetJourneyExecutionMetricsResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyExecutionMetrics } from "../schemas/schemas_47_GetJourneyExecutionMetrics";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyExecutionMetricsCommand}.
 */
export interface GetJourneyExecutionMetricsCommandInput extends GetJourneyExecutionMetricsRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyExecutionMetricsCommand}.
 */
export interface GetJourneyExecutionMetricsCommandOutput extends GetJourneyExecutionMetricsResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard execution metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyExecutionMetricsCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyExecutionMetricsCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyExecutionMetricsRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   JourneyId: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 * };
 * const command = new GetJourneyExecutionMetricsCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyExecutionMetricsResponse
 * //   JourneyExecutionMetricsResponse: { // JourneyExecutionMetricsResponse
 * //     ApplicationId: "STRING_VALUE", // required
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
 * @param GetJourneyExecutionMetricsCommandInput - {@link GetJourneyExecutionMetricsCommandInput}
 * @returns {@link GetJourneyExecutionMetricsCommandOutput}
 * @see {@link GetJourneyExecutionMetricsCommandInput} for command's `input` shape.
 * @see {@link GetJourneyExecutionMetricsCommandOutput} for command's `response` shape.
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
export class GetJourneyExecutionMetricsCommand extends $Command
  .classBuilder<
    GetJourneyExecutionMetricsCommandInput,
    GetJourneyExecutionMetricsCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetJourneyExecutionMetrics", {})
  .n("PinpointClient", "GetJourneyExecutionMetricsCommand")
  .sc(GetJourneyExecutionMetrics)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJourneyExecutionMetricsRequest;
      output: GetJourneyExecutionMetricsResponse;
    };
    sdk: {
      input: GetJourneyExecutionMetricsCommandInput;
      output: GetJourneyExecutionMetricsCommandOutput;
    };
  };
}
