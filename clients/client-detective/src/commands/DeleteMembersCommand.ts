// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { DetectiveClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DetectiveClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DeleteMembersRequest, DeleteMembersResponse } from "../models/models_0";
import { DeleteMembers$ } from "../schemas/schemas_0";

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
 * <p>Removes the specified member accounts from the behavior graph. The removed accounts no
 *          longer contribute data to the behavior graph. This operation can only be called by the
 *          administrator account for the behavior graph.</p>
 *          <p>For invited accounts, the removed accounts are deleted from the list of accounts in the
 *          behavior graph. To restore the account, the administrator account must send another
 *          invitation.</p>
 *          <p>For organization accounts in the organization behavior graph, the Detective
 *          administrator account can always enable the organization account again. Organization
 *          accounts that are not enabled as member accounts are not included in the
 *             <code>ListMembers</code> results for the organization behavior graph.</p>
 *          <p>An administrator account cannot use <code>DeleteMembers</code> to remove their own
 *          account from the behavior graph. To disable a behavior graph, the administrator account
 *          uses the <code>DeleteGraph</code> API method.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DetectiveClient, DeleteMembersCommand } from "@aws-sdk/client-detective"; // ES Modules import
 * // const { DetectiveClient, DeleteMembersCommand } = require("@aws-sdk/client-detective"); // CommonJS import
 * // import type { DetectiveClientConfig } from "@aws-sdk/client-detective";
 * const config = {}; // type is DetectiveClientConfig
 * const client = new DetectiveClient(config);
 * const input = { // DeleteMembersRequest
 *   GraphArn: "STRING_VALUE", // required
 *   AccountIds: [ // AccountIdList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DeleteMembersCommand(input);
 * const response = await client.send(command);
 * // { // DeleteMembersResponse
 * //   AccountIds: [ // AccountIdList
 * //     "STRING_VALUE",
 * //   ],
 * //   UnprocessedAccounts: [ // UnprocessedAccountList
 * //     { // UnprocessedAccount
 * //       AccountId: "STRING_VALUE",
 * //       Reason: "STRING_VALUE",
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
 * @see {@link DetectiveClientResolvedConfig | config} for DetectiveClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request issuer does not have permission to access this resource or perform this
 *          operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request attempted an invalid action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request was valid but failed because of a problem with the service.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request refers to a nonexistent resource.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The request parameters are invalid.</p>
 *
 * @throws {@link DetectiveServiceException}
 * <p>Base exception class for all service exceptions from Detective service.</p>
 *
 *
 * @public
 */
export class DeleteMembersCommand extends $Command
  .classBuilder<
    DeleteMembersCommandInput,
    DeleteMembersCommandOutput,
    DetectiveClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: DetectiveClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonDetective", "DeleteMembers", {})
  .n("DetectiveClient", "DeleteMembersCommand")
  .sc(DeleteMembers$)
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
