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
import type { SendAgreementPaymentRequestInput, SendAgreementPaymentRequestOutput } from "../models/models_0";
import { SendAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendAgreementPaymentRequestCommand}.
 */
export interface SendAgreementPaymentRequestCommandInput extends SendAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link SendAgreementPaymentRequestCommand}.
 */
export interface SendAgreementPaymentRequestCommandOutput extends SendAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * <p>Allows sellers (proposers) to submit a payment request to buyers (acceptors) for a specific charge amount for an agreement that includes a <code>VariablePaymentTerm</code>. The payment request is created in <code>PENDING_APPROVAL</code> status, at which point the buyer can accept or reject it.</p> <note> <p>The agreement must be active and have a <code>VariablePaymentTerm</code> to support payment requests. The <code>chargeAmount</code> must not exceed the remaining available balance under the <code>VariablePaymentTerm</code> <code>maxTotalChargeAmount</code>.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, SendAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, SendAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // SendAgreementPaymentRequestInput
 *   clientToken: "STRING_VALUE",
 *   agreementId: "STRING_VALUE", // required
 *   termId: "STRING_VALUE", // required
 *   name: "STRING_VALUE", // required
 *   chargeAmount: "STRING_VALUE", // required
 *   description: "STRING_VALUE",
 * };
 * const command = new SendAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // SendAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   chargeAmount: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param SendAgreementPaymentRequestCommandInput - {@link SendAgreementPaymentRequestCommandInput}
 * @returns {@link SendAgreementPaymentRequestCommandOutput}
 * @see {@link SendAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link SendAgreementPaymentRequestCommandOutput} for command's `response` shape.
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
export class SendAgreementPaymentRequestCommand extends $Command
  .classBuilder<
    SendAgreementPaymentRequestCommandInput,
    SendAgreementPaymentRequestCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "SendAgreementPaymentRequest", {})
  .n("MarketplaceAgreementClient", "SendAgreementPaymentRequestCommand")
  .sc(SendAgreementPaymentRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendAgreementPaymentRequestInput;
      output: SendAgreementPaymentRequestOutput;
    };
    sdk: {
      input: SendAgreementPaymentRequestCommandInput;
      output: SendAgreementPaymentRequestCommandOutput;
    };
  };
}
