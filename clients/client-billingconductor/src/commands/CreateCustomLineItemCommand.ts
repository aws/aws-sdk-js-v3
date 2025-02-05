// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateCustomLineItemInput,
  CreateCustomLineItemInputFilterSensitiveLog,
  CreateCustomLineItemOutput,
} from "../models/models_0";
import { de_CreateCustomLineItemCommand, se_CreateCustomLineItemCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateCustomLineItemCommand}.
 */
export interface CreateCustomLineItemCommandInput extends CreateCustomLineItemInput {}
/**
 * @public
 *
 * The output of {@link CreateCustomLineItemCommand}.
 */
export interface CreateCustomLineItemCommandOutput extends CreateCustomLineItemOutput, __MetadataBearer {}

/**
 * <p>Creates a custom line item that can be used to create a one-time fixed charge that can be
 *       applied to a single billing group for the current or previous billing period. The one-time
 *       fixed charge is either a fee or discount. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BillingconductorClient(config);
 * const input = { // CreateCustomLineItemInput
 *   ClientToken: "STRING_VALUE",
 *   Name: "STRING_VALUE", // required
 *   Description: "STRING_VALUE", // required
 *   BillingGroupArn: "STRING_VALUE", // required
 *   BillingPeriodRange: { // CustomLineItemBillingPeriodRange
 *     InclusiveStartBillingPeriod: "STRING_VALUE", // required
 *     ExclusiveEndBillingPeriod: "STRING_VALUE",
 *   },
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
 *   ChargeDetails: { // CustomLineItemChargeDetails
 *     Flat: { // CustomLineItemFlatChargeDetails
 *       ChargeValue: Number("double"), // required
 *     },
 *     Percentage: { // CustomLineItemPercentageChargeDetails
 *       PercentageValue: Number("double"), // required
 *       AssociatedValues: [ // CustomLineItemAssociationsList
 *         "STRING_VALUE",
 *       ],
 *     },
 *     Type: "STRING_VALUE", // required
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
 *   AccountId: "STRING_VALUE",
 * };
 * const command = new CreateCustomLineItemCommand(input);
 * const response = await client.send(command);
 * // { // CreateCustomLineItemOutput
 * //   Arn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateCustomLineItemCommandInput - {@link CreateCustomLineItemCommandInput}
 * @returns {@link CreateCustomLineItemCommandOutput}
 * @see {@link CreateCustomLineItemCommandInput} for command's `input` shape.
 * @see {@link CreateCustomLineItemCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CreateCustomLineItemCommand extends $Command
  .classBuilder<
    CreateCustomLineItemCommandInput,
    CreateCustomLineItemCommandOutput,
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
  .s("AWSBillingConductor", "CreateCustomLineItem", {})
  .n("BillingconductorClient", "CreateCustomLineItemCommand")
  .f(CreateCustomLineItemInputFilterSensitiveLog, void 0)
  .ser(se_CreateCustomLineItemCommand)
  .de(de_CreateCustomLineItemCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomLineItemInput;
      output: CreateCustomLineItemOutput;
    };
    sdk: {
      input: CreateCustomLineItemCommandInput;
      output: CreateCustomLineItemCommandOutput;
    };
  };
}
