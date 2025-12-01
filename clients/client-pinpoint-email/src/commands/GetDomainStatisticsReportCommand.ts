// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetDomainStatisticsReportRequest, GetDomainStatisticsReportResponse } from "../models/models_0";
import type { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDomainStatisticsReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDomainStatisticsReportCommand}.
 */
export interface GetDomainStatisticsReportCommandInput extends GetDomainStatisticsReportRequest {}
/**
 * @public
 *
 * The output of {@link GetDomainStatisticsReportCommand}.
 */
export interface GetDomainStatisticsReportCommandOutput extends GetDomainStatisticsReportResponse, __MetadataBearer {}

/**
 * <p>Retrieve inbox placement and engagement rates for the domains that you use to send
 *             email.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDomainStatisticsReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDomainStatisticsReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDomainStatisticsReportRequest
 *   Domain: "STRING_VALUE", // required
 *   StartDate: new Date("TIMESTAMP"), // required
 *   EndDate: new Date("TIMESTAMP"), // required
 * };
 * const command = new GetDomainStatisticsReportCommand(input);
 * const response = await client.send(command);
 * // { // GetDomainStatisticsReportResponse
 * //   OverallVolume: { // OverallVolume
 * //     VolumeStatistics: { // VolumeStatistics
 * //       InboxRawCount: Number("long"),
 * //       SpamRawCount: Number("long"),
 * //       ProjectedInbox: Number("long"),
 * //       ProjectedSpam: Number("long"),
 * //     },
 * //     ReadRatePercent: Number("double"),
 * //     DomainIspPlacements: [ // DomainIspPlacements
 * //       { // DomainIspPlacement
 * //         IspName: "STRING_VALUE",
 * //         InboxRawCount: Number("long"),
 * //         SpamRawCount: Number("long"),
 * //         InboxPercentage: Number("double"),
 * //         SpamPercentage: Number("double"),
 * //       },
 * //     ],
 * //   },
 * //   DailyVolumes: [ // DailyVolumes // required
 * //     { // DailyVolume
 * //       StartDate: new Date("TIMESTAMP"),
 * //       VolumeStatistics: {
 * //         InboxRawCount: Number("long"),
 * //         SpamRawCount: Number("long"),
 * //         ProjectedInbox: Number("long"),
 * //         ProjectedSpam: Number("long"),
 * //       },
 * //       DomainIspPlacements: [
 * //         {
 * //           IspName: "STRING_VALUE",
 * //           InboxRawCount: Number("long"),
 * //           SpamRawCount: Number("long"),
 * //           InboxPercentage: Number("double"),
 * //           SpamPercentage: Number("double"),
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDomainStatisticsReportCommandInput - {@link GetDomainStatisticsReportCommandInput}
 * @returns {@link GetDomainStatisticsReportCommandOutput}
 * @see {@link GetDomainStatisticsReportCommandInput} for command's `input` shape.
 * @see {@link GetDomainStatisticsReportCommandOutput} for command's `response` shape.
 * @see {@link PinpointEmailClientResolvedConfig | config} for PinpointEmailClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link PinpointEmailServiceException}
 * <p>Base exception class for all service exceptions from PinpointEmail service.</p>
 *
 *
 * @public
 */
export class GetDomainStatisticsReportCommand extends $Command
  .classBuilder<
    GetDomainStatisticsReportCommandInput,
    GetDomainStatisticsReportCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "GetDomainStatisticsReport", {})
  .n("PinpointEmailClient", "GetDomainStatisticsReportCommand")
  .sc(GetDomainStatisticsReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDomainStatisticsReportRequest;
      output: GetDomainStatisticsReportResponse;
    };
    sdk: {
      input: GetDomainStatisticsReportCommandInput;
      output: GetDomainStatisticsReportCommandOutput;
    };
  };
}
