// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/models_0";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { de_CreateVoiceTemplateCommand, se_CreateVoiceTemplateCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceTemplateCommand}.
 */
export interface CreateVoiceTemplateCommandInput extends CreateVoiceTemplateRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceTemplateCommand}.
 */
export interface CreateVoiceTemplateCommandOutput extends CreateVoiceTemplateResponse, __MetadataBearer {}

/**
 * <p>Creates a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, CreateVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, CreateVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // CreateVoiceTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   VoiceTemplateRequest: { // VoiceTemplateRequest
 *     Body: "STRING_VALUE",
 *     DefaultSubstitutions: "STRING_VALUE",
 *     LanguageCode: "STRING_VALUE",
 *     tags: { // MapOf__string
 *       "<keys>": "STRING_VALUE",
 *     },
 *     TemplateDescription: "STRING_VALUE",
 *     VoiceId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceTemplateResponse
 * //   CreateTemplateMessageBody: { // CreateTemplateMessageBody
 * //     Arn: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateVoiceTemplateCommandInput - {@link CreateVoiceTemplateCommandInput}
 * @returns {@link CreateVoiceTemplateCommandOutput}
 * @see {@link CreateVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceTemplateCommandOutput} for command's `response` shape.
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
export class CreateVoiceTemplateCommand extends $Command
  .classBuilder<
    CreateVoiceTemplateCommandInput,
    CreateVoiceTemplateCommandOutput,
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
  .s("Pinpoint", "CreateVoiceTemplate", {})
  .n("PinpointClient", "CreateVoiceTemplateCommand")
  .f(void 0, void 0)
  .ser(se_CreateVoiceTemplateCommand)
  .de(de_CreateVoiceTemplateCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceTemplateRequest;
      output: CreateVoiceTemplateResponse;
    };
    sdk: {
      input: CreateVoiceTemplateCommandInput;
      output: CreateVoiceTemplateCommandOutput;
    };
  };
}
