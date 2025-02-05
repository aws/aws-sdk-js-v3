// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { ListSipRulesRequest, ListSipRulesResponse } from "../models/models_1";
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
 *          <important>
 *             <p>
 *                <b>This API is is no longer supported and will not be updated.</b> We recommend using the latest version, <a href="https://docs.aws.amazon.com/chime-sdk/latest/APIReference/API_voice-chime_ListSipRules.html">ListSipRules</a>, in the Amazon Chime SDK.</p>
 *             <p>Using the latest version requires migrating to a dedicated namespace. For more information, refer to
 *             <a href="https://docs.aws.amazon.com/chime-sdk/latest/dg/migrate-from-chm-namespace.html">Migrating from the Amazon Chime namespace</a> in the
 *             <i>Amazon Chime SDK Developer Guide</i>.</p>
 *          </important>
 *
 * @deprecated Replaced by ListSipRules in the Amazon Chime SDK Voice Namespace
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ListSipRulesCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ListSipRulesCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ChimeClient(config);
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
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
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
 *  <p>The client exceeded its request rate limit.</p>
 *
 * @throws {@link UnauthorizedClientException} (client fault)
 *  <p>The client is not currently authorized to make the request.</p>
 *
 * @throws {@link ChimeServiceException}
 * <p>Base exception class for all service exceptions from Chime service.</p>
 *
 * @public
 */
export class ListSipRulesCommand extends $Command
  .classBuilder<
    ListSipRulesCommandInput,
    ListSipRulesCommandOutput,
    ChimeClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ChimeClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("UCBuzzConsoleService", "ListSipRules", {})
  .n("ChimeClient", "ListSipRulesCommand")
  .f(void 0, void 0)
  .ser(se_ListSipRulesCommand)
  .de(de_ListSipRulesCommand)
  .build() {
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
