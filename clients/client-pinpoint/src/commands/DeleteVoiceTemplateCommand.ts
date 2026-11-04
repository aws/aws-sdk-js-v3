// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteVoiceTemplateRequest, DeleteVoiceTemplateResponse } from "../models/models_0";
import { DeleteVoiceTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteVoiceTemplateCommand}.
 */
export interface DeleteVoiceTemplateCommandInput extends DeleteVoiceTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteVoiceTemplateCommand}.
 */
export interface DeleteVoiceTemplateCommandOutput extends DeleteVoiceTemplateResponse, __MetadataBearer {}

/**
 * Deletes a message template for messages that were sent through the voice channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteVoiceTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteVoiceTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteVoiceTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new DeleteVoiceTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteVoiceTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteVoiceTemplateCommandInput - {@link DeleteVoiceTemplateCommandInput}
 * @returns {@link DeleteVoiceTemplateCommandOutput}
 * @see {@link DeleteVoiceTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteVoiceTemplateCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *
 * Provides information about an API request or response.
 *
 * @throws {@link PayloadTooLargeException} (client fault)
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
export class DeleteVoiceTemplateCommand extends command<DeleteVoiceTemplateCommandInput, DeleteVoiceTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteVoiceTemplate",
  DeleteVoiceTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteVoiceTemplateRequest;
      output: DeleteVoiceTemplateResponse;
    };
    sdk: {
      input: DeleteVoiceTemplateCommandInput;
      output: DeleteVoiceTemplateCommandOutput;
    };
  };
}
