// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateChannelReadMarkerRequest, UpdateChannelReadMarkerResponse } from "../models/models_0";
import { UpdateChannelReadMarker$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateChannelReadMarkerCommand}.
 */
export interface UpdateChannelReadMarkerCommandInput extends UpdateChannelReadMarkerRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelReadMarkerCommand}.
 */
export interface UpdateChannelReadMarkerCommandOutput extends UpdateChannelReadMarkerResponse, __MetadataBearer {}

/**
 * The details of the time when a user last read messages in a channel.
 *
 * > **Note:** The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, UpdateChannelReadMarkerCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, UpdateChannelReadMarkerCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // UpdateChannelReadMarkerRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new UpdateChannelReadMarkerCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelReadMarkerResponse
 * //   ChannelArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateChannelReadMarkerCommandInput - {@link UpdateChannelReadMarkerCommandInput}
 * @returns {@link UpdateChannelReadMarkerCommandOutput}
 * @see {@link UpdateChannelReadMarkerCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelReadMarkerCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * The request could not be processed because of conflict in the current state of the resource.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The service encountered an unexpected error.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable.
 *
 * @throws {@link ThrottledClientException} (client fault)
 *
 * The client exceeded its request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client is not currently authorized to make the request.
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKMessaging service.
 *
 * @public
 */
export class UpdateChannelReadMarkerCommand extends command<UpdateChannelReadMarkerCommandInput, UpdateChannelReadMarkerCommandOutput>(
  _ep0,
  _mw0,
  "UpdateChannelReadMarker",
  UpdateChannelReadMarker$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelReadMarkerRequest;
      output: UpdateChannelReadMarkerResponse;
    };
    sdk: {
      input: UpdateChannelReadMarkerCommandInput;
      output: UpdateChannelReadMarkerCommandOutput;
    };
  };
}
