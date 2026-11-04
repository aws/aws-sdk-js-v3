// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type {
  GetMessagingStreamingConfigurationsRequest,
  GetMessagingStreamingConfigurationsResponse,
} from "../models/models_0";
import { GetMessagingStreamingConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMessagingStreamingConfigurationsCommand}.
 */
export interface GetMessagingStreamingConfigurationsCommandInput extends GetMessagingStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link GetMessagingStreamingConfigurationsCommand}.
 */
export interface GetMessagingStreamingConfigurationsCommandOutput extends GetMessagingStreamingConfigurationsResponse, __MetadataBearer {}

/**
 * Retrieves the data streaming configuration for an `AppInstance`. For more information, see [Streaming messaging data](https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html) in the *Amazon Chime SDK Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // GetMessagingStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new GetMessagingStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // { // GetMessagingStreamingConfigurationsResponse
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
 * @param GetMessagingStreamingConfigurationsCommandInput - {@link GetMessagingStreamingConfigurationsCommandInput}
 * @returns {@link GetMessagingStreamingConfigurationsCommandOutput}
 * @see {@link GetMessagingStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link GetMessagingStreamingConfigurationsCommandOutput} for command's `response` shape.
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
export class GetMessagingStreamingConfigurationsCommand extends command<GetMessagingStreamingConfigurationsCommandInput, GetMessagingStreamingConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "GetMessagingStreamingConfigurations",
  GetMessagingStreamingConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMessagingStreamingConfigurationsRequest;
      output: GetMessagingStreamingConfigurationsResponse;
    };
    sdk: {
      input: GetMessagingStreamingConfigurationsCommandInput;
      output: GetMessagingStreamingConfigurationsCommandOutput;
    };
  };
}
