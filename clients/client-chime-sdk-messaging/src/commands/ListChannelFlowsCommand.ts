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
import { ListChannelFlowsRequest, ListChannelFlowsResponse } from "../models/models_0";
import { ListChannelFlows } from "../schemas/schemas_2_List";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListChannelFlowsCommand}.
 */
export interface ListChannelFlowsCommandInput extends ListChannelFlowsRequest {}
/**
 * @public
 *
 * The output of {@link ListChannelFlowsCommand}.
 */
export interface ListChannelFlowsCommandOutput extends ListChannelFlowsResponse, __MetadataBearer {}

/**
 * <p>Returns a paginated lists of all the channel flows created under a single Chime. This is a developer API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, ListChannelFlowsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, ListChannelFlowsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // ListChannelFlowsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListChannelFlowsCommand(input);
 * const response = await client.send(command);
 * // { // ListChannelFlowsResponse
 * //   ChannelFlows: [ // ChannelFlowSummaryList
 * //     { // ChannelFlowSummary
 * //       ChannelFlowArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Processors: [ // ProcessorList
 * //         { // Processor
 * //           Name: "STRING_VALUE", // required
 * //           Configuration: { // ProcessorConfiguration
 * //             Lambda: { // LambdaConfiguration
 * //               ResourceArn: "STRING_VALUE", // required
 * //               InvocationType: "ASYNC", // required
 * //             },
 * //           },
 * //           ExecutionOrder: Number("int"), // required
 * //           FallbackAction: "CONTINUE" || "ABORT", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListChannelFlowsCommandInput - {@link ListChannelFlowsCommandInput}
 * @returns {@link ListChannelFlowsCommandOutput}
 * @see {@link ListChannelFlowsCommandInput} for command's `input` shape.
 * @see {@link ListChannelFlowsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
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
export class ListChannelFlowsCommand extends $Command
  .classBuilder<
    ListChannelFlowsCommandInput,
    ListChannelFlowsCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "ListChannelFlows", {})
  .n("ChimeSDKMessagingClient", "ListChannelFlowsCommand")
  .sc(ListChannelFlows)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListChannelFlowsRequest;
      output: ListChannelFlowsResponse;
    };
    sdk: {
      input: ListChannelFlowsCommandInput;
      output: ListChannelFlowsCommandOutput;
    };
  };
}
