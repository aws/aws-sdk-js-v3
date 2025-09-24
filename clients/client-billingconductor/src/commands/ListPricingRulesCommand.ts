// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListPricingRulesInput, ListPricingRulesOutput } from "../models/models_0";
import { ListPricingRules } from "../schemas/schemas_5_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>
 *       Describes a pricing rule that can be associated to a pricing plan, or set of pricing plans.
 *     </p>
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
 * //       Scope: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
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
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request.
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
 *
 * @public
 */
export class ListPricingRulesCommand extends $Command
  .classBuilder<
    ListPricingRulesCommandInput,
    ListPricingRulesCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "ListPricingRules", {})
  .n("BillingconductorClient", "ListPricingRulesCommand")
  .sc(ListPricingRules)
  .build() {
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
