// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreatePricingRuleInput,
  CreatePricingRuleInputFilterSensitiveLog,
  CreatePricingRuleOutput,
} from "../models/models_0";
import { de_CreatePricingRuleCommand, se_CreatePricingRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreatePricingRuleCommand}.
 */
export interface CreatePricingRuleCommandInput extends CreatePricingRuleInput {}
/**
 * @public
 *
 * The output of {@link CreatePricingRuleCommand}.
 */
export interface CreatePricingRuleCommandOutput extends CreatePricingRuleOutput, __MetadataBearer {}

/**
 * <p>
 *       Creates a pricing rule can be associated to a pricing plan, or a set of pricing plans.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreatePricingRuleCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreatePricingRuleCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // CreatePricingRuleInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Scope: "STRING_VALUE", // required
 *   Type: "STRING_VALUE", // required
 *   ModifierPercentage: Number("double"),
 *   Service: "STRING_VALUE",
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   BillingEntity: "STRING_VALUE",
 *   Tiering: { // CreateTieringInput
 *     FreeTier: { // CreateFreeTierConfig
 *       Activated: true || false, // required
 *     },
 *   },
 *   UsageType: "STRING_VALUE",
 *   Operation: "STRING_VALUE",
 * };
 * const command = new CreatePricingRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreatePricingRuleOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreatePricingRuleCommandInput - {@link CreatePricingRuleCommandInput}
 * @returns {@link CreatePricingRuleCommandOutput}
 * @see {@link CreatePricingRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePricingRuleCommandOutput} for command's `response` shape.
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
export class CreatePricingRuleCommand extends $Command
  .classBuilder<
    CreatePricingRuleCommandInput,
    CreatePricingRuleCommandOutput,
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
  .s("AWSBillingConductor", "CreatePricingRule", {})
  .n("BillingconductorClient", "CreatePricingRuleCommand")
  .f(CreatePricingRuleInputFilterSensitiveLog, void 0)
  .ser(se_CreatePricingRuleCommand)
  .de(de_CreatePricingRuleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreatePricingRuleInput;
      output: CreatePricingRuleOutput;
    };
    sdk: {
      input: CreatePricingRuleCommandInput;
      output: CreatePricingRuleCommandOutput;
    };
  };
}
