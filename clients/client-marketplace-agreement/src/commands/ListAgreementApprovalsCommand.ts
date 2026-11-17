// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAgreementApprovalsInput, ListAgreementApprovalsOutput } from "../models/models_0";
import { ListAgreementApprovals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListAgreementApprovalsCommand}.
 */
export interface ListAgreementApprovalsCommandInput extends ListAgreementApprovalsInput {}
/**
 * @public
 *
 * The output of {@link ListAgreementApprovalsCommand}.
 */
export interface ListAgreementApprovalsCommandOutput extends ListAgreementApprovalsOutput, __MetadataBearer {}

/**
 * <p>Lists agreement approvals available to you as a buyer. Use <code>REQUESTER</code> as the <code>partyType</code> to list the agreement approvals that your account started. Use <code>AWS_ORGANIZATION_ADMIN</code> to list the agreement approvals in your AWS organization, if your account is the management account or a delegated administrator of the organization. You can filter the results by agreement request, approval type, and status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, ListAgreementApprovalsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, ListAgreementApprovalsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // ListAgreementApprovalsInput
 *   catalog: "STRING_VALUE",
 *   partyType: "REQUESTER" || "AWS_ORGANIZATION_ADMIN", // required
 *   agreementRequestId: "STRING_VALUE",
 *   approvalType: "BUYER_AGREEMENT_APPROVAL",
 *   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "CANCELLED",
 *   maxResults: Number("int"),
 *   nextToken: "STRING_VALUE",
 * };
 * const command = new ListAgreementApprovalsCommand(input);
 * const response = await client.send(command);
 * // { // ListAgreementApprovalsOutput
 * //   items: [ // AgreementApprovalSummaries // required
 * //     { // AgreementApprovalSummary
 * //       approvalType: "BUYER_AGREEMENT_APPROVAL", // required
 * //       agreementRequestId: "STRING_VALUE", // required
 * //       agreementApprovalId: "STRING_VALUE", // required
 * //       name: "STRING_VALUE", // required
 * //       status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "CANCELLED", // required
 * //       createdAt: new Date("TIMESTAMP"), // required
 * //       updatedAt: new Date("TIMESTAMP"), // required
 * //       startedAt: new Date("TIMESTAMP"),
 * //       expiresAt: new Date("TIMESTAMP"),
 * //       approvalNeededBy: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListAgreementApprovalsCommandInput - {@link ListAgreementApprovalsCommandInput}
 * @returns {@link ListAgreementApprovalsCommandOutput}
 * @see {@link ListAgreementApprovalsCommandInput} for command's `input` shape.
 * @see {@link ListAgreementApprovalsCommandOutput} for command's `response` shape.
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
 * @example List agreement approvals
 * ```javascript
 * //
 * const input = {
 *   maxResults: 10,
 *   partyType: "REQUESTER",
 *   status: "PENDING_APPROVAL"
 * };
 * const command = new ListAgreementApprovalsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   items: [
 *     {
 *       agreementApprovalId: "apr-EXAMPLE9s0t1u2v3w4x",
 *       agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78",
 *       approvalNeededBy: 1739527800,
 *       approvalType: "BUYER_AGREEMENT_APPROVAL",
 *       createdAt: 1736935800,
 *       expiresAt: 1739527800,
 *       name: "Example Analytics Platform sold by Example Corp",
 *       startedAt: 1736935800,
 *       status: "PENDING_APPROVAL",
 *       updatedAt: 1737022200
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListAgreementApprovalsCommand extends command<ListAgreementApprovalsCommandInput, ListAgreementApprovalsCommandOutput>(
  _ep0,
  _mw0,
  "ListAgreementApprovals",
  ListAgreementApprovals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListAgreementApprovalsInput;
      output: ListAgreementApprovalsOutput;
    };
    sdk: {
      input: ListAgreementApprovalsCommandInput;
      output: ListAgreementApprovalsCommandOutput;
    };
  };
}
