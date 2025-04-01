// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListZonalShiftsRequest, ListZonalShiftsResponse } from "../models/models_0";
import { de_ListZonalShiftsCommand, se_ListZonalShiftsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListZonalShiftsCommand}.
 */
export interface ListZonalShiftsCommandInput extends ListZonalShiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListZonalShiftsCommand}.
 */
export interface ListZonalShiftsCommandOutput extends ListZonalShiftsResponse, __MetadataBearer {}

/**
 * <p>Lists all active and completed zonal shifts in Amazon Route 53 Application Recovery Controller in your Amazon Web Services account in this Amazon Web Services Region.
 *    		<code>ListZonalShifts</code> returns customer-initiated zonal shifts, as well as practice run zonal shifts that ARC started on
 *    		your behalf for zonal autoshift.</p>
 *          <p>For more information about listing
 *    		autoshifts, see <a href="https://docs.aws.amazon.com/arc-zonal-shift/latest/api/API_ListAutoshifts.html">"&gt;ListAutoshifts</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListZonalShiftsCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListZonalShiftsCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * const client = new ARCZonalShiftClient(config);
 * const input = { // ListZonalShiftsRequest
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "EXPIRED" || "CANCELED",
 *   maxResults: Number("int"),
 *   resourceIdentifier: "STRING_VALUE",
 * };
 * const command = new ListZonalShiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListZonalShiftsResponse
 * //   items: [ // ZonalShiftSummaries
 * //     { // ZonalShiftSummary
 * //       zonalShiftId: "STRING_VALUE", // required
 * //       resourceIdentifier: "STRING_VALUE", // required
 * //       awayFrom: "STRING_VALUE", // required
 * //       expiryTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE" || "EXPIRED" || "CANCELED", // required
 * //       comment: "STRING_VALUE", // required
 * //       shiftType: "ZONAL_SHIFT" || "PRACTICE_RUN" || "FIS_EXPERIMENT" || "ZONAL_AUTOSHIFT",
 * //       practiceRunOutcome: "FAILED" || "INTERRUPTED" || "PENDING" || "SUCCEEDED",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListZonalShiftsCommandInput - {@link ListZonalShiftsCommandInput}
 * @returns {@link ListZonalShiftsCommandOutput}
 * @see {@link ListZonalShiftsCommandInput} for command's `input` shape.
 * @see {@link ListZonalShiftsCommandOutput} for command's `response` shape.
 * @see {@link ARCZonalShiftClientResolvedConfig | config} for ARCZonalShiftClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>There was an internal server error.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link ARCZonalShiftServiceException}
 * <p>Base exception class for all service exceptions from ARCZonalShift service.</p>
 *
 *
 * @public
 */
export class ListZonalShiftsCommand extends $Command
  .classBuilder<
    ListZonalShiftsCommandInput,
    ListZonalShiftsCommandOutput,
    ARCZonalShiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ARCZonalShiftClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("PercDataPlane", "ListZonalShifts", {})
  .n("ARCZonalShiftClient", "ListZonalShiftsCommand")
  .f(void 0, void 0)
  .ser(se_ListZonalShiftsCommand)
  .de(de_ListZonalShiftsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListZonalShiftsRequest;
      output: ListZonalShiftsResponse;
    };
    sdk: {
      input: ListZonalShiftsCommandInput;
      output: ListZonalShiftsCommandOutput;
    };
  };
}
