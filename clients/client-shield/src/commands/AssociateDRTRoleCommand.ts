// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { AssociateDRTRoleRequest, AssociateDRTRoleResponse } from "../models/models_0";
import { AssociateDRTRole$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link AssociateDRTRoleCommand}.
 */
export interface AssociateDRTRoleCommandInput extends AssociateDRTRoleRequest {}
/**
 * @public
 *
 * The output of {@link AssociateDRTRoleCommand}.
 */
export interface AssociateDRTRoleCommandOutput extends AssociateDRTRoleResponse, __MetadataBearer {}

/**
 * Authorizes the Shield Response Team (SRT) using the specified role, to access your Amazon Web Services account to assist with DDoS attack mitigation during potential attacks. This enables the SRT to inspect your WAF configuration and create or update WAF rules and web ACLs.
 *
 * You can associate only one `RoleArn` with your subscription. If you submit an `AssociateDRTRole` request for an account that already has an associated role, the new `RoleArn` will replace the existing `RoleArn`.
 *
 * Prior to making the `AssociateDRTRole` request, you must attach the `AWSShieldDRTAccessPolicy` managed policy to the role that you'll specify in the request. You can access this policy in the IAM console at [AWSShieldDRTAccessPolicy](https://console.aws.amazon.com/iam/home?#/policies/arn:aws:iam::aws:policy/service-role/AWSShieldDRTAccessPolicy). For more information see [Adding and removing IAM identity permissions](https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_manage-attach-detach.html). The role must also trust the service principal `drt.shield.amazonaws.com`. For more information, see [IAM JSON policy elements: Principal](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_elements_principal.html).
 *
 * The SRT will have access only to your WAF and Shield resources. By submitting this request, you authorize the SRT to inspect your WAF and Shield configuration and create and update WAF rules and web ACLs on your behalf. The SRT takes these actions only if explicitly authorized by you.
 *
 * You must have the `iam:PassRole` permission to make an `AssociateDRTRole` request. For more information, see [Granting a user permissions to pass a role to an Amazon Web Services service](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html).
 *
 * To use the services of the SRT and make an `AssociateDRTRole` request, you must be subscribed to the [Business Support plan](http://aws.amazon.com/premiumsupport/business-support/) or the [Enterprise Support plan](http://aws.amazon.com/premiumsupport/enterprise-support/).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ShieldClient, AssociateDRTRoleCommand } from "@aws-sdk/client-shield"; // ES Modules import
 * // const { ShieldClient, AssociateDRTRoleCommand } = require("@aws-sdk/client-shield"); // CommonJS import
 * // import type { ShieldClientConfig } from "@aws-sdk/client-shield";
 * const config = {}; // type is ShieldClientConfig
 * const client = new ShieldClient(config);
 * const input = { // AssociateDRTRoleRequest
 *   RoleArn: "STRING_VALUE", // required
 * };
 * const command = new AssociateDRTRoleCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AssociateDRTRoleCommandInput - {@link AssociateDRTRoleCommandInput}
 * @returns {@link AssociateDRTRoleCommandOutput}
 * @see {@link AssociateDRTRoleCommandInput} for command's `input` shape.
 * @see {@link AssociateDRTRoleCommandOutput} for command's `response` shape.
 * @see {@link ShieldClientResolvedConfig | config} for ShieldClient's `config` shape.
 *
 * @throws {@link AccessDeniedForDependencyException} (client fault)
 *
 * In order to grant the necessary access to the Shield Response Team (SRT) the user submitting the request must have the `iam:PassRole` permission. This error indicates the user did not have the appropriate permissions. For more information, see [Granting a User Permissions to Pass a Role to an Amazon Web Services Service](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_passrole.html).
 *
 * @throws {@link InternalErrorException} (server fault)
 *
 * Exception that indicates that a problem occurred with the service infrastructure. You can retry the request.
 *
 * @throws {@link InvalidOperationException} (client fault)
 *
 * Exception that indicates that the operation would not cause any change to occur.
 *
 * @throws {@link InvalidParameterException} (client fault)
 *
 * Exception that indicates that the parameters passed to the API are invalid. If available, this exception includes details in additional properties.
 *
 * @throws {@link OptimisticLockException} (client fault)
 *
 * Exception that indicates that the resource state has been modified by another client. Retrieve the resource and then retry your request.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * Exception indicating the specified resource does not exist. If available, this exception includes details in additional properties.
 *
 * @throws {@link ShieldServiceException}
 *
 * Base exception class for all service exceptions from Shield service.
 *
 * @public
 */
export class AssociateDRTRoleCommand extends command<AssociateDRTRoleCommandInput, AssociateDRTRoleCommandOutput>(
  _ep0,
  _mw0,
  "AssociateDRTRole",
  AssociateDRTRole$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AssociateDRTRoleRequest;
      output: {};
    };
    sdk: {
      input: AssociateDRTRoleCommandInput;
      output: AssociateDRTRoleCommandOutput;
    };
  };
}
