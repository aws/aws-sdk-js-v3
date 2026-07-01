// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetBillingAdjustmentRequestInput, GetBillingAdjustmentRequestOutput } from "../models/models_0";
import { GetBillingAdjustmentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetBillingAdjustmentRequestCommand}.
 */
export interface GetBillingAdjustmentRequestCommandInput extends GetBillingAdjustmentRequestInput {}
/**
 * @public
 *
 * The output of {@link GetBillingAdjustmentRequestCommand}.
 */
export interface GetBillingAdjustmentRequestCommandOutput extends GetBillingAdjustmentRequestOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific billing adjustment request. Sellers (proposers) can use this operation to view the status and details of a billing adjustment request they submitted.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetBillingAdjustmentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetBillingAdjustmentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetBillingAdjustmentRequestInput
 *   agreementId: "STRING_VALUE", // required
 *   billingAdjustmentRequestId: "STRING_VALUE", // required
 * };
 * const command = new GetBillingAdjustmentRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetBillingAdjustmentRequestOutput
 * //   billingAdjustmentRequestId: "STRING_VALUE", // required
 * //   agreementId: "STRING_VALUE", // required
 * //   adjustmentReasonCode: "INCORRECT_TERMS_ACCEPTED" || "INCORRECT_METERING" || "TEST_ENVIRONMENT_CHARGES" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER", // required
 * //   description: "STRING_VALUE",
 * //   originalInvoiceId: "STRING_VALUE", // required
 * //   adjustmentAmount: "STRING_VALUE", // required
 * //   currencyCode: "STRING_VALUE", // required
 * //   status: "PENDING" || "VALIDATION_FAILED" || "COMPLETED", // required
 * //   statusMessage: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"), // required
 * //   updatedAt: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param GetBillingAdjustmentRequestCommandInput - {@link GetBillingAdjustmentRequestCommandInput}
 * @returns {@link GetBillingAdjustmentRequestCommandOutput}
 * @see {@link GetBillingAdjustmentRequestCommandInput} for command's `input` shape.
 * @see {@link GetBillingAdjustmentRequestCommandOutput} for command's `response` shape.
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
 * @example Get a billing adjustment request
 * ```javascript
 * //
 * const input = {
 *   agreementId: "agmt-SvIzsqYMyQwI3GWgJAe17URx",
 *   billingAdjustmentRequestId: "ba-1a2b3c4d5e6f7g"
 * };
 * const command = new GetBillingAdjustmentRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   adjustmentAmount: "500.00",
 *   adjustmentReasonCode: "OTHER",
 *   agreementId: "agmt-SvIzsqYMyQwI3GWgJAe17URx",
 *   billingAdjustmentRequestId: "ba-1a2b3c4d5e6f7g",
 *   createdAt: "2025-06-24T19:30:00Z",
 *   currencyCode: "USD",
 *   description: "Customer requested adjustment",
 *   originalInvoiceId: "E2E20230929a108cfae",
 *   status: "PENDING",
 *   updatedAt: "2025-06-24T19:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetBillingAdjustmentRequestCommand extends command<GetBillingAdjustmentRequestCommandInput, GetBillingAdjustmentRequestCommandOutput>(
  _ep0,
  _mw0,
  "GetBillingAdjustmentRequest",
  GetBillingAdjustmentRequest$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetBillingAdjustmentRequestInput;
      output: GetBillingAdjustmentRequestOutput;
    };
    sdk: {
      input: GetBillingAdjustmentRequestCommandInput;
      output: GetBillingAdjustmentRequestCommandOutput;
    };
  };
}
