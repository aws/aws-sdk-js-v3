// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreatePricingPlanInput, CreatePricingPlanOutput } from "../models/models_0";
import { CreatePricingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreatePricingPlanCommand}.
 */
export interface CreatePricingPlanCommandInput extends CreatePricingPlanInput {}
/**
 * @public
 *
 * The output of {@link CreatePricingPlanCommand}.
 */
export interface CreatePricingPlanCommandOutput extends CreatePricingPlanOutput, __MetadataBearer {}

/**
 * Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreatePricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreatePricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // CreatePricingPlanInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   PricingRuleArns: [ // PricingRuleArnsInput
 *     "STRING_VALUE",
 *   ],
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new CreatePricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // CreatePricingPlanOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePricingPlanCommandInput - {@link CreatePricingPlanCommandInput}
 * @returns {@link CreatePricingPlanCommandOutput}
 * @see {@link CreatePricingPlanCommandInput} for command's `input` shape.
 * @see {@link CreatePricingPlanCommandOutput} for command's `response` shape.
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
export class CreatePricingPlanCommand extends command<CreatePricingPlanCommandInput, CreatePricingPlanCommandOutput>(
  _ep0,
  _mw0,
  "CreatePricingPlan",
  CreatePricingPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePricingPlanInput;
      output: CreatePricingPlanOutput;
    };
    sdk: {
      input: CreatePricingPlanCommandInput;
      output: CreatePricingPlanCommandOutput;
    };
  };
}
