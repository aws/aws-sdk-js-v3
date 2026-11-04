// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  UpdateCustomVerificationEmailTemplateRequest,
  UpdateCustomVerificationEmailTemplateResponse,
} from "../models/models_1";
import { UpdateCustomVerificationEmailTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateCustomVerificationEmailTemplateCommand}.
 */
export interface UpdateCustomVerificationEmailTemplateCommandInput extends UpdateCustomVerificationEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateCustomVerificationEmailTemplateCommand}.
 */
export interface UpdateCustomVerificationEmailTemplateCommandOutput extends UpdateCustomVerificationEmailTemplateResponse, __MetadataBearer {}

/**
 * Updates an existing custom verification email template.
 *
 * For more information about custom verification email templates, see [Using custom verification email templates](https://docs.aws.amazon.com/ses/latest/dg/creating-identities.html#send-email-verify-address-custom) in the *Amazon SES Developer Guide*.
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateCustomVerificationEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateCustomVerificationEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   FromEmailAddress: "STRING_VALUE", // required
 *   TemplateSubject: "STRING_VALUE", // required
 *   TemplateContent: "STRING_VALUE", // required
 *   SuccessRedirectionURL: "STRING_VALUE", // required
 *   FailureRedirectionURL: "STRING_VALUE", // required
 * };
 * const command = new UpdateCustomVerificationEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateCustomVerificationEmailTemplateCommandInput - {@link UpdateCustomVerificationEmailTemplateCommandInput}
 * @returns {@link UpdateCustomVerificationEmailTemplateCommandOutput}
 * @see {@link UpdateCustomVerificationEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateCustomVerificationEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input you provided is invalid.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The resource you attempted to access doesn't exist.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Too many requests have been made to the operation.
 *
 * @throws {@link SESv2ServiceException}
 *
 * Base exception class for all service exceptions from SESv2 service.
 *
 * @public
 */
export class UpdateCustomVerificationEmailTemplateCommand extends command<UpdateCustomVerificationEmailTemplateCommandInput, UpdateCustomVerificationEmailTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateCustomVerificationEmailTemplate",
  UpdateCustomVerificationEmailTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateCustomVerificationEmailTemplateRequest;
      output: {};
    };
    sdk: {
      input: UpdateCustomVerificationEmailTemplateCommandInput;
      output: UpdateCustomVerificationEmailTemplateCommandOutput;
    };
  };
}
