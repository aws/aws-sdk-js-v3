// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeSDKVoiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeSDKVoiceClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSipRuleRequest, UpdateSipRuleResponse } from "../models/models_0";
import { de_UpdateSipRuleCommand, se_UpdateSipRuleCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Updates the details of the specified SIP rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeSDKVoiceClient, UpdateSipRuleCommand } from "@aws-sdk/client-chime-sdk-voice"; // ES Modules import
 * // const { ChimeSDKVoiceClient, UpdateSipRuleCommand } = require("@aws-sdk/client-chime-sdk-voice"); // CommonJS import
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
 *  <p>The input parameters don't match the service's restrictions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Multiple instances of the same request were made simultaneously.</p>
 *
 * @throws {@link ForbiddenException} (client fault)
 *  <p>The client is permanently forbidden from making the request.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The requested resource couldn't be found.</p>
 *
 * @throws {@link ResourceLimitExceededException} (client fault)
 *  <p>The request exceeds the resource limit.</p>
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
export class UpdateSipRuleCommand extends $Command
  .classBuilder<
    UpdateSipRuleCommandInput,
    UpdateSipRuleCommandOutput,
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
  .s("ChimeSDKTelephonyService", "UpdateSipRule", {})
  .n("ChimeSDKVoiceClient", "UpdateSipRuleCommand")
  .f(void 0, void 0)
  .ser(se_UpdateSipRuleCommand)
  .de(de_UpdateSipRuleCommand)
  .build() {
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
