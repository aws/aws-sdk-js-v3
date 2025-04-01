// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePricingPlanInput,
  CreatePricingPlanInputFilterSensitiveLog,
  CreatePricingPlanOutput,
} from "../models/models_0";
import { de_CreatePricingPlanCommand, se_CreatePricingPlanCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Creates a pricing plan that is used for computing Amazon Web Services charges for billing groups.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreatePricingPlanCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreatePricingPlanCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
 *     </p>
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *  <p>The request would cause a service limit to exceed.
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
export class CreatePricingPlanCommand extends $Command
  .classBuilder<
    CreatePricingPlanCommandInput,
    CreatePricingPlanCommandOutput,
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
  .s("AWSBillingConductor", "CreatePricingPlan", {})
  .n("BillingconductorClient", "CreatePricingPlanCommand")
  .f(CreatePricingPlanInputFilterSensitiveLog, void 0)
  .ser(se_CreatePricingPlanCommand)
  .de(de_CreatePricingPlanCommand)
  .build() {
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
