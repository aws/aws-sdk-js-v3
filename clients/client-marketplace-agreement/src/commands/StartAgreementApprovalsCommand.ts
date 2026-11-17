// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartAgreementApprovalsInput, StartAgreementApprovalsOutput } from "../models/models_0";
import { StartAgreementApprovals$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartAgreementApprovalsCommand}.
 */
export interface StartAgreementApprovalsCommandInput extends StartAgreementApprovalsInput {}
/**
 * @public
 *
 * The output of {@link StartAgreementApprovalsCommand}.
 */
export interface StartAgreementApprovalsCommandOutput extends StartAgreementApprovalsOutput, __MetadataBearer {}

/**
 * <p>Allows buyers (acceptors) to start the approvals that their organization requires for an agreement request. You start one agreement approval for each approval plan that you specify. Use <code>GetAgreementRequestApprovalPlans</code> to retrieve the approval plans of the agreement request. Once the agreement approvals start, the agreement request transitions to <code>PENDING_APPROVAL</code> status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, StartAgreementApprovalsCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, StartAgreementApprovalsCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // StartAgreementApprovalsInput
 *   agreementRequestId: "STRING_VALUE", // required
 *   planInputs: [ // AgreementApprovalPlanInputs // required
 *     { // AgreementApprovalPlanInput Union: only one key present
 *       buyerAgreementApprovalPlanInput: { // BuyerAgreementApprovalPlanInput
 *         planReference: "STRING_VALUE", // required
 *         requesterNote: "STRING_VALUE",
 *       },
 *     },
 *   ],
 *   purchaseOrders: [ // AgreementApprovalPurchaseOrders
 *     { // AgreementApprovalPurchaseOrder
 *       chargeId: "STRING_VALUE", // required
 *       purchaseOrderReference: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new StartAgreementApprovalsCommand(input);
 * const response = await client.send(command);
 * // { // StartAgreementApprovalsOutput
 * //   approvalSummaries: [ // AgreementApprovalSummaries // required
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
 * // };
 *
 * ```
 *
 * @param StartAgreementApprovalsCommandInput - {@link StartAgreementApprovalsCommandInput}
 * @returns {@link StartAgreementApprovalsCommandOutput}
 * @see {@link StartAgreementApprovalsCommandInput} for command's `input` shape.
 * @see {@link StartAgreementApprovalsCommandOutput} for command's `response` shape.
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
 * @example Start agreement approvals
 * ```javascript
 * //
 * const input = {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78",
 *   planInputs: [
 *     {
 *       buyerAgreementApprovalPlanInput: {
 *         planReference: "aplan-EXAMPLE7g8h9i0j1k2l",
 *         requesterNote: "Annual subscription for the data platform team."
 *       }
 *     }
 *   ],
 *   purchaseOrders: [
 *     {
 *       chargeId: "ch-EXAMPLE4b4296145c3EXAMPLE56",
 *       purchaseOrderReference: "PO-123"
 *     }
 *   ]
 * };
 * const command = new StartAgreementApprovalsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   approvalSummaries: [
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
 *       updatedAt: 1736935800
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class StartAgreementApprovalsCommand extends command<StartAgreementApprovalsCommandInput, StartAgreementApprovalsCommandOutput>(
  _ep0,
  _mw0,
  "StartAgreementApprovals",
  StartAgreementApprovals$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartAgreementApprovalsInput;
      output: StartAgreementApprovalsOutput;
    };
    sdk: {
      input: StartAgreementApprovalsCommandInput;
      output: StartAgreementApprovalsCommandOutput;
    };
  };
}
