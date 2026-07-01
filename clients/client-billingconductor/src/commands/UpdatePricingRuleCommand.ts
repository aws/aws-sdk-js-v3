// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdatePricingRuleInput, UpdatePricingRuleOutput } from "../models/models_0";
import { UpdatePricingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdatePricingRuleCommand}.
 */
export interface UpdatePricingRuleCommandInput extends UpdatePricingRuleInput {}
/**
 * @public
 *
 * The output of {@link UpdatePricingRuleCommand}.
 */
export interface UpdatePricingRuleCommandOutput extends UpdatePricingRuleOutput, __MetadataBearer {}

/**
 * <p> Updates an existing pricing rule. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdatePricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdatePricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // UpdatePricingRuleInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   Type: "MARKUP" || "DISCOUNT" || "TIERING",
 *   ModifierPercentage: Number("double"),
 *   Tiering: { // UpdateTieringInput
 *     FreeTier: { // UpdateFreeTierConfig
 *       Activated: true || false, // required
 *     },
 *   },
 * };
 * const command = new UpdatePricingRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdatePricingRuleOutput
 * //   Arn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   Scope: "GLOBAL" || "SERVICE" || "BILLING_ENTITY" || "SKU",
 * //   Type: "MARKUP" || "DISCOUNT" || "TIERING",
 * //   ModifierPercentage: Number("double"),
 * //   Service: "STRING_VALUE",
 * //   AssociatedPricingPlanCount: Number("long"),
 * //   LastModifiedTime: Number("long"),
 * //   BillingEntity: "STRING_VALUE",
 * //   Tiering: { // UpdateTieringInput
 * //     FreeTier: { // UpdateFreeTierConfig
 * //       Activated: true || false, // required
 * //     },
 * //   },
 * //   UsageType: "STRING_VALUE",
 * //   Operation: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdatePricingRuleCommandInput - {@link UpdatePricingRuleCommandInput}
 * @returns {@link UpdatePricingRuleCommandOutput}
 * @see {@link UpdatePricingRuleCommandInput} for command's `input` shape.
 * @see {@link UpdatePricingRuleCommandOutput} for command's `response` shape.
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
export class UpdatePricingRuleCommand extends command<UpdatePricingRuleCommandInput, UpdatePricingRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdatePricingRule",
  UpdatePricingRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdatePricingRuleInput;
      output: UpdatePricingRuleOutput;
    };
    sdk: {
      input: UpdatePricingRuleCommandInput;
      output: UpdatePricingRuleCommandOutput;
    };
  };
}
