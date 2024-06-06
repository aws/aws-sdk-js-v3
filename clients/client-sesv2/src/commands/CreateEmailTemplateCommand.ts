// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEmailTemplateRequest, CreateEmailTemplateResponse } from "../models/models_0";
import { de_CreateEmailTemplateCommand, se_CreateEmailTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateEmailTemplateCommand}.
 */
export interface CreateEmailTemplateCommandInput extends CreateEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateEmailTemplateCommand}.
 */
export interface CreateEmailTemplateCommandOutput extends CreateEmailTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates an email template. Email templates enable you to send personalized email to
 *             one or more destinations in a single API operation. For more information, see the <a href="https://docs.aws.amazon.com/ses/latest/DeveloperGuide/send-personalized-email-api.html">Amazon SES Developer
 *                 Guide</a>.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, CreateEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, CreateEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // CreateEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   TemplateContent: { // EmailTemplateContent
 *     Subject: "STRING_VALUE",
 *     Text: "STRING_VALUE",
 *     Html: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateEmailTemplateCommandInput - {@link CreateEmailTemplateCommandInput}
 * @returns {@link CreateEmailTemplateCommandOutput}
 * @see {@link CreateEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>The resource specified in your request already exists.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>There are too many instances of the specified resource type.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class CreateEmailTemplateCommand extends $Command
  .classBuilder<
    CreateEmailTemplateCommandInput,
    CreateEmailTemplateCommandOutput,
    SESv2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: SESv2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SimpleEmailService_v2", "CreateEmailTemplate", {})
  .n("SESv2Client", "CreateEmailTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateEmailTemplateCommand)
  .de(de_CreateEmailTemplateCommand)
  .build() {}
