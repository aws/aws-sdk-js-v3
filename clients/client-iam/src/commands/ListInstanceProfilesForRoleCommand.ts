// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfilesForRoleRequest, ListInstanceProfilesForRoleResponse } from "../models/models_0";
import { de_ListInstanceProfilesForRoleCommand, se_ListInstanceProfilesForRoleCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceProfilesForRoleCommand}.
 */
export interface ListInstanceProfilesForRoleCommandInput extends ListInstanceProfilesForRoleRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesForRoleCommand}.
 */
export interface ListInstanceProfilesForRoleCommandOutput
  extends ListInstanceProfilesForRoleResponse,
    __MetadataBearer {}

/**
 * <p>Lists the instance profiles that have the specified associated IAM role. If there
 *             are none, the operation returns an empty list. For more information about instance
 *             profiles, go to <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesForRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesForRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListInstanceProfilesForRoleRequest
 *   RoleName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInstanceProfilesForRoleCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceProfilesForRoleResponse
 * //   InstanceProfiles: [ // instanceProfileListType // required
 * //     { // InstanceProfile
 * //       Path: "STRING_VALUE", // required
 * //       InstanceProfileName: "STRING_VALUE", // required
 * //       InstanceProfileId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       Roles: [ // roleListType // required
 * //         { // Role
 * //           Path: "STRING_VALUE", // required
 * //           RoleName: "STRING_VALUE", // required
 * //           RoleId: "STRING_VALUE", // required
 * //           Arn: "STRING_VALUE", // required
 * //           CreateDate: new Date("TIMESTAMP"), // required
 * //           AssumeRolePolicyDocument: "STRING_VALUE",
 * //           Description: "STRING_VALUE",
 * //           MaxSessionDuration: Number("int"),
 * //           PermissionsBoundary: { // AttachedPermissionsBoundary
 * //             PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //             PermissionsBoundaryArn: "STRING_VALUE",
 * //           },
 * //           Tags: [ // tagListType
 * //             { // Tag
 * //               Key: "STRING_VALUE", // required
 * //               Value: "STRING_VALUE", // required
 * //             },
 * //           ],
 * //           RoleLastUsed: { // RoleLastUsed
 * //             LastUsedDate: new Date("TIMESTAMP"),
 * //             Region: "STRING_VALUE",
 * //           },
 * //         },
 * //       ],
 * //       Tags: [
 * //         {
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListInstanceProfilesForRoleCommandInput - {@link ListInstanceProfilesForRoleCommandInput}
 * @returns {@link ListInstanceProfilesForRoleCommandOutput}
 * @see {@link ListInstanceProfilesForRoleCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesForRoleCommandOutput} for command's `response` shape.
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
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @public
 */
export class ListInstanceProfilesForRoleCommand extends $Command
  .classBuilder<
    ListInstanceProfilesForRoleCommandInput,
    ListInstanceProfilesForRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListInstanceProfilesForRole", {})
  .n("IAMClient", "ListInstanceProfilesForRoleCommand")
  .f(void 0, void 0)
  .ser(se_ListInstanceProfilesForRoleCommand)
  .de(de_ListInstanceProfilesForRoleCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceProfilesForRoleRequest;
      output: ListInstanceProfilesForRoleResponse;
    };
    sdk: {
      input: ListInstanceProfilesForRoleCommandInput;
      output: ListInstanceProfilesForRoleCommandOutput;
    };
  };
}
