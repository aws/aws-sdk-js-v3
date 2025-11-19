// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { UpdateGroupRequest } from "../models/models_0";
import { UpdateGroup } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandInput extends UpdateGroupRequest {}
/**
 * @public
 *
 * The output of {@link UpdateGroupCommand}.
 */
export interface UpdateGroupCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates the name and/or the path of the specified IAM group.</p>
 *          <important>
 *             <p> You should understand the implications of changing a group's path or name. For
 *                 more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/Using_WorkingWithGroupsAndUsers.html">Renaming users and
 *                     groups</a> in the <i>IAM User Guide</i>.</p>
 *          </important>
 *          <note>
 *             <p>The person making the request (the principal), must have permission to change the
 *                 role group with the old name and the new name. For example, to change the group
 *                 named <code>Managers</code> to <code>MGRs</code>, the principal must have a policy
 *                 that allows them to update both groups. If the principal has permission to update
 *                 the <code>Managers</code> group, but not the <code>MGRs</code> group, then the
 *                 update fails. For more information about permissions, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access.html">Access management</a>.
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, UpdateGroupCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, UpdateGroupCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // UpdateGroupRequest
 *   GroupName: "STRING_VALUE", // required
 *   NewPath: "STRING_VALUE",
 *   NewGroupName: "STRING_VALUE",
 * };
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateGroupCommandInput - {@link UpdateGroupCommandInput}
 * @returns {@link UpdateGroupCommandOutput}
 * @see {@link UpdateGroupCommandInput} for command's `input` shape.
 * @see {@link UpdateGroupCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To rename an IAM group
 * ```javascript
 * // The following command changes the name of the IAM group Test to Test-1.
 * const input = {
 *   GroupName: "Test",
 *   NewGroupName: "Test-1"
 * };
 * const command = new UpdateGroupCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class UpdateGroupCommand extends $Command
  .classBuilder<
    UpdateGroupCommandInput,
    UpdateGroupCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "UpdateGroup", {})
  .n("IAMClient", "UpdateGroupCommand")
  .sc(UpdateGroup)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateGroupRequest;
      output: {};
    };
    sdk: {
      input: UpdateGroupCommandInput;
      output: UpdateGroupCommandOutput;
    };
  };
}
