// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCustomLineItemsInput,
  ListCustomLineItemsInputFilterSensitiveLog,
  ListCustomLineItemsOutput,
  ListCustomLineItemsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListCustomLineItemsCommand, se_ListCustomLineItemsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomLineItemsCommand}.
 */
export interface ListCustomLineItemsCommandInput extends ListCustomLineItemsInput {}
/**
 * @public
 *
 * The output of {@link ListCustomLineItemsCommand}.
 */
export interface ListCustomLineItemsCommandOutput extends ListCustomLineItemsOutput, __MetadataBearer {}

/**
 * <p>
 *       A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListCustomLineItemsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListCustomLineItemsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new BillingconductorClient(config);
 * const input = { // ListCustomLineItemsInput
 *   BillingPeriod: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListCustomLineItemsFilter
 *     Names: [ // CustomLineItemNameList
 *       "STRING_VALUE",
 *     ],
 *     BillingGroups: [ // BillingGroupArnList
 *       "STRING_VALUE",
 *     ],
 *     Arns: [ // CustomLineItemArns
 *       "STRING_VALUE",
 *     ],
 *     AccountIds: [ // AccountIdList
 *       "STRING_VALUE",
 *     ],
 *   },
 * };
 * const command = new ListCustomLineItemsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomLineItemsOutput
 * //   CustomLineItems: [ // CustomLineItemList
 * //     { // CustomLineItemListElement
 * //       Arn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       ChargeDetails: { // ListCustomLineItemChargeDetails
 * //         Flat: { // ListCustomLineItemFlatChargeDetails
 * //           ChargeValue: Number("double"), // required
 * //         },
 * //         Percentage: { // ListCustomLineItemPercentageChargeDetails
 * //           PercentageValue: Number("double"), // required
 * //         },
 * //         Type: "STRING_VALUE", // required
 * //         LineItemFilters: [ // LineItemFiltersList
 * //           { // LineItemFilter
 * //             Attribute: "STRING_VALUE", // required
 * //             MatchOption: "STRING_VALUE", // required
 * //             Values: [ // LineItemFilterValuesList // required
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       CurrencyCode: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       ProductCode: "STRING_VALUE",
 * //       BillingGroupArn: "STRING_VALUE",
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       AssociationSize: Number("long"),
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomLineItemsCommandInput - {@link ListCustomLineItemsCommandInput}
 * @returns {@link ListCustomLineItemsCommandOutput}
 * @see {@link ListCustomLineItemsCommandInput} for command's `input` shape.
 * @see {@link ListCustomLineItemsCommandOutput} for command's `response` shape.
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
export class ListCustomLineItemsCommand extends $Command
  .classBuilder<
    ListCustomLineItemsCommandInput,
    ListCustomLineItemsCommandOutput,
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
  .s("AWSBillingConductor", "ListCustomLineItems", {})
  .n("BillingconductorClient", "ListCustomLineItemsCommand")
  .f(ListCustomLineItemsInputFilterSensitiveLog, ListCustomLineItemsOutputFilterSensitiveLog)
  .ser(se_ListCustomLineItemsCommand)
  .de(de_ListCustomLineItemsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListCustomLineItemsInput;
      output: ListCustomLineItemsOutput;
    };
    sdk: {
      input: ListCustomLineItemsCommandInput;
      output: ListCustomLineItemsCommandOutput;
    };
  };
}
