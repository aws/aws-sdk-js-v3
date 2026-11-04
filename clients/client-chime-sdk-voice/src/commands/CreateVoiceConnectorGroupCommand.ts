// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateVoiceConnectorGroupRequest, CreateVoiceConnectorGroupResponse } from "../models/models_0";
import { CreateVoiceConnectorGroup$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateVoiceConnectorGroupCommand}.
 */
export interface CreateVoiceConnectorGroupCommandInput extends CreateVoiceConnectorGroupRequest {}
/**
 * @public
 *
 * The output of {@link CreateVoiceConnectorGroupCommand}.
 */
export interface CreateVoiceConnectorGroupCommandOutput extends CreateVoiceConnectorGroupResponse, __MetadataBearer {}

/**
 * Creates an Amazon Chime SDK Voice Connector group under the administrator's AWS account. You can associate Amazon Chime SDK Voice Connectors with the Voice Connector group by including `VoiceConnectorItems` in the request.
 *
 * You can include Voice Connectors from different AWS Regions in your group. This creates a fault tolerant mechanism for fallback in case of availability events.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateVoiceConnectorGroupCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateVoiceConnectorGroupCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateVoiceConnectorGroupRequest
 *   Name: "STRING_VALUE", // required
 *   VoiceConnectorItems: [ // VoiceConnectorItemList
 *     { // VoiceConnectorItem
 *       VoiceConnectorId: "STRING_VALUE", // required
 *       Priority: Number("int"),
 *     },
 *   ],
 *   CallDistributionType: "PriorityWeightedDistribution" || "LoadBalancedDistribution",
 * };
 * const command = new CreateVoiceConnectorGroupCommand(input);
 * const response = await client.send(command);
 * // { // CreateVoiceConnectorGroupResponse
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
 * @param CreateVoiceConnectorGroupCommandInput - {@link CreateVoiceConnectorGroupCommandInput}
 * @returns {@link CreateVoiceConnectorGroupCommandOutput}
 * @see {@link CreateVoiceConnectorGroupCommandInput} for command's `input` shape.
 * @see {@link CreateVoiceConnectorGroupCommandOutput} for command's `response` shape.
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
 * @throws {@link ResourceLimitExceededException} (client fault)
 *
 * The request exceeds the resource limit.
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
export class CreateVoiceConnectorGroupCommand extends command<CreateVoiceConnectorGroupCommandInput, CreateVoiceConnectorGroupCommandOutput>(
  _ep0,
  _mw0,
  "CreateVoiceConnectorGroup",
  CreateVoiceConnectorGroup$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateVoiceConnectorGroupRequest;
      output: CreateVoiceConnectorGroupResponse;
    };
    sdk: {
      input: CreateVoiceConnectorGroupCommandInput;
      output: CreateVoiceConnectorGroupCommandOutput;
    };
  };
}
