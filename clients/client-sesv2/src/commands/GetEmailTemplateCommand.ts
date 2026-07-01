// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetEmailTemplateRequest, GetEmailTemplateResponse } from "../models/models_0";
import { GetEmailTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 *          <p>You can execute this operation no more than 50 times per second.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, GetEmailTemplateCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, GetEmailTemplateCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * // import type { SESv2ClientConfig } from "@aws-sdk/client-sesv2";
 * const config = {}; // type is SESv2ClientConfig
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
 * //   Tags: [ // TagList
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
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
 *
 * @public
 */
export class GetEmailTemplateCommand extends command<GetEmailTemplateCommandInput, GetEmailTemplateCommandOutput>(
  _ep0,
  _mw0,
  "GetEmailTemplate",
  GetEmailTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEmailTemplateRequest;
      output: GetEmailTemplateResponse;
    };
    sdk: {
      input: GetEmailTemplateCommandInput;
      output: GetEmailTemplateCommandOutput;
    };
  };
}
