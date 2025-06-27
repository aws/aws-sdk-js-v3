// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRolesRequest, ListRolesResponse } from "../models/models_0";
import { de_ListRolesCommand, se_ListRolesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRolesCommand}.
 */
export interface ListRolesCommandInput extends ListRolesRequest {}
/**
 * @public
 *
 * The output of {@link ListRolesCommand}.
 */
export interface ListRolesCommandOutput extends ListRolesResponse, __MetadataBearer {}

/**
 * <p>Lists the IAM roles that have the specified path prefix. If there are none, the
 *             operation returns an empty list. For more information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object:</p>
 *             <ul>
 *                <li>
 *                   <p>PermissionsBoundary</p>
 *                </li>
 *                <li>
 *                   <p>RoleLastUsed</p>
 *                </li>
 *                <li>
 *                   <p>Tags</p>
 *                </li>
 *             </ul>
 *             <p>To view all of the information for a role, see <a>GetRole</a>.</p>
 *          </note>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRolesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRolesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListRolesRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListRolesCommand(input);
 * const response = await client.send(command);
 * // { // ListRolesResponse
 * //   Roles: [ // roleListType // required
 * //     { // Role
 * //       Path: "STRING_VALUE", // required
 * //       RoleName: "STRING_VALUE", // required
 * //       RoleId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       AssumeRolePolicyDocument: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       MaxSessionDuration: Number("int"),
 * //       PermissionsBoundary: { // AttachedPermissionsBoundary
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: [ // tagListType
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //         },
 * //       ],
 * //       RoleLastUsed: { // RoleLastUsed
 * //         LastUsedDate: new Date("TIMESTAMP"),
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRolesCommandInput - {@link ListRolesCommandInput}
 * @returns {@link ListRolesCommandOutput}
 * @see {@link ListRolesCommandInput} for command's `input` shape.
 * @see {@link ListRolesCommandOutput} for command's `response` shape.
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
export class ListRolesCommand extends $Command
  .classBuilder<
    ListRolesCommandInput,
    ListRolesCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListRoles", {})
  .n("IAMClient", "ListRolesCommand")
  .f(void 0, void 0)
  .ser(se_ListRolesCommand)
  .de(de_ListRolesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRolesRequest;
      output: ListRolesResponse;
    };
    sdk: {
      input: ListRolesCommandInput;
      output: ListRolesCommandOutput;
    };
  };
}
