// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0";
import { ListDeliverabilityTestReports } from "../schemas/schemas_0";
import type { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListDeliverabilityTestReportsCommand}.
 */
export interface ListDeliverabilityTestReportsCommandInput extends ListDeliverabilityTestReportsRequest {}
/**
 * @public
 *
 * The output of {@link ListDeliverabilityTestReportsCommand}.
 */
export interface ListDeliverabilityTestReportsCommandOutput
  extends ListDeliverabilityTestReportsResponse,
    __MetadataBearer {}

/**
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // ListDeliverabilityTestReportsRequest
 *   NextToken: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new ListDeliverabilityTestReportsCommand(input);
 * const response = await client.send(command);
 * // { // ListDeliverabilityTestReportsResponse
 * //   DeliverabilityTestReports: [ // DeliverabilityTestReports // required
 * //     { // DeliverabilityTestReport
 * //       ReportId: "STRING_VALUE",
 * //       ReportName: "STRING_VALUE",
 * //       Subject: "STRING_VALUE",
 * //       FromEmailAddress: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       DeliverabilityTestStatus: "IN_PROGRESS" || "COMPLETED",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDeliverabilityTestReportsCommandInput - {@link ListDeliverabilityTestReportsCommandInput}
 * @returns {@link ListDeliverabilityTestReportsCommandOutput}
 * @see {@link ListDeliverabilityTestReportsCommandInput} for command's `input` shape.
 * @see {@link ListDeliverabilityTestReportsCommandOutput} for command's `response` shape.
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
export class ListDeliverabilityTestReportsCommand extends $Command
  .classBuilder<
    ListDeliverabilityTestReportsCommandInput,
    ListDeliverabilityTestReportsCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SimpleEmailService_v2", "ListDeliverabilityTestReports", {})
  .n("SESv2Client", "ListDeliverabilityTestReportsCommand")
  .sc(ListDeliverabilityTestReports)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListDeliverabilityTestReportsRequest;
      output: ListDeliverabilityTestReportsResponse;
    };
    sdk: {
      input: ListDeliverabilityTestReportsCommandInput;
      output: ListDeliverabilityTestReportsCommandOutput;
    };
  };
}
