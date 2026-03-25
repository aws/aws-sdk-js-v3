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
import type { CancelAgreementPaymentRequestInput, CancelAgreementPaymentRequestOutput } from "../models/models_0";
import { CancelAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelAgreementPaymentRequestCommand}.
 */
export interface CancelAgreementPaymentRequestCommandInput extends CancelAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link CancelAgreementPaymentRequestCommand}.
 */
export interface CancelAgreementPaymentRequestCommandOutput extends CancelAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * <p>Allows sellers (proposers) to cancel a payment request that is in <code>PENDING_APPROVAL</code> status. Once cancelled, the payment request transitions to <code>CANCELLED</code> status and can no longer be accepted or rejected by the buyer.</p> <note> <p>Only payment requests in <code>PENDING_APPROVAL</code> status can be cancelled. A <code>ConflictException</code> is thrown if the payment request is in any other status.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CancelAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CancelAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CancelAgreementPaymentRequestInput
 *   paymentRequestId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new CancelAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // CancelAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   chargeAmount: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param CancelAgreementPaymentRequestCommandInput - {@link CancelAgreementPaymentRequestCommandInput}
 * @returns {@link CancelAgreementPaymentRequestCommandOutput}
 * @see {@link CancelAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link CancelAgreementPaymentRequestCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceAgreementClientResolvedConfig | config} for MarketplaceAgreementClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>User does not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be completed due to a conflict with the current state of the resource.</p>
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
 * @public
 */
export class CancelAgreementPaymentRequestCommand extends $Command
  .classBuilder<
    CancelAgreementPaymentRequestCommandInput,
    CancelAgreementPaymentRequestCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "CancelAgreementPaymentRequest", {})
  .n("MarketplaceAgreementClient", "CancelAgreementPaymentRequestCommand")
  .sc(CancelAgreementPaymentRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAgreementPaymentRequestInput;
      output: CancelAgreementPaymentRequestOutput;
    };
    sdk: {
      input: CancelAgreementPaymentRequestCommandInput;
      output: CancelAgreementPaymentRequestCommandOutput;
    };
  };
}
