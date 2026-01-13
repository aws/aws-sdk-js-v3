// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { ListAvailableVoiceConnectorRegionsResponse } from "../models/models_0";
import { ListAvailableVoiceConnectorRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListAvailableVoiceConnectorRegionsCommand}.
 */
export interface ListAvailableVoiceConnectorRegionsCommandInput {}
/**
 * @public
 *
 * The output of {@link ListAvailableVoiceConnectorRegionsCommand}.
 */
export interface ListAvailableVoiceConnectorRegionsCommandOutput extends ListAvailableVoiceConnectorRegionsResponse, __MetadataBearer {}

/**
 * <p>Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListAvailableVoiceConnectorRegionsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListAvailableVoiceConnectorRegionsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = {};
 * const command = new ListAvailableVoiceConnectorRegionsCommand(input);
 * const response = await client.send(command);
 * // { // ListAvailableVoiceConnectorRegionsResponse
 * //   VoiceConnectorRegions: [ // VoiceConnectorAwsRegionList
 * //     "us-east-1" || "us-west-2" || "ca-central-1" || "eu-central-1" || "eu-west-1" || "eu-west-2" || "ap-northeast-2" || "ap-northeast-1" || "ap-southeast-1" || "ap-southeast-2",
 * //   ],
 * // };
 *
 * ```
 *
 * @param ListAvailableVoiceConnectorRegionsCommandInput - {@link ListAvailableVoiceConnectorRegionsCommandInput}
 * @returns {@link ListAvailableVoiceConnectorRegionsCommandOutput}
 * @see {@link ListAvailableVoiceConnectorRegionsCommandInput} for command's `input` shape.
 * @see {@link ListAvailableVoiceConnectorRegionsCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class ListAvailableVoiceConnectorRegionsCommand extends $Command
  .classBuilder<
    ListAvailableVoiceConnectorRegionsCommandInput,
    ListAvailableVoiceConnectorRegionsCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("ChimeSDKTelephonyService", "ListAvailableVoiceConnectorRegions", {})
  .n("ChimeSDKVoiceClient", "ListAvailableVoiceConnectorRegionsCommand")
  .sc(ListAvailableVoiceConnectorRegions$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: ListAvailableVoiceConnectorRegionsResponse;
    };
    sdk: {
      input: ListAvailableVoiceConnectorRegionsCommandInput;
      output: ListAvailableVoiceConnectorRegionsCommandOutput;
    };
  };
}
