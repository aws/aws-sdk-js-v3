// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateVoiceConnectorGroupRequest, UpdateVoiceConnectorGroupResponse } from "../models/models_0";
import { UpdateVoiceConnectorGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandInput extends UpdateVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateVoiceConnectorGroupCommand}.
 */
export interface UpdateVoiceConnectorGroupCommandOutput extends UpdateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * Updates the settings for the specified Amazon Chime SDK Voice Connector group.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateVoiceConnectorGroupRequest
 *   VoiceConnectorGroupId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   VoiceConnectorItems: [ // VoiceConnectorItemList // required
 *     { // VoiceConnectorItem
 *       VoiceConnectorId: "STRING_VALUE", // required
 *       Priority: Number("int"),
 *     },
 *   ],
 *   CallDistributionType: "PriorityWeightedDistribution" || "LoadBalancedDistribution",
 * };
 * const command = new UpdateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // UpdateVoiceConnectorGroupResponse
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
 * @param UpdateVoiceConnectorGroupCommandInput - {@link UpdateVoiceConnectorGroupCommandInput}
 * @returns {@link UpdateVoiceConnectorGroupCommandOutput}
 * @see {@link UpdateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateVoiceConnectorGroupCommandOutput} for command's `response` shape.
 * @see {@link ChimeSDKVoiceClientResolvedConfig | config} for ChimeSDKVoiceClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * The input parameters don't match the service's restrictions.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
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
export class UpdateVoiceConnectorGroupCommand extends command<UpdateVoiceConnectorGroupCommandInput, UpdateVoiceConnectorGroupCommandOutput>(
  _ep0,
  _mw0,
  "UpdateVoiceConnectorGroup",
  UpdateVoiceConnectorGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateVoiceConnectorGroupRequest;
      output: UpdateVoiceConnectorGroupResponse;
    };
    sdk: {
      input: UpdateVoiceConnectorGroupCommandInput;
      output: UpdateVoiceConnectorGroupCommandOutput;
    };
  };
}
