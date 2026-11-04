// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListSipRulesRequest, ListSipRulesResponse } from "../models/models_0";
import { ListSipRules$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Lists the SIP rules under the administrator's AWS account.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, ListSipRulesCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, ListSipRulesCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
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
export class ListSipRulesCommand extends command<ListSipRulesCommandInput, ListSipRulesCommandOutput>(
  _ep0,
  _mw0,
  "ListSipRules",
  ListSipRules$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListSipRulesRequest;
      output: ListSipRulesResponse;
    };
    sdk: {
      input: ListSipRulesCommandInput;
      output: ListSipRulesCommandOutput;
    };
  };
}
