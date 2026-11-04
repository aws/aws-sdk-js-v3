// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteInAppTemplateRequest, DeleteInAppTemplateResponse } from "../models/models_0";
import { DeleteInAppTemplate$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteInAppTemplateCommand}.
 */
export interface DeleteInAppTemplateCommandInput extends DeleteInAppTemplateRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInAppTemplateCommand}.
 */
export interface DeleteInAppTemplateCommandOutput extends DeleteInAppTemplateResponse, __MetadataBearer {}

/**
 * Deletes a message template for messages sent using the in-app message channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteInAppTemplateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteInAppTemplateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteInAppTemplateRequest
 *   TemplateName: "STRING_VALUE", // required
 *   Version: "STRING_VALUE",
 * };
 * const command = new DeleteInAppTemplateCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInAppTemplateResponse
 * //   MessageBody: { // MessageBody
 * //     Message: "STRING_VALUE",
 * //     RequestID: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInAppTemplateCommandInput - {@link DeleteInAppTemplateCommandInput}
 * @returns {@link DeleteInAppTemplateCommandOutput}
 * @see {@link DeleteInAppTemplateCommandInput} for command's `input` shape.
 * @see {@link DeleteInAppTemplateCommandOutput} for command's `response` shape.
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
export class DeleteInAppTemplateCommand extends command<DeleteInAppTemplateCommandInput, DeleteInAppTemplateCommandOutput>(
  _ep0,
  _mw0,
  "DeleteInAppTemplate",
  DeleteInAppTemplate$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteInAppTemplateRequest;
      output: DeleteInAppTemplateResponse;
    };
    sdk: {
      input: DeleteInAppTemplateCommandInput;
      output: DeleteInAppTemplateCommandOutput;
    };
  };
}
