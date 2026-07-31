// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListEnterpriseSupportLinkedAccountChargesRequest,
  ListEnterpriseSupportLinkedAccountChargesResponse,
} from "../models/models_0";
import { ListEnterpriseSupportLinkedAccountCharges$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListEnterpriseSupportLinkedAccountChargesCommand}.
 */
export interface ListEnterpriseSupportLinkedAccountChargesCommandInput extends ListEnterpriseSupportLinkedAccountChargesRequest {}
/**
 * @public
 *
 * The output of {@link ListEnterpriseSupportLinkedAccountChargesCommand}.
 */
export interface ListEnterpriseSupportLinkedAccountChargesCommandOutput extends ListEnterpriseSupportLinkedAccountChargesResponse, __MetadataBearer {}

/**
 * <p>Returns Support-eligible spend broken down at linked account level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListEnterpriseSupportLinkedAccountChargesCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListEnterpriseSupportLinkedAccountChargesCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListEnterpriseSupportLinkedAccountChargesRequest
 *   billingMonth: "STRING_VALUE", // required
 *   accountId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListEnterpriseSupportLinkedAccountChargesCommand(input);
 * const response = await client.send(command);
 * // { // ListEnterpriseSupportLinkedAccountChargesResponse
 * //   linkedAccount: [ // LinkedAccountChargeList // required
 * //     { // LinkedAccountCharge
 * //       accountId: "STRING_VALUE", // required
 * //       payerAccountId: "STRING_VALUE", // required
 * //       accountType: "STRING_VALUE",
 * //       billableSeconds: Number("long"), // required
 * //       totalSeconds: Number("long"), // required
 * //       totalSupportEligibleSpend: "STRING_VALUE", // required
 * //       proratedTotalSupportEligibleSpend: "STRING_VALUE", // required
 * //       linkedTimePeriods: [ // TimePeriodList
 * //         { // EnterpriseSupportTimePeriod
 * //           beginDate: new Date("TIMESTAMP"), // required
 * //           endDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       subscriptionTimePeriods: [
 * //         {
 * //           beginDate: new Date("TIMESTAMP"), // required
 * //           endDate: new Date("TIMESTAMP"),
 * //         },
 * //       ],
 * //       totalSupportEligibleReservedInstanceSpend: "STRING_VALUE",
 * //       totalSupportEligibleSavingsPlanSpend: "STRING_VALUE",
 * //       supportEligibleSpendByService: [ // ServiceLevelAccountUsageList
 * //         { // ServiceLevelAccountUsage
 * //           serviceCode: "STRING_VALUE",
 * //           totalSupportEligibleSpend: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEnterpriseSupportLinkedAccountChargesCommandInput - {@link ListEnterpriseSupportLinkedAccountChargesCommandInput}
 * @returns {@link ListEnterpriseSupportLinkedAccountChargesCommandOutput}
 * @see {@link ListEnterpriseSupportLinkedAccountChargesCommandInput} for command's `input` shape.
 * @see {@link ListEnterpriseSupportLinkedAccountChargesCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p> The specified ARN in the request doesn't exist. </p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling. </p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service. </p>
 *
 * @throws {@link BillingServiceException}
 * <p>Base exception class for all service exceptions from Billing service.</p>
 *
 *
 * @public
 */
export class ListEnterpriseSupportLinkedAccountChargesCommand extends command<ListEnterpriseSupportLinkedAccountChargesCommandInput, ListEnterpriseSupportLinkedAccountChargesCommandOutput>(
  _ep0,
  _mw0,
  "ListEnterpriseSupportLinkedAccountCharges",
  ListEnterpriseSupportLinkedAccountCharges$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListEnterpriseSupportLinkedAccountChargesRequest;
      output: ListEnterpriseSupportLinkedAccountChargesResponse;
    };
    sdk: {
      input: ListEnterpriseSupportLinkedAccountChargesCommandInput;
      output: ListEnterpriseSupportLinkedAccountChargesCommandOutput;
    };
  };
}
