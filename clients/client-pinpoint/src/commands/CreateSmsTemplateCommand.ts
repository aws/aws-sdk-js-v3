// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSmsTemplateRequest, CreateSmsTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateSmsTemplateCommand, se_CreateSmsTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSmsTemplateCommand}.
 */
export interface CreateSmsTemplateCommandInput extends CreateSmsTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateSmsTemplateCommand}.
 */
export interface CreateSmsTemplateCommandOutput extends CreateSmsTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a message template for messages that are sent through the SMS channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateSmsTemplateRequest
 *   SMSTemplateRequest: { // SMSTemplateRequest
 *     Body: "STRING_VALUE",
 *     DefaultSubstitutions: "STRING_VALUE",
 *     RecommenderId: "STRING_VALUE",
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *   },
 *   TemplateName: "STRING_VALUE", // required
 * };
 * const command = new CreateSmsTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateSmsTemplateResponse
 * //   CreateTemplateMessageBody: { // CreateTemplateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateSmsTemplateCommandInput - {@link CreateSmsTemplateCommandInput}
 * @returns {@link CreateSmsTemplateCommandOutput}
 * @see {@link CreateSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateSmsTemplateCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class CreateSmsTemplateCommand extends $Command
  .classBuilder<
    CreateSmsTemplateCommandInput,
    CreateSmsTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("Pinpoint", "CreateSmsTemplate", {})
  .n("PinpointClient", "CreateSmsTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateSmsTemplateCommand)
  .de(de_CreateSmsTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSmsTemplateRequest;
      output: CreateSmsTemplateResponse;
    };
    sdk: {
      input: CreateSmsTemplateCommandInput;
      output: CreateSmsTemplateCommandOutput;
    };
  };
}
