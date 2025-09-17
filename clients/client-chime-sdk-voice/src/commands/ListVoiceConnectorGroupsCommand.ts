// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListVoiceConnectorGroupsRequest, ListVoiceConnectorGroupsResponse } from "../models/models_0";
import { de_ListVoiceConnectorGroupsCommand, se_ListVoiceConnectorGroupsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Lists the Amazon Chime SDK Voice Connector groups in the administrator's AWS
 *          account.</p>
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
 * //           Priority: Number("int"), // required
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //       VoiceConnectorGroupArn: "STRING_VALUE",
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
export class ListVoiceConnectorGroupsCommand extends $Command
  .classBuilder<
    ListVoiceConnectorGroupsCommandInput,
    ListVoiceConnectorGroupsCommandOutput,
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
  .s("ChimeSDKTelephonyService", "ListVoiceConnectorGroups", {})
  .n("ChimeSDKVoiceClient", "ListVoiceConnectorGroupsCommand")
  .f(void 0, void 0)
  .ser(se_ListVoiceConnectorGroupsCommand)
  .de(de_ListVoiceConnectorGroupsCommand)
  .build() {
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
