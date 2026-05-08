// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import type {
  ListAgreementCancellationRequestsInput,
  ListAgreementCancellationRequestsOutput,
} from "../models/models_0";
import { ListAgreementCancellationRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAgreementCancellationRequestsCommand}.
 */
export interface ListAgreementCancellationRequestsCommandInput extends ListAgreementCancellationRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementCancellationRequestsCommand}.
 */
export interface ListAgreementCancellationRequestsCommandOutput extends ListAgreementCancellationRequestsOutput, __MetadataBearer {}

/**
 * <p>Lists agreement cancellation requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find cancellation requests by specifying their party type and applying optional filters.</p> <note> <p> <code>PartyType</code> is a required parameter. A <code>ValidationException</code> is returned if <code>PartyType</code> is not provided.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementCancellationRequestsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementCancellationRequestsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementCancellationRequestsInput
 *   partyType: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE",
 *   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 *   agreementType: "STRING_VALUE",
 *   catalog: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementCancellationRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementCancellationRequestsOutput
 * //   nextToken: "STRING_VALUE",
 * //   items: [ // AgreementCancellationRequestSummaryList
 * //     { // AgreementCancellationRequestSummary
 * //       agreementCancellationRequestId: "STRING_VALUE",
 * //       agreementId: "STRING_VALUE",
 * //       status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 * //       reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER",
 * //       agreementType: "STRING_VALUE",
 * //       catalog: "STRING_VALUE",
 * //       createdAt: new Date("TIMESTAMP"),
 * //       updatedAt: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAgreementCancellationRequestsCommandInput - {@link ListAgreementCancellationRequestsCommandInput}
 * @returns {@link ListAgreementCancellationRequestsCommandOutput}
 * @see {@link ListAgreementCancellationRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementCancellationRequestsCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>Request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by the service.</p>
 *
 * @throws {@link MarketplaceAgreementServiceException}
 * <p>Base exception class for all service exceptions from MarketplaceAgreement service.</p>
 *
 *
 * @example List cancellation requests
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   partyType: "Proposer"
 * };
 * const command = new ListAgreementCancellationRequestsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       agreementCancellationRequestId: "acr-sgew33rhsds",
 *       agreementId: "agmt-752jqvg74yo7k",
 *       agreementType: "PurchaseAgreement",
 *       catalog: "AWSMarketplace",
 *       createdAt: "2025-01-15T10:30:00Z",
 *       reasonCode: "OTHER",
 *       status: "PENDING_APPROVAL",
 *       updatedAt: "2025-01-16T10:30:00Z"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAgreementCancellationRequestsCommand extends $Command
  .classBuilder<
    ListAgreementCancellationRequestsCommandInput,
    ListAgreementCancellationRequestsCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "ListAgreementCancellationRequests", {})
  .n("MarketplaceAgreementClient", "ListAgreementCancellationRequestsCommand")
  .sc(ListAgreementCancellationRequests$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementCancellationRequestsInput;
      output: ListAgreementCancellationRequestsOutput;
    };
    sdk: {
      input: ListAgreementCancellationRequestsCommandInput;
      output: ListAgreementCancellationRequestsCommandOutput;
    };
  };
}
