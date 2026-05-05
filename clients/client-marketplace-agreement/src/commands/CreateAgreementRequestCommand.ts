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
import type { CreateAgreementRequestInput, CreateAgreementRequestOutput } from "../models/models_0";
import { CreateAgreementRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateAgreementRequestCommand}.
 */
export interface CreateAgreementRequestCommandInput extends CreateAgreementRequestInput {}
/**
 * @public
 *
 * The output of {@link CreateAgreementRequestCommand}.
 */
export interface CreateAgreementRequestCommandOutput extends CreateAgreementRequestOutput, __MetadataBearer {}

/**
 * <p>Creates an agreement request that acts as a quote for the terms you want to accept. The agreement request captures the requested terms, calculates charges, and returns a summary. Use <code>AcceptAgreementRequest</code> with the returned <code>agreementRequestId</code> to finalize the agreement.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CreateAgreementRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CreateAgreementRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CreateAgreementRequestInput
 *   clientToken: "STRING_VALUE",
 *   intent: "NEW" || "AMEND" || "REPLACE", // required
 *   requestedTerms: [ // RequestedTermList // required
 *     { // RequestedTerm
 *       id: "STRING_VALUE", // required
 *       configuration: { // RequestedTermConfiguration Union: only one key present
 *         configurableUpfrontPricingTermConfiguration: { // ConfigurableUpfrontPricingTermConfiguration
 *           selectorValue: "STRING_VALUE", // required
 *           dimensions: [ // DimensionList // required
 *             { // Dimension
 *               dimensionKey: "STRING_VALUE", // required
 *               dimensionValue: Number("int"), // required
 *             },
 *           ],
 *         },
 *         renewalTermConfiguration: { // RenewalTermConfiguration
 *           enableAutoRenew: true || false, // required
 *         },
 *         variablePaymentTermConfiguration: { // VariablePaymentTermConfiguration
 *           paymentRequestApprovalStrategy: "AUTO_APPROVE_ON_EXPIRATION" || "WAIT_FOR_APPROVAL", // required
 *           expirationDuration: "STRING_VALUE",
 *         },
 *       },
 *     },
 *   ],
 *   sourceAgreementIdentifier: "STRING_VALUE",
 *   agreementProposalIdentifier: "STRING_VALUE",
 *   taxConfiguration: { // TaxConfiguration
 *     taxEstimation: "DISABLED" || "ENABLED",
 *   },
 * };
 * const command = new CreateAgreementRequestCommand(input);
 * const response = await client.send(command);
 * // { // CreateAgreementRequestOutput
 * //   agreementRequestId: "STRING_VALUE",
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
 * //         timing: "ON_ACCEPTANCE" || "SCHEDULED" || "BILLING_PERIOD",
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
 * // };
 *
 * ```
 *
 * @param CreateAgreementRequestCommandInput - {@link CreateAgreementRequestCommandInput}
 * @returns {@link CreateAgreementRequestCommandOutput}
 * @see {@link CreateAgreementRequestCommandInput} for command's `input` shape.
 * @see {@link CreateAgreementRequestCommandOutput} for command's `response` shape.
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
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>Request exceeded the maximum allowed limit (quota) for a specific resource or API operation.</p>
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
export class CreateAgreementRequestCommand extends $Command
  .classBuilder<
    CreateAgreementRequestCommandInput,
    CreateAgreementRequestCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "CreateAgreementRequest", {})
  .n("MarketplaceAgreementClient", "CreateAgreementRequestCommand")
  .sc(CreateAgreementRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateAgreementRequestInput;
      output: CreateAgreementRequestOutput;
    };
    sdk: {
      input: CreateAgreementRequestCommandInput;
      output: CreateAgreementRequestCommandOutput;
    };
  };
}
