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
import type { GetAgreementPaymentRequestInput, GetAgreementPaymentRequestOutput } from "../models/models_0";
import { GetAgreementPaymentRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgreementPaymentRequestCommand}.
 */
export interface GetAgreementPaymentRequestCommandInput extends GetAgreementPaymentRequestInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementPaymentRequestCommand}.
 */
export interface GetAgreementPaymentRequestCommandOutput extends GetAgreementPaymentRequestOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific payment request. Both sellers (proposers) and buyers (acceptors) can use this operation to view payment requests associated with their agreements. The response includes the current status, charge details, timestamps, and the charge ID if the request has been approved.</p> <note> <p>The calling identity must be either the acceptor or proposer of the payment request. A <code>ResourceNotFoundException</code> is returned if the payment request does not exist.</p> </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementPaymentRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementPaymentRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementPaymentRequestInput
 *   paymentRequestId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new GetAgreementPaymentRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementPaymentRequestOutput
 * //   paymentRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   status: "VALIDATING" || "VALIDATION_FAILED" || "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED",
 * //   statusMessage: "STRING_VALUE",
 * //   name: "STRING_VALUE",
 * //   description: "STRING_VALUE",
 * //   chargeId: "STRING_VALUE",
 * //   chargeAmount: "STRING_VALUE",
 * //   currencyCode: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAgreementPaymentRequestCommandInput - {@link GetAgreementPaymentRequestCommandInput}
 * @returns {@link GetAgreementPaymentRequestCommandOutput}
 * @see {@link GetAgreementPaymentRequestCommandInput} for command's `input` shape.
 * @see {@link GetAgreementPaymentRequestCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetAgreementPaymentRequestCommand extends $Command
  .classBuilder<
    GetAgreementPaymentRequestCommandInput,
    GetAgreementPaymentRequestCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "GetAgreementPaymentRequest", {})
  .n("MarketplaceAgreementClient", "GetAgreementPaymentRequestCommand")
  .sc(GetAgreementPaymentRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementPaymentRequestInput;
      output: GetAgreementPaymentRequestOutput;
    };
    sdk: {
      input: GetAgreementPaymentRequestCommandInput;
      output: GetAgreementPaymentRequestCommandOutput;
    };
  };
}
