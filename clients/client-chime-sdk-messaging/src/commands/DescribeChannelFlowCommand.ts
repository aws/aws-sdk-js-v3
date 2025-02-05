// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ChimeSDKMessagingClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ChimeSDKMessagingClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  DescribeChannelFlowRequest,
  DescribeChannelFlowResponse,
  DescribeChannelFlowResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_DescribeChannelFlowCommand, se_DescribeChannelFlowCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Returns the full details of a channel flow in an Amazon Chime <code>AppInstance</code>. This is a developer API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DescribeChannelFlowCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DescribeChannelFlowCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class DescribeChannelFlowCommand extends $Command
  .classBuilder<
    DescribeChannelFlowCommandInput,
    DescribeChannelFlowCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeMessagingService", "DescribeChannelFlow", {})
  .n("ChimeSDKMessagingClient", "DescribeChannelFlowCommand")
  .f(void 0, DescribeChannelFlowResponseFilterSensitiveLog)
  .ser(se_DescribeChannelFlowCommand)
  .de(de_DescribeChannelFlowCommand)
  .build() {
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
