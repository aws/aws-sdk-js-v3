// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ACMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ACMClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ResendValidationEmailRequest } from "../models/models_0";
import { ResendValidationEmail } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ResendValidationEmailCommand}.
 */
export interface ResendValidationEmailCommandInput extends ResendValidationEmailRequest {}
/**
 * @public
 *
 * The output of {@link ResendValidationEmailCommand}.
 */
export interface ResendValidationEmailCommandOutput extends __MetadataBearer {}

/**
 * <p>Resends the email that requests domain ownership validation. The domain owner or an authorized representative must approve the ACM certificate before it can be issued. The certificate can be approved by clicking a link in the mail to navigate to the Amazon certificate approval website and then clicking <b>I Approve</b>. However, the validation email can be blocked by spam filters. Therefore, if you do not receive the original mail, you can request that the mail be resent within 72 hours of requesting the ACM certificate. If more than 72 hours have elapsed since your original request or since your last attempt to resend validation mail, you must request a new certificate. For more information about setting up your contact email addresses, see <a href="https://docs.aws.amazon.com/acm/latest/userguide/setup-email.html">Configure Email for your Domain</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ACMClient, ResendValidationEmailCommand } from "@aws-sdk/client-acm"; // ES Modules import
 * // const { ACMClient, ResendValidationEmailCommand } = require("@aws-sdk/client-acm"); // CommonJS import
 * // import type { ACMClientConfig } from "@aws-sdk/client-acm";
 * const config = {}; // type is ACMClientConfig
 * const client = new ACMClient(config);
 * const input = { // ResendValidationEmailRequest
 *   CertificateArn: "STRING_VALUE", // required
 *   Domain: "STRING_VALUE", // required
 *   ValidationDomain: "STRING_VALUE", // required
 * };
 * const command = new ResendValidationEmailCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param ResendValidationEmailCommandInput - {@link ResendValidationEmailCommandInput}
 * @returns {@link ResendValidationEmailCommandOutput}
 * @see {@link ResendValidationEmailCommandInput} for command's `input` shape.
 * @see {@link ResendValidationEmailCommandOutput} for command's `response` shape.
 * @see {@link ACMClientResolvedConfig | config} for ACMClient's `config` shape.
 *
 * @throws {@link InvalidArnException} (client fault)
 *  <p>The requested Amazon Resource Name (ARN) does not refer to an existing resource.</p>
 *
 * @throws {@link InvalidDomainValidationOptionsException} (client fault)
 *  <p>One or more values in the <a>DomainValidationOption</a> structure is incorrect.</p>
 *
 * @throws {@link InvalidStateException} (client fault)
 *  <p>Processing has reached an invalid state.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified certificate cannot be found in the caller's account or the caller's account cannot be found.</p>
 *
 * @throws {@link ACMServiceException}
 * <p>Base exception class for all service exceptions from ACM service.</p>
 *
 *
 * @public
 */
export class ResendValidationEmailCommand extends $Command
  .classBuilder<
    ResendValidationEmailCommandInput,
    ResendValidationEmailCommandOutput,
    ACMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ACMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("CertificateManager", "ResendValidationEmail", {})
  .n("ACMClient", "ResendValidationEmailCommand")
  .sc(ResendValidationEmail)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ResendValidationEmailRequest;
      output: {};
    };
    sdk: {
      input: ResendValidationEmailCommandInput;
      output: ResendValidationEmailCommandOutput;
    };
  };
}
