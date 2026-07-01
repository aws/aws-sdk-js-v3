// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0";
import { ListDeliverabilityTestReports$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface ListDeliverabilityTestReportsCommandOutput extends ListDeliverabilityTestReportsResponse, __MetadataBearer {}

/**
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointEmailClient, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-pinpoint-email"; // ES Modules import
 * // const { PinpointEmailClient, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-pinpoint-email"); // CommonJS import
 * // import type { PinpointEmailClientConfig } from "@aws-sdk/client-pinpoint-email";
 * const config = {}; // type is PinpointEmailClientConfig
 * const client = new PinpointEmailClient(config);
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
export class ListDeliverabilityTestReportsCommand extends command<ListDeliverabilityTestReportsCommandInput, ListDeliverabilityTestReportsCommandOutput>(
  _ep0,
  _mw0,
  "ListDeliverabilityTestReports",
  ListDeliverabilityTestReports$
) {
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
