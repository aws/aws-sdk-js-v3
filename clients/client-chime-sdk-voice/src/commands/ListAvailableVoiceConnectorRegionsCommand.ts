// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListAvailableVoiceConnectorRegionsResponse } from "../models/models_0";
import { ListAvailableVoiceConnectorRegions$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the available AWS Regions in which you can create an Amazon Chime SDK Voice Connector.
 *
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
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
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
export class ListAvailableVoiceConnectorRegionsCommand extends command<ListAvailableVoiceConnectorRegionsCommandInput, ListAvailableVoiceConnectorRegionsCommandOutput>(
  _ep0,
  _mw0,
  "ListAvailableVoiceConnectorRegions",
  ListAvailableVoiceConnectorRegions$
) {
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
