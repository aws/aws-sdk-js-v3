// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DisassociateChannelFlowRequest } from "../models/models_0";
import { DisassociateChannelFlow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DisassociateChannelFlowCommand}.
 */
export interface DisassociateChannelFlowCommandInput extends DisassociateChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link DisassociateChannelFlowCommand}.
 */
export interface DisassociateChannelFlowCommandOutput extends __MetadataBearer {}

/**
 * <p>Disassociates a channel flow from all its channels. Once disassociated, all messages to
 *          that channel stop going through the channel flow processor.</p>
 *          <note>
 *             <p>Only administrators or channel moderators can disassociate a channel flow.</p>
 *             <p>The <code>x-amz-chime-bearer</code> request header is mandatory. Use the
 *              ARN of the <code>AppInstanceUser</code> or <code>AppInstanceBot</code> that makes the API call as the value in
 *              the header.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DisassociateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DisassociateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DisassociateChannelFlowRequest
 *   ChannelArn: "STRING_VALUE", // required
 *   ChannelFlowArn: "STRING_VALUE", // required
 *   ChimeBearer: "STRING_VALUE", // required
 * };
 * const command = new DisassociateChannelFlowCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DisassociateChannelFlowCommandInput - {@link DisassociateChannelFlowCommandInput}
 * @returns {@link DisassociateChannelFlowCommandOutput}
 * @see {@link DisassociateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link DisassociateChannelFlowCommandOutput} for command's `response` shape.
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
 * @throws {@link NotFoundException} (client fault)
 *  <p>One or more of the resources in the request does not exist in the system.</p>
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
export class DisassociateChannelFlowCommand extends $Command
  .classBuilder<
    DisassociateChannelFlowCommandInput,
    DisassociateChannelFlowCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "DisassociateChannelFlow", {})
  .n("ChimeSDKMessagingClient", "DisassociateChannelFlowCommand")
  .sc(DisassociateChannelFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DisassociateChannelFlowRequest;
      output: {};
    };
    sdk: {
      input: DisassociateChannelFlowCommandInput;
      output: DisassociateChannelFlowCommandOutput;
    };
  };
}
