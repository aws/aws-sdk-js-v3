// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { RejectAgreementApprovalInput, RejectAgreementApprovalOutput } from "../models/models_0";
import { RejectAgreementApproval$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link RejectAgreementApprovalCommand}.
 */
export interface RejectAgreementApprovalCommandInput extends RejectAgreementApprovalInput {}
/**
 * @public
 *
 * The output of {@link RejectAgreementApprovalCommand}.
 */
export interface RejectAgreementApprovalCommandOutput extends RejectAgreementApprovalOutput, __MetadataBearer {}

/**
 * <p>Allows the management account or a delegated administrator of the buyer's AWS organization to reject an agreement approval that is in <code>PENDING_APPROVAL</code> status, as the organization administrator approver or on behalf of another approver. Once rejected, the agreement approval and its agreement request transition to <code>REJECTED</code> status. You must provide a reason for the rejection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, RejectAgreementApprovalCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, RejectAgreementApprovalCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // RejectAgreementApprovalInput
 *   buyerAgreementApprovalRejectionInput: { // BuyerAgreementApprovalRejectionInput
 *     agreementApprovalId: "STRING_VALUE", // required
 *     note: "STRING_VALUE", // required
 *     approverOutcomeIdToOverride: "STRING_VALUE",
 *   },
 * };
 * const command = new RejectAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param RejectAgreementApprovalCommandInput - {@link RejectAgreementApprovalCommandInput}
 * @returns {@link RejectAgreementApprovalCommandOutput}
 * @see {@link RejectAgreementApprovalCommandInput} for command's `input` shape.
 * @see {@link RejectAgreementApprovalCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Request was denied due to a resource conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>Unexpected error during processing of request.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Request references a resource which does not exist.</p>
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
 * @example Reject an agreement approval
 * ```javascript
 * //
 * const input = {
 *   buyerAgreementApprovalRejectionInput: {
 *     agreementApprovalId: "apr-EXAMPLE9s0t1u2v3w4x",
 *     note: "Rejected. This purchase isn't in the approved budget."
 *   }
 * };
 * const command = new RejectAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class RejectAgreementApprovalCommand extends command<RejectAgreementApprovalCommandInput, RejectAgreementApprovalCommandOutput>(
  _ep0,
  _mw0,
  "RejectAgreementApproval",
  RejectAgreementApproval$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: RejectAgreementApprovalInput;
      output: {};
    };
    sdk: {
      input: RejectAgreementApprovalCommandInput;
      output: RejectAgreementApprovalCommandOutput;
    };
  };
}
