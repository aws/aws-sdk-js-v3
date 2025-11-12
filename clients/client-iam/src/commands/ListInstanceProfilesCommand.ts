// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfilesRequest, ListInstanceProfilesResponse } from "../models/models_0";
import { ListInstanceProfiles } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListInstanceProfilesCommand}.
 */
export interface ListInstanceProfilesCommandInput extends ListInstanceProfilesRequest {}
/**
 * @public
 *
 * The output of {@link ListInstanceProfilesCommand}.
 */
export interface ListInstanceProfilesCommandOutput extends ListInstanceProfilesResponse, __MetadataBearer {}

/**
 * <p>Lists the instance profiles that have the specified path prefix. If there are none,
 *             the operation returns an empty list. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see
 *                     <a href="https://docs.aws.amazon.com/IAM/latest/APIReference/API_GetInstanceProfile.html">GetInstanceProfile</a>.</p>
 *          </note>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListInstanceProfilesRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * // { // ListInstanceProfilesResponse
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
 * @param ListInstanceProfilesCommandInput - {@link ListInstanceProfilesCommandInput}
 * @returns {@link ListInstanceProfilesCommandOutput}
 * @see {@link ListInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
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
export class ListInstanceProfilesCommand extends $Command
  .classBuilder<
    ListInstanceProfilesCommandInput,
    ListInstanceProfilesCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "ListInstanceProfiles", {})
  .n("IAMClient", "ListInstanceProfilesCommand")
  .sc(ListInstanceProfiles)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListInstanceProfilesRequest;
      output: ListInstanceProfilesResponse;
    };
    sdk: {
      input: ListInstanceProfilesCommandInput;
      output: ListInstanceProfilesCommandOutput;
    };
  };
}
