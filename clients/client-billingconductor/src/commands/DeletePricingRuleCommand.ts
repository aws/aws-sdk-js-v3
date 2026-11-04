// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeletePricingRuleInput, DeletePricingRuleOutput } from "../models/models_0";
import { DeletePricingRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeletePricingRuleCommand}.
 */
export interface DeletePricingRuleCommandInput extends DeletePricingRuleInput {}
/**
 * @public
 *
 * The output of {@link DeletePricingRuleCommand}.
 */
export interface DeletePricingRuleCommandOutput extends DeletePricingRuleOutput, __MetadataBearer {}

/**
 * Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DeletePricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DeletePricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // DeletePricingRuleInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new DeletePricingRuleCommand(input);
 * const response = await client.send(command);
 * // { // DeletePricingRuleOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DeletePricingRuleCommandInput - {@link DeletePricingRuleCommandInput}
 * @returns {@link DeletePricingRuleCommandOutput}
 * @see {@link DeletePricingRuleCommandInput} for command's `input` shape.
 * @see {@link DeletePricingRuleCommandOutput} for command's `response` shape.
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
export class DeletePricingRuleCommand extends command<DeletePricingRuleCommandInput, DeletePricingRuleCommandOutput>(
  _ep0,
  _mw0,
  "DeletePricingRule",
  DeletePricingRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeletePricingRuleInput;
      output: DeletePricingRuleOutput;
    };
    sdk: {
      input: DeletePricingRuleCommandInput;
      output: DeletePricingRuleCommandOutput;
    };
  };
}
