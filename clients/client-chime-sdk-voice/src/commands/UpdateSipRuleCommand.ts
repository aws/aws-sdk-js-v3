// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { UpdateSipRuleRequest, UpdateSipRuleResponse } from "../models/models_0";
import { UpdateSipRule$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link UpdateSipRuleCommand}.
 */
export interface UpdateSipRuleCommandInput extends UpdateSipRuleRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSipRuleCommand}.
 */
export interface UpdateSipRuleCommandOutput extends UpdateSipRuleResponse, __MetadataBearer {}

/**
 * Updates the details of the specified SIP rule.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateSipRuleCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateSipRuleCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
 * // import type { ChimeSDKVoiceClientConfig } from "@aws-sdk/client-chime-sdk-voice";
 * const config = {}; // type is ChimeSDKVoiceClientConfig
 * const client = new ChimeSDKVoiceClient(config);
 * const input = { // UpdateSipRuleRequest
 *   SipRuleId: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   Disabled: true || false,
 *   TargetApplications: [ // SipRuleTargetApplicationList
 *     { // SipRuleTargetApplication
 *       SipMediaApplicationId: "STRING_VALUE",
 *       Priority: Number("int"),
 *       AwsRegion: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new UpdateSipRuleCommand(input);
 * const response = await client.send(command);
 * // { // UpdateSipRuleResponse
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
 * @param UpdateSipRuleCommandInput - {@link UpdateSipRuleCommandInput}
 * @returns {@link UpdateSipRuleCommandOutput}
 * @see {@link UpdateSipRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateSipRuleCommandOutput} for command's `response` shape.
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
export class UpdateSipRuleCommand extends command<UpdateSipRuleCommandInput, UpdateSipRuleCommandOutput>(
  _ep0,
  _mw0,
  "UpdateSipRule",
  UpdateSipRule$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSipRuleRequest;
      output: UpdateSipRuleResponse;
    };
    sdk: {
      input: UpdateSipRuleCommandInput;
      output: UpdateSipRuleCommandOutput;
    };
  };
}
