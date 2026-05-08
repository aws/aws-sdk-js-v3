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
import type { CancelAgreementInput, CancelAgreementOutput } from "../models/models_0";
import { CancelAgreement$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CancelAgreementCommand}.
 */
export interface CancelAgreementCommandInput extends CancelAgreementInput {}
/**
 * @public
 *
 * The output of {@link CancelAgreementCommand}.
 */
export interface CancelAgreementCommandOutput extends CancelAgreementOutput, __MetadataBearer {}

/**
 * <p>Allows an acceptor to cancel an active agreement. Not all agreements are eligible for cancellation. Use the error response to determine why a cancellation request was rejected.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceAgreementClient, CancelAgreementCommand } from "@aws-sdk/client-marketplace-agreement"; // ES Modules import
 * // const { MarketplaceAgreementClient, CancelAgreementCommand } = require("@aws-sdk/client-marketplace-agreement"); // CommonJS import
 * // import type { MarketplaceAgreementClientConfig } from "@aws-sdk/client-marketplace-agreement";
 * const config = {}; // type is MarketplaceAgreementClientConfig
 * const client = new MarketplaceAgreementClient(config);
 * const input = { // CancelAgreementInput
 *   agreementId: "STRING_VALUE", // required
 * };
 * const command = new CancelAgreementCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CancelAgreementCommandInput - {@link CancelAgreementCommandInput}
 * @returns {@link CancelAgreementCommandOutput}
 * @see {@link CancelAgreementCommandInput} for command's `input` shape.
 * @see {@link CancelAgreementCommandOutput} for command's `response` shape.
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
 * @public
 */
export class CancelAgreementCommand extends $Command
  .classBuilder<
    CancelAgreementCommandInput,
    CancelAgreementCommandOutput,
    MarketplaceAgreementClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MarketplaceAgreementClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSMPCommerceService_v20200301", "CancelAgreement", {})
  .n("MarketplaceAgreementClient", "CancelAgreementCommand")
  .sc(CancelAgreement$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CancelAgreementInput;
      output: {};
    };
    sdk: {
      input: CancelAgreementCommandInput;
      output: CancelAgreementCommandOutput;
    };
  };
}
