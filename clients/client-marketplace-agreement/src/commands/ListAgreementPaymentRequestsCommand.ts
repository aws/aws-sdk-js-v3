// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementPaymentRequestsInput, ListAgreementPaymentRequestsOutput } from "../models/models_0";
import { ListAgreementPaymentRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgreementPaymentRequestsCommand}.
 */
export interface ListAgreementPaymentRequestsCommandInput extends ListAgreementPaymentRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementPaymentRequestsCommand}.
 */
export interface ListAgreementPaymentRequestsCommandOutput extends ListAgreementPaymentRequestsOutput, __MetadataBearer {}

/**
 * Lists payment requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find payment requests by specifying their party type and applying optional parameters.
 *
 * > **Note:** `PartyType` is a required parameter. A `ValidationException` is returned if `PartyType` is not provided. Pagination is supported through `maxResults` (1-50, default 50) and `nextToken` parameters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementPaymentRequestsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementPaymentRequestsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementPaymentRequestsInput
 *   partyType: "STRING_VALUE", // required
 *   agreementType: "STRING_VALUE",
 *   catalog: "STRING_VALUE",
 *   agreementId: "STRING_VALUE",
 *   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementPaymentRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementPaymentRequestsOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // PaymentRequestSummaryList // required
 * //     { // PaymentRequestSummary
 * //       paymentRequestId: "STRING_VALUE",
 * //       agreementId: "STRING_VALUE",
 * //       status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //       name: "STRING_VALUE",
 * //       chargeId: "STRING_VALUE",
 * //       chargeAmount: "STRING_VALUE",
 * //       currencyCode: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAgreementPaymentRequestsCommandInput - {@link ListAgreementPaymentRequestsCommandInput}
 * @returns {@link ListAgreementPaymentRequestsCommandOutput}
 * @see {@link ListAgreementPaymentRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementPaymentRequestsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * User does not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * Unexpected error during processing of request.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * Request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by the service.
 *
 * @throws {@link MarketplaceAgreementServiceException}
 *
 * Base exception class for all service exceptions from MarketplaceAgreement service.
 *
 * @public
 */
export class ListAgreementPaymentRequestsCommand extends command<ListAgreementPaymentRequestsCommandInput, ListAgreementPaymentRequestsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreementPaymentRequests",
  ListAgreementPaymentRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementPaymentRequestsInput;
      output: ListAgreementPaymentRequestsOutput;
    };
    sdk: {
      input: ListAgreementPaymentRequestsCommandInput;
      output: ListAgreementPaymentRequestsCommandOutput;
    };
  };
}
