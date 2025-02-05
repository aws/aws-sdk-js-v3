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
import { GetMessagingSessionEndpointRequest, GetMessagingSessionEndpointResponse } from "../models/models_0";
import {
  de_GetMessagingSessionEndpointCommand,
  se_GetMessagingSessionEndpointCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetMessagingSessionEndpointCommand}.
 */
export interface GetMessagingSessionEndpointCommandInput extends GetMessagingSessionEndpointRequest {}
/**
 * @public
 *
 * The output of {@link GetMessagingSessionEndpointCommand}.
 */
export interface GetMessagingSessionEndpointCommandOutput
  extends GetMessagingSessionEndpointResponse,
    __MetadataBearer {}

/**
 * <p>The details of the endpoint for the messaging session.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKMessagingClient, GetMessagingSessionEndpointCommand } from "@aws-sdk/client-chime-sdk-messaging"; // ES Modules import
 * // const { ChimeSDKMessagingClient, GetMessagingSessionEndpointCommand } = require("@aws-sdk/client-chime-sdk-messaging"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeSDKMessagingClient(config);
 * const input = {};
 * const command = new GetMessagingSessionEndpointCommand(input);
 * const response = await client.send(command);
 * // { // GetMessagingSessionEndpointResponse
 * //   Endpoint: { // MessagingSessionEndpoint
 * //     Url: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetMessagingSessionEndpointCommandInput - {@link GetMessagingSessionEndpointCommandInput}
 * @returns {@link GetMessagingSessionEndpointCommandOutput}
 * @see {@link GetMessagingSessionEndpointCommandInput} for command's `input` shape.
 * @see {@link GetMessagingSessionEndpointCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKMessagingClientResolvedConfig | config} for ChimeSDKMessagingClient's `config` shape.
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
export class GetMessagingSessionEndpointCommand extends $Command
  .classBuilder<
    GetMessagingSessionEndpointCommandInput,
    GetMessagingSessionEndpointCommandOutput,
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
  .s("ChimeMessagingService", "GetMessagingSessionEndpoint", {})
  .n("ChimeSDKMessagingClient", "GetMessagingSessionEndpointCommand")
  .f(void 0, void 0)
  .ser(se_GetMessagingSessionEndpointCommand)
  .de(de_GetMessagingSessionEndpointCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: GetMessagingSessionEndpointResponse;
    };
    sdk: {
      input: GetMessagingSessionEndpointCommandInput;
      output: GetMessagingSessionEndpointCommandOutput;
    };
  };
}
