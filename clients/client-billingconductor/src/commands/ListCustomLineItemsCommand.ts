// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListCustomLineItemsInput, ListCustomLineItemsOutput } from "../models/models_0";
import { ListCustomLineItems$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * A paginated call to get a list of all custom line items (FFLIs) for the given billing period. If you don't provide a billing period, the current billing period is used.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, ListCustomLineItemsCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, ListCustomLineItemsCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
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
 * //         Type: "CREDIT" || "FEE", // required
 * //         LineItemFilters: [ // LineItemFiltersList
 * //           { // LineItemFilter
 * //             Attribute: "LINE_ITEM_TYPE" || "SERVICE", // required
 * //             MatchOption: "NOT_EQUAL" || "EQUAL", // required
 * //             Values: [ // LineItemFilterValuesList
 * //               "SAVINGS_PLAN_NEGATION",
 * //             ],
 * //             AttributeValues: [ // AttributeValueList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //       CurrencyCode: "USD" || "CNY",
 * //       Description: "STRING_VALUE",
 * //       ProductCode: "STRING_VALUE",
 * //       BillingGroupArn: "STRING_VALUE",
 * //       CreationTime: Number("long"),
 * //       LastModifiedTime: Number("long"),
 * //       AssociationSize: Number("long"),
 * //       AccountId: "STRING_VALUE",
 * //       ComputationRule: "ITEMIZED" || "CONSOLIDATED",
 * //       PresentationDetails: { // PresentationObject
 * //         Service: "STRING_VALUE", // required
 * //       },
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource that doesn't exist.
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
export class ListCustomLineItemsCommand extends command<ListCustomLineItemsCommandInput, ListCustomLineItemsCommandOutput>(
  _ep0,
  _mw0,
  "ListCustomLineItems",
  ListCustomLineItems$
) {
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
