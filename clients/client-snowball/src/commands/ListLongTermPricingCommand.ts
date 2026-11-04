// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListLongTermPricingRequest, ListLongTermPricingResult } from "../models/models_0";
import { ListLongTermPricing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists all long-term pricing types.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, ListLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, ListLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
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
 *
 * The `NextToken` string was altered unexpectedly, and the operation has stopped. Run the operation without changing the `NextToken` string, and try again.
 *
 * @throws {@link InvalidResourceException} (client fault)
 *
 * The specified resource can't be found. Check the information you provided in your last request, and try again.
 *
 * @throws {@link SnowballServiceException}
 *
 * Base exception class for all service exceptions from Snowball service.
 *
 * @public
 */
export class ListLongTermPricingCommand extends command<ListLongTermPricingCommandInput, ListLongTermPricingCommandOutput>(
  _ep0,
  _mw0,
  "ListLongTermPricing",
  ListLongTermPricing$
) {
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
