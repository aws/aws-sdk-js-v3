// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { ProfileDetailResponse, UpdateProfileRequest } from "../models/models_0";
import type { RolesAnywhereClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RolesAnywhereClient";
import { UpdateProfile } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandInput extends UpdateProfileRequest {}
/**
 * @public
 *
 * The output of {@link UpdateProfileCommand}.
 */
export interface UpdateProfileCommandOutput extends ProfileDetailResponse, __MetadataBearer {}

/**
 * <p>Updates a <i>profile</i>, a list of the roles that IAM Roles Anywhere service is trusted to assume. You use profiles to intersect permissions with IAM managed policies.</p> <p> <b>Required permissions: </b> <code>rolesanywhere:UpdateProfile</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RolesAnywhereClient, UpdateProfileCommand } from "@aws-sdk/client-rolesanywhere"; // ES Modules import
 * // const { RolesAnywhereClient, UpdateProfileCommand } = require("@aws-sdk/client-rolesanywhere"); // CommonJS import
 * // import type { RolesAnywhereClientConfig } from "@aws-sdk/client-rolesanywhere";
 * const config = {}; // type is RolesAnywhereClientConfig
 * const client = new RolesAnywhereClient(config);
 * const input = { // UpdateProfileRequest
 *   profileId: "STRING_VALUE", // required
 *   name: "STRING_VALUE",
 *   sessionPolicy: "STRING_VALUE",
 *   roleArns: [ // RoleArnList
 *     "STRING_VALUE",
 *   ],
 *   managedPolicyArns: [ // ManagedPolicyList
 *     "STRING_VALUE",
 *   ],
 *   durationSeconds: Number("int"),
 *   acceptRoleSessionName: true || false,
 * };
 * const command = new UpdateProfileCommand(input);
 * const response = await client.send(command);
 * // { // ProfileDetailResponse
 * //   profile: { // ProfileDetail
 * //     profileId: "STRING_VALUE",
 * //     profileArn: "STRING_VALUE",
 * //     name: "STRING_VALUE",
 * //     requireInstanceProperties: true || false,
 * //     enabled: true || false,
 * //     createdBy: "STRING_VALUE",
 * //     sessionPolicy: "STRING_VALUE",
 * //     roleArns: [ // RoleArnList
 * //       "STRING_VALUE",
 * //     ],
 * //     managedPolicyArns: [ // ManagedPolicyList
 * //       "STRING_VALUE",
 * //     ],
 * //     createdAt: new Date("TIMESTAMP"),
 * //     updatedAt: new Date("TIMESTAMP"),
 * //     durationSeconds: Number("int"),
 * //     acceptRoleSessionName: true || false,
 * //     attributeMappings: [ // AttributeMappings
 * //       { // AttributeMapping
 * //         certificateField: "STRING_VALUE",
 * //         mappingRules: [ // MappingRules
 * //           { // MappingRule
 * //             specifier: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param UpdateProfileCommandInput - {@link UpdateProfileCommandInput}
 * @returns {@link UpdateProfileCommandOutput}
 * @see {@link UpdateProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateProfileCommandOutput} for command's `response` shape.
 * @see {@link RolesAnywhereClientResolvedConfig | config} for RolesAnywhereClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource could not be found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Validation exception error.</p>
 *
 * @throws {@link RolesAnywhereServiceException}
 * <p>Base exception class for all service exceptions from RolesAnywhere service.</p>
 *
 *
 * @public
 */
export class UpdateProfileCommand extends $Command
  .classBuilder<
    UpdateProfileCommandInput,
    UpdateProfileCommandOutput,
    RolesAnywhereClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RolesAnywhereClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RolesAnywhere", "UpdateProfile", {})
  .n("RolesAnywhereClient", "UpdateProfileCommand")
  .sc(UpdateProfile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: UpdateProfileRequest;
      output: ProfileDetailResponse;
    };
    sdk: {
      input: UpdateProfileCommandInput;
      output: UpdateProfileCommandOutput;
    };
  };
}
