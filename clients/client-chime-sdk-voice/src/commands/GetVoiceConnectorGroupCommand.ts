// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetVoiceConnectorGroupRequest, GetVoiceConnectorGroupResponse } from "../models/models_0";
import { GetVoiceConnectorGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetVoiceConnectorGroupCommand}.
 */
export interface GetVoiceConnectorGroupCommandInput extends GetVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link GetVoiceConnectorGroupCommand}.
 */
export interface GetVoiceConnectorGroupCommandOutput extends GetVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * Retrieves details for the specified Amazon Chime SDK Voice Connector group, such as timestamps,name, and associated `VoiceConnectorItems`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 * };
 * const command = new GetVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // GetVoiceConnectorGroupResponse
 * //   VoiceConnectorGroup: { // VoiceConnectorGroup
 * //     VoiceConnectorGroupId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     VoiceConnectorItems: [ // VoiceConnectorItemList
 * //       { // VoiceConnectorItem
 * //         VoiceConnectorId: "STRING_VALUE", // required
 * //         Priority: Number("int"),
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     VoiceConnectorGroupArn: "STRING_VALUE",
 * //     CallDistributionType: "PriorityWeightedDistribution" || "LoadBalancedDistribution",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetVoiceConnectorGroupCommandInput - {@link GetVoiceConnectorGroupCommandInput}
 * @returns {@link GetVoiceConnectorGroupCommandOutput}
 * @see {@link GetVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link GetVoiceConnectorGroupCommandOutput} for command's `response` shape.
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
export class GetVoiceConnectorGroupCommand extends command<GetVoiceConnectorGroupCommandInput, GetVoiceConnectorGroupCommandOutput>(
  _ep0,
  _mw0,
  "GetVoiceConnectorGroup",
  GetVoiceConnectorGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetVoiceConnectorGroupRequest;
      output: GetVoiceConnectorGroupResponse;
    };
    sdk: {
      input: GetVoiceConnectorGroupCommandInput;
      output: GetVoiceConnectorGroupCommandOutput;
    };
  };
}
