// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListEntitiesForPolicyRequest, ListEntitiesForPolicyResponse } from "../models/models_0";
import { de_ListEntitiesForPolicyCommand, se_ListEntitiesForPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListEntitiesForPolicyCommand}.
 */
export interface ListEntitiesForPolicyCommandInput extends ListEntitiesForPolicyRequest {}
/**
 * @public
 *
 * The output of {@link ListEntitiesForPolicyCommand}.
 */
export interface ListEntitiesForPolicyCommandOutput extends ListEntitiesForPolicyResponse, __MetadataBearer {}

/**
 * <p>Lists all IAM users, groups, and roles that the specified managed policy is attached
 *             to.</p>
 *          <p>You can use the optional <code>EntityFilter</code> parameter to limit the results to a
 *             particular type of entity (users, groups, or roles). For example, to list only the roles
 *             that are attached to the specified policy, set <code>EntityFilter</code> to
 *                 <code>Role</code>.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListEntitiesForPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListEntitiesForPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListEntitiesForPolicyRequest
 *   PolicyArn: "STRING_VALUE", // required
 *   EntityFilter: "User" || "Role" || "Group" || "LocalManagedPolicy" || "AWSManagedPolicy",
 *   PathPrefix: "STRING_VALUE",
 *   PolicyUsageFilter: "PermissionsPolicy" || "PermissionsBoundary",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListEntitiesForPolicyCommand(input);
 * const response = await client.send(command);
 * // { // ListEntitiesForPolicyResponse
 * //   PolicyGroups: [ // PolicyGroupListType
 * //     { // PolicyGroup
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PolicyUsers: [ // PolicyUserListType
 * //     { // PolicyUser
 * //       UserName: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   PolicyRoles: [ // PolicyRoleListType
 * //     { // PolicyRole
 * //       RoleName: "STRING_VALUE",
 * //       RoleId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListEntitiesForPolicyCommandInput - {@link ListEntitiesForPolicyCommandInput}
 * @returns {@link ListEntitiesForPolicyCommandOutput}
 * @see {@link ListEntitiesForPolicyCommandInput} for command's `input` shape.
 * @see {@link ListEntitiesForPolicyCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
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
 * @public
 */
export class ListEntitiesForPolicyCommand extends $Command
  .classBuilder<
    ListEntitiesForPolicyCommandInput,
    ListEntitiesForPolicyCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AWSIdentityManagementV20100508", "ListEntitiesForPolicy", {})
  .n("IAMClient", "ListEntitiesForPolicyCommand")
  .f(void 0, void 0)
  .ser(se_ListEntitiesForPolicyCommand)
  .de(de_ListEntitiesForPolicyCommand)
  .build() {}
