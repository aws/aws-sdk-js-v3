// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSamplingRuleRequest, UpdateSamplingRuleResult } from "../models/models_0";
import { de_UpdateSamplingRuleCommand, se_UpdateSamplingRuleCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, XRayClientResolvedConfig } from "../XRayClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSamplingRuleCommand}.
 */
export interface UpdateSamplingRuleCommandInput extends UpdateSamplingRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSamplingRuleCommand}.
 */
export interface UpdateSamplingRuleCommandOutput extends UpdateSamplingRuleResult, __MetadataBearer {}

/**
 * <p>Modifies a sampling rule's configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { XRayClient, UpdateSamplingRuleCommand } from "@aws-sdk/client-xray"; // ES Modules import
 * // const { XRayClient, UpdateSamplingRuleCommand } = require("@aws-sdk/client-xray"); // CommonJS import
 * const client = new XRayClient(config);
 * const input = { // UpdateSamplingRuleRequest
 *   SamplingRuleUpdate: { // SamplingRuleUpdate
 *     RuleName: "STRING_VALUE",
 *     RuleARN: "STRING_VALUE",
 *     ResourceARN: "STRING_VALUE",
 *     Priority: Number("int"),
 *     FixedRate: Number("double"),
 *     ReservoirSize: Number("int"),
 *     Host: "STRING_VALUE",
 *     ServiceName: "STRING_VALUE",
 *     ServiceType: "STRING_VALUE",
 *     HTTPMethod: "STRING_VALUE",
 *     URLPath: "STRING_VALUE",
 *     Attributes: { // AttributeMap
 *       "<keys>": "STRING_VALUE",
 *     },
 *     SamplingRateBoost: { // SamplingRateBoost
 *       MaxRate: Number("double"), // required
 *       CooldownWindowMinutes: Number("int"), // required
 *     },
 *   },
 * };
 * const command = new UpdateSamplingRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSamplingRuleResult
 * //   SamplingRuleRecord: { // SamplingRuleRecord
 * //     SamplingRule: { // SamplingRule
 * //       RuleName: "STRING_VALUE",
 * //       RuleARN: "STRING_VALUE",
 * //       ResourceARN: "STRING_VALUE", // required
 * //       Priority: Number("int"), // required
 * //       FixedRate: Number("double"), // required
 * //       ReservoirSize: Number("int"), // required
 * //       ServiceName: "STRING_VALUE", // required
 * //       ServiceType: "STRING_VALUE", // required
 * //       Host: "STRING_VALUE", // required
 * //       HTTPMethod: "STRING_VALUE", // required
 * //       URLPath: "STRING_VALUE", // required
 * //       Version: Number("int"), // required
 * //       Attributes: { // AttributeMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       SamplingRateBoost: { // SamplingRateBoost
 * //         MaxRate: Number("double"), // required
 * //         CooldownWindowMinutes: Number("int"), // required
 * //       },
 * //     },
 * //     CreatedAt: new Date("TIMESTAMP"),
 * //     ModifiedAt: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateSamplingRuleCommandInput - {@link UpdateSamplingRuleCommandInput}
 * @returns {@link UpdateSamplingRuleCommandOutput}
 * @see {@link UpdateSamplingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSamplingRuleCommandOutput} for command's `response` shape.
 * @see {@link XRayClientResolvedConfig | config} for XRayClient's `config` shape.
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is missing required parameters or has invalid parameters.</p>
 *
 * @throws {@link ThrottledException} (client fault)
 *  <p>The request exceeds the maximum number of requests per second.</p>
 *
 * @throws {@link XRayServiceException}
 * <p>Base exception class for all service exceptions from XRay service.</p>
 *
 *
 * @public
 */
export class UpdateSamplingRuleCommand extends $Command
  .classBuilder<
    UpdateSamplingRuleCommandInput,
    UpdateSamplingRuleCommandOutput,
    XRayClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: XRayClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSXRay", "UpdateSamplingRule", {})
  .n("XRayClient", "UpdateSamplingRuleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSamplingRuleCommand)
  .de(de_UpdateSamplingRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSamplingRuleRequest;
      output: UpdateSamplingRuleResult;
    };
    sdk: {
      input: UpdateSamplingRuleCommandInput;
      output: UpdateSamplingRuleCommandOutput;
    };
  };
}
