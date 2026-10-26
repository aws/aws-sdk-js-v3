// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  ListContractualInvestmentSummariesRequest,
  ListContractualInvestmentSummariesResponse,
} from "../models/models_0";
import { ListContractualInvestmentSummaries$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListContractualInvestmentSummariesCommand}.
 */
export interface ListContractualInvestmentSummariesCommandInput extends ListContractualInvestmentSummariesRequest {}
/**
 * @public
 *
 * The output of {@link ListContractualInvestmentSummariesCommand}.
 */
export interface ListContractualInvestmentSummariesCommandOutput extends ListContractualInvestmentSummariesResponse, __MetadataBearer {}

/**
 * <p>Lists the investment summaries within a specific private pricing contract. This operation is read-only and paginated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BillingClient, ListContractualInvestmentSummariesCommand } from "@aws-sdk/client-billing"; // ES Modules import
 * // const { BillingClient, ListContractualInvestmentSummariesCommand } = require("@aws-sdk/client-billing"); // CommonJS import
 * // import type { BillingClientConfig } from "@aws-sdk/client-billing";
 * const config = {}; // type is BillingClientConfig
 * const client = new BillingClient(config);
 * const input = { // ListContractualInvestmentSummariesRequest
 *   contractArn: "STRING_VALUE", // required
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListContractualInvestmentSummariesCommand(input);
 * const response = await client.send(command);
 * // { // ListContractualInvestmentSummariesResponse
 * //   items: [ // InvestmentSummaries // required
 * //     { // InvestmentSummary
 * //       investmentSummaryId: "STRING_VALUE", // required
 * //       investmentName: "STRING_VALUE", // required
 * //       investmentType: "MILESTONE_BASED" || "OUTCOME_BASED", // required
 * //       maxAllowedInvestmentDisbursementValue: { // Amount
 * //         currencyCode: "STRING_VALUE", // required
 * //         currencyAmount: "STRING_VALUE", // required
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListContractualInvestmentSummariesCommandInput - {@link ListContractualInvestmentSummariesCommandInput}
 * @returns {@link ListContractualInvestmentSummariesCommandOutput}
 * @see {@link ListContractualInvestmentSummariesCommandInput} for command's `input` shape.
 * @see {@link ListContractualInvestmentSummariesCommandOutput} for command's `response` shape.
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
 * @example Invoke ListContractualInvestmentSummaries
 * ```javascript
 * //
 * const input = {
 *   contractArn: "arn:aws:billing::123456789012:contract/1a2b3c4d-5e6f-7a8b-9c0d-111122223333",
 *   maxResults: 100
 * };
 * const command = new ListContractualInvestmentSummariesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       investmentName: "Example Investment Name",
 *       investmentSummaryId: "Example-Investment-Summary-Id",
 *       investmentType: "OUTCOME_BASED",
 *       maxAllowedInvestmentDisbursementValue: {
 *         currencyAmount: "100000000.00",
 *         currencyCode: "USD"
 *       }
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListContractualInvestmentSummariesCommand extends command<ListContractualInvestmentSummariesCommandInput, ListContractualInvestmentSummariesCommandOutput>(
  _ep0,
  _mw0,
  "ListContractualInvestmentSummaries",
  ListContractualInvestmentSummaries$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListContractualInvestmentSummariesRequest;
      output: ListContractualInvestmentSummariesResponse;
    };
    sdk: {
      input: ListContractualInvestmentSummariesCommandInput;
      output: ListContractualInvestmentSummariesCommandOutput;
    };
  };
}
