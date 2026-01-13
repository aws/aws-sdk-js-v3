// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { SendEmailVerificationCodeRequest, SendEmailVerificationCodeResponse } from "../models/models_0";
import type {
  PartnerCentralAccountClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../PartnerCentralAccountClient";
import { SendEmailVerificationCode$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SendEmailVerificationCodeCommand}.
 */
export interface SendEmailVerificationCodeCommandInput extends SendEmailVerificationCodeRequest {}
/**
 * @public
 *
 * The output of {@link SendEmailVerificationCodeCommand}.
 */
export interface SendEmailVerificationCodeCommandOutput extends SendEmailVerificationCodeResponse, __MetadataBearer {}

/**
 * <p>Sends an email verification code to the specified email address for account verification purposes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PartnerCentralAccountClient, SendEmailVerificationCodeCommand } from "@aws-sdk/client-partnercentral-account"; // ES Modules import
 * // const { PartnerCentralAccountClient, SendEmailVerificationCodeCommand } = require("@aws-sdk/client-partnercentral-account"); // CommonJS import
 * // import type { PartnerCentralAccountClientConfig } from "@aws-sdk/client-partnercentral-account";
 * const config = {}; // type is PartnerCentralAccountClientConfig
 * const client = new PartnerCentralAccountClient(config);
 * const input = { // SendEmailVerificationCodeRequest
 *   Catalog: "STRING_VALUE", // required
 *   Email: "STRING_VALUE", // required
 * };
 * const command = new SendEmailVerificationCodeCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param SendEmailVerificationCodeCommandInput - {@link SendEmailVerificationCodeCommandInput}
 * @returns {@link SendEmailVerificationCodeCommandOutput}
 * @see {@link SendEmailVerificationCodeCommandInput} for command's `input` shape.
 * @see {@link SendEmailVerificationCodeCommandOutput} for command's `response` shape.
 * @see {@link PartnerCentralAccountClientResolvedConfig | config} for PartnerCentralAccountClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied due to insufficient permissions. The caller does not have the required permissions to perform this operation.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal server error occurred while processing the request. This is typically a temporary condition and the request may be retried.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>The request was rejected because it would exceed a service quota or limit. This may occur when trying to create more resources than allowed by the service limits.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was throttled due to too many requests being sent in a short period of time. The client should implement exponential backoff and retry the request.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request failed validation. One or more input parameters are invalid, missing, or do not meet the required format or constraints.</p>
 *
 * @throws {@link PartnerCentralAccountServiceException}
 * <p>Base exception class for all service exceptions from PartnerCentralAccount service.</p>
 *
 *
 * @public
 */
export class SendEmailVerificationCodeCommand extends $Command
  .classBuilder<
    SendEmailVerificationCodeCommandInput,
    SendEmailVerificationCodeCommandOutput,
    PartnerCentralAccountClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PartnerCentralAccountClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("PartnerCentralAccount", "SendEmailVerificationCode", {})
  .n("PartnerCentralAccountClient", "SendEmailVerificationCodeCommand")
  .sc(SendEmailVerificationCode$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SendEmailVerificationCodeRequest;
      output: {};
    };
    sdk: {
      input: SendEmailVerificationCodeCommandInput;
      output: SendEmailVerificationCodeCommandOutput;
    };
  };
}
