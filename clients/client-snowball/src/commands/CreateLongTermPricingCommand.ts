// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateLongTermPricingRequest, CreateLongTermPricingResult } from "../models/models_0";
import { de_CreateLongTermPricingCommand, se_CreateLongTermPricingCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SnowballClientResolvedConfig } from "../SnowballClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateLongTermPricingCommand}.
 */
export interface CreateLongTermPricingCommandInput extends CreateLongTermPricingRequest {}
/**
 * @public
 *
 * The output of {@link CreateLongTermPricingCommand}.
 */
export interface CreateLongTermPricingCommandOutput extends CreateLongTermPricingResult, __MetadataBearer {}

/**
 * <p>Creates a job with the long-term usage option for a device. The long-term usage is a
 *       1-year or 3-year long-term pricing type for the device. You are billed upfront, and Amazon Web Services provides discounts for long-term pricing.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SnowballClient, CreateLongTermPricingCommand } from "@aws-sdk/client-snowball"; // ES Modules import
 * // const { SnowballClient, CreateLongTermPricingCommand } = require("@aws-sdk/client-snowball"); // CommonJS import
 * // import type { SnowballClientConfig } from "@aws-sdk/client-snowball";
 * const config = {}; // type is SnowballClientConfig
 * const client = new SnowballClient(config);
 * const input = { // CreateLongTermPricingRequest
 *   LongTermPricingType: "OneYear" || "ThreeYear" || "OneMonth", // required
 *   IsLongTermPricingAutoRenew: true || false,
 *   SnowballType: "STANDARD" || "EDGE" || "EDGE_C" || "EDGE_CG" || "EDGE_S" || "SNC1_HDD" || "SNC1_SSD" || "V3_5C" || "V3_5S" || "RACK_5U_C", // required
 * };
 * const command = new CreateLongTermPricingCommand(input);
 * const response = await client.send(command);
 * // { // CreateLongTermPricingResult
 * //   LongTermPricingId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateLongTermPricingCommandInput - {@link CreateLongTermPricingCommandInput}
 * @returns {@link CreateLongTermPricingCommandOutput}
 * @see {@link CreateLongTermPricingCommandInput} for command's `input` shape.
 * @see {@link CreateLongTermPricingCommandOutput} for command's `response` shape.
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
export class CreateLongTermPricingCommand extends $Command
  .classBuilder<
    CreateLongTermPricingCommandInput,
    CreateLongTermPricingCommandOutput,
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
  .s("AWSIESnowballJobManagementService", "CreateLongTermPricing", {})
  .n("SnowballClient", "CreateLongTermPricingCommand")
  .f(void 0, void 0)
  .ser(se_CreateLongTermPricingCommand)
  .de(de_CreateLongTermPricingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateLongTermPricingRequest;
      output: CreateLongTermPricingResult;
    };
    sdk: {
      input: CreateLongTermPricingCommandInput;
      output: CreateLongTermPricingCommandOutput;
    };
  };
}
