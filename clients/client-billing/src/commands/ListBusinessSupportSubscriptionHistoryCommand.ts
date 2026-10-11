// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListBusinessSupportSubscriptionHistoryRequest,
  ListBusinessSupportSubscriptionHistoryResponse,
} from "../models/models_0";
import { ListBusinessSupportSubscriptionHistory$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListBusinessSupportSubscriptionHistoryCommand}.
 */
export interface ListBusinessSupportSubscriptionHistoryCommandInput extends ListBusinessSupportSubscriptionHistoryRequest {}
/**
 * @public
 *
 * The output of {@link ListBusinessSupportSubscriptionHistoryCommand}.
 */
export interface ListBusinessSupportSubscriptionHistoryCommandOutput extends ListBusinessSupportSubscriptionHistoryResponse, __MetadataBearer {}

/**
 * <p>Returns the history of Business Support subscription contracts across accounts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListBusinessSupportSubscriptionHistoryCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListBusinessSupportSubscriptionHistoryCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListBusinessSupportSubscriptionHistoryRequest
 *   billingMonth: "STRING_VALUE",
 *   accountId: "STRING_VALUE",
 *   startDate: new Date("TIMESTAMP"),
 *   endDate: new Date("TIMESTAMP"),
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListBusinessSupportSubscriptionHistoryCommand(input);
 * const response = await client.send(command);
 * // { // ListBusinessSupportSubscriptionHistoryResponse
 * //   subscriptionContracts: [ // BusinessSupportSubscriptionContractList // required
 * //     { // BusinessSupportSubscriptionContract
 * //       accountId: "STRING_VALUE", // required
 * //       planName: "STRING_VALUE", // required
 * //       contractStartDate: new Date("TIMESTAMP"), // required
 * //       contractEndDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListBusinessSupportSubscriptionHistoryCommandInput - {@link ListBusinessSupportSubscriptionHistoryCommandInput}
 * @returns {@link ListBusinessSupportSubscriptionHistoryCommandOutput}
 * @see {@link ListBusinessSupportSubscriptionHistoryCommandInput} for command's `input` shape.
 * @see {@link ListBusinessSupportSubscriptionHistoryCommandOutput} for command's `response` shape.
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
export class ListBusinessSupportSubscriptionHistoryCommand extends command<ListBusinessSupportSubscriptionHistoryCommandInput, ListBusinessSupportSubscriptionHistoryCommandOutput>(
  _ep0,
  _mw0,
  "ListBusinessSupportSubscriptionHistory",
  ListBusinessSupportSubscriptionHistory$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListBusinessSupportSubscriptionHistoryRequest;
      output: ListBusinessSupportSubscriptionHistoryResponse;
    };
    sdk: {
      input: ListBusinessSupportSubscriptionHistoryCommandInput;
      output: ListBusinessSupportSubscriptionHistoryCommandOutput;
    };
  };
}
