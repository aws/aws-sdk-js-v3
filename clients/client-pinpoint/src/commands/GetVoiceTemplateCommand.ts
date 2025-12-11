// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVoiceTemplateRequest, GetVoiceTemplateResponse } from "../models/models_1";
import type { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import { GetVoiceTemplate } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceTemplateCommand}.
 */
export interface GetVoiceTemplateCommandInput extends GetVoiceTemplateRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceTemplateCommand}.
 */
export interface GetVoiceTemplateCommandOutput extends GetVoiceTemplateResponse, __MetadataBearer {}

/**
 * <p>Retrieves the content and settings of a message template for messages that are sent through the voice channel.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // GetVoiceTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new GetVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceTemplateResponse
 * //   VoiceTemplateResponse: { // VoiceTemplateResponse
 * //     Arn: "STRING_VALUE",
 * //     Body: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE", // required
 * //     DefaultSubstitutions: "STRING_VALUE",
 * //     LanguageCode: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE", // required
 * //     tags: { // MapOf__string
 * //       "<keys>": "STRING_VALUE",
 * //     },
 * //     TemplateDescription: "STRING_VALUE",
 * //     TemplateName: "STRING_VALUE", // required
 * //     TemplateType: "EMAIL" || "SMS" || "VOICE" || "PUSH" || "INAPP", // required
 * //     Version: "STRING_VALUE",
 * //     VoiceId: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceTemplateCommandInput - {@link GetVoiceTemplateCommandInput}
 * @returns {@link GetVoiceTemplateCommandOutput}
 * @see {@link GetVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link GetVoiceTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>Provides information about an API request or response.</p>
 *
 * @throws {@link PayloadTooLargeException} (client fault)
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
export class GetVoiceTemplateCommand extends $Command
  .classBuilder<
    GetVoiceTemplateCommandInput,
    GetVoiceTemplateCommandOutput,
    PinpointClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: PinpointClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("Pinpoint", "GetVoiceTemplate", {})
  .n("PinpointClient", "GetVoiceTemplateCommand")
  .sc(GetVoiceTemplate)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceTemplateRequest;
      output: GetVoiceTemplateResponse;
    };
    sdk: {
      input: GetVoiceTemplateCommandInput;
      output: GetVoiceTemplateCommandOutput;
    };
  };
}
