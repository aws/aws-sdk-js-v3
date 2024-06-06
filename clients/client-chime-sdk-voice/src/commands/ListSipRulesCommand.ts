// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSipRulesRequest, ListSipRulesResponse } from "../models/models_0";
import { de_ListSipRulesCommand, se_ListSipRulesCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListSipRulesCommand}.
 */
export interface ListSipRulesCommandInput extends ListSipRulesRequest {}
/**
 * @public
 *
 * The output of {@link ListSipRulesCommand}.
 */
export interface ListSipRulesCommandOutput extends ListSipRulesResponse, __MetadataBearer {}

/**
 * <p>Lists the SIP rules under the administrator's AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListSipRulesCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListSipRulesCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // ListSipRulesRequest
 *   SipMediaApplicationId: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new ListSipRulesCommand(input);
 * const response = await client.send(command);
 * // { // ListSipRulesResponse
 * //   SipRules: [ // SipRuleList
 * //     { // SipRule
 * //       SipRuleId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Disabled: true || false,
 * //       TriggerType: "ToPhoneNumber" || "RequestUriHostname",
 * //       TriggerValue: "STRING_VALUE",
 * //       TargetApplications: [ // SipRuleTargetApplicationList
 * //         { // SipRuleTargetApplication
 * //           SipMediaApplicationId: "STRING_VALUE",
 * //           Priority: Number("int"),
 * //           AwsRegion: "STRING_VALUE",
 * //         },
 * //       ],
 * //       CreatedTimestamp: new Date("TIMESTAMP"),
 * //       UpdatedTimestamp: new Date("TIMESTAMP"),
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListSipRulesCommandInput - {@link ListSipRulesCommandInput}
 * @returns {@link ListSipRulesCommandOutput}
 * @see {@link ListSipRulesCommandInput} for command's `input` shape.
 * @see {@link ListSipRulesCommandOutput} for command's `response` shape.
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
 * @public
 */
export class ListSipRulesCommand extends $Command
  .classBuilder<
    ListSipRulesCommandInput,
    ListSipRulesCommandOutput,
    ChimeSDKVoiceClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: ChimeSDKVoiceClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ChimeSDKTelephonyService", "ListSipRules", {})
  .n("ChimeSDKVoiceClient", "ListSipRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListSipRulesCommand)
  .de(de_ListSipRulesCommand)
  .build() {}
