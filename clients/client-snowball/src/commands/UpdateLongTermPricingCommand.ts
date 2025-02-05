// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateLongTermPricingRequest, UpdateLongTermPricingResult } from "../models/models_0";
import { de_UpdateLongTermPricingCommand, se_UpdateLongTermPricingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class UpdateLongTermPricingCommand extends $Command
  .classBuilder<
    UpdateLongTermPricingCommandInput,
    UpdateLongTermPricingCommandOutput,
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
  .s("AWSIESnowballJobManagementService", "UpdateLongTermPricing", {})
  .n("SnowballClient", "UpdateLongTermPricingCommand")
  .f(void 0, void 0)
  .ser(se_UpdateLongTermPricingCommand)
  .de(de_UpdateLongTermPricingCommand)
  .build() {
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
