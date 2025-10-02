// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePricingRuleInput, DeletePricingRuleOutput } from "../models/models_0";
import { de_DeletePricingRuleCommand, se_DeletePricingRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p> Deletes the pricing rule that's identified by the input Amazon Resource Name (ARN). </p>
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
 *  <p>You do not have sufficient access to perform this action.
 *     </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource.
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
export class DeletePricingRuleCommand extends $Command
  .classBuilder<
    DeletePricingRuleCommandInput,
    DeletePricingRuleCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "DeletePricingRule", {})
  .n("BillingconductorClient", "DeletePricingRuleCommand")
  .f(void 0, void 0)
  .ser(se_DeletePricingRuleCommand)
  .de(de_DeletePricingRuleCommand)
  .build() {
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
