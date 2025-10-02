// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListPricingPlansInput,
  ListPricingPlansOutput,
  ListPricingPlansOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListPricingPlansCommand, se_ListPricingPlansCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListPricingPlansCommand}.
 */
export interface ListPricingPlansCommandInput extends ListPricingPlansInput {}
/**
 * @public
 *
 * The output of {@link ListPricingPlansCommand}.
 */
export interface ListPricingPlansCommandOutput extends ListPricingPlansOutput, __MetadataBearer {}

/**
 * <p>A paginated call to get pricing plans for the given billing period. If you don't provide a billing period, the current billing period is used.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListPricingPlansCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListPricingPlansCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
 * const client = new BillingconductorClient(config);
 * const input = { // ListPricingPlansInput
 *   BillingPeriod: "STRING_VALUE",
 *   Filters: { // ListPricingPlansFilter
 *     Arns: [ // PricingPlanArns
 *       "STRING_VALUE",
 *     ],
 *   },
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListPricingPlansCommand(input);
 * const response = await client.send(command);
 * // { // ListPricingPlansOutput
 * //   BillingPeriod: "STRING_VALUE",
 * //   PricingPlans: [ // PricingPlanList
 * //     { // PricingPlanListElement
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       Size: Number("long"),
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListPricingPlansCommandInput - {@link ListPricingPlansCommandInput}
 * @returns {@link ListPricingPlansCommandOutput}
 * @see {@link ListPricingPlansCommandInput} for command's `input` shape.
 * @see {@link ListPricingPlansCommandOutput} for command's `response` shape.
 * @see {@link BillingconductorClientResolvedConfig | config} for BillingconductorClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.
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
export class ListPricingPlansCommand extends $Command
  .classBuilder<
    ListPricingPlansCommandInput,
    ListPricingPlansCommandOutput,
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
  .s("AWSBillingConductor", "ListPricingPlans", {})
  .n("BillingconductorClient", "ListPricingPlansCommand")
  .f(void 0, ListPricingPlansOutputFilterSensitiveLog)
  .ser(se_ListPricingPlansCommand)
  .de(de_ListPricingPlansCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListPricingPlansInput;
      output: ListPricingPlansOutput;
    };
    sdk: {
      input: ListPricingPlansCommandInput;
      output: ListPricingPlansCommandOutput;
    };
  };
}
