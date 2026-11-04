// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateCustomVerificationEmailTemplateRequest } from "../models/models_0";
import { CreateCustomVerificationEmailTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateCustomVerificationEmailTemplateCommand}.
 */
export interface CreateCustomVerificationEmailTemplateCommandInput extends CreateCustomVerificationEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateCustomVerificationEmailTemplateCommand}.
 */
export interface CreateCustomVerificationEmailTemplateCommandOutput extends __MetadataBearer {}

/**
 * Creates a new custom verification email template.
 *
 * For more information about custom verification email templates, see [Using Custom Verification Email Templates](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESClient, CreateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-ses"; // ES Modules import
 * // const { SESClient, CreateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-ses"); // CommonJS import
 * // import type { SESClientConfig } from "@aws-sdk/client-ses";
 * const config = {}; // type is SESClientConfig
 * const client = new SESClient(config);
 * const input = { // CreateCustomVerificationEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   FromEmailAddress: "STRING_VALUE", // required
 *   TemplateSubject: "STRING_VALUE", // required
 *   TemplateContent: "STRING_VALUE", // required
 *   SuccessRedirectionURL: "STRING_VALUE", // required
 *   FailureRedirectionURL: "STRING_VALUE", // required
 * };
 * const command = new CreateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateCustomVerificationEmailTemplateCommandInput - {@link CreateCustomVerificationEmailTemplateCommandInput}
 * @returns {@link CreateCustomVerificationEmailTemplateCommandOutput}
 * @see {@link CreateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESClientResolvedConfig | config} for SESClient's `config` shape.
 *
 * @throws {@link CustomVerificationEmailInvalidContentException} (client fault)
 *
 * Indicates that custom verification email template provided content is invalid.
 *
 * @throws {@link CustomVerificationEmailTemplateAlreadyExistsException} (client fault)
 *
 * Indicates that a custom verification email template with the name you specified already exists.
 *
 * @throws {@link FromEmailAddressNotVerifiedException} (client fault)
 *
 * Indicates that the sender address specified for a custom verification email is not verified, and is therefore not eligible to send the custom verification email.
 *
 * @throws {@link LimitExceededException} (client fault)
 *
 * Indicates that a resource could not be created because of service limits. For a list of Amazon SES limits, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/limits.html).
 *
 * @throws {@link SESServiceException}
 *
 * Base exception class for all service exceptions from SES service.
 *
 * @public
 */
export class CreateCustomVerificationEmailTemplateCommand extends command<CreateCustomVerificationEmailTemplateCommandInput, CreateCustomVerificationEmailTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateCustomVerificationEmailTemplate",
  CreateCustomVerificationEmailTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateCustomVerificationEmailTemplateRequest;
      output: {};
    };
    sdk: {
      input: CreateCustomVerificationEmailTemplateCommandInput;
      output: CreateCustomVerificationEmailTemplateCommandOutput;
    };
  };
}
