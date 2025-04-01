// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetDeliverabilityTestReportRequest, GetDeliverabilityTestReportResponse } from "../models/models_0";
import {
  de_GetDeliverabilityTestReportCommand,
  se_GetDeliverabilityTestReportCommand,
} from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

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
 * import { SESv2Client, GetDeliverabilityTestReportCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetDeliverabilityTestReportCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
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
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
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
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 *
 * @public
 */
export class GetDeliverabilityTestReportCommand extends $Command
  .classBuilder<
    GetDeliverabilityTestReportCommandInput,
    GetDeliverabilityTestReportCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "GetDeliverabilityTestReport", {})
  .n("SESv2Client", "GetDeliverabilityTestReportCommand")
  .f(void 0, void 0)
  .ser(se_GetDeliverabilityTestReportCommand)
  .de(de_GetDeliverabilityTestReportCommand)
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
