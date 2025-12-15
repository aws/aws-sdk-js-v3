// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { GetVoiceConnectorRequest, GetVoiceConnectorResponse } from "../models/models_0";
import { GetVoiceConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorCommand}.
 */
export interface GetVoiceConnectorCommandInput extends GetVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorCommand}.
 */
export interface GetVoiceConnectorCommandOutput extends GetVoiceConnectorResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified Amazon Chime SDK Voice Connector, such as
 *          timestamps,name, outbound host, and encryption requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorResponse
 * //   VoiceConnector: { // VoiceConnector
 * //     VoiceConnectorId: "STRING_VALUE",
 * //     AwsRegion: "us-east-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "ap-northeast-2" || "ap-northeast-1" || "ap-southeast-1" || "ap-southeast-2",
 * //     Name: "STRING_VALUE",
 * //     OutboundHostName: "STRING_VALUE",
 * //     RequireEncryption: true || false,
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorArn: "STRING_VALUE",
 * //     IntegrationType: "CONNECT_CALL_TRANSFER_CONNECTOR" || "CONNECT_ANALYTICS_CONNECTOR",
 * //     NetworkType: "IPV4_ONLY" || "DUAL_STACK",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceConnectorCommandInput - {@link GetVoiceConnectorCommandInput}
 * @returns {@link GetVoiceConnectorCommandOutput}
 * @see {@link GetVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The service encountered an unexpected error.</p>
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *  <p>The service is currently unavailable.</p>
 *
 * @throws {@link ThrottledClientException} (client fault)
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 *
 * @public
 */
export class GetVoiceConnectorCommand extends $Command
  .classBuilder<
    GetVoiceConnectorCommandInput,
    GetVoiceConnectorCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "GetVoiceConnector", {})
  .n("ChimeSDKVoiceClient", "GetVoiceConnectorCommand")
  .sc(GetVoiceConnector$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorRequest;
      output: GetVoiceConnectorResponse;
    };
    sdk: {
      input: GetVoiceConnectorCommandInput;
      output: GetVoiceConnectorCommandOutput;
    };
  };
}
