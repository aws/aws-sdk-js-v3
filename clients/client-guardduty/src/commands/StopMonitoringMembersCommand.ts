// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { StopMonitoringMembersRequest, StopMonitoringMembersResponse } from "../models/models_1";
import { StopMonitoringMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link StopMonitoringMembersCommand}.
 */
export interface StopMonitoringMembersCommandInput extends StopMonitoringMembersRequest {}
/**
 * @public
 *
 * The output of {@link StopMonitoringMembersCommand}.
 */
export interface StopMonitoringMembersCommandOutput extends StopMonitoringMembersResponse, __MetadataBearer {}

/**
 * <p>Stops GuardDuty monitoring for the specified member accounts. Use the
 *         <code>StartMonitoringMembers</code> operation to restart monitoring for those
 *       accounts.</p>
 *          <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to
 *         <code>ALL</code>, you'll receive an error if you attempt to stop monitoring the member
 *       accounts in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, StopMonitoringMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, StopMonitoringMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // StopMonitoringMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new StopMonitoringMembersCommand(input);
 * const response = await client.send(command);
 * // { // StopMonitoringMembersResponse
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
 * @param StopMonitoringMembersCommandInput - {@link StopMonitoringMembersCommandInput}
 * @returns {@link StopMonitoringMembersCommandOutput}
 * @see {@link StopMonitoringMembersCommandInput} for command's `input` shape.
 * @see {@link StopMonitoringMembersCommandOutput} for command's `response` shape.
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
 *
 * @public
 */
export class StopMonitoringMembersCommand extends $Command
  .classBuilder<
    StopMonitoringMembersCommandInput,
    StopMonitoringMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "StopMonitoringMembers", {})
  .n("GuardDutyClient", "StopMonitoringMembersCommand")
  .sc(StopMonitoringMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StopMonitoringMembersRequest;
      output: StopMonitoringMembersResponse;
    };
    sdk: {
      input: StopMonitoringMembersCommandInput;
      output: StopMonitoringMembersCommandOutput;
    };
  };
}
