// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { ListLongTermPricingRequest, ListLongTermPricingResult } from "../models/models_0";
import { de_ListLongTermPricingCommand, se_ListLongTermPricingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListLongTermPricingCommand}.
 */
export interface ListLongTermPricingCommandInput extends ListLongTermPricingRequest {}
/**
 * @public
 *
 * The output of {@link ListLongTermPricingCommand}.
 */
export interface ListLongTermPricingCommandOutput extends ListLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Lists all long-term pricing types.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * const client = new SnowballClient(config);
 * const input = { // ListLongTermPricingRequest
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListLongTermPricingCommand(input);
 * const response = await client.send(command);
 * // { // ListLongTermPricingResult
 * //   LongTermPricingEntries: [ // LongTermPricingEntryList
 * //     { // LongTermPricingListEntry
 * //       LongTermPricingId: "STRING_VALUE",
 * //       LongTermPricingEndDate: new Date("TIMESTAMP"),
 * //       LongTermPricingStartDate: new Date("TIMESTAMP"),
 * //       LongTermPricingType: "OneYear" || "ThreeYear" || "OneMonth",
 * //       CurrentActiveJob: "STRING_VALUE",
 * //       ReplacementJob: "STRING_VALUE",
 * //       IsLongTermPricingAutoRenew: true || false,
 * //       LongTermPricingStatus: "STRING_VALUE",
 * //       SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C",
 * //       JobIds: [ // LongTermPricingAssociatedJobIdList
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListLongTermPricingCommandInput - {@link ListLongTermPricingCommandInput}
 * @returns {@link ListLongTermPricingCommandOutput}
 * @see {@link ListLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link ListLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
 *
 * @throws {@link InvalidNextTokenException} (client fault)
 *  <p>The <code>NextToken</code> string was altered unexpectedly, and the operation has
 *       stopped. Run the operation without changing the <code>NextToken</code> string, and try
 *       again.</p>
 *
 * @throws {@link InvalidResourceException} (client fault)
 *  <p>The specified resource can't be found. Check the information you provided in your last
 *       request, and try again.</p>
 *
 * @throws {@link SnowballServiceException}
 * <p>Base exception class for all service exceptions from Snowball service.</p>
 *
 *
 * @public
 */
export class ListLongTermPricingCommand extends $Command
  .classBuilder<
    ListLongTermPricingCommandInput,
    ListLongTermPricingCommandOutput,
    SnowballClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SnowballClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIESnowballJobManagementService", "ListLongTermPricing", {})
  .n("SnowballClient", "ListLongTermPricingCommand")
  .f(void 0, void 0)
  .ser(se_ListLongTermPricingCommand)
  .de(de_ListLongTermPricingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListLongTermPricingRequest;
      output: ListLongTermPricingResult;
    };
    sdk: {
      input: ListLongTermPricingCommandInput;
      output: ListLongTermPricingCommandOutput;
    };
  };
}
