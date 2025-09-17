// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  GetVoiceConnectorTerminationRequest,
  GetVoiceConnectorTerminationResponse,
  GetVoiceConnectorTerminationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  de_GetVoiceConnectorTerminationCommand,
  se_GetVoiceConnectorTerminationCommand,
} from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
export interface GetVoiceConnectorTerminationCommandOutput
  extends GetVoiceConnectorTerminationResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves the termination setting details for the specified Voice Connector.</p>
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
export class GetVoiceConnectorTerminationCommand extends $Command
  .classBuilder<
    GetVoiceConnectorTerminationCommandInput,
    GetVoiceConnectorTerminationCommandOutput,
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
  .s("ChimeSDKTelephonyService", "GetVoiceConnectorTermination", {})
  .n("ChimeSDKVoiceClient", "GetVoiceConnectorTerminationCommand")
  .f(void 0, GetVoiceConnectorTerminationResponseFilterSensitiveLog)
  .ser(se_GetVoiceConnectorTerminationCommand)
  .de(de_GetVoiceConnectorTerminationCommand)
  .build() {
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
