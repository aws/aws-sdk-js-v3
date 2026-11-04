// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePricingPlanInput, DeletePricingPlanOutput } from "../models/models_0";
import { DeletePricingPlan$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePricingPlanCommand}.
 */
export interface DeletePricingPlanCommandInput extends DeletePricingPlanInput {}
/**
 * @public
 *
 * The output of {@link DeletePricingPlanCommand}.
 */
export interface DeletePricingPlanCommandOutput extends DeletePricingPlanOutput, __MetadataBearer {}

/**
 * Deletes a pricing plan. The pricing plan must not be associated with any billing groups to delete successfully.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DeletePricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DeletePricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // DeletePricingPlanInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePricingPlanCommand(input);
 * const response = await client.send(command);
 * // { // DeletePricingPlanOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePricingPlanCommandInput - {@link DeletePricingPlanCommandInput}
 * @returns {@link DeletePricingPlanCommandOutput}
 * @see {@link DeletePricingPlanCommandInput} for command's `input` shape.
 * @see {@link DeletePricingPlanCommandOutput} for command's `response` shape.
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
export class DeletePricingPlanCommand extends command<DeletePricingPlanCommandInput, DeletePricingPlanCommandOutput>(
  _ep0,
  _mw0,
  "DeletePricingPlan",
  DeletePricingPlan$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePricingPlanInput;
      output: DeletePricingPlanOutput;
    };
    sdk: {
      input: DeletePricingPlanCommandInput;
      output: DeletePricingPlanCommandOutput;
    };
  };
}
