// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutVoiceConnectorTerminationRequest, PutVoiceConnectorTerminationResponse } from "../models/models_0";
import { PutVoiceConnectorTermination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
export interface PutVoiceConnectorTerminationCommandOutput extends PutVoiceConnectorTerminationResponse, __MetadataBearer {}

/**
 * Updates a Voice Connector's termination settings.
 *
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
export class PutVoiceConnectorTerminationCommand extends command<PutVoiceConnectorTerminationCommandInput, PutVoiceConnectorTerminationCommandOutput>(
  _ep0,
  _mw0,
  "PutVoiceConnectorTermination",
  PutVoiceConnectorTermination$
) {
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
