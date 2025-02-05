// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ARCZonalShiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ARCZonalShiftClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListAutoshiftsRequest, ListAutoshiftsResponse } from "../models/models_0";
import { de_ListAutoshiftsCommand, se_ListAutoshiftsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAutoshiftsCommand}.
 */
export interface ListAutoshiftsCommandInput extends ListAutoshiftsRequest {}
/**
 * @public
 *
 * The output of {@link ListAutoshiftsCommand}.
 */
export interface ListAutoshiftsCommandOutput extends ListAutoshiftsResponse, __MetadataBearer {}

/**
 * <p>Returns a list of autoshifts for an Amazon Web Services Region. By default, the call returns
 * 			only <code>ACTIVE</code> autoshifts. Optionally, you can specify the <code>status</code> parameter to return
 * 			<code>COMPLETED</code> autoshifts.
 * 		</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ARCZonalShiftClient, ListAutoshiftsCommand } from "@aws-sdk/client-arc-zonal-shift"; // ES Modules import
 * // const { ARCZonalShiftClient, ListAutoshiftsCommand } = require("@aws-sdk/client-arc-zonal-shift"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ARCZonalShiftClient(config);
 * const input = { // ListAutoshiftsRequest
 *   nextToken: "STRING_VALUE",
 *   status: "ACTIVE" || "COMPLETED",
 *   maxResults: Number("int"),
 * };
 * const command = new ListAutoshiftsCommand(input);
 * const response = await client.send(command);
 * // { // ListAutoshiftsResponse
 * //   items: [ // AutoshiftSummaries
 * //     { // AutoshiftSummary
 * //       awayFrom: "STRING_VALUE", // required
 * //       endTime: new Date("TIMESTAMP"), // required
 * //       startTime: new Date("TIMESTAMP"), // required
 * //       status: "ACTIVE" || "COMPLETED", // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAutoshiftsCommandInput - {@link ListAutoshiftsCommandInput}
 * @returns {@link ListAutoshiftsCommandOutput}
 * @see {@link ListAutoshiftsCommandInput} for command's `input` shape.
 * @see {@link ListAutoshiftsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListAutoshiftsCommand extends $Command
  .classBuilder<
    ListAutoshiftsCommandInput,
    ListAutoshiftsCommandOutput,
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
  .s("PercDataPlane", "ListAutoshifts", {})
  .n("ARCZonalShiftClient", "ListAutoshiftsCommand")
  .f(void 0, void 0)
  .ser(se_ListAutoshiftsCommand)
  .de(de_ListAutoshiftsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAutoshiftsRequest;
      output: ListAutoshiftsResponse;
    };
    sdk: {
      input: ListAutoshiftsCommandInput;
      output: ListAutoshiftsCommandOutput;
    };
  };
}
