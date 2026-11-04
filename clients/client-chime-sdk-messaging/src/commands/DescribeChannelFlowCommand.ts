// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeChannelFlowRequest, DescribeChannelFlowResponse } from "../models/models_0";
import { DescribeChannelFlow$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeChannelFlowCommand}.
 */
export interface DescribeChannelFlowCommandInput extends DescribeChannelFlowRequest {}
/**
 * @public
 *
 * The output of {@link DescribeChannelFlowCommand}.
 */
export interface DescribeChannelFlowCommandOutput extends DescribeChannelFlowResponse, __MetadataBearer {}

/**
 * Returns the full details of a channel flow in an Amazon Chime `AppInstance`. This is a developer API.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DescribeChannelFlowRequest
 *   ChannelFlowArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeChannelFlowCommand(input);
 * const response = await client.send(command);
 * // { // DescribeChannelFlowResponse
 * //   ChannelFlow: { // ChannelFlow
 * //     ChannelFlowArn: "STRING_VALUE",
 * //     Processors: [ // ProcessorList
 * //       { // Processor
 * //         Name: "STRING_VALUE", // required
 * //         Configuration: { // ProcessorConfiguration
 * //           Lambda: { // LambdaConfiguration
 * //             ResourceArn: "STRING_VALUE", // required
 * //             InvocationType: "ASYNC", // required
 * //           },
 * //         },
 * //         ExecutionOrder: Number("int"), // required
 * //         FallbackAction: "CONTINUE" || "ABORT", // required
 * //       },
 * //     ],
 * //     Name: "STRING_VALUE",
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     LastUpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeChannelFlowCommandInput - {@link DescribeChannelFlowCommandInput}
 * @returns {@link DescribeChannelFlowCommandOutput}
 * @see {@link DescribeChannelFlowCommandInput} for command's `input` shape.
 * @see {@link DescribeChannelFlowCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
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
export class DescribeChannelFlowCommand extends command<DescribeChannelFlowCommandInput, DescribeChannelFlowCommandOutput>(
  _ep0,
  _mw0,
  "DescribeChannelFlow",
  DescribeChannelFlow$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeChannelFlowRequest;
      output: DescribeChannelFlowResponse;
    };
    sdk: {
      input: DescribeChannelFlowCommandInput;
      output: DescribeChannelFlowCommandOutput;
    };
  };
}
