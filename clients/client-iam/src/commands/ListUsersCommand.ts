// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListUsersRequest, ListUsersResponse } from "../models/models_0";
import { de_ListUsersCommand, se_ListUsersCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListUsersCommand}.
 */
export interface ListUsersCommandInput extends ListUsersRequest {}
/**
 * @public
 *
 * The output of {@link ListUsersCommand}.
 */
export interface ListUsersCommandOutput extends ListUsersResponse, __MetadataBearer {}

/**
 * <p>Lists the IAM users that have the specified path prefix. If no path prefix is
 *             specified, the operation returns all users in the Amazon Web Services account. If there are none, the
 *             operation returns an empty list.</p>
 *          <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. This operation does not return the following attributes, even though they are an attribute of the returned object:</p>
 *             <ul>
 *                <li>
 *                   <p>PermissionsBoundary</p>
 *                </li>
 *                <li>
 *                   <p>Tags</p>
 *                </li>
 *             </ul>
 *             <p>To view all of the information for a user, see <a>GetUser</a>.</p>
 *          </note>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListUsersCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListUsersCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListUsersRequest
 *   PathPrefix: "STRING_VALUE",
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * // { // ListUsersResponse
 * //   Users: [ // userListType // required
 * //     { // User
 * //       Path: "STRING_VALUE", // required
 * //       UserName: "STRING_VALUE", // required
 * //       UserId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //       PasswordLastUsed: new Date("TIMESTAMP"),
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
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListUsersCommandInput - {@link ListUsersCommandInput}
 * @returns {@link ListUsersCommandOutput}
 * @see {@link ListUsersCommandInput} for command's `input` shape.
 * @see {@link ListUsersCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 * @public
 * @example To list IAM users
 * ```javascript
 * // The following command lists the IAM users in the current account.
 * const input = {};
 * const command = new ListUsersCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "Users": [
 *     {
 *       "Arn": "arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Juan",
 *       "CreateDate": "2012-09-05T19:38:48Z",
 *       "PasswordLastUsed": "2016-09-08T21:47:36Z",
 *       "Path": "/division_abc/subdivision_xyz/engineering/",
 *       "UserId": "AID2MAB8DPLSRHEXAMPLE",
 *       "UserName": "Juan"
 *     },
 *     {
 *       "Arn": "arn:aws:iam::123456789012:user/division_abc/subdivision_xyz/engineering/Anika",
 *       "CreateDate": "2014-04-09T15:43:45Z",
 *       "PasswordLastUsed": "2016-09-24T16:18:07Z",
 *       "Path": "/division_abc/subdivision_xyz/engineering/",
 *       "UserId": "AIDIODR4TAW7CSEXAMPLE",
 *       "UserName": "Anika"
 *     }
 *   ]
 * }
 * *\/
 * // example id: 9edfbd73-03d8-4d8a-9a79-76c85e8c8298
 * ```
 *
 */
export class ListUsersCommand extends $Command
  .classBuilder<
    ListUsersCommandInput,
    ListUsersCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListUsers", {})
  .n("IAMClient", "ListUsersCommand")
  .f(void 0, void 0)
  .ser(se_ListUsersCommand)
  .de(de_ListUsersCommand)
  .build() {}
