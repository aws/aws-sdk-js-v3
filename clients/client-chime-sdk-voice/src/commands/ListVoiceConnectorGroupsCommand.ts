// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse } from "../models/models_0";
import { ListVoiceConnectorGroups$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListVoiceConnectorGroupsCommand}.
 */
export interface ListVoiceConnectorGroupsCommandInput extends ListVoiceConnectorGroupsRequest {}
/**
 * @public
 *
 * The output of {@link ListVoiceConnectorGroupsCommand}.
 */
export interface ListVoiceConnectorGroupsCommandOutput extends ListVoiceConnectorGroupsResponse, __MetadataBearer {}

/**
 * Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListVoiceConnectorGroupsCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListVoiceConnectorGroupsCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListVoiceConnectorGroupsRequest
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListVoiceConnectorGroupsCommand(input);
 * const response = await client.send(command);
 * // { // ListVoiceConnectorGroupsResponse
 * //   VoiceConnectorGroups: [ // VoiceConnectorGroupList
 * //     { // VoiceConnectorGroup
 * //       VoiceConnectorGroupId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       VoiceConnectorItems: [ // VoiceConnectorItemList
 * //         { // VoiceConnectorItem
 * //           VoiceConnectorId: "STRING_VALUE", // required
 * //           Priority: Number("int"),
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       VoiceConnectorGroupArn: "STRING_VALUE",
 * //       CallDistributionType: "PriorityWeightedDistribution" || "LoadBalancedDistribution",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListVoiceConnectorGroupsCommandInput - {@link ListVoiceConnectorGroupsCommandInput}
 * @returns {@link ListVoiceConnectorGroupsCommandOutput}
 * @see {@link ListVoiceConnectorGroupsCommandInput} for command's `input` shape.
 * @see {@link ListVoiceConnectorGroupsCommandOutput} for command's `response` shape.
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
export class ListVoiceConnectorGroupsCommand extends command<ListVoiceConnectorGroupsCommandInput, ListVoiceConnectorGroupsCommandOutput>(
  _ep0,
  _mw0,
  "ListVoiceConnectorGroups",
  ListVoiceConnectorGroups$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListVoiceConnectorGroupsRequest;
      output: ListVoiceConnectorGroupsResponse;
    };
    sdk: {
      input: ListVoiceConnectorGroupsCommandInput;
      output: ListVoiceConnectorGroupsCommandOutput;
    };
  };
}
