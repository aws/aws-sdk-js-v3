// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import type { ListAgreementPaymentRequestsInput, ListAgreementPaymentRequestsOutput } from "../models/models_0";
import { ListAgreementPaymentRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists payment requests available to you as a seller or buyer. Both sellers (proposers) and buyers (acceptors) can use this operation to find payment requests by specifying their party type and applying optional parameters.</p> <note> <p> <code>PartyType</code> is a required parameter. A <code>ValidationException</code> is returned if <code>PartyType</code> is not provided. Pagination is supported through <code>maxResults</code> (1-50, default 50) and <code>nextToken</code> parameters.</p> </note>
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
 * @public
 */
export class ListAgreementPaymentRequestsCommand extends $Command
  .classBuilder<
    ListAgreementPaymentRequestsCommandInput,
    ListAgreementPaymentRequestsCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "ListAgreementPaymentRequests", {})
  .n("MarketplaceAgreementClient", "ListAgreementPaymentRequestsCommand")
  .sc(ListAgreementPaymentRequests$)
  .build() {
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
