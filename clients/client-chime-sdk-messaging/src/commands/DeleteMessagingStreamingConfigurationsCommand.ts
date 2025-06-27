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
import { DeleteMessagingStreamingConfigurationsRequest } from "../models/models_0";
import {
  de_DeleteMessagingStreamingConfigurationsCommand,
  se_DeleteMessagingStreamingConfigurationsCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandInput
  extends DeleteMessagingStreamingConfigurationsRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMessagingStreamingConfigurationsCommand}.
 */
export interface DeleteMessagingStreamingConfigurationsCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the streaming configurations for an <code>AppInstance</code>. For more information, see
 *          <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/streaming-export.html">Streaming messaging data</a> in the <i>Amazon Chime SDK Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, DeleteMessagingStreamingConfigurationsCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
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
export class DeleteMessagingStreamingConfigurationsCommand extends $Command
  .classBuilder<
    DeleteMessagingStreamingConfigurationsCommandInput,
    DeleteMessagingStreamingConfigurationsCommandOutput,
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
  .s("ChimeMessagingService", "DeleteMessagingStreamingConfigurations", {})
  .n("ChimeSDKMessagingClient", "DeleteMessagingStreamingConfigurationsCommand")
  .f(void 0, void 0)
  .ser(se_DeleteMessagingStreamingConfigurationsCommand)
  .de(de_DeleteMessagingStreamingConfigurationsCommand)
  .build() {
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
