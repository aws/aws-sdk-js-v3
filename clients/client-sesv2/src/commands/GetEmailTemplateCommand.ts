// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEmailTemplateRequest, GetEmailTemplateResponse } from "../models/models_0";
import { de_GetEmailTemplateCommand, se_GetEmailTemplateCommand } from "../protocols/Aws_restJson1";
import { ServiceInputTypes, ServiceOutputTypes, SESv2ClientResolvedConfig } from "../SESv2Client";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEmailTemplateCommand}.
 */
export interface GetEmailTemplateCommandInput extends GetEmailTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetEmailTemplateCommand}.
 */
export interface GetEmailTemplateCommandOutput extends GetEmailTemplateResponse, __MetadataBearer {}

/**
 * <p>Displays the template object (which includes the subject line, HTML part and text
 *             part) for the template you specify.</p>
 *          <p>You can execute this operation no more than once per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const input = { // GetEmailTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new GetEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetEmailTemplateResponse
 * //   TemplateName: "STRING_VALUE", // required
 * //   TemplateContent: { // EmailTemplateContent
 * //     Subject: "STRING_VALUE",
 * //     Text: "STRING_VALUE",
 * //     Html: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEmailTemplateCommandInput - {@link GetEmailTemplateCommandInput}
 * @returns {@link GetEmailTemplateCommandOutput}
 * @see {@link GetEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link GetEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for SESv2Client's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input you provided is invalid.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The resource you attempted to access doesn't exist.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Too many requests have been made to the operation.</p>
 *
 * @throws {@link SESv2ServiceException}
 * <p>Base exception class for all service exceptions from SESv2 service.</p>
 *
 * @public
 */
export class GetEmailTemplateCommand extends $Command
  .classBuilder<
    GetEmailTemplateCommandInput,
    GetEmailTemplateCommandOutput,
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
  .s("SimpleEmailService_v2", "GetEmailTemplate", {})
  .n("SESv2Client", "GetEmailTemplateCommand")
  .f(void 0, void 0)
  .ser(se_GetEmailTemplateCommand)
  .de(de_GetEmailTemplateCommand)
  .build() {}
