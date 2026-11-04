// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListPricingPlansAssociatedWithPricingRuleInput,
  ListPricingPlansAssociatedWithPricingRuleOutput,
} from "../models/models_0";
import { ListPricingPlansAssociatedWithPricingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListPricingPlansAssociatedWithPricingRuleCommand}.
 */
export interface ListPricingPlansAssociatedWithPricingRuleCommandInput extends ListPricingPlansAssociatedWithPricingRuleInput {}
/**
 * @public
 *
 * The output of {@link ListPricingPlansAssociatedWithPricingRuleCommand}.
 */
export interface ListPricingPlansAssociatedWithPricingRuleCommandOutput extends ListPricingPlansAssociatedWithPricingRuleOutput, __MetadataBearer {}

/**
 * A list of the pricing plans that are associated with a pricing rule.
 *
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
 *
 * You do not have sufficient access to perform this action.
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
export class ListPricingPlansAssociatedWithPricingRuleCommand extends command<ListPricingPlansAssociatedWithPricingRuleCommandInput, ListPricingPlansAssociatedWithPricingRuleCommandOutput>(
  _ep0,
  _mw0,
  "ListPricingPlansAssociatedWithPricingRule",
  ListPricingPlansAssociatedWithPricingRule$
) {
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
