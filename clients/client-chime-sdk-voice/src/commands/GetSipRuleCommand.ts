// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetSipRuleRequest, GetSipRuleResponse } from "../models/models_0";
import { GetSipRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetSipRuleCommand}.
 */
export interface GetSipRuleCommandInput extends GetSipRuleRequest {}
/**
 * @public
 *
 * The output of {@link GetSipRuleCommand}.
 */
export interface GetSipRuleCommandOutput extends GetSipRuleResponse, __MetadataBearer {}

/**
 * Retrieves the details of a SIP rule, such as the rule ID, name, triggers, and target endpoints.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, GetSipRuleCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, GetSipRuleCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // GetSipRuleRequest
 *   SipRuleId: "STRING_VALUE", // required
 * };
 * const command = new GetSipRuleCommand(input);
 * const response = await client.send(command);
 * // { // GetSipRuleResponse
 * //   SipRule: { // SipRule
 * //     SipRuleId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Disabled: true || false,
 * //     TriggerType: "ToPhoneNumber" || "RequestUriHostname",
 * //     TriggerValue: "STRING_VALUE",
 * //     TargetApplications: [ // SipRuleTargetApplicationList
 * //       { // SipRuleTargetApplication
 * //         SipMediaApplicationId: "STRING_VALUE",
 * //         Priority: Number("int"),
 * //         AwsRegion: "STRING_VALUE",
 * //       },
 * //     ],
 * //     CreatedTimestamp: new Date("TIMESTAMP"),
 * //     UpdatedTimestamp: new Date("TIMESTAMP"),
 * //   },
 * // };
 *
 * ```
 *
 * @param GetSipRuleCommandInput - {@link GetSipRuleCommandInput}
 * @returns {@link GetSipRuleCommandOutput}
 * @see {@link GetSipRuleCommandInput} for command's `input` shape.
 * @see {@link GetSipRuleCommandOutput} for command's `response` shape.
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
export class GetSipRuleCommand extends command<GetSipRuleCommandInput, GetSipRuleCommandOutput>(
  _ep0,
  _mw0,
  "GetSipRule",
  GetSipRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetSipRuleRequest;
      output: GetSipRuleResponse;
    };
    sdk: {
      input: GetSipRuleCommandInput;
      output: GetSipRuleCommandOutput;
    };
  };
}
