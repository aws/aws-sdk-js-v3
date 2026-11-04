// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteApnsVoipChannelRequest, DeleteApnsVoipChannelResponse } from "../models/models_0";
import { DeleteApnsVoipChannel$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteApnsVoipChannelCommand}.
 */
export interface DeleteApnsVoipChannelCommandInput extends DeleteApnsVoipChannelRequest {}
/**
 * @public
 *
 * The output of {@link DeleteApnsVoipChannelCommand}.
 */
export interface DeleteApnsVoipChannelCommandOutput extends DeleteApnsVoipChannelResponse, __MetadataBearer {}

/**
 * Disables the APNs VoIP channel for an application and deletes any existing settings for the channel.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, DeleteApnsVoipChannelCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, DeleteApnsVoipChannelCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * // import type { PinpointClientConfig } from "@aws-sdk/client-pinpoint";
 * const config = {}; // type is PinpointClientConfig
 * const client = new PinpointClient(config);
 * const input = { // DeleteApnsVoipChannelRequest
 *   ApplicationId: "STRING_VALUE", // required
 * };
 * const command = new DeleteApnsVoipChannelCommand(input);
 * const response = await client.send(command);
 * // { // DeleteApnsVoipChannelResponse
 * //   APNSVoipChannelResponse: { // APNSVoipChannelResponse
 * //     ApplicationId: "STRING_VALUE",
 * //     CreationDate: "STRING_VALUE",
 * //     DefaultAuthenticationMethod: "STRING_VALUE",
 * //     Enabled: true || false,
 * //     HasCredential: true || false,
 * //     HasTokenKey: true || false,
 * //     Id: "STRING_VALUE",
 * //     IsArchived: true || false,
 * //     LastModifiedBy: "STRING_VALUE",
 * //     LastModifiedDate: "STRING_VALUE",
 * //     Platform: "STRING_VALUE", // required
 * //     Version: Number("int"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteApnsVoipChannelCommandInput - {@link DeleteApnsVoipChannelCommandInput}
 * @returns {@link DeleteApnsVoipChannelCommandOutput}
 * @see {@link DeleteApnsVoipChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteApnsVoipChannelCommandOutput} for command's `response` shape.
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
export class DeleteApnsVoipChannelCommand extends command<DeleteApnsVoipChannelCommandInput, DeleteApnsVoipChannelCommandOutput>(
  _ep0,
  _mw0,
  "DeleteApnsVoipChannel",
  DeleteApnsVoipChannel$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteApnsVoipChannelRequest;
      output: DeleteApnsVoipChannelResponse;
    };
    sdk: {
      input: DeleteApnsVoipChannelCommandInput;
      output: DeleteApnsVoipChannelCommandOutput;
    };
  };
}
