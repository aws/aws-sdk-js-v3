// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetAgreementRequestInput, GetAgreementRequestOutput } from "../models/models_0";
import { GetAgreementRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetAgreementRequestCommand}.
 */
export interface GetAgreementRequestCommandInput extends GetAgreementRequestInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementRequestCommand}.
 */
export interface GetAgreementRequestCommandOutput extends GetAgreementRequestOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific agreement request, including its status, intent, approval requirement, and charges. The acceptor, or the management account or a delegated administrator of the acceptor's AWS organization, can call this operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementRequestInput
 *   agreementRequestId: "STRING_VALUE", // required
 * };
 * const command = new GetAgreementRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementRequestOutput
 * //   agreementRequestId: "STRING_VALUE",
 * //   agreementType: "STRING_VALUE",
 * //   status: "DRAFT" || "PENDING_APPROVAL" || "APPROVED" || "ACCEPTED" || "REJECTED" || "CANCELLED",
 * //   approvalRequirement: "REQUIRED" || "NOT_REQUIRED",
 * //   agreementId: "STRING_VALUE",
 * //   intent: "NEW" || "AMEND" || "REPLACE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   chargeSummary: { // ChargeSummary
 * //     currencyCode: "STRING_VALUE",
 * //     newAgreementValue: "STRING_VALUE",
 * //     newAgreementValueAfterTax: "STRING_VALUE",
 * //     expectedCharges: [ // ExpectedChargeList
 * //       { // ExpectedCharge
 * //         id: "STRING_VALUE",
 * //         time: new Date("TIMESTAMP"),
 * //         amount: "STRING_VALUE",
 * //         amountAfterTax: "STRING_VALUE",
 * //         timing: "ON_ACCEPTANCE" || "SCHEDULED" || "BILLING_PERIOD" || "NOT_APPLICABLE",
 * //         estimatedTaxes: { // EstimatedTaxes
 * //           breakdown: [ // TaxBreakdown
 * //             { // TaxBreakdownItem
 * //               amount: "STRING_VALUE",
 * //               rate: "STRING_VALUE",
 * //               type: "STRING_VALUE",
 * //             },
 * //           ],
 * //           totalAmount: "STRING_VALUE",
 * //         },
 * //         purchaseOrderReference: "STRING_VALUE",
 * //       },
 * //     ],
 * //     estimatedTaxes: {
 * //       breakdown: [
 * //         {
 * //           amount: "STRING_VALUE",
 * //           rate: "STRING_VALUE",
 * //           type: "STRING_VALUE",
 * //         },
 * //       ],
 * //       totalAmount: "STRING_VALUE",
 * //     },
 * //     itemizedCharges: [ // ItemizedChargeList
 * //       { // ItemizedCharge
 * //         dimensionKey: "STRING_VALUE",
 * //         newQuantity: Number("int"),
 * //         oldQuantity: Number("int"),
 * //         chargeReference: "STRING_VALUE",
 * //         incrementalChargeAmount: "STRING_VALUE",
 * //       },
 * //     ],
 * //     invoicingEntity: { // InvoicingEntity
 * //       legalName: "STRING_VALUE",
 * //       branchName: "STRING_VALUE",
 * //     },
 * //   },
 * //   proposer: { // Proposer
 * //     accountId: "STRING_VALUE",
 * //   },
 * //   proposalSummary: { // ProposalSummary
 * //     resources: [ // Resources
 * //       { // Resource
 * //         id: "STRING_VALUE",
 * //         type: "STRING_VALUE",
 * //       },
 * //     ],
 * //     offerId: "STRING_VALUE",
 * //     offerSetId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetAgreementRequestCommandInput - {@link GetAgreementRequestCommandInput}
 * @returns {@link GetAgreementRequestCommandOutput}
 * @see {@link GetAgreementRequestCommandInput} for command's `input` shape.
 * @see {@link GetAgreementRequestCommandOutput} for command's `response` shape.
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
 * @example Get an agreement request
 * ```javascript
 * //
 * const input = {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78"
 * };
 * const command = new GetAgreementRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementRequestId: "ar-EXAMPLE4a539b123d4EXAMPLE78",
 *   agreementType: "PurchaseAgreement",
 *   approvalRequirement: "REQUIRED",
 *   chargeSummary: {
 *     currencyCode: "USD",
 *     expectedCharges: [
 *       {
 *         amount: "100",
 *         id: "ch-EXAMPLE4b4296145c3EXAMPLE56",
 *         purchaseOrderReference: "PO-123",
 *         timing: "ON_ACCEPTANCE"
 *       }
 *     ],
 *     itemizedCharges: [
 *       {
 *         chargeReference: "ch-EXAMPLE4b4296145c3EXAMPLE56",
 *         dimensionKey: "AdminUsers",
 *         incrementalChargeAmount: "50",
 *         newQuantity: 5,
 *         oldQuantity: 0
 *       },
 *       {
 *         chargeReference: "ch-EXAMPLE4b4296145c3EXAMPLE56",
 *         dimensionKey: "ReadOnlyUsers",
 *         incrementalChargeAmount: "50",
 *         newQuantity: 10,
 *         oldQuantity: 0
 *       }
 *     ],
 *     newAgreementValue: "100"
 *   },
 *   createdAt: 1736935800,
 *   intent: "NEW",
 *   proposalSummary: {
 *     offerId: "ABCDEFGHIJKLMNOP123",
 *     resources: [
 *       {
 *         id: "0EXAMPLE-8ce8-4814-bcf1-636EXAMPLEb5",
 *         type: "SaaSProduct"
 *       }
 *     ]
 *   },
 *   proposer: {
 *     accountId: "444455556666"
 *   },
 *   status: "PENDING_APPROVAL"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementRequestCommand extends command<GetAgreementRequestCommandInput, GetAgreementRequestCommandOutput>(
  _ep0,
  _mw0,
  "GetAgreementRequest",
  GetAgreementRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementRequestInput;
      output: GetAgreementRequestOutput;
    };
    sdk: {
      input: GetAgreementRequestCommandInput;
      output: GetAgreementRequestCommandOutput;
    };
  };
}
