// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociatePricingRulesInput, AssociatePricingRulesOutput } from "../models/models_0";
import { AssociatePricingRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Connects an array of `PricingRuleArns` to a defined `PricingPlan`. The maximum number `PricingRuleArn` that can be associated in one call is 30.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, AssociatePricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, AssociatePricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
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
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request would cause a service limit to exceed.
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
export class AssociatePricingRulesCommand extends command<AssociatePricingRulesCommandInput, AssociatePricingRulesCommandOutput>(
  _ep0,
  _mw0,
  "AssociatePricingRules",
  AssociatePricingRules$
) {
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
