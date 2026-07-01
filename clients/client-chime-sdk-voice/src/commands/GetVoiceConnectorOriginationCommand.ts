// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceConnectorOriginationRequest, GetVoiceConnectorOriginationResponse } from "../models/models_0";
import { GetVoiceConnectorOrigination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorOriginationCommand}.
 */
export interface GetVoiceConnectorOriginationCommandInput extends GetVoiceConnectorOriginationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorOriginationCommand}.
 */
export interface GetVoiceConnectorOriginationCommandOutput extends GetVoiceConnectorOriginationResponse, __MetadataBearer {}

/**
 * <p>Retrieves the origination settings for the specified Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorOriginationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorOriginationResponse
 * //   Origination: { // Origination
 * //     Routes: [ // OriginationRouteList
 * //       { // OriginationRoute
 * //         Host: "STRING_VALUE",
 * //         Port: Number("int"),
 * //         Protocol: "TCP" || "UDP",
 * //         Priority: Number("int"),
 * //         Weight: Number("int"),
 * //       },
 * //     ],
 * //     Disabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceConnectorOriginationCommandInput - {@link GetVoiceConnectorOriginationCommandInput}
 * @returns {@link GetVoiceConnectorOriginationCommandOutput}
 * @see {@link GetVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorOriginationCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorOriginationCommand extends command<GetVoiceConnectorOriginationCommandInput, GetVoiceConnectorOriginationCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorOrigination",
  GetVoiceConnectorOrigination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorOriginationRequest;
      output: GetVoiceConnectorOriginationResponse;
    };
    sdk: {
      input: GetVoiceConnectorOriginationCommandInput;
      output: GetVoiceConnectorOriginationCommandOutput;
    };
  };
}
