// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { DeletePricingPlanInput, DeletePricingPlanOutput } from "../models/models_0";
import { de_DeletePricingPlanCommand, se_DeletePricingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Deletes a pricing plan. The pricing plan must not be associated with any billing groups to
 *       delete successfully.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, DeletePricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, DeletePricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class DeletePricingPlanCommand extends $Command
  .classBuilder<
    DeletePricingPlanCommandInput,
    DeletePricingPlanCommandOutput,
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
  .s("AWSBillingConductor", "DeletePricingPlan", {})
  .n("BillingconductorClient", "DeletePricingPlanCommand")
  .f(void 0, void 0)
  .ser(se_DeletePricingPlanCommand)
  .de(de_DeletePricingPlanCommand)
  .build() {
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
