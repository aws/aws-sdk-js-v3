// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListPricingRulesInput, ListPricingRulesOutput } from "../models/models_0";
import { ListPricingRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPricingRulesCommand}.
 */
export interface ListPricingRulesCommandInput extends ListPricingRulesInput {}
/**
 * @public
 *
 * The output of {@link ListPricingRulesCommand}.
 */
export interface ListPricingRulesCommandOutput extends ListPricingRulesOutput, __MetadataBearer {}

/**
 * Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingRulesCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingRulesCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // ListPricingRulesInput
 *   BillingPeriod: "STRING_VALUE",
 *   Filters: { // ListPricingRulesFilter
 *     Arns: [ // PricingRuleArns
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPricingRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListPricingRulesOutput
 * //   BillingPeriod: "STRING_VALUE",
 * //   PricingRules: [ // PricingRuleList
 * //     { // PricingRuleListElement
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Scope: "GLOBAL" || "SERVICE" || "BILLING_ENTITY" || "SKU",
 * //       Type: "MARKUP" || "DISCOUNT" || "TIERING",
 * //       ModifierPercentage: Number("double"),
 * //       Service: "STRING_VALUE",
 * //       AssociatedPricingPlanCount: Number("long"),
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       BillingEntity: "STRING_VALUE",
 * //       Tiering: { // Tiering
 * //         FreeTier: { // FreeTierConfig
 * //           Activated: true || false, // required
 * //         },
 * //         CustomTiers: [ // CustomTiersList
 * //           { // CustomTier
 * //             BeginRangeInclusive: Number("double"), // required
 * //             EndRangeExclusive: Number("double"),
 * //             RateValue: Number("double"), // required
 * //           },
 * //         ],
 * //       },
 * //       UsageType: "STRING_VALUE",
 * //       Operation: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricingRulesCommandInput - {@link ListPricingRulesCommandInput}
 * @returns {@link ListPricingRulesCommandOutput}
 * @see {@link ListPricingRulesCommandInput} for command's `input` shape.
 * @see {@link ListPricingRulesCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
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
export class ListPricingRulesCommand extends command<ListPricingRulesCommandInput, ListPricingRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListPricingRules",
  ListPricingRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPricingRulesInput;
      output: ListPricingRulesOutput;
    };
    sdk: {
      input: ListPricingRulesCommandInput;
      output: ListPricingRulesCommandOutput;
    };
  };
}
