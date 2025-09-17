// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { PutVoiceConnectorOriginationRequest, PutVoiceConnectorOriginationResponse } from "../models/models_0";
import {
  de_PutVoiceConnectorOriginationCommand,
  se_PutVoiceConnectorOriginationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandInput extends PutVoiceConnectorOriginationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorOriginationCommand}.
 */
export interface PutVoiceConnectorOriginationCommandOutput
  extends PutVoiceConnectorOriginationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a Voice Connector's origination settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorOriginationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorOriginationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorOriginationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Origination: { // Origination
 *     Routes: [ // OriginationRouteList
 *       { // OriginationRoute
 *         Host: "STRING_VALUE",
 *         Port: Number("int"),
 *         Protocol: "TCP" || "UDP",
 *         Priority: Number("int"),
 *         Weight: Number("int"),
 *       },
 *     ],
 *     Disabled: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorOriginationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorOriginationResponse
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
 * @param PutVoiceConnectorOriginationCommandInput - {@link PutVoiceConnectorOriginationCommandInput}
 * @returns {@link PutVoiceConnectorOriginationCommandOutput}
 * @see {@link PutVoiceConnectorOriginationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorOriginationCommandOutput} for command's `response` shape.
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
export class PutVoiceConnectorOriginationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorOriginationCommandInput,
    PutVoiceConnectorOriginationCommandOutput,
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
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorOrigination", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorOriginationCommand")
  .f(void 0, void 0)
  .ser(se_PutVoiceConnectorOriginationCommand)
  .de(de_PutVoiceConnectorOriginationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorOriginationRequest;
      output: PutVoiceConnectorOriginationResponse;
    };
    sdk: {
      input: PutVoiceConnectorOriginationCommandInput;
      output: PutVoiceConnectorOriginationCommandOutput;
    };
  };
}
