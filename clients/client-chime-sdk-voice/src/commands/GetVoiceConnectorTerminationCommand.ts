// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceConnectorTerminationRequest, GetVoiceConnectorTerminationResponse } from "../models/models_0";
import { GetVoiceConnectorTermination$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorTerminationCommand}.
 */
export interface GetVoiceConnectorTerminationCommandInput extends GetVoiceConnectorTerminationRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorTerminationCommand}.
 */
export interface GetVoiceConnectorTerminationCommandOutput extends GetVoiceConnectorTerminationResponse, __MetadataBearer {}

/**
 * Retrieves the termination setting details for the specified Voice Connector.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorTerminationCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorTerminationCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorTerminationRequest
 *   VoiceConnectorId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorTerminationCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorTerminationResponse
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
 * @param GetVoiceConnectorTerminationCommandInput - {@link GetVoiceConnectorTerminationCommandInput}
 * @returns {@link GetVoiceConnectorTerminationCommandOutput}
 * @see {@link GetVoiceConnectorTerminationCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorTerminationCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorTerminationCommand extends command<GetVoiceConnectorTerminationCommandInput, GetVoiceConnectorTerminationCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorTermination",
  GetVoiceConnectorTermination$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorTerminationRequest;
      output: GetVoiceConnectorTerminationResponse;
    };
    sdk: {
      input: GetVoiceConnectorTerminationCommandInput;
      output: GetVoiceConnectorTerminationCommandOutput;
    };
  };
}
