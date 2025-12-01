// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GuardDutyClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GuardDutyClient";
import type { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import { DeleteMembers } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteMembersCommand}.
 */
export interface DeleteMembersCommandInput extends DeleteMembersRequest {}
/**
 * @public
 *
 * The output of {@link DeleteMembersCommand}.
 */
export interface DeleteMembersCommandOutput extends DeleteMembersResponse, __MetadataBearer {}

/**
 * <p>Deletes GuardDuty member accounts (to the current GuardDuty administrator account)
 *       specified by the account IDs.</p>
 *          <p>With <code>autoEnableOrganizationMembers</code> configuration for your organization set to
 *         <code>ALL</code>, you'll receive an error if you attempt to disable GuardDuty for a member
 *       account in your organization.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GuardDutyClient, DeleteMembersCommand } from "@aws-sdk/client-guardduty"; // ES Modules import
 * // const { GuardDutyClient, DeleteMembersCommand } = require("@aws-sdk/client-guardduty"); // CommonJS import
 * // import type { GuardDutyClientConfig } from "@aws-sdk/client-guardduty";
 * const config = {}; // type is GuardDutyClientConfig
 * const client = new GuardDutyClient(config);
 * const input = { // DeleteMembersRequest
 *   DetectorId: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIds // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMembersResponse
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
 * @param DeleteMembersCommandInput - {@link DeleteMembersCommandInput}
 * @returns {@link DeleteMembersCommandOutput}
 * @see {@link DeleteMembersCommandInput} for command's `input` shape.
 * @see {@link DeleteMembersCommandOutput} for command's `response` shape.
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
export class DeleteMembersCommand extends $Command
  .classBuilder<
    DeleteMembersCommandInput,
    DeleteMembersCommandOutput,
    GuardDutyClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GuardDutyClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("GuardDutyAPIService", "DeleteMembers", {})
  .n("GuardDutyClient", "DeleteMembersCommand")
  .sc(DeleteMembers)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteMembersRequest;
      output: DeleteMembersResponse;
    };
    sdk: {
      input: DeleteMembersCommandInput;
      output: DeleteMembersCommandOutput;
    };
  };
}
