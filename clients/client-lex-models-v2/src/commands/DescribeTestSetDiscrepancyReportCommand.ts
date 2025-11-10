// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LexModelsV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LexModelsV2Client";
import { DescribeTestSetDiscrepancyReportRequest, DescribeTestSetDiscrepancyReportResponse } from "../models/models_1";
import { DescribeTestSetDiscrepancyReport } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeTestSetDiscrepancyReportCommand}.
 */
export interface DescribeTestSetDiscrepancyReportCommandInput extends DescribeTestSetDiscrepancyReportRequest {}
/**
 * @public
 *
 * The output of {@link DescribeTestSetDiscrepancyReportCommand}.
 */
export interface DescribeTestSetDiscrepancyReportCommandOutput
  extends DescribeTestSetDiscrepancyReportResponse,
    __MetadataBearer {}

/**
 * <p>Gets metadata information about the test set discrepancy report.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LexModelsV2Client, DescribeTestSetDiscrepancyReportCommand } from "@aws-sdk/client-lex-models-v2"; // ES Modules import
 * // const { LexModelsV2Client, DescribeTestSetDiscrepancyReportCommand } = require("@aws-sdk/client-lex-models-v2"); // CommonJS import
 * // import type { LexModelsV2ClientConfig } from "@aws-sdk/client-lex-models-v2";
 * const config = {}; // type is LexModelsV2ClientConfig
 * const client = new LexModelsV2Client(config);
 * const input = { // DescribeTestSetDiscrepancyReportRequest
 *   testSetDiscrepancyReportId: "STRING_VALUE", // required
 * };
 * const command = new DescribeTestSetDiscrepancyReportCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTestSetDiscrepancyReportResponse
 * //   testSetDiscrepancyReportId: "STRING_VALUE",
 * //   testSetId: "STRING_VALUE",
 * //   creationDateTime: new Date("TIMESTAMP"),
 * //   target: { // TestSetDiscrepancyReportResourceTarget
 * //     botAliasTarget: { // TestSetDiscrepancyReportBotAliasTarget
 * //       botId: "STRING_VALUE", // required
 * //       botAliasId: "STRING_VALUE", // required
 * //       localeId: "STRING_VALUE", // required
 * //     },
 * //   },
 * //   testSetDiscrepancyReportStatus: "InProgress" || "Completed" || "Failed",
 * //   lastUpdatedDataTime: new Date("TIMESTAMP"),
 * //   testSetDiscrepancyTopErrors: { // TestSetDiscrepancyErrors
 * //     intentDiscrepancies: [ // TestSetIntentDiscrepancyList // required
 * //       { // TestSetIntentDiscrepancyItem
 * //         intentName: "STRING_VALUE", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     slotDiscrepancies: [ // TestSetSlotDiscrepancyList // required
 * //       { // TestSetSlotDiscrepancyItem
 * //         intentName: "STRING_VALUE", // required
 * //         slotName: "STRING_VALUE", // required
 * //         errorMessage: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * //   testSetDiscrepancyRawOutputUrl: "STRING_VALUE",
 * //   failureReasons: [ // FailureReasons
 * //     "STRING_VALUE",
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTestSetDiscrepancyReportCommandInput - {@link DescribeTestSetDiscrepancyReportCommandInput}
 * @returns {@link DescribeTestSetDiscrepancyReportCommandOutput}
 * @see {@link DescribeTestSetDiscrepancyReportCommandInput} for command's `input` shape.
 * @see {@link DescribeTestSetDiscrepancyReportCommandOutput} for command's `response` shape.
 * @see {@link LexModelsV2ClientResolvedConfig | config} for LexModelsV2Client's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The service encountered an unexpected condition. Try your request
 *          again.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>You asked to describe a resource that doesn't exist. Check the
 *          resource that you are requesting and try again.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have reached a quota for your bot. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Your request rate is too high. Reduce the frequency of
 *          requests.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>One of the input parameters in your request isn't valid. Check the
 *          parameters and try your request again.</p>
 *
 * @throws {@link LexModelsV2ServiceException}
 * <p>Base exception class for all service exceptions from LexModelsV2 service.</p>
 *
 *
 * @public
 */
export class DescribeTestSetDiscrepancyReportCommand extends $Command
  .classBuilder<
    DescribeTestSetDiscrepancyReportCommandInput,
    DescribeTestSetDiscrepancyReportCommandOutput,
    LexModelsV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LexModelsV2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LexModelBuildingServiceV2", "DescribeTestSetDiscrepancyReport", {})
  .n("LexModelsV2Client", "DescribeTestSetDiscrepancyReportCommand")
  .sc(DescribeTestSetDiscrepancyReport)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTestSetDiscrepancyReportRequest;
      output: DescribeTestSetDiscrepancyReportResponse;
    };
    sdk: {
      input: DescribeTestSetDiscrepancyReportCommandInput;
      output: DescribeTestSetDiscrepancyReportCommandOutput;
    };
  };
}
