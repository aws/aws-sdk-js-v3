// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AcceptAgreementApprovalInput, AcceptAgreementApprovalOutput } from "../models/models_0";
import { AcceptAgreementApproval$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AcceptAgreementApprovalCommand}.
 */
export interface AcceptAgreementApprovalCommandInput extends AcceptAgreementApprovalInput {}
/**
 * @public
 *
 * The output of {@link AcceptAgreementApprovalCommand}.
 */
export interface AcceptAgreementApprovalCommandOutput extends AcceptAgreementApprovalOutput, __MetadataBearer {}

/**
 * <p>Allows the management account or a delegated administrator of the buyer's AWS organization to approve an agreement approval that is in <code>PENDING_APPROVAL</code> status, as the organization administrator approver or on behalf of another approver. Once every level is approved, the agreement approval transitions to <code>APPROVED</code> status. You can optionally provide purchase order references and a note.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, AcceptAgreementApprovalCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, AcceptAgreementApprovalCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // AcceptAgreementApprovalInput
 *   buyerAgreementApprovalApproverInput: { // BuyerAgreementApprovalApproverInput
 *     agreementApprovalId: "STRING_VALUE", // required
 *     purchaseOrders: [ // AgreementApprovalPurchaseOrders
 *       { // AgreementApprovalPurchaseOrder
 *         chargeId: "STRING_VALUE", // required
 *         purchaseOrderReference: "STRING_VALUE",
 *       },
 *     ],
 *     note: "STRING_VALUE",
 *     approverOutcomeIdToOverride: "STRING_VALUE",
 *   },
 * };
 * const command = new AcceptAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AcceptAgreementApprovalCommandInput - {@link AcceptAgreementApprovalCommandInput}
 * @returns {@link AcceptAgreementApprovalCommandOutput}
 * @see {@link AcceptAgreementApprovalCommandInput} for command's `input` shape.
 * @see {@link AcceptAgreementApprovalCommandOutput} for command's `response` shape.
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
 * @example Approve an agreement approval
 * ```javascript
 * //
 * const input = {
 *   buyerAgreementApprovalApproverInput: {
 *     agreementApprovalId: "apr-EXAMPLE9s0t1u2v3w4x",
 *     note: "Approved. Budget confirmed for this fiscal year.",
 *     purchaseOrders: [
 *       {
 *         chargeId: "ch-EXAMPLE4b4296145c3EXAMPLE56",
 *         purchaseOrderReference: "PO-123"
 *       }
 *     ]
 *   }
 * };
 * const command = new AcceptAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* empty *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class AcceptAgreementApprovalCommand extends command<AcceptAgreementApprovalCommandInput, AcceptAgreementApprovalCommandOutput>(
  _ep0,
  _mw0,
  "AcceptAgreementApproval",
  AcceptAgreementApproval$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AcceptAgreementApprovalInput;
      output: {};
    };
    sdk: {
      input: AcceptAgreementApprovalCommandInput;
      output: AcceptAgreementApprovalCommandOutput;
    };
  };
}
