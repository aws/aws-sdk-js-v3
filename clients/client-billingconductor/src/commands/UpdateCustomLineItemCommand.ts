// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateCustomLineItemInput, UpdateCustomLineItemOutput } from "../models/models_0";
import { UpdateCustomLineItem$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * <p> Update an existing custom line item in the current or previous billing period. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingconductorClient, UpdateCustomLineItemCommand } from "@aws-sdk/client-billingconductor"; // ES Modules import
 * // const { BillingconductorClient, UpdateCustomLineItemCommand } = require("@aws-sdk/client-billingconductor"); // CommonJS import
 * // import type { BillingconductorClientConfig } from "@aws-sdk/client-billingconductor";
 * const config = {}; // type is BillingconductorClientConfig
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
 * //     Type: "CREDIT" || "FEE", // required
 * //     LineItemFilters: [ // LineItemFiltersList
 * //       { // LineItemFilter
 * //         Attribute: "LINE_ITEM_TYPE" || "SERVICE", // required
 * //         MatchOption: "NOT_EQUAL" || "EQUAL", // required
 * //         Values: [ // LineItemFilterValuesList
 * //           "SAVINGS_PLAN_NEGATION",
 * //         ],
 * //         AttributeValues: [ // AttributeValueList
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
 *  <p>You do not have sufficient access to perform this action. </p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>You can cause an inconsistent state by updating or deleting a resource. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An unexpected error occurred while processing a request. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource that doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input doesn't match with the constraints specified by Amazon Web Services services.</p>
 *
 * @throws {@link BillingconductorServiceException}
 * <p>Base exception class for all service exceptions from Billingconductor service.</p>
 *
 *
 * @public
 */
export class UpdateCustomLineItemCommand extends command<UpdateCustomLineItemCommandInput, UpdateCustomLineItemCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomLineItem",
  UpdateCustomLineItem$
) {
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
