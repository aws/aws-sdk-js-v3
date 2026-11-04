// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListContractualInvestmentsRequest, ListContractualInvestmentsResponse } from "../models/models_0";
import { ListContractualInvestments$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContractualInvestmentsCommand}.
 */
export interface ListContractualInvestmentsCommandInput extends ListContractualInvestmentsRequest {}
/**
 * @public
 *
 * The output of {@link ListContractualInvestmentsCommand}.
 */
export interface ListContractualInvestmentsCommandOutput extends ListContractualInvestmentsResponse, __MetadataBearer {}

/**
 * Lists the investments within a specific investment summary. This operation is read-only and paginated.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListContractualInvestmentsCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListContractualInvestmentsCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListContractualInvestmentsRequest
 *   contractArn: "STRING_VALUE", // required
 *   investmentSummaryId: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListContractualInvestmentsCommand(input);
 * const response = await client.send(command);
 * // { // ListContractualInvestmentsResponse
 * //   items: [ // Investments // required
 * //     { // Investment Union: only one key present
 * //       milestoneBasedInvestment: { // MilestoneBasedInvestment
 * //         investmentId: "STRING_VALUE", // required
 * //         investmentValue: { // Amount
 * //           currencyCode: "STRING_VALUE", // required
 * //           currencyAmount: "STRING_VALUE", // required
 * //         },
 * //         investmentDisbursedAt: new Date("TIMESTAMP"), // required
 * //       },
 * //       outcomeBasedInvestment: { // OutcomeBasedInvestment
 * //         investmentId: "STRING_VALUE", // required
 * //         outcomeDescription: "STRING_VALUE", // required
 * //         attestationWindow: { // Interval
 * //           startDateInclusive: new Date("TIMESTAMP"), // required
 * //           endDateInclusive: new Date("TIMESTAMP"), // required
 * //         },
 * //         investmentRestrictions: [ // InvestmentRestrictions
 * //           { // InvestmentRestriction
 * //             amount: {
 * //               currencyCode: "STRING_VALUE", // required
 * //               currencyAmount: "STRING_VALUE", // required
 * //             },
 * //           },
 * //         ],
 * //         investmentMultipliers: [ // InvestmentMultipliers
 * //           { // InvestmentMultiplier
 * //             value: "STRING_VALUE", // required
 * //             investmentAttestationInputUnit: "STRING_VALUE", // required
 * //             multiplierType: "PERCENTAGE" || "CURRENCY_AMOUNT", // required
 * //           },
 * //         ],
 * //         disbursedValue: {
 * //           currencyCode: "STRING_VALUE", // required
 * //           currencyAmount: "STRING_VALUE", // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContractualInvestmentsCommandInput - {@link ListContractualInvestmentsCommandInput}
 * @returns {@link ListContractualInvestmentsCommandOutput}
 * @see {@link ListContractualInvestmentsCommandInput} for command's `input` shape.
 * @see {@link ListContractualInvestmentsCommandOutput} for command's `response` shape.
 * @see {@link BillingClientResolvedConfig | config} for BillingClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You don't have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The specified ARN in the request doesn't exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link BillingServiceException}
 *
 * Base exception class for all service exceptions from Billing service.
 *
 * @example Invoke ListContractualInvestments
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   investmentSummaryId: "Example-Investment-Summary-Id",
 *   maxResults: 100
 * };
 * const command = new ListContractualInvestmentsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       outcomeBasedInvestment: {
 *         attestationWindow: {
 *           endDateInclusive: 1222222222,
 *           startDateInclusive: 1111111111
 *         },
 *         disbursedValue: {
 *           currencyAmount: "0.00",
 *           currencyCode: "USD"
 *         },
 *         investmentId: "Investment-Id",
 *         investmentRestrictions: [
 *           {
 *             amount: {
 *               currencyAmount: "50000.00",
 *               currencyCode: "USD"
 *             }
 *           }
 *         ],
 *         outcomeDescription: "Example outcome description"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContractualInvestmentsCommand extends command<ListContractualInvestmentsCommandInput, ListContractualInvestmentsCommandOutput>(
  _ep0,
  _mw0,
  "ListContractualInvestments",
  ListContractualInvestments$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContractualInvestmentsRequest;
      output: ListContractualInvestmentsResponse;
    };
    sdk: {
      input: ListContractualInvestmentsCommandInput;
      output: ListContractualInvestmentsCommandOutput;
    };
  };
}
