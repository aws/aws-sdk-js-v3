// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DisassociateChannelFlowRequest } from "../models/models_0";
import { DisassociateChannelFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Disassociates a channel flow from all its channels. Once disassociated, all messages to that channel stop going through the channel flow processor.
 *
 * > **Note:**
 * >
 * > Only administrators or channel moderators can disassociate a channel flow.
 * >
 * > The `x-amz-chime-bearer` request header is mandatory. Use the ARN of the `AppInstanceUser` or `AppInstanceBot` that makes the API call as the value in the header.
 *
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
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
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
export class DisassociateChannelFlowCommand extends command<DisassociateChannelFlowCommandInput, DisassociateChannelFlowCommandOutput>(
  _ep0,
  _mw0,
  "DisassociateChannelFlow",
  DisassociateChannelFlow$
) {
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
