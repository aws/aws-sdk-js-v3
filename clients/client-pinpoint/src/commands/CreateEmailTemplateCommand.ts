// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateEmailTemplateRequest, CreateEmailTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateEmailTemplateCommand, se_CreateEmailTemplateCommand } from "../protocols/Aws_restJson1";

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
 * <p>Creates a message template for messages that are sent through the email channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateEmailTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateEmailTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const input = { // CreateEmailTemplateRequest
 *   EmailTemplateRequest: { // EmailTemplateRequest
 *     DefaultSubstitutions: "STRING_VALUE",
 *     HtmlPart: "STRING_VALUE",
 *     RecommenderId: "STRING_VALUE",
 *     Subject: "STRING_VALUE",
 *     Headers: [ // ListOfMessageHeader
 *       { // MessageHeader
 *         Name: "STRING_VALUE",
 *         Value: "STRING_VALUE",
 *       },
 *     ],
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *     TextPart: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new CreateEmailTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateEmailTemplateResponse
 * //   CreateTemplateMessageBody: { // CreateTemplateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateEmailTemplateCommandInput - {@link CreateEmailTemplateCommandInput}
 * @returns {@link CreateEmailTemplateCommandOutput}
 * @see {@link CreateEmailTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateEmailTemplateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PinpointServiceException}
 * <p>Base exception class for all service exceptions from Pinpoint service.</p>
 *
 * @public
 */
export class CreateEmailTemplateCommand extends $Command
  .classBuilder<
    CreateEmailTemplateCommandInput,
    CreateEmailTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "CreateEmailTemplate", {})
  .n("PinpointClient", "CreateEmailTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateEmailTemplateCommand)
  .de(de_CreateEmailTemplateCommand)
  .build() {}
