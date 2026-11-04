// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociatePricingRulesInput, DisassociatePricingRulesOutput } from "../models/models_0";
import { DisassociatePricingRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates a list of pricing rules from a pricing plan.
 *
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can cause an inconsistent state by updating or deleting a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input doesn't match with the constraints specified by Amazon Web Services services.
 *
 * @throws {@link BillingconductorServiceException}
 *
 * Base exception class for all service exceptions from Billingconductor service.
 *
 * @public
 */
export class DisassociatePricingRulesCommand extends command<DisassociatePricingRulesCommandInput, DisassociatePricingRulesCommandOutput>(
  _ep0,
  _mw0,
  "DisassociatePricingRules",
  DisassociatePricingRules$
) {
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
