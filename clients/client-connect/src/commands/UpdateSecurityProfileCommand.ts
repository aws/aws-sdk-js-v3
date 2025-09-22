// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { UpdateSecurityProfileRequest } from "../models/models_3";
import { UpdateSecurityProfile } from "../schemas/schemas_70_Security";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateSecurityProfileCommand}.
 */
export interface UpdateSecurityProfileCommandInput extends UpdateSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateSecurityProfileCommand}.
 */
export interface UpdateSecurityProfileCommandOutput extends __MetadataBearer {}

/**
 * <p>Updates a security profile.</p>
 *          <p>For information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. For a mapping of the API name and
 *    user interface name of the security profile permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
 *     permissions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, UpdateSecurityProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, UpdateSecurityProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // import type { ConnectClientConfig } from "@aws-sdk/client-connect";
 * const config = {}; // type is ConnectClientConfig
 * const client = new ConnectClient(config);
 * const input = { // UpdateSecurityProfileRequest
 *   Description: "STRING_VALUE",
 *   Permissions: [ // PermissionsList
 *     "STRING_VALUE",
 *   ],
 *   SecurityProfileId: "STRING_VALUE", // required
 *   InstanceId: "STRING_VALUE", // required
 *   AllowedAccessControlTags: { // AllowedAccessControlTags
 *     "<keys>": "STRING_VALUE",
 *   },
 *   TagRestrictedResources: [ // TagRestrictedResourceList
 *     "STRING_VALUE",
 *   ],
 *   Applications: [ // Applications
 *     { // Application
 *       Namespace: "STRING_VALUE",
 *       ApplicationPermissions: [ // ApplicationPermissions
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 *   HierarchyRestrictedResources: [ // HierarchyRestrictedResourceList
 *     "STRING_VALUE",
 *   ],
 *   AllowedAccessControlHierarchyGroupId: "STRING_VALUE",
 * };
 * const command = new UpdateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param UpdateSecurityProfileCommandInput - {@link UpdateSecurityProfileCommandInput}
 * @returns {@link UpdateSecurityProfileCommandOutput}
 * @see {@link UpdateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>Request processing failed because of an error or failure with the service.</p>
 *
 * @throws {@link InvalidParameterException} (client fault)
 *  <p>One or more of the specified parameters are not valid.</p>
 *
 * @throws {@link InvalidRequestException} (client fault)
 *  <p>The request is not valid.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The specified resource was not found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The throttling limit has been exceeded.</p>
 *
 * @throws {@link ConnectServiceException}
 * <p>Base exception class for all service exceptions from Connect service.</p>
 *
 *
 * @public
 */
export class UpdateSecurityProfileCommand extends $Command
  .classBuilder<
    UpdateSecurityProfileCommandInput,
    UpdateSecurityProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonConnectService", "UpdateSecurityProfile", {})
  .n("ConnectClient", "UpdateSecurityProfileCommand")
  .sc(UpdateSecurityProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateSecurityProfileRequest;
      output: {};
    };
    sdk: {
      input: UpdateSecurityProfileCommandInput;
      output: UpdateSecurityProfileCommandOutput;
    };
  };
}
