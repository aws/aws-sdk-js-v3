// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVoiceConnectorsRequest, ListVoiceConnectorsResponse } from "../models/models_0";
import { de_ListVoiceConnectorsCommand, se_ListVoiceConnectorsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListVoiceConnectorsCommand}.
 */
export interface ListVoiceConnectorsCommandInput extends ListVoiceConnectorsRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceConnectorsCommand}.
 */
export interface ListVoiceConnectorsCommandOutput extends ListVoiceConnectorsResponse, __MetadataBearer {}

/**
 * <p>Lists the Amazon Chime SDK Voice Connectors in the administrators
 *          AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListVoiceConnectorsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListVoiceConnectorsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListVoiceConnectorsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVoiceConnectorsCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceConnectorsResponse
 * //   VoiceConnectors: [ // VoiceConnectorList
 * //     { // VoiceConnector
 * //       VoiceConnectorId: "STRING_VALUE",
 * //       AwsRegion: "us-east-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "ap-northeast-2" || "ap-northeast-1" || "ap-southeast-1" || "ap-southeast-2",
 * //       Name: "STRING_VALUE",
 * //       OutboundHostName: "STRING_VALUE",
 * //       RequireEncryption: true || false,
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       VoiceConnectorArn: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVoiceConnectorsCommandInput - {@link ListVoiceConnectorsCommandInput}
 * @returns {@link ListVoiceConnectorsCommandOutput}
 * @see {@link ListVoiceConnectorsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorsCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
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
 *  <p>The number of customer requests exceeds the request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client isn't authorized to request a resource.</p>
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 * <p>Base exception class for all service exceptions from ChimeSDKVoice service.</p>
 *
 * @public
 */
export class ListVoiceConnectorsCommand extends $Command
  .classBuilder<
    ListVoiceConnectorsCommandInput,
    ListVoiceConnectorsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "ListVoiceConnectors", {})
  .n("ChimeSDKVoiceClient", "ListVoiceConnectorsCommand")
  .f(void 0, void 0)
  .ser(se_ListVoiceConnectorsCommand)
  .de(de_ListVoiceConnectorsCommand)
  .build() {}
