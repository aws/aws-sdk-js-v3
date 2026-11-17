// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementApprovalInput, GetAgreementApprovalOutput } from "../models/models_0";
import { GetAgreementApproval$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementApprovalCommand}.
 */
export interface GetAgreementApprovalCommandInput extends GetAgreementApprovalInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementApprovalCommand}.
 */
export interface GetAgreementApprovalCommandOutput extends GetAgreementApprovalOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific agreement approval, including its approval levels, the approvers at each level, and the decision of each approver. The acceptor, or the management account or a delegated administrator of the acceptor's AWS organization, can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementApprovalCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementApprovalCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementApprovalInput
 *   agreementApprovalId: "STRING_VALUE", // required
 * };
 * const command = new GetAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementApprovalOutput
 * //   buyerAgreementApproval: { // BuyerAgreementApproval
 * //     approvalType: "BUYER_AGREEMENT_APPROVAL", // required
 * //     agreementApprovalId: "STRING_VALUE", // required
 * //     name: "STRING_VALUE", // required
 * //     agreementRequestId: "STRING_VALUE", // required
 * //     status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "CANCELLED", // required
 * //     requester: { // AgreementApprovalRequester
 * //       accountId: "STRING_VALUE", // required
 * //     },
 * //     createdAt: new Date("TIMESTAMP"), // required
 * //     updatedAt: new Date("TIMESTAMP"), // required
 * //     startedAt: new Date("TIMESTAMP"),
 * //     expiresAt: new Date("TIMESTAMP"),
 * //     approvalNeededBy: new Date("TIMESTAMP"), // required
 * //     levels: [ // BuyerAgreementApprovalLevels // required
 * //       { // BuyerAgreementApprovalLevel
 * //         name: "STRING_VALUE",
 * //         groups: [ // BuyerAgreementApprovalGroups // required
 * //           { // BuyerAgreementApprovalGroup
 * //             approvalCriteria: { // BuyerAgreementApprovalCriteria
 * //               requiredApprovalCount: Number("int"), // required
 * //             },
 * //             approvers: [ // BuyerApproverOutcomes // required
 * //               { // ApproverOutcome Union: only one key present
 * //                 emailApproverOutcome: { // EmailApproverOutcome
 * //                   note: "STRING_VALUE",
 * //                   status: "QUEUED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "SKIPPED", // required
 * //                   updatedAt: new Date("TIMESTAMP"), // required
 * //                   approverOutcomeId: "STRING_VALUE",
 * //                   emailAddress: "STRING_VALUE", // required
 * //                   name: "STRING_VALUE",
 * //                   purchaseOrders: [ // AgreementApprovalPurchaseOrders
 * //                     { // AgreementApprovalPurchaseOrder
 * //                       chargeId: "STRING_VALUE", // required
 * //                       purchaseOrderReference: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   overriddenBy: { // CallerIdentity
 * //                     principalArn: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 procurementToolApproverOutcome: { // ProcurementToolApproverOutcome
 * //                   note: "STRING_VALUE",
 * //                   status: "QUEUED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "SKIPPED", // required
 * //                   updatedAt: new Date("TIMESTAMP"), // required
 * //                   approverOutcomeId: "STRING_VALUE",
 * //                   name: "STRING_VALUE", // required
 * //                   purchaseOrders: [
 * //                     {
 * //                       chargeId: "STRING_VALUE", // required
 * //                       purchaseOrderReference: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                   overriddenBy: {
 * //                     principalArn: "STRING_VALUE", // required
 * //                   },
 * //                 },
 * //                 awsOrganizationApproverOutcome: { // AwsOrganizationApproverOutcome
 * //                   note: "STRING_VALUE",
 * //                   status: "QUEUED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "EXPIRED" || "SKIPPED", // required
 * //                   updatedAt: new Date("TIMESTAMP"), // required
 * //                   approverOutcomeId: "STRING_VALUE",
 * //                   purchaseOrders: [
 * //                     {
 * //                       chargeId: "STRING_VALUE", // required
 * //                       purchaseOrderReference: "STRING_VALUE",
 * //                     },
 * //                   ],
 * //                 },
 * //               },
 * //             ],
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //     planInput: { // BuyerAgreementApprovalPlanInput
 * //       planReference: "STRING_VALUE", // required
 * //       requesterNote: "STRING_VALUE",
 * //     },
 * //     proposer: { // AgreementApprovalProposer
 * //       accountId: "STRING_VALUE", // required
 * //       legalName: "STRING_VALUE", // required
 * //     },
 * //     proposalSummary: { // AgreementApprovalProposalSummary
 * //       offerId: "STRING_VALUE", // required
 * //       offerSetId: "STRING_VALUE",
 * //       resources: [ // AgreementApprovalResources
 * //         { // AgreementApprovalResource
 * //           id: "STRING_VALUE", // required
 * //           type: "STRING_VALUE", // required
 * //           name: "STRING_VALUE", // required
 * //           deployedOnAws: "STRING_VALUE",
 * //         },
 * //       ],
 * //       visibilityScope: "PUBLIC" || "PRIVATE", // required
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgreementApprovalCommandInput - {@link GetAgreementApprovalCommandInput}
 * @returns {@link GetAgreementApprovalCommandOutput}
 * @see {@link GetAgreementApprovalCommandInput} for command's `input` shape.
 * @see {@link GetAgreementApprovalCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
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
 * @example Get an agreement approval
 * ```javascript
 * //
 * const input = {
 *   agreementApprovalId: "apr-EXAMPLE9s0t1u2v3w4x"
 * };
 * const command = new GetAgreementApprovalCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   buyerAgreementApproval: {
 *     agreementApprovalId: "apr-EXAMPLE9s0t1u2v3w4x",
 *     agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78",
 *     approvalNeededBy: 1739527800,
 *     approvalType: "BUYER_AGREEMENT_APPROVAL",
 *     createdAt: 1736935800,
 *     expiresAt: 1739527800,
 *     levels: [
 *       {
 *         groups: [
 *           {
 *             approvalCriteria: {
 *               requiredApprovalCount: 1
 *             },
 *             approvers: [
 *               {
 *                 awsOrganizationApproverOutcome: {
 *                   approverOutcomeId: "aprout-EXAMPLE1e2f3g4h5i6j",
 *                   status: "PENDING_APPROVAL",
 *                   updatedAt: 1737022200
 *                 }
 *               }
 *             ]
 *           }
 *         ],
 *         name: "Budget owner review"
 *       }
 *     ],
 *     name: "Example Analytics Platform sold by Example Corp",
 *     planInput: {
 *       planReference: "aplan-EXAMPLE7g8h9i0j1k2l",
 *       requesterNote: "Annual subscription for the data platform team."
 *     },
 *     proposalSummary: {
 *       offerId: "ABCDEFGHIJKLMNOP123",
 *       resources: [
 *         {
 *           deployedOnAws: "DEPLOYED",
 *           id: "0EXAMPLE-8ce8-4814-bcf1-636EXAMPLEb5",
 *           name: "Example Analytics Platform",
 *           type: "SaaSProduct"
 *         }
 *       ],
 *       visibilityScope: "PRIVATE"
 *     },
 *     proposer: {
 *       accountId: "444455556666",
 *       legalName: "Example Corp"
 *     },
 *     requester: {
 *       accountId: "123456789010"
 *     },
 *     startedAt: 1736935800,
 *     status: "PENDING_APPROVAL",
 *     updatedAt: 1737022200
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementApprovalCommand extends command<GetAgreementApprovalCommandInput, GetAgreementApprovalCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementApproval",
  GetAgreementApproval$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementApprovalInput;
      output: GetAgreementApprovalOutput;
    };
    sdk: {
      input: GetAgreementApprovalCommandInput;
      output: GetAgreementApprovalCommandOutput;
    };
  };
}
