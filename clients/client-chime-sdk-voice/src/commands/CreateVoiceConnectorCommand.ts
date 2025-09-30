// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  CreateVoiceConnectorRequest,
  CreateVoiceConnectorRequestFilterSensitiveLog,
  CreateVoiceConnectorResponse,
} from "../models/models_0";
import { de_CreateVoiceConnectorCommand, se_CreateVoiceConnectorCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateVoiceConnectorCommand}.
 */
export interface CreateVoiceConnectorCommandInput extends CreateVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceConnectorCommand}.
 */
export interface CreateVoiceConnectorCommandOutput extends CreateVoiceConnectorResponse, __MetadataBearer {}

/**
 * <p>Creates an Amazon Chime SDK Voice Connector. For more information about
 *           Voice Connectors,
 *          see <a href="https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connector-groups.html">Managing Amazon Chime SDK Voice Connector groups</a> in the <i>Amazon Chime SDK
 *             Administrator Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateVoiceConnectorRequest
 *   Name: "STRING_VALUE", // required
 *   AwsRegion: "us-east-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "ap-northeast-2" || "ap-northeast-1" || "ap-southeast-1" || "ap-southeast-2",
 *   RequireEncryption: true || false, // required
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 *   IntegrationType: "CONNECT_CALL_TRANSFER_CONNECTOR" || "CONNECT_ANALYTICS_CONNECTOR",
 *   NetworkType: "IPV4_ONLY" || "DUAL_STACK",
 * };
 * const command = new CreateVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceConnectorResponse
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
 * @param CreateVoiceConnectorCommandInput - {@link CreateVoiceConnectorCommandInput}
 * @returns {@link CreateVoiceConnectorCommandOutput}
 * @see {@link CreateVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have the permissions needed to run this action.</p>
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class CreateVoiceConnectorCommand extends $Command
  .classBuilder<
    CreateVoiceConnectorCommandInput,
    CreateVoiceConnectorCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "CreateVoiceConnector", {})
  .n("ChimeSDKVoiceClient", "CreateVoiceConnectorCommand")
  .f(CreateVoiceConnectorRequestFilterSensitiveLog, void 0)
  .ser(se_CreateVoiceConnectorCommand)
  .de(de_CreateVoiceConnectorCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceConnectorRequest;
      output: CreateVoiceConnectorResponse;
    };
    sdk: {
      input: CreateVoiceConnectorCommandInput;
      output: CreateVoiceConnectorCommandOutput;
    };
  };
}
