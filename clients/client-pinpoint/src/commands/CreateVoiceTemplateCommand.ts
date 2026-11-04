// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVoiceTemplateRequest, CreateVoiceTemplateResponse } from "../models/models_0";
import { CreateVoiceTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates a message template for messages that are sent through the voice channel.
 *
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
 *
 * Provides information about an API request or response.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link MethodNotAllowedException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PinpointServiceException}
 *
 * Base exception class for all service exceptions from Pinpoint service.
 *
 * @public
 */
export class CreateVoiceTemplateCommand extends command<CreateVoiceTemplateCommandInput, CreateVoiceTemplateCommandOutput>(
  _ep0,
  _mw0,
  "CreateVoiceTemplate",
  CreateVoiceTemplate$
) {
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
