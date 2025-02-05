// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import { StartMonitoringMembersRequest, StartMonitoringMembersResponse } from "../models/models_1";
import { de_StartMonitoringMembersCommand, se_StartMonitoringMembersCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StartMonitoringMembersCommand}.
 */
export interface StartMonitoringMembersCommandInput extends StartMonitoringMembersRequest {}
/**
 * @public
 *
 * The output of {@link StartMonitoringMembersCommand}.
 */
export interface StartMonitoringMembersCommandOutput extends StartMonitoringMembersResponse, __MetadataBearer {}

/**
 * <p>Turns on GuardDuty monitoring of the specified member accounts. Use this operation to
 *       restart monitoring of accounts that you stopped monitoring with the <a href="https://docs.aws.amazon.com/guardduty/latest/APIReference/API_StopMonitoringMembers.html">StopMonitoringMembers</a> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StartMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StartMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new GuardDutyClient(config);
 * const input = { // StartMonitoringMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StartMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * // { // StartMonitoringMembersResponse
 * //   UnprocessedAccounts: [ // UnprocessedAccounts // required
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE", // required
 * //       Result: "STRING_VALUE", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param StartMonitoringMembersCommandInput - {@link StartMonitoringMembersCommandInput}
 * @returns {@link StartMonitoringMembersCommandOutput}
 * @see {@link StartMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StartMonitoringMembersCommandOutput} for command's `response` shape.
 * @see {@link GuardDutyClientResolvedConfig | config} for GuardDutyClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *  <p>A bad request exception object.</p>
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *  <p>An internal server error exception object.</p>
 *
 * @throws {@link GuardDutyServiceException}
 * <p>Base exception class for all service exceptions from GuardDuty service.</p>
 *
 * @public
 */
export class StartMonitoringMembersCommand extends $Command
  .classBuilder<
    StartMonitoringMembersCommandInput,
    StartMonitoringMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("GuardDutyAPIService", "StartMonitoringMembers", {})
  .n("GuardDutyClient", "StartMonitoringMembersCommand")
  .f(void 0, void 0)
  .ser(se_StartMonitoringMembersCommand)
  .de(de_StartMonitoringMembersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartMonitoringMembersRequest;
      output: StartMonitoringMembersResponse;
    };
    sdk: {
      input: StartMonitoringMembersCommandInput;
      output: StartMonitoringMembersCommandOutput;
    };
  };
}
