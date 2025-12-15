// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  BillingconductorClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociatePricingRulesInput, DisassociatePricingRulesOutput } from "../models/models_0";
import { DisassociatePricingRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociatePricingRulesCommand}.
 */
export interface DisassociatePricingRulesCommandInput extends DisassociatePricingRulesInput {}
/**
 * @public
 *
 * The output of {@link DisassociatePricingRulesCommand}.
 */
export interface DisassociatePricingRulesCommandOutput extends DisassociatePricingRulesOutput, __MetadataBearer {}

/**
 * <p> Disassociates a list of pricing rules from a pricing plan. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DisassociatePricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DisassociatePricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // DisassociatePricingRulesInput
 *   Arn: "STRING_VALUE", // required
 *   PricingRuleArns: [ // PricingRuleArnsNonEmptyInput // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DisassociatePricingRulesCommand(input);
 * const response = await client.send(command);
 * // { // DisassociatePricingRulesOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DisassociatePricingRulesCommandInput - {@link DisassociatePricingRulesCommandInput}
 * @returns {@link DisassociatePricingRulesCommandOutput}
 * @see {@link DisassociatePricingRulesCommandInput} for command's `input` shape.
 * @see {@link DisassociatePricingRulesCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class DisassociatePricingRulesCommand extends $Command
  .classBuilder<
    DisassociatePricingRulesCommandInput,
    DisassociatePricingRulesCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "DisassociatePricingRules", {})
  .n("BillingconductorClient", "DisassociatePricingRulesCommand")
  .sc(DisassociatePricingRules$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociatePricingRulesInput;
      output: DisassociatePricingRulesOutput;
    };
    sdk: {
      input: DisassociatePricingRulesCommandInput;
      output: DisassociatePricingRulesCommandOutput;
    };
  };
}
