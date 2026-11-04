// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DeleteServiceLinkedRoleRequest, DeleteServiceLinkedRoleResponse } from "../models/models_0";
import { DeleteServiceLinkedRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Submits a service-linked role deletion request and returns a `DeletionTaskId`, which you can use to check the status of the deletion. Before you call this operation, confirm that the role has no active sessions and that any resources used by the role in the linked service are deleted. If you call this operation more than once for the same service-linked role and an earlier deletion task is not complete, then the `DeletionTaskId` of the earlier request is returned.
 *
 * If you submit a deletion request for a service-linked role whose linked service is still accessing a resource, then the deletion task fails. If it fails, the [GetServiceLinkedRoleDeletionStatus](https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetServiceLinkedRoleDeletionStatus.html) operation returns the reason for the failure, usually including the resources that must be deleted. To delete the service-linked role, you must first remove those resources from the linked service and then submit the deletion request again. Resources are specific to the service that is linked to the role. For more information about removing resources from a service, see the [Amazon Web Services documentation](http://docs.aws.amazon.com/) for your service.
 *
 * For more information about service-linked roles, see [Roles terms and concepts: Amazon Web Services service-linked role](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_terms-and-concepts.html#iam-term-service-linked-role) in the *IAM User Guide*.
 *
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
 *
 * The request was rejected because it attempted to create resources beyond the current Amazon Web Services account limits. The error message describes the limit exceeded.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class DeleteServiceLinkedRoleCommand extends command<DeleteServiceLinkedRoleCommandInput, DeleteServiceLinkedRoleCommandOutput>(
  _ep0,
  _mw0,
  "DeleteServiceLinkedRole",
  DeleteServiceLinkedRole$
) {
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
