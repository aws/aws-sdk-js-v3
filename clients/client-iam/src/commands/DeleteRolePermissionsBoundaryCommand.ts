// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { DeleteRolePermissionsBoundaryRequest } from "../models/models_0";
import { DeleteRolePermissionsBoundary } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DeleteRolePermissionsBoundaryCommand}.
 */
export interface DeleteRolePermissionsBoundaryCommandInput extends DeleteRolePermissionsBoundaryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteRolePermissionsBoundaryCommand}.
 */
export interface DeleteRolePermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the permissions boundary for the specified IAM role. </p>
 *          <p>You cannot set the boundary for a service-linked role.</p>
 *          <important>
 *             <p>Deleting the permissions boundary for a role might increase its permissions. For
 *                 example, it might allow anyone who assumes the role to perform all the actions
 *                 granted in its permissions policies.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, DeleteRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, DeleteRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // DeleteRolePermissionsBoundaryRequest
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new DeleteRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteRolePermissionsBoundaryCommandInput - {@link DeleteRolePermissionsBoundaryCommandInput}
 * @returns {@link DeleteRolePermissionsBoundaryCommandOutput}
 * @see {@link DeleteRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link DeleteRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *  <p>The request was rejected because it referenced a resource entity that does not exist. The
 *       error message describes the resource.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *  <p>The request was rejected because service-linked roles are protected Amazon Web Services resources. Only
 *       the service that depends on the service-linked role can modify or delete the role on your
 *       behalf. The error message includes the name of the service that depends on this service-linked
 *       role. You must request the change through that service.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class DeleteRolePermissionsBoundaryCommand extends $Command
  .classBuilder<
    DeleteRolePermissionsBoundaryCommandInput,
    DeleteRolePermissionsBoundaryCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "DeleteRolePermissionsBoundary", {})
  .n("IAMClient", "DeleteRolePermissionsBoundaryCommand")
  .sc(DeleteRolePermissionsBoundary)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DeleteRolePermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: DeleteRolePermissionsBoundaryCommandInput;
      output: DeleteRolePermissionsBoundaryCommandOutput;
    };
  };
}
