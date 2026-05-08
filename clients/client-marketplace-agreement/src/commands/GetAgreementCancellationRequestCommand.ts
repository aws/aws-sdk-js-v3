// smithy-typescript generated code
import { Command as $Command } from "@smithy/core/client";
import { getEndpointPlugin } from "@smithy/core/endpoints";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type {
  MarketplaceAgreementClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../MarketplaceAgreementClient";
import type { GetAgreementCancellationRequestInput, GetAgreementCancellationRequestOutput } from "../models/models_0";
import { GetAgreementCancellationRequest$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAgreementCancellationRequestCommand}.
 */
export interface GetAgreementCancellationRequestCommandInput extends GetAgreementCancellationRequestInput {}
/**
 * @public
 *
 * The output of {@link GetAgreementCancellationRequestCommand}.
 */
export interface GetAgreementCancellationRequestCommandOutput extends GetAgreementCancellationRequestOutput, __MetadataBearer {}

/**
 * <p>Retrieves detailed information about a specific agreement cancellation request. Both sellers (proposers) and buyers (acceptors) can use this operation to view cancellation requests associated with their agreements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, GetAgreementCancellationRequestCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, GetAgreementCancellationRequestCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // GetAgreementCancellationRequestInput
 *   agreementCancellationRequestId: "STRING_VALUE", // required
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new GetAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * // { // GetAgreementCancellationRequestOutput
 * //   agreementCancellationRequestId: "STRING_VALUE",
 * //   agreementId: "STRING_VALUE",
 * //   reasonCode: "INCORRECT_TERMS_ACCEPTED" || "REPLACING_AGREEMENT" || "TEST_AGREEMENT" || "ALTERNATIVE_PROCUREMENT_CHANNEL" || "PRODUCT_DISCONTINUED" || "UNINTENDED_RENEWAL" || "BUYER_DISSATISFACTION" || "OTHER",
 * //   description: "STRING_VALUE",
 * //   status: "PENDING_APPROVAL" || "APPROVED" || "REJECTED" || "CANCELLED" || "VALIDATION_FAILED",
 * //   statusMessage: "STRING_VALUE",
 * //   createdAt: new Date("TIMESTAMP"),
 * //   updatedAt: new Date("TIMESTAMP"),
 * // };
 *
 * ```
 *
 * @param GetAgreementCancellationRequestCommandInput - {@link GetAgreementCancellationRequestCommandInput}
 * @returns {@link GetAgreementCancellationRequestCommandOutput}
 * @see {@link GetAgreementCancellationRequestCommandInput} for command's `input` shape.
 * @see {@link GetAgreementCancellationRequestCommandOutput} for command's `response` shape.
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
 * @example Get a cancellation request
 * ```javascript
 * //
 * const input = {
 *   agreementCancellationRequestId: "acr-sgew33rhsds",
 *   agreementId: "agmt-752jqvg74yo7k"
 * };
 * const command = new GetAgreementCancellationRequestCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   agreementCancellationRequestId: "acr-sgew33rhsds",
 *   agreementId: "agmt-752jqvg74yo7k",
 *   createdAt: "2025-01-15T10:30:00Z",
 *   description: "Product is being discontinued and no longer supported",
 *   reasonCode: "PRODUCT_DISCONTINUED",
 *   status: "VALIDATION_FAILED",
 *   statusMessage: "Agreement is not in an active state",
 *   updatedAt: "2025-01-16T10:30:00Z"
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetAgreementCancellationRequestCommand extends $Command
  .classBuilder<
    GetAgreementCancellationRequestCommandInput,
    GetAgreementCancellationRequestCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "GetAgreementCancellationRequest", {})
  .n("MarketplaceAgreementClient", "GetAgreementCancellationRequestCommand")
  .sc(GetAgreementCancellationRequest$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAgreementCancellationRequestInput;
      output: GetAgreementCancellationRequestOutput;
    };
    sdk: {
      input: GetAgreementCancellationRequestCommandInput;
      output: GetAgreementCancellationRequestCommandOutput;
    };
  };
}
