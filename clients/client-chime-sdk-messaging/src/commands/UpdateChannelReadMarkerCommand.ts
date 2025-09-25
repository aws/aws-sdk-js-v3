// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateChannelReadMarkerRequest, UpdateChannelReadMarkerResponse } from "../models/models_0";
import { UpdateChannelReadMarker } from "../schemas/schemas_11_UpdateChannelReadMarker";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>The details of the time when a user last read messages in a channel.</p>
 *          <note>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *             ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *             the header.</p>
 *          </note>
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request could not be processed because of conflict in the current state of the
 *          resource.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeSDKMessagingServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKMessaging service.</p>
 *
 *
 * @public
 */
export class UpdateChannelReadMarkerCommand extends $Command
  .classBuilder<
    UpdateChannelReadMarkerCommandInput,
    UpdateChannelReadMarkerCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "UpdateChannelReadMarker", {})
  .n("ChimeSDKMessagingClient", "UpdateChannelReadMarkerCommand")
  .sc(UpdateChannelReadMarker)
  .build() {
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
