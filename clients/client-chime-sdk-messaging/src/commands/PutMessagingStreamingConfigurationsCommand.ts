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
import type {
  PutMessagingStreamingConfigurationsRequest,
  PutMessagingStreamingConfigurationsResponse,
} from "../models/models_0";
import { PutMessagingStreamingConfigurations } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutMessagingStreamingConfigurationsCommand}.
 */
export interface PutMessagingStreamingConfigurationsCommandInput extends PutMessagingStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link PutMessagingStreamingConfigurationsCommand}.
 */
export interface PutMessagingStreamingConfigurationsCommandOutput
  extends PutMessagingStreamingConfigurationsResponse,
    __MetadataBearer {}

/**
 * <p>Sets the data streaming configuration for an <code>AppInstance</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, PutMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, PutMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // PutMessagingStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 *   StreamingConfigurations: [ // StreamingConfigurationList // required
 *     { // StreamingConfiguration
 *       DataType: "Channel" || "ChannelMessage", // required
 *       ResourceArn: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new PutMessagingStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // PutMessagingStreamingConfigurationsResponse
 * //   StreamingConfigurations: [ // StreamingConfigurationList
 * //     { // StreamingConfiguration
 * //       DataType: "Channel" || "ChannelMessage", // required
 * //       ResourceArn: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PutMessagingStreamingConfigurationsCommandInput - {@link PutMessagingStreamingConfigurationsCommandInput}
 * @returns {@link PutMessagingStreamingConfigurationsCommandOutput}
 * @see {@link PutMessagingStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link PutMessagingStreamingConfigurationsCommandOutput} for command's `response` shape.
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
export class PutMessagingStreamingConfigurationsCommand extends $Command
  .classBuilder<
    PutMessagingStreamingConfigurationsCommandInput,
    PutMessagingStreamingConfigurationsCommandOutput,
    ChimeSDKMessagingClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKMessagingClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeMessagingService", "PutMessagingStreamingConfigurations", {})
  .n("ChimeSDKMessagingClient", "PutMessagingStreamingConfigurationsCommand")
  .sc(PutMessagingStreamingConfigurations)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutMessagingStreamingConfigurationsRequest;
      output: PutMessagingStreamingConfigurationsResponse;
    };
    sdk: {
      input: PutMessagingStreamingConfigurationsCommandInput;
      output: PutMessagingStreamingConfigurationsCommandOutput;
    };
  };
}
