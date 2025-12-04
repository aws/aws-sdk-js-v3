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
import type { UpdateChannelFlowRequest, UpdateChannelFlowResponse } from "../models/models_0";
import { UpdateChannelFlow } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateChannelFlowCommand}.
 */
export interface UpdateChannelFlowCommandInput extends UpdateChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link UpdateChannelFlowCommand}.
 */
export interface UpdateChannelFlowCommandOutput extends UpdateChannelFlowResponse, __MetadataBearer {}

/**
 * <p>Updates channel flow attributes. This is a developer API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, UpdateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, UpdateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // UpdateChannelFlowRequest
 *   ChannelFlowArn: "STRING_VALUE", // required
 *   Processors: [ // ProcessorList // required
 *     { // Processor
 *       Name: "STRING_VALUE", // required
 *       Configuration: { // ProcessorConfiguration
 *         Lambda: { // LambdaConfiguration
 *           ResourceArn: "STRING_VALUE", // required
 *           InvocationType: "ASYNC", // required
 *         },
 *       },
 *       ExecutionOrder: Number("int"), // required
 *       FallbackAction: "CONTINUE" || "ABORT", // required
 *     },
 *   ],
 *   Name: "STRING_VALUE", // required
 * };
 * const command = new UpdateChannelFlowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateChannelFlowResponse
 * //   ChannelFlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateChannelFlowCommandInput - {@link UpdateChannelFlowCommandInput}
 * @returns {@link UpdateChannelFlowCommandOutput}
 * @see {@link UpdateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link UpdateChannelFlowCommandOutput} for command's `response` shape.
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
export class UpdateChannelFlowCommand extends $Command
  .classBuilder<
    UpdateChannelFlowCommandInput,
    UpdateChannelFlowCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "UpdateChannelFlow", {})
  .n("ChimeSDKMessagingClient", "UpdateChannelFlowCommand")
  .sc(UpdateChannelFlow)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateChannelFlowRequest;
      output: UpdateChannelFlowResponse;
    };
    sdk: {
      input: UpdateChannelFlowCommandInput;
      output: UpdateChannelFlowCommandOutput;
    };
  };
}
