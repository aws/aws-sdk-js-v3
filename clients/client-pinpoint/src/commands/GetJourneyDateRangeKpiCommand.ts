// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetJourneyDateRangeKpiRequest, GetJourneyDateRangeKpiResponse } from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetJourneyDateRangeKpi } from "../schemas/schemas_2_Journey";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetJourneyDateRangeKpiCommand}.
 */
export interface GetJourneyDateRangeKpiCommandInput extends GetJourneyDateRangeKpiRequest {}
/**
 * @public
 *
 * The output of {@link GetJourneyDateRangeKpiCommand}.
 */
export interface GetJourneyDateRangeKpiCommandOutput extends GetJourneyDateRangeKpiResponse, __MetadataBearer {}

/**
 * <p>Retrieves (queries) pre-aggregated data for a standard engagement metric that applies to a journey.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetJourneyDateRangeKpiCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetJourneyDateRangeKpiCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetJourneyDateRangeKpiRequest
 *   ApplicationId: "STRING_VALUE", // required
 *   EndTime: new Date("TIMESTAMP"),
 *   JourneyId: "STRING_VALUE", // required
 *   KpiName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   PageSize: "STRING_VALUE",
 *   StartTime: new Date("TIMESTAMP"),
 * };
 * const command = new GetJourneyDateRangeKpiCommand(input);
 * const response = await client.send(command);
 * // { // GetJourneyDateRangeKpiResponse
 * //   JourneyDateRangeKpiResponse: { // JourneyDateRangeKpiResponse
 * //     ApplicationId: "STRING_VALUE", // required
 * //     EndTime: new Date("TIMESTAMP"), // required
 * //     JourneyId: "STRING_VALUE", // required
 * //     KpiName: "STRING_VALUE", // required
 * //     KpiResult: { // BaseKpiResult
 * //       Rows: [ // ListOfResultRow // required
 * //         { // ResultRow
 * //           GroupedBys: [ // ListOfResultRowValue // required
 * //             { // ResultRowValue
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           Values: [ // required
 * //             {
 * //               Key: "STRING_VALUE", // required
 * //               Type: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //         },
 * //       ],
 * //     },
 * //     NextToken: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"), // required
 * //   },
 * // };
 *
 * ```
 *
 * @param GetJourneyDateRangeKpiCommandInput - {@link GetJourneyDateRangeKpiCommandInput}
 * @returns {@link GetJourneyDateRangeKpiCommandOutput}
 * @see {@link GetJourneyDateRangeKpiCommandInput} for command's `input` shape.
 * @see {@link GetJourneyDateRangeKpiCommandOutput} for command's `response` shape.
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
export class GetJourneyDateRangeKpiCommand extends $Command
  .classBuilder<
    GetJourneyDateRangeKpiCommandInput,
    GetJourneyDateRangeKpiCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetJourneyDateRangeKpi", {})
  .n("PinpointClient", "GetJourneyDateRangeKpiCommand")
  .sc(GetJourneyDateRangeKpi)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetJourneyDateRangeKpiRequest;
      output: GetJourneyDateRangeKpiResponse;
    };
    sdk: {
      input: GetJourneyDateRangeKpiCommandInput;
      output: GetJourneyDateRangeKpiCommandOutput;
    };
  };
}
