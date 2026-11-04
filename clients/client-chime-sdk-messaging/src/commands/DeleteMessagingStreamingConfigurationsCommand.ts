// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteMessagingStreamingConfigurationsRequest } from "../models/models_0";
import { DeleteMessagingStreamingConfigurations$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandInput extends DeleteMessagingStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandOutput extends __MetadataBearer {}

/**
 * Deletes the streaming configurations for an `AppInstance`. For more information, see [Streaming messaging data](https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html) in the *Amazon Chime SDK Developer Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // import type { ChimeSDKMessagingClientConfig } from "@aws-sdk/client-chime-sdk-messaging";
 * const config = {}; // type is ChimeSDKMessagingClientConfig
 * const client = new ChimeSDKMessagingClient(config);
 * const input = { // DeleteMessagingStreamingConfigurationsRequest
 *   AppInstanceArn: "STRING_VALUE", // required
 * };
 * const command = new DeleteMessagingStreamingConfigurationsCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteMessagingStreamingConfigurationsCommandInput - {@link DeleteMessagingStreamingConfigurationsCommandInput}
 * @returns {@link DeleteMessagingStreamingConfigurationsCommandOutput}
 * @see {@link DeleteMessagingStreamingConfigurationsCommandInput} for command's `input` shape.
 * @see {@link DeleteMessagingStreamingConfigurationsCommandOutput} for command's `response` shape.
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
export class DeleteMessagingStreamingConfigurationsCommand extends command<DeleteMessagingStreamingConfigurationsCommandInput, DeleteMessagingStreamingConfigurationsCommandOutput>(
  _ep0,
  _mw0,
  "DeleteMessagingStreamingConfigurations",
  DeleteMessagingStreamingConfigurations$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMessagingStreamingConfigurationsRequest;
      output: {};
    };
    sdk: {
      input: DeleteMessagingStreamingConfigurationsCommandInput;
      output: DeleteMessagingStreamingConfigurationsCommandOutput;
    };
  };
}
