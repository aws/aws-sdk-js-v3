// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateLongTermPricingRequest, UpdateLongTermPricingResult } from "../models/models_0";
import { UpdateLongTermPricing$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateLongTermPricingCommand}.
 */
export interface UpdateLongTermPricingCommandInput extends UpdateLongTermPricingRequest {}
/**
 * @public
 *
 * The output of {@link UpdateLongTermPricingCommand}.
 */
export interface UpdateLongTermPricingCommandOutput extends UpdateLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Updates the long-term pricing type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, UpdateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, UpdateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // UpdateLongTermPricingRequest
 *   LongTermPricingId: "STRING_VALUE", // required
 *   ReplacementJob: "STRING_VALUE",
 *   IsLongTermPricingAutoRenew: true || false,
 * };
 * const command = new UpdateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateLongTermPricingCommandInput - {@link UpdateLongTermPricingCommandInput}
 * @returns {@link UpdateLongTermPricingCommandOutput}
 * @see {@link UpdateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link UpdateLongTermPricingCommandOutput} for command's `response` shape.
 * @see {@link SnowballClientResolvedConfig | config} for SnowballClient's `config` shape.
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
export class UpdateLongTermPricingCommand extends command<UpdateLongTermPricingCommandInput, UpdateLongTermPricingCommandOutput>(
  _ep0,
  _mw0,
  "UpdateLongTermPricing",
  UpdateLongTermPricing$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateLongTermPricingRequest;
      output: {};
    };
    sdk: {
      input: UpdateLongTermPricingCommandInput;
      output: UpdateLongTermPricingCommandOutput;
    };
  };
}
