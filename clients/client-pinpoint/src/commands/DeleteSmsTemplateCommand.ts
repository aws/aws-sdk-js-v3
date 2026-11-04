// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSmsTemplateRequest, DeleteSmsTemplateResponse } from "../models/models_0";
import { DeleteSmsTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSmsTemplateCommand}.
 */
export interface DeleteSmsTemplateCommandInput extends DeleteSmsTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSmsTemplateCommand}.
 */
export interface DeleteSmsTemplateCommandOutput extends DeleteSmsTemplateResponse, __MetadataBearer {}

/**
 * Deletes a message template for messages that were sent through the SMS channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteSmsTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new DeleteSmsTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSmsTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSmsTemplateCommandInput - {@link DeleteSmsTemplateCommandInput}
 * @returns {@link DeleteSmsTemplateCommandOutput}
 * @see {@link DeleteSmsTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsTemplateCommandOutput} for command's `response` shape.
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
export class DeleteSmsTemplateCommand extends command<DeleteSmsTemplateCommandInput, DeleteSmsTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSmsTemplate",
  DeleteSmsTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSmsTemplateRequest;
      output: DeleteSmsTemplateResponse;
    };
    sdk: {
      input: DeleteSmsTemplateCommandInput;
      output: DeleteSmsTemplateCommandOutput;
    };
  };
}
