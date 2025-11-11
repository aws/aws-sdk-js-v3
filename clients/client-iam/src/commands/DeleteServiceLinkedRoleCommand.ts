// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/models_0";
import { DeleteServiceLinkedRole } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteServiceLinkedRoleCommand}.
 */
export interface DeleteServiceLinkedRoleCommandInput extends DeleteServiceLinkedRoleRequest {}
/**
 * @public
 *
 * The output of {@link DeleteServiceLinkedRoleCommand}.
 */
export interface DeleteServiceLinkedRoleCommandOutput extends DeleteServiceLinkedRoleResponse, __MetadataBearer {}

/**
 * <p>Submits a service-linked role deletion request and returns a
 *                 <code>DeletionTaskId</code>, which you can use to check the status of the deletion.
 *             Before you call this operation, confirm that the role has no active sessions and that
 *             any resources used by the role in the linked service are deleted. If you call this
 *             operation more than once for the same service-linked role and an earlier deletion task
 *             is not complete, then the <code>DeletionTaskId</code> of the earlier request is
 *             returned.</p>
 *          <p>If you submit a deletion request for a service-linked role whose linked service is
 *             still accessing a resource, then the deletion task fails. If it fails, the <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html">GetServiceLinkedRoleDeletionStatus</a> operation returns the reason for the
 *             failure, usually including the resources that must be deleted. To delete the
 *             service-linked role, you must first remove those resources from the linked service and
 *             then submit the deletion request again. Resources are specific to the service that is
 *             linked to the role. For more information about removing resources from a service, see
 *             the <a href="http://docs.aws.amazon.com/">Amazon Web Services documentation</a> for your
 *             service.</p>
 *          <p>For more information about service-linked roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role">Roles terms and concepts: Amazon Web Services service-linked role</a> in the
 *                 <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteServiceLinkedRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteServiceLinkedRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteServiceLinkedRoleRequest
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteServiceLinkedRoleCommand(input);
 * const response = await client.send(command);
 * // { // DeleteServiceLinkedRoleResponse
 * //   DeletionTaskId: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param DeleteServiceLinkedRoleCommandInput - {@link DeleteServiceLinkedRoleCommandInput}
 * @returns {@link DeleteServiceLinkedRoleCommandOutput}
 * @see {@link DeleteServiceLinkedRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceLinkedRoleCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
 * @public
 */
export class DeleteServiceLinkedRoleCommand extends $Command
  .classBuilder<
    DeleteServiceLinkedRoleCommandInput,
    DeleteServiceLinkedRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteServiceLinkedRole", {})
  .n("IAMClient", "DeleteServiceLinkedRoleCommand")
  .sc(DeleteServiceLinkedRole)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteServiceLinkedRoleRequest;
      output: DeleteServiceLinkedRoleResponse;
    };
    sdk: {
      input: DeleteServiceLinkedRoleCommandInput;
      output: DeleteServiceLinkedRoleCommandOutput;
    };
  };
}
