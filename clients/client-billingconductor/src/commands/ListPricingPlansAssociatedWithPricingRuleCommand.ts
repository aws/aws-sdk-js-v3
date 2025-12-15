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
import type {
  ListPricingPlansAssociatedWithPricingRuleInput,
  ListPricingPlansAssociatedWithPricingRuleOutput,
} from "../models/models_0";
import { ListPricingPlansAssociatedWithPricingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPricingPlansAssociatedWithPricingRuleCommand}.
 */
export interface ListPricingPlansAssociatedWithPricingRuleCommandInput
  extends ListPricingPlansAssociatedWithPricingRuleInput {}
/**
 * @public
 *
 * The output of {@link ListPricingPlansAssociatedWithPricingRuleCommand}.
 */
export interface ListPricingPlansAssociatedWithPricingRuleCommandOutput
  extends ListPricingPlansAssociatedWithPricingRuleOutput,
    __MetadataBearer {}

/**
 * <p> A list of the pricing plans that are associated with a pricing rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingPlansAssociatedWithPricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingPlansAssociatedWithPricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // ListPricingPlansAssociatedWithPricingRuleInput
 *   BillingPeriod: "STRING_VALUE",
 *   PricingRuleArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPricingPlansAssociatedWithPricingRuleCommand(input);
 * const response = await client.send(command);
 * // { // ListPricingPlansAssociatedWithPricingRuleOutput
 * //   BillingPeriod: "STRING_VALUE",
 * //   PricingRuleArn: "STRING_VALUE",
 * //   PricingPlanArns: [ // PricingPlanArns
 * //     "STRING_VALUE",
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricingPlansAssociatedWithPricingRuleCommandInput - {@link ListPricingPlansAssociatedWithPricingRuleCommandInput}
 * @returns {@link ListPricingPlansAssociatedWithPricingRuleCommandOutput}
 * @see {@link ListPricingPlansAssociatedWithPricingRuleCommandInput} for command's `input` shape.
 * @see {@link ListPricingPlansAssociatedWithPricingRuleCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action. </p>
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
export class ListPricingPlansAssociatedWithPricingRuleCommand extends $Command
  .classBuilder<
    ListPricingPlansAssociatedWithPricingRuleCommandInput,
    ListPricingPlansAssociatedWithPricingRuleCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSBillingConductor", "ListPricingPlansAssociatedWithPricingRule", {})
  .n("BillingconductorClient", "ListPricingPlansAssociatedWithPricingRuleCommand")
  .sc(ListPricingPlansAssociatedWithPricingRule$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPricingPlansAssociatedWithPricingRuleInput;
      output: ListPricingPlansAssociatedWithPricingRuleOutput;
    };
    sdk: {
      input: ListPricingPlansAssociatedWithPricingRuleCommandInput;
      output: ListPricingPlansAssociatedWithPricingRuleCommandOutput;
    };
  };
}
