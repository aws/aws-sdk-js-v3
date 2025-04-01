// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DeleteCustomVerificationEmailTemplateRequest } from "../models/models_0";
import {
  de_DeleteCustomVerificationEmailTemplateCommand,
  se_DeleteCustomVerificationEmailTemplateCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SESClientResolvedConfig } from "../SESClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteCustomVerificationEmailTemplateCommand}.
 */
export interface DeleteCustomVerificationEmailTemplateCommandInput
  extends DeleteCustomVerificationEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteCustomVerificationEmailTemplateCommand}.
 */
export interface DeleteCustomVerificationEmailTemplateCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes an existing custom verification email template. </p>
 *          <p>For more information about custom verification email templates, see <a href="https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom">Using
 *                 Custom Verification Email Templates</a> in the <i>Amazon SES Developer
 *                 Guide</i>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, DeleteCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, DeleteCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * const client = new SESClient(config);
 * const input = { // DeleteCustomVerificationEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new DeleteCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteCustomVerificationEmailTemplateCommandInput - {@link DeleteCustomVerificationEmailTemplateCommandInput}
 * @returns {@link DeleteCustomVerificationEmailTemplateCommandOutput}
 * @see {@link DeleteCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link SESServiceException}
 * <p>Base exception class for all service exceptions from SES service.</p>
 *
 *
 * @public
 */
export class DeleteCustomVerificationEmailTemplateCommand extends $Command
  .classBuilder<
    DeleteCustomVerificationEmailTemplateCommandInput,
    DeleteCustomVerificationEmailTemplateCommandOutput,
    SESClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SESClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService", "DeleteCustomVerificationEmailTemplate", {})
  .n("SESClient", "DeleteCustomVerificationEmailTemplateCommand")
  .f(void 0, void 0)
  .ser(se_DeleteCustomVerificationEmailTemplateCommand)
  .de(de_DeleteCustomVerificationEmailTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteCustomVerificationEmailTemplateRequest;
      output: {};
    };
    sdk: {
      input: DeleteCustomVerificationEmailTemplateCommandInput;
      output: DeleteCustomVerificationEmailTemplateCommandOutput;
    };
  };
}
