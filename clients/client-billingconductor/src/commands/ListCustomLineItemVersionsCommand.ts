// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { BillingconductorClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BillingconductorClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  ListCustomLineItemVersionsInput,
  ListCustomLineItemVersionsOutput,
  ListCustomLineItemVersionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListCustomLineItemVersionsCommand, se_ListCustomLineItemVersionsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListCustomLineItemVersionsCommand}.
 */
export interface ListCustomLineItemVersionsCommandInput extends ListCustomLineItemVersionsInput {}
/**
 * @public
 *
 * The output of {@link ListCustomLineItemVersionsCommand}.
 */
export interface ListCustomLineItemVersionsCommandOutput extends ListCustomLineItemVersionsOutput, __MetadataBearer {}

/**
 * <p>A paginated call to get a list of all custom line item versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListCustomLineItemVersionsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListCustomLineItemVersionsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * const client = new BillingconductorClient(config);
 * const input = { // ListCustomLineItemVersionsInput
 *   Arn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 *   Filters: { // ListCustomLineItemVersionsFilter
 *     BillingPeriodRange: { // ListCustomLineItemVersionsBillingPeriodRangeFilter
 *       StartBillingPeriod: "STRING_VALUE",
 *       EndBillingPeriod: "STRING_VALUE",
 *     },
 *   },
 * };
 * const command = new ListCustomLineItemVersionsCommand(input);
 * const response = await client.send(command);
 * // { // ListCustomLineItemVersionsOutput
 * //   CustomLineItemVersions: [ // CustomLineItemVersionList
 * //     { // CustomLineItemVersionListElement
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
 * //       StartBillingPeriod: "STRING_VALUE",
 * //       EndBillingPeriod: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       StartTime: Number("long"),
 * //       AccountId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListCustomLineItemVersionsCommandInput - {@link ListCustomLineItemVersionsCommandInput}
 * @returns {@link ListCustomLineItemVersionsCommandOutput}
 * @see {@link ListCustomLineItemVersionsCommandInput} for command's `input` shape.
 * @see {@link ListCustomLineItemVersionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListCustomLineItemVersionsCommand extends $Command
  .classBuilder<
    ListCustomLineItemVersionsCommandInput,
    ListCustomLineItemVersionsCommandOutput,
    BillingconductorClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: BillingconductorClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSBillingConductor", "ListCustomLineItemVersions", {})
  .n("BillingconductorClient", "ListCustomLineItemVersionsCommand")
  .f(void 0, ListCustomLineItemVersionsOutputFilterSensitiveLog)
  .ser(se_ListCustomLineItemVersionsCommand)
  .de(de_ListCustomLineItemVersionsCommand)
  .build() {}
