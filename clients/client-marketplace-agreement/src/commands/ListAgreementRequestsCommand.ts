// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementRequestsInput, ListAgreementRequestsOutput } from "../models/models_0";
import { ListAgreementRequests$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgreementRequestsCommand}.
 */
export interface ListAgreementRequestsCommandInput extends ListAgreementRequestsInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementRequestsCommand}.
 */
export interface ListAgreementRequestsCommandOutput extends ListAgreementRequestsOutput, __MetadataBearer {}

/**
 * <p>Lists agreement requests available to you as a buyer (acceptor). You can filter the results by <code>catalog</code>, <code>status</code>, and <code>resourceId</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementRequestsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementRequestsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementRequestsInput
 *   catalog: "STRING_VALUE",
 *   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "ACCEPTED" || "REJECTED" || "CANCELLED",
 *   resourceId: "STRING_VALUE",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementRequestsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementRequestsOutput
 * //   items: [ // AgreementRequestSummaryList
 * //     { // AgreementRequestSummary
 * //       agreementRequestId: "STRING_VALUE",
 * //       agreementType: "STRING_VALUE",
 * //       status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "ACCEPTED" || "REJECTED" || "CANCELLED",
 * //       agreementId: "STRING_VALUE",
 * //       proposalSummary: { // ProposalSummary
 * //         resources: [ // Resources
 * //           { // Resource
 * //             id: "STRING_VALUE",
 * //             type: "STRING_VALUE",
 * //           },
 * //         ],
 * //         offerId: "STRING_VALUE",
 * //         offerSetId: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgreementRequestsCommandInput - {@link ListAgreementRequestsCommandInput}
 * @returns {@link ListAgreementRequestsCommandOutput}
 * @see {@link ListAgreementRequestsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementRequestsCommandOutput} for command's `response` shape.
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
 * @example List agreement requests
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   status: "PENDING_APPROVAL"
 * };
 * const command = new ListAgreementRequestsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78",
 *       agreementType: "PurchaseAgreement",
 *       proposalSummary: {
 *         offerId: "ABCDEFGHIJKLMNOP123",
 *         resources: [
 *           {
 *             id: "0EXAMPLE-8ce8-4814-bcf1-636EXAMPLEb5",
 *             type: "SaaSProduct"
 *           }
 *         ]
 *       },
 *       status: "PENDING_APPROVAL"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAgreementRequestsCommand extends command<ListAgreementRequestsCommandInput, ListAgreementRequestsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreementRequests",
  ListAgreementRequests$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementRequestsInput;
      output: ListAgreementRequestsOutput;
    };
    sdk: {
      input: ListAgreementRequestsCommandInput;
      output: ListAgreementRequestsCommandOutput;
    };
  };
}
