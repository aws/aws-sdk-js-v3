// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  UpdateCustomLineItemInput,
  UpdateCustomLineItemInputFilterSensitiveLog,
  UpdateCustomLineItemOutput,
  UpdateCustomLineItemOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_UpdateCustomLineItemCommand, se_UpdateCustomLineItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateCustomLineItemCommand}.
 */
export interface UpdateCustomLineItemCommandInput extends UpdateCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link UpdateCustomLineItemCommand}.
 */
export interface UpdateCustomLineItemCommandOutput extends UpdateCustomLineItemOutput, __MetadataBearer {}

/**
 * <p>
 *       Update an existing custom line item in the current or previous billing period.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BillingconductorClient(config);
 * const input = { // UpdateCustomLineItemInput
 *   Arn: "STRING_VALUE", // required
 *   Name: "STRING_VALUE",
 *   Description: "STRING_VALUE",
 *   ChargeDetails: { // UpdateCustomLineItemChargeDetails
 *     Flat: { // UpdateCustomLineItemFlatChargeDetails
 *       ChargeValue: Number("double"), // required
 *     },
 *     Percentage: { // UpdateCustomLineItemPercentageChargeDetails
 *       PercentageValue: Number("double"), // required
 *     },
 *     LineItemFilters: [ // LineItemFiltersList
 *       { // LineItemFilter
 *         Attribute: "STRING_VALUE", // required
 *         MatchOption: "STRING_VALUE", // required
 *         Values: [ // LineItemFilterValuesList // required
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // UpdateCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * //   BillingGroupArn: "STRING_VALUE",
 * //   Name: "STRING_VALUE",
 * //   Description: "STRING_VALUE",
 * //   ChargeDetails: { // ListCustomLineItemChargeDetails
 * //     Flat: { // ListCustomLineItemFlatChargeDetails
 * //       ChargeValue: Number("double"), // required
 * //     },
 * //     Percentage: { // ListCustomLineItemPercentageChargeDetails
 * //       PercentageValue: Number("double"), // required
 * //     },
 * //     Type: "STRING_VALUE", // required
 * //     LineItemFilters: [ // LineItemFiltersList
 * //       { // LineItemFilter
 * //         Attribute: "STRING_VALUE", // required
 * //         MatchOption: "STRING_VALUE", // required
 * //         Values: [ // LineItemFilterValuesList // required
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //     ],
 * //   },
 * //   LastModifiedTime: Number("long"),
 * //   AssociationSize: Number("long"),
 * // };
 *
 * ```
 *
 * @param UpdateCustomLineItemCommandInput - {@link UpdateCustomLineItemCommandInput}
 * @returns {@link UpdateCustomLineItemCommandOutput}
 * @see {@link UpdateCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomLineItemCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist.
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
export class UpdateCustomLineItemCommand extends $Command
  .classBuilder<
    UpdateCustomLineItemCommandInput,
    UpdateCustomLineItemCommandOutput,
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
  .s("AWSBillingConductor", "UpdateCustomLineItem", {})
  .n("BillingconductorClient", "UpdateCustomLineItemCommand")
  .f(UpdateCustomLineItemInputFilterSensitiveLog, UpdateCustomLineItemOutputFilterSensitiveLog)
  .ser(se_UpdateCustomLineItemCommand)
  .de(de_UpdateCustomLineItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomLineItemInput;
      output: UpdateCustomLineItemOutput;
    };
    sdk: {
      input: UpdateCustomLineItemCommandInput;
      output: UpdateCustomLineItemCommandOutput;
    };
  };
}
