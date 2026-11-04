// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateSipRuleRequest, CreateSipRuleResponse } from "../models/models_0";
import { CreateSipRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CreateSipRuleCommand}.
 */
export interface CreateSipRuleCommandInput extends CreateSipRuleRequest {}
/**
 * @public
 *
 * The output of {@link CreateSipRuleCommand}.
 */
export interface CreateSipRuleCommandOutput extends CreateSipRuleResponse, __MetadataBearer {}

/**
 * Creates a SIP rule, which can be used to run a SIP media application as a target for a specific trigger type. For more information about SIP rules, see [Managing SIP media applications and rules](https://docs.aws.amazon.com/chime-sdk/latest/ag/manage-sip-applications.html) in the *Amazon Chime SDK Administrator Guide*.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, CreateSipRuleCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, CreateSipRuleCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // CreateSipRuleRequest
 *   Name: "STRING_VALUE", // required
 *   TriggerType: "ToPhoneNumber" || "RequestUriHostname", // required
 *   TriggerValue: "STRING_VALUE", // required
 *   Disabled: true || false,
 *   TargetApplications: [ // SipRuleTargetApplicationList // required
 *     { // SipRuleTargetApplication
 *       SipMediaApplicationId: "STRING_VALUE",
 *       Priority: Number("int"),
 *       AwsRegion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new CreateSipRuleCommand(input);
 * const response = await client.send(command);
 * // { // CreateSipRuleResponse
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
 * @param CreateSipRuleCommandInput - {@link CreateSipRuleCommandInput}
 * @returns {@link CreateSipRuleCommandOutput}
 * @see {@link CreateSipRuleCommandInput} for command's `input` shape.
 * @see {@link CreateSipRuleCommandOutput} for command's `response` shape.
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
 * @throws {@link ConflictException} (client fault)
 *
 * Multiple instances of the same request were made simultaneously.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * The client is permanently forbidden from making the request.
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
export class CreateSipRuleCommand extends command<CreateSipRuleCommandInput, CreateSipRuleCommandOutput>(
  _ep0,
  _mw0,
  "CreateSipRule",
  CreateSipRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSipRuleRequest;
      output: CreateSipRuleResponse;
    };
    sdk: {
      input: CreateSipRuleCommandInput;
      output: CreateSipRuleCommandOutput;
    };
  };
}
