// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContractsRequest, ListContractsResponse } from "../models/models_0";
import { ListContracts$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContractsCommand}.
 */
export interface ListContractsCommandInput extends ListContractsRequest {}
/**
 * @public
 *
 * The output of {@link ListContractsCommand}.
 */
export interface ListContractsCommandOutput extends ListContractsResponse, __MetadataBearer {}

/**
 * <p>Lists the private pricing contracts that your Amazon Web Services account is an eligible payer account of. This operation is read-only and paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListContractsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListContractsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListContractsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListContractsCommand(input);
 * const response = await client.send(command);
 * // { // ListContractsResponse
 * //   items: [ // ContractSummaries // required
 * //     { // ContractSummary
 * //       contractArn: "STRING_VALUE", // required
 * //       contractTerm: { // Interval
 * //         startDateInclusive: new Date("TIMESTAMP"), // required
 * //         endDateInclusive: new Date("TIMESTAMP"), // required
 * //       },
 * //       contractType: "Cross-Service" || "Service-Specific" || "Other",
 * //       associationStatus: "ASSOCIATED" || "NOT_ASSOCIATED", // required
 * //       lastUpdatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContractsCommandInput - {@link ListContractsCommandInput}
 * @returns {@link ListContractsCommandOutput}
 * @see {@link ListContractsCommandInput} for command's `input` shape.
 * @see {@link ListContractsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing failed because of an unknown error, exception, or failure. </p>
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
 * @example Invoke ListContracts
 * ```javascript
 * //
 * const input = {
 *   maxResults: 100
 * };
 * const command = new ListContractsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       associationStatus: "ASSOCIATED",
 *       contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *       contractTerm: {
 *         endDateInclusive: 1222222222,
 *         startDateInclusive: 1111111111
 *       },
 *       contractType: "Cross-Service"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContractsCommand extends command<ListContractsCommandInput, ListContractsCommandOutput>(
  _ep0,
  _mw0,
  "ListContracts",
  ListContracts$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContractsRequest;
      output: ListContractsResponse;
    };
    sdk: {
      input: ListContractsCommandInput;
      output: ListContractsCommandOutput;
    };
  };
}
