// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PutRolePermissionsBoundaryRequest } from "../models/models_0";
import { PutRolePermissionsBoundary$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PutRolePermissionsBoundaryCommand}.
 */
export interface PutRolePermissionsBoundaryCommandInput extends PutRolePermissionsBoundaryRequest {}
/**
 * @public
 *
 * The output of {@link PutRolePermissionsBoundaryCommand}.
 */
export interface PutRolePermissionsBoundaryCommandOutput extends __MetadataBearer {}

/**
 * Adds or updates the policy that is specified as the IAM role's permissions boundary. You can use an Amazon Web Services managed policy or a customer managed policy to set the boundary for a role. Use the boundary to control the maximum permissions that the role can have. Setting a permissions boundary is an advanced feature that can affect the permissions for the role.
 *
 * You cannot set the boundary for a service-linked role.
 *
 * > **Important:** Policies used as permissions boundaries do not provide permissions. You must also attach a permissions policy to the role. To learn how the effective permissions for a role are evaluated, see [IAM JSON policy evaluation logic](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_evaluation-logic.html) in the IAM User Guide.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, PutRolePermissionsBoundaryCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, PutRolePermissionsBoundaryCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // PutRolePermissionsBoundaryRequest
 *   RoleName: "STRING_VALUE", // required
 *   PermissionsBoundary: "STRING_VALUE", // required
 * };
 * const command = new PutRolePermissionsBoundaryCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param PutRolePermissionsBoundaryCommandInput - {@link PutRolePermissionsBoundaryCommandInput}
 * @returns {@link PutRolePermissionsBoundaryCommandOutput}
 * @see {@link PutRolePermissionsBoundaryCommandInput} for command's `input` shape.
 * @see {@link PutRolePermissionsBoundaryCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *
 * The request was rejected because an invalid or out-of-range value was supplied for an input parameter.
 *
 * @throws {@link NoSuchEntityException} (client fault)
 *
 * The request was rejected because it referenced a resource entity that does not exist. The error message describes the resource.
 *
 * @throws {@link PolicyNotAttachableException} (client fault)
 *
 * The request failed because Amazon Web Services service role policies can only be attached to the service-linked role for that service.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception or failure.
 *
 * @throws {@link UnmodifiableEntityException} (client fault)
 *
 * The request was rejected because service-linked roles are protected Amazon Web Services resources. Only the service that depends on the service-linked role can modify or delete the role on your behalf. The error message includes the name of the service that depends on this service-linked role. You must request the change through that service.
 *
 * @throws {@link IAMServiceException}
 *
 * Base exception class for all service exceptions from IAM service.
 *
 * @public
 */
export class PutRolePermissionsBoundaryCommand extends command<PutRolePermissionsBoundaryCommandInput, PutRolePermissionsBoundaryCommandOutput>(
  _ep0,
  _mw0,
  "PutRolePermissionsBoundary",
  PutRolePermissionsBoundary$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PutRolePermissionsBoundaryRequest;
      output: {};
    };
    sdk: {
      input: PutRolePermissionsBoundaryCommandInput;
      output: PutRolePermissionsBoundaryCommandOutput;
    };
  };
}
