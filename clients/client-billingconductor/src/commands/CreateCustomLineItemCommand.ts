// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomLineItemInput, CreateCustomLineItemOutput } from "../models/models_0";
import { CreateCustomLineItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a custom line item that can be used to create a one-time fixed charge that can be applied to a single billing group for the current or previous billing period. The one-time fixed charge is either a fee or discount.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, CreateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, CreateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
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
 *     Type: "CREDIT" || "FEE", // required
 *     LineItemFilters: [ // LineItemFiltersList
 *       { // LineItemFilter
 *         Attribute: "LINE_ITEM_TYPE" || "SERVICE", // required
 *         MatchOption: "NOT_EQUAL" || "EQUAL", // required
 *         Values: [ // LineItemFilterValuesList
 *           "SAVINGS_PLAN_NEGATION",
 *         ],
 *         AttributeValues: [ // AttributeValueList
 *           "STRING_VALUE",
 *         ],
 *       },
 *     ],
 *   },
 *   AccountId: "STRING_VALUE",
 *   ComputationRule: "ITEMIZED" || "CONSOLIDATED",
 *   PresentationDetails: { // PresentationObject
 *     Service: "STRING_VALUE", // required
 *   },
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
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * You can cause an inconsistent state by updating or deleting a resource.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An unexpected error occurred while processing a request.
 *
 * @throws {@link ServiceLimitExceededException} (client fault)
 *
 * The request would cause a service limit to exceed.
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
export class CreateCustomLineItemCommand extends command<CreateCustomLineItemCommandInput, CreateCustomLineItemCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomLineItem",
  CreateCustomLineItem$
) {
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
