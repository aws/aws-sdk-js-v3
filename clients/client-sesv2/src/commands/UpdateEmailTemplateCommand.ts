// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateEmailTemplateRequest, UpdateEmailTemplateResponse } from "../models/models_1";
import { UpdateEmailTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateEmailTemplateCommand}.
 */
export interface UpdateEmailTemplateCommandInput extends UpdateEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link UpdateEmailTemplateCommand}.
 */
export interface UpdateEmailTemplateCommandOutput extends UpdateEmailTemplateResponse, __MetadataBearer {}

/**
 * Updates an email template. Email templates enable you to send personalized email to one or more destinations in a single API operation. For more information, see the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html).
 *
 * You can execute this operation no more than once per second.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, UpdateEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, UpdateEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
 * const client = new SESv2Client(config);
 * const input = { // UpdateEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateContent: { // EmailTemplateContent
 *     Subject: "STRING_VALUE",
 *     Text: "STRING_VALUE",
 *     Html: "STRING_VALUE",
 *   },
 * };
 * const command = new UpdateEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateEmailTemplateCommandInput - {@link UpdateEmailTemplateCommandInput}
 * @returns {@link UpdateEmailTemplateCommandOutput}
 * @see {@link UpdateEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link UpdateEmailTemplateCommandOutput} for command's `response` shape.
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
export class UpdateEmailTemplateCommand extends command<UpdateEmailTemplateCommandInput, UpdateEmailTemplateCommandOutput>(
  _ep0,
  _mw0,
  "UpdateEmailTemplate",
  UpdateEmailTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateEmailTemplateRequest;
      output: {};
    };
    sdk: {
      input: UpdateEmailTemplateCommandInput;
      output: UpdateEmailTemplateCommandOutput;
    };
  };
}
