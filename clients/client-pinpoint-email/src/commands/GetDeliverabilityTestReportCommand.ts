// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse } from "../models/models_0";
import { PinpointEmailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointEmailClient";
import { GetDeliverabilityTestReport } from "../schemas/schemas_6_Create";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetDeliverabilityTestReportCommand}.
 */
export interface GetDeliverabilityTestReportCommandInput extends GetDeliverabilityTestReportRequest {}
/**
 * @public
 *
 * The output of {@link GetDeliverabilityTestReportCommand}.
 */
export interface GetDeliverabilityTestReportCommandOutput
  extends GetDeliverabilityTestReportResponse,
    __MetadataBearer {}

/**
 * <p>Retrieve the results of a predictive inbox placement test.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, GetDeliverabilityTestReportCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, GetDeliverabilityTestReportCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
 * const input = { // GetDeliverabilityTestReportRequest
 *   ReportId: "STRING_VALUE", // required
 * };
 * const command = new GetDeliverabilityTestReportCommand(input);
 * const response = await client.send(command);
 * // { // GetDeliverabilityTestReportResponse
 * //   DeliverabilityTestReport: { // DeliverabilityTestReport
 * //     ReportId: "STRING_VALUE",
 * //     ReportName: "STRING_VALUE",
 * //     Subject: "STRING_VALUE",
 * //     FromEmailAddress: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     DeliverabilityTestStatus: "IN_PROGRESS" || "COMPLETED",
 * //   },
 * //   OverallPlacement: { // PlacementStatistics
 * //     InboxPercentage: Number("double"),
 * //     SpamPercentage: Number("double"),
 * //     MissingPercentage: Number("double"),
 * //     SpfPercentage: Number("double"),
 * //     DkimPercentage: Number("double"),
 * //   },
 * //   IspPlacements: [ // IspPlacements // required
 * //     { // IspPlacement
 * //       IspName: "STRING_VALUE",
 * //       PlacementStatistics: {
 * //         InboxPercentage: Number("double"),
 * //         SpamPercentage: Number("double"),
 * //         MissingPercentage: Number("double"),
 * //         SpfPercentage: Number("double"),
 * //         DkimPercentage: Number("double"),
 * //       },
 * //     },
 * //   ],
 * //   Message: "STRING_VALUE",
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetDeliverabilityTestReportCommandInput - {@link GetDeliverabilityTestReportCommandInput}
 * @returns {@link GetDeliverabilityTestReportCommandOutput}
 * @see {@link GetDeliverabilityTestReportCommandInput} for command's `input` shape.
 * @see {@link GetDeliverabilityTestReportCommandOutput} for command's `response` shape.
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
export class GetDeliverabilityTestReportCommand extends $Command
  .classBuilder<
    GetDeliverabilityTestReportCommandInput,
    GetDeliverabilityTestReportCommandOutput,
    PinpointEmailClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointEmailClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonPinpointEmailService", "GetDeliverabilityTestReport", {})
  .n("PinpointEmailClient", "GetDeliverabilityTestReportCommand")
  .sc(GetDeliverabilityTestReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetDeliverabilityTestReportRequest;
      output: GetDeliverabilityTestReportResponse;
    };
    sdk: {
      input: GetDeliverabilityTestReportCommandInput;
      output: GetDeliverabilityTestReportCommandOutput;
    };
  };
}
