// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePricingRuleInput, CreatePricingRuleOutput } from "../models/models_0";
import { CreatePricingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePricingRuleCommand}.
 */
export interface CreatePricingRuleCommandInput extends CreatePricingRuleInput {}
/**
 * @public
 *
 * The output of {@link CreatePricingRuleCommand}.
 */
export interface CreatePricingRuleCommandOutput extends CreatePricingRuleOutput, __MetadataBearer {}

/**
 * Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreatePricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreatePricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // CreatePricingRuleInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Scope: "GLOBAL" || "SERVICE" || "BILLING_ENTITY" || "SKU", // required
 *   Type: "MARKUP" || "DISCOUNT" || "TIERING", // required
 *   ModifierPercentage: Number("double"),
 *   Service: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   BillingEntity: "STRING_VALUE",
 *   Tiering: { // CreateTieringInput
 *     FreeTier: { // CreateFreeTierConfig
 *       Activated: true || false, // required
 *     },
 *     CustomTiers: [ // CustomTiersList
 *       { // CustomTier
 *         BeginRangeInclusive: Number("double"), // required
 *         EndRangeExclusive: Number("double"),
 *         RateValue: Number("double"), // required
 *       },
 *     ],
 *   },
 *   UsageType: "STRING_VALUE",
 *   Operation: "STRING_VALUE",
 * };
 * const command = new CreatePricingRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreatePricingRuleOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePricingRuleCommandInput - {@link CreatePricingRuleCommandInput}
 * @returns {@link CreatePricingRuleCommandOutput}
 * @see {@link CreatePricingRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePricingRuleCommandOutput} for command's `response` shape.
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
export class CreatePricingRuleCommand extends command<CreatePricingRuleCommandInput, CreatePricingRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreatePricingRule",
  CreatePricingRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePricingRuleInput;
      output: CreatePricingRuleOutput;
    };
    sdk: {
      input: CreatePricingRuleCommandInput;
      output: CreatePricingRuleCommandOutput;
    };
  };
}
