// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListContractualInvestmentAttestationsRequest,
  ListContractualInvestmentAttestationsResponse,
} from "../models/models_0";
import { ListContractualInvestmentAttestations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContractualInvestmentAttestationsCommand}.
 */
export interface ListContractualInvestmentAttestationsCommandInput extends ListContractualInvestmentAttestationsRequest {}
/**
 * @public
 *
 * The output of {@link ListContractualInvestmentAttestationsCommand}.
 */
export interface ListContractualInvestmentAttestationsCommandOutput extends ListContractualInvestmentAttestationsResponse, __MetadataBearer {}

/**
 * <p>Lists the investment attestations submitted under a specific private pricing contract. Use this operation to track attestation status, including the terminal statuses <code>DISBURSED</code>, <code>REJECTED</code>, and <code>CANCELLED</code>. This operation is read-only and paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListContractualInvestmentAttestationsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListContractualInvestmentAttestationsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListContractualInvestmentAttestationsRequest
 *   contractArn: "STRING_VALUE", // required
 *   investmentSummaryId: "STRING_VALUE",
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListContractualInvestmentAttestationsCommand(input);
 * const response = await client.send(command);
 * // { // ListContractualInvestmentAttestationsResponse
 * //   items: [ // InvestmentAttestations // required
 * //     { // InvestmentAttestation
 * //       attestationId: "STRING_VALUE", // required
 * //       investmentName: "STRING_VALUE", // required
 * //       outcomeDescription: "STRING_VALUE", // required
 * //       investmentSummaryId: "STRING_VALUE", // required
 * //       investmentId: "STRING_VALUE", // required
 * //       attestedAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       attestationStatus: "PENDING_REVIEW" || "PENDING_C_LEVEL_APPROVAL" || "PENDING_CANCELLATION" || "REJECTED" || "CANCELLED" || "DISBURSED", // required
 * //       investmentDisbursedAt: new Date("TIMESTAMP"),
 * //       attestedValue: { // Amount
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //       investmentDistributions: [ // InvestmentDistributions
 * //         { // InvestmentDistribution
 * //           accountId: "STRING_VALUE", // required
 * //           investmentAmount: {
 * //             currencyCode: "STRING_VALUE", // required
 * //             currencyAmount: "STRING_VALUE", // required
 * //           },
 * //         },
 * //       ],
 * //       rejectionReasons: [ // RejectionReasons
 * //         "STRING_VALUE",
 * //       ],
 * //       isCancellable: true || false,
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContractualInvestmentAttestationsCommandInput - {@link ListContractualInvestmentAttestationsCommandInput}
 * @returns {@link ListContractualInvestmentAttestationsCommandOutput}
 * @see {@link ListContractualInvestmentAttestationsCommandInput} for command's `input` shape.
 * @see {@link ListContractualInvestmentAttestationsCommandOutput} for command's `response` shape.
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
 * @example Invoke ListContractualInvestmentAttestations
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   maxResults: 25
 * };
 * const command = new ListContractualInvestmentAttestationsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       attestationId: "a1b2c3d4-5678-90ab-cdef-111122223333",
 *       attestationStatus: "PENDING_CANCELLATION",
 *       attestedAt: 1333333333,
 *       attestedValue: {
 *         currencyAmount: "1.00",
 *         currencyCode: "USD"
 *       },
 *       investmentId: "Investment-Id",
 *       investmentName: "Example Investment Name",
 *       investmentSummaryId: "Example-Investment-Summary-Id",
 *       outcomeDescription: "Example outcome description",
 *       updatedAt: 1444444444
 *     },
 *     {
 *       attestationId: "b2c3d4e5-6789-01bc-def0-222233334444",
 *       attestationStatus: "CANCELLED",
 *       attestedAt: 1555555555,
 *       attestedValue: {
 *         currencyAmount: "1.00",
 *         currencyCode: "USD"
 *       },
 *       investmentId: "Investment-Id",
 *       investmentName: "Example Investment Name",
 *       investmentSummaryId: "Example-Investment-Summary-Id",
 *       outcomeDescription: "Example outcome description",
 *       updatedAt: 1666666666
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContractualInvestmentAttestationsCommand extends command<ListContractualInvestmentAttestationsCommandInput, ListContractualInvestmentAttestationsCommandOutput>(
  _ep0,
  _mw0,
  "ListContractualInvestmentAttestations",
  ListContractualInvestmentAttestations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContractualInvestmentAttestationsRequest;
      output: ListContractualInvestmentAttestationsResponse;
    };
    sdk: {
      input: ListContractualInvestmentAttestationsCommandInput;
      output: ListContractualInvestmentAttestationsCommandOutput;
    };
  };
}
