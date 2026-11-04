// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteSmsChannelRequest, DeleteSmsChannelResponse } from "../models/models_0";
import { DeleteSmsChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteSmsChannelCommand}.
 */
export interface DeleteSmsChannelCommandInput extends DeleteSmsChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteSmsChannelCommand}.
 */
export interface DeleteSmsChannelCommandOutput extends DeleteSmsChannelResponse, __MetadataBearer {}

/**
 * Disables the SMS channel for an application and deletes any existing settings for the channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteSmsChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteSmsChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteSmsChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteSmsChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteSmsChannelResponse
 * //   SMSChannelResponse: { // SMSChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     PromotionalMessagesPerSecond: Number("int"),
 * //     SenderId: "STRING_VALUE",
 * //     ShortCode: "STRING_VALUE",
 * //     TransactionalMessagesPerSecond: Number("int"),
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteSmsChannelCommandInput - {@link DeleteSmsChannelCommandInput}
 * @returns {@link DeleteSmsChannelCommandOutput}
 * @see {@link DeleteSmsChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteSmsChannelCommandOutput} for command's `response` shape.
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
export class DeleteSmsChannelCommand extends command<DeleteSmsChannelCommandInput, DeleteSmsChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteSmsChannel",
  DeleteSmsChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteSmsChannelRequest;
      output: DeleteSmsChannelResponse;
    };
    sdk: {
      input: DeleteSmsChannelCommandInput;
      output: DeleteSmsChannelCommandOutput;
    };
  };
}
