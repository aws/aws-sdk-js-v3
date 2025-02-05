// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { AssociatePricingRulesInput, AssociatePricingRulesOutput } from "../models/models_0";
import { de_AssociatePricingRulesCommand, se_AssociatePricingRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AssociatePricingRulesCommand}.
 */
export interface AssociatePricingRulesCommandInput extends AssociatePricingRulesInput {}
/**
 * @public
 *
 * The output of {@link AssociatePricingRulesCommand}.
 */
export interface AssociatePricingRulesCommandOutput extends AssociatePricingRulesOutput, __MetadataBearer {}

/**
 * <p>Connects an array of <code>PricingRuleArns</code> to a defined <code>PricingPlan</code>.
 *       The maximum number <code>PricingRuleArn</code> that can be associated in one call is 30. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, AssociatePricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, AssociatePricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BillingconductorClient(config);
 * const input = { // AssociatePricingRulesInput
 *   Arn: "STRING_VALUE", // required
 *   PricingRuleArns: [ // PricingRuleArnsNonEmptyInput // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new AssociatePricingRulesCommand(input);
 * const response = await client.send(command);
 * // { // AssociatePricingRulesOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param AssociatePricingRulesCommandInput - {@link AssociatePricingRulesCommandInput}
 * @returns {@link AssociatePricingRulesCommandOutput}
 * @see {@link AssociatePricingRulesCommandInput} for command's `input` shape.
 * @see {@link AssociatePricingRulesCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
 *     </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request would cause a service limit to exceed.
 *     </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.
 *     </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 * @public
 */
export class AssociatePricingRulesCommand extends $Command
  .classBuilder<
    AssociatePricingRulesCommandInput,
    AssociatePricingRulesCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "AssociatePricingRules", {})
  .n("BillingconductorClient", "AssociatePricingRulesCommand")
  .f(void 0, void 0)
  .ser(se_AssociatePricingRulesCommand)
  .de(de_AssociatePricingRulesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociatePricingRulesInput;
      output: AssociatePricingRulesOutput;
    };
    sdk: {
      input: AssociatePricingRulesCommandInput;
      output: AssociatePricingRulesCommandOutput;
    };
  };
}
