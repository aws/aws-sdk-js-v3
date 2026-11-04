// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVoiceConnectorRequest, CreateVoiceConnectorResponse } from "../models/models_0";
import { CreateVoiceConnector$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an Amazon Chime SDK Voice Connector. For more information about Voice Connectors, see [Managing Amazon Chime SDK Voice Connector groups](https://docs.aws.amazon.com/chime-sdk/latest/ag/voice-connector-groups.html) in the *Amazon Chime SDK Administrator Guide*.
 *
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
 *
 * You don't have the permissions needed to run this action.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateVoiceConnectorCommand extends command<CreateVoiceConnectorCommandInput, CreateVoiceConnectorCommandOutput>(
  _ep0,
  _mw0,
  "CreateVoiceConnector",
  CreateVoiceConnector$
) {
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
