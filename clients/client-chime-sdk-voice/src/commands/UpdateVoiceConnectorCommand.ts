// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVoiceConnectorRequest, UpdateVoiceConnectorResponse } from "../models/models_0";
import { UpdateVoiceConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVoiceConnectorCommand}.
 */
export interface UpdateVoiceConnectorCommandInput extends UpdateVoiceConnectorRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceConnectorCommand}.
 */
export interface UpdateVoiceConnectorCommandOutput extends UpdateVoiceConnectorResponse, __MetadataBearer {}

/**
 * Updates the details for the specified Amazon Chime SDK Voice Connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceConnectorCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceConnectorCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceConnectorRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   RequireEncryption: true || false, // required
 * };
 * const command = new UpdateVoiceConnectorCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceConnectorResponse
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
 * @param UpdateVoiceConnectorCommandInput - {@link UpdateVoiceConnectorCommandInput}
 * @returns {@link UpdateVoiceConnectorCommandOutput}
 * @see {@link UpdateVoiceConnectorCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
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
 * The requested resource couldn't be found.
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
 * The number of customer requests exceeds the request rate limit.
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *
 * The client isn't authorized to request a resource.
 *
 * @throws {@link ChimeSDKVoiceServiceException}
 *
 * Base exception class for all service exceptions from ChimeSDKVoice service.
 *
 * @public
 */
export class UpdateVoiceConnectorCommand extends command<UpdateVoiceConnectorCommandInput, UpdateVoiceConnectorCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVoiceConnector",
  UpdateVoiceConnector$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceConnectorRequest;
      output: UpdateVoiceConnectorResponse;
    };
    sdk: {
      input: UpdateVoiceConnectorCommandInput;
      output: UpdateVoiceConnectorCommandOutput;
    };
  };
}
