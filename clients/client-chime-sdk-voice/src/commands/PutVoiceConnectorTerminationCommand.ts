// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PutVoiceConnectorTerminationRequest,
  PutVoiceConnectorTerminationRequestFilterSensitiveLog,
  PutVoiceConnectorTerminationResponse,
  PutVoiceConnectorTerminationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_PutVoiceConnectorTerminationCommand,
  se_PutVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutVoiceConnectorTerminationCommand}.
 */
export interface PutVoiceConnectorTerminationCommandInput extends PutVoiceConnectorTerminationRequest {}
/**
 * @public
 *
 * The output of {@link PutVoiceConnectorTerminationCommand}.
 */
export interface PutVoiceConnectorTerminationCommandOutput
  extends PutVoiceConnectorTerminationResponse,
    __MetadataBearer {}

/**
 * <p>Updates a Voice Connector's termination settings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, PutVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // PutVoiceConnectorTerminationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 *   Termination: { // Termination
 *     CpsLimit: Number("int"),
 *     DefaultPhoneNumber: "STRING_VALUE",
 *     CallingRegions: [ // CallingRegionList
 *       "STRING_VALUE",
 *     ],
 *     CidrAllowedList: [ // StringList
 *       "STRING_VALUE",
 *     ],
 *     Disabled: true || false,
 *   },
 * };
 * const command = new PutVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * // { // PutVoiceConnectorTerminationResponse
 * //   Termination: { // Termination
 * //     CpsLimit: Number("int"),
 * //     DefaultPhoneNumber: "STRING_VALUE",
 * //     CallingRegions: [ // CallingRegionList
 * //       "STRING_VALUE",
 * //     ],
 * //     CidrAllowedList: [ // StringList
 * //       "STRING_VALUE",
 * //     ],
 * //     Disabled: true || false,
 * //   },
 * // };
 *
 * ```
 *
 * @param PutVoiceConnectorTerminationCommandInput - {@link PutVoiceConnectorTerminationCommandInput}
 * @returns {@link PutVoiceConnectorTerminationCommandOutput}
 * @see {@link PutVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link PutVoiceConnectorTerminationCommandOutput} for command's `response` shape.
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
export class PutVoiceConnectorTerminationCommand extends $Command
  .classBuilder<
    PutVoiceConnectorTerminationCommandInput,
    PutVoiceConnectorTerminationCommandOutput,
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
  .s("ChimeSDKTelephonyService", "PutVoiceConnectorTermination", {})
  .n("ChimeSDKVoiceClient", "PutVoiceConnectorTerminationCommand")
  .f(PutVoiceConnectorTerminationRequestFilterSensitiveLog, PutVoiceConnectorTerminationResponseFilterSensitiveLog)
  .ser(se_PutVoiceConnectorTerminationCommand)
  .de(de_PutVoiceConnectorTerminationCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutVoiceConnectorTerminationRequest;
      output: PutVoiceConnectorTerminationResponse;
    };
    sdk: {
      input: PutVoiceConnectorTerminationCommandInput;
      output: PutVoiceConnectorTerminationCommandOutput;
    };
  };
}
