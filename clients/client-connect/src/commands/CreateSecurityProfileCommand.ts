// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ConnectClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ConnectClient";
import { commonParams } from "../endpoint/EndpointParameters";
import { CreateSecurityProfileRequest, CreateSecurityProfileResponse } from "../models/models_0";
import { de_CreateSecurityProfileCommand, se_CreateSecurityProfileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandInput extends CreateSecurityProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateSecurityProfileCommand}.
 */
export interface CreateSecurityProfileCommandOutput extends CreateSecurityProfileResponse, __MetadataBearer {}

/**
 * <p>Creates a security profile.</p>
 *          <p>For information about security profiles, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/connect-security-profiles.html">Security Profiles</a> in the
 *      <i>Amazon Connect Administrator Guide</i>. For a mapping of the API name and
 *    user interface name of the security profile permissions, see <a href="https://docs.aws.amazon.com/connect/latest/adminguide/security-profile-list.html">List of security profile
 *     permissions</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConnectClient, CreateSecurityProfileCommand } from "@aws-sdk/client-connect"; // ES Modules import
 * // const { ConnectClient, CreateSecurityProfileCommand } = require("@aws-sdk/client-connect"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ConnectClient(config);
 * const input = { // CreateSecurityProfileRequest
 *   SecurityProfileName: "STRING_VALUE", // required
 *   Description: "STRING_VALUE",
 *   Permissions: [ // PermissionsList
 *     "STRING_VALUE",
 *   ],
 *   InstanceId: "STRING_VALUE", // required
 *   Tags: { // TagMap
 *     "<keys>": "STRING_VALUE",
 *   },
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
 * const command = new CreateSecurityProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateSecurityProfileResponse
 * //   SecurityProfileId: "STRING_VALUE",
 * //   SecurityProfileArn: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param CreateSecurityProfileCommandInput - {@link CreateSecurityProfileCommandInput}
 * @returns {@link CreateSecurityProfileCommandOutput}
 * @see {@link CreateSecurityProfileCommandInput} for command's `input` shape.
 * @see {@link CreateSecurityProfileCommandOutput} for command's `response` shape.
 * @see {@link ConnectClientResolvedConfig | config} for ConnectClient's `config` shape.
 *
 * @throws {@link DuplicateResourceException} (client fault)
 *  <p>A resource with the specified name already exists.</p>
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
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The allowed limit for the resource has been exceeded.</p>
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
 * @public
 */
export class CreateSecurityProfileCommand extends $Command
  .classBuilder<
    CreateSecurityProfileCommandInput,
    CreateSecurityProfileCommandOutput,
    ConnectClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ConnectClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonConnectService", "CreateSecurityProfile", {})
  .n("ConnectClient", "CreateSecurityProfileCommand")
  .f(void 0, void 0)
  .ser(se_CreateSecurityProfileCommand)
  .de(de_CreateSecurityProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateSecurityProfileRequest;
      output: CreateSecurityProfileResponse;
    };
    sdk: {
      input: CreateSecurityProfileCommandInput;
      output: CreateSecurityProfileCommandOutput;
    };
  };
}
