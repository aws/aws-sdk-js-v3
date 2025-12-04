// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import type {
  ModifyVpcEndpointServicePermissionsRequest,
  ModifyVpcEndpointServicePermissionsResult,
} from "../models/models_7";
import { ModifyVpcEndpointServicePermissions } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ModifyVpcEndpointServicePermissionsCommand}.
 */
export interface ModifyVpcEndpointServicePermissionsCommandInput extends ModifyVpcEndpointServicePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link ModifyVpcEndpointServicePermissionsCommand}.
 */
export interface ModifyVpcEndpointServicePermissionsCommandOutput
  extends ModifyVpcEndpointServicePermissionsResult,
    __MetadataBearer {}

/**
 * <p>Modifies the permissions for your VPC endpoint service. You can add or remove permissions
 *             for service consumers (Amazon Web Services accounts, users, and IAM roles) to connect to
 *             your endpoint service. Principal ARNs with path components aren't supported.</p>
 *          <p>If you grant permissions to all principals, the service is public. Any users who know the name of a
 * 	        public service can send a request to attach an endpoint. If the service does not require manual approval,
 * 	        attachments are automatically approved.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcEndpointServicePermissionsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcEndpointServicePermissionsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * // import type { EC2ClientConfig } from "@aws-sdk/client-ec2";
 * const config = {}; // type is EC2ClientConfig
 * const client = new EC2Client(config);
 * const input = { // ModifyVpcEndpointServicePermissionsRequest
 *   DryRun: true || false,
 *   ServiceId: "STRING_VALUE", // required
 *   AddAllowedPrincipals: [ // ValueStringList
 *     "STRING_VALUE",
 *   ],
 *   RemoveAllowedPrincipals: [
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new ModifyVpcEndpointServicePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // ModifyVpcEndpointServicePermissionsResult
 * //   AddedPrincipals: [ // AddedPrincipalSet
 * //     { // AddedPrincipal
 * //       PrincipalType: "All" || "Service" || "OrganizationUnit" || "Account" || "User" || "Role",
 * //       Principal: "STRING_VALUE",
 * //       ServicePermissionId: "STRING_VALUE",
 * //       ServiceId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   ReturnValue: true || false,
 * // };
 *
 * ```
 *
 * @param ModifyVpcEndpointServicePermissionsCommandInput - {@link ModifyVpcEndpointServicePermissionsCommandInput}
 * @returns {@link ModifyVpcEndpointServicePermissionsCommandOutput}
 * @see {@link ModifyVpcEndpointServicePermissionsCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcEndpointServicePermissionsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class ModifyVpcEndpointServicePermissionsCommand extends $Command
  .classBuilder<
    ModifyVpcEndpointServicePermissionsCommandInput,
    ModifyVpcEndpointServicePermissionsCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonEC2", "ModifyVpcEndpointServicePermissions", {})
  .n("EC2Client", "ModifyVpcEndpointServicePermissionsCommand")
  .sc(ModifyVpcEndpointServicePermissions)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ModifyVpcEndpointServicePermissionsRequest;
      output: ModifyVpcEndpointServicePermissionsResult;
    };
    sdk: {
      input: ModifyVpcEndpointServicePermissionsCommandInput;
      output: ModifyVpcEndpointServicePermissionsCommandOutput;
    };
  };
}
