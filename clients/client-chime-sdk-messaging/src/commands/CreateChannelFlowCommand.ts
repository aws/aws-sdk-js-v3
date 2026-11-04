// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateChannelFlowRequest, CreateChannelFlowResponse } from "../models/models_0";
import { CreateChannelFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateChannelFlowCommand}.
 */
export interface CreateChannelFlowCommandInput extends CreateChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link CreateChannelFlowCommand}.
 */
export interface CreateChannelFlowCommandOutput extends CreateChannelFlowResponse, __MetadataBearer {}

/**
 * Creates a channel flow, a container for processors. Processors are AWS Lambda functions that perform actions on chat messages, such as stripping out profanity. You can associate channel flows with channels, and the processors in the channel flow then take action on all messages sent to that channel. This is a developer API.
 *
 * Channel flows process the following items:
 *
 * 1. New and updated messages
 * 2. Persistent and non-persistent messages
 * 3. The Standard message type
 *
 * > **Note:** Channel flows don't process Control or System messages. For more information about the message types provided by Chime SDK messaging, refer to [Message types](https://docs.aws.amazon.com/chime-sdk/latest/dg/using-the-messaging-sdk.html#msg-types) in the *Amazon Chime developer guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, CreateChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, CreateChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // CreateChannelFlowRequest
 *   AppInstanceArn: "STRING_VALUE", // required
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
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   ClientRequestToken: "STRING_VALUE", // required
 * };
 * const command = new CreateChannelFlowCommand(input);
 * const response = await client.send(command);
 * // { // CreateChannelFlowResponse
 * //   ChannelFlowArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateChannelFlowCommandInput - {@link CreateChannelFlowCommandInput}
 * @returns {@link CreateChannelFlowCommandOutput}
 * @see {@link CreateChannelFlowCommandInput} for command's `input` shape.
 * @see {@link CreateChannelFlowCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateChannelFlowCommand extends command<CreateChannelFlowCommandInput, CreateChannelFlowCommandOutput>(
  _ep0,
  _mw0,
  "CreateChannelFlow",
  CreateChannelFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateChannelFlowRequest;
      output: CreateChannelFlowResponse;
    };
    sdk: {
      input: CreateChannelFlowCommandInput;
      output: CreateChannelFlowCommandOutput;
    };
  };
}
