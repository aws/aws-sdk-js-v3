// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListRoleTagsRequest, ListRoleTagsResponse } from "../models/models_0";
import { de_ListRoleTagsCommand, se_ListRoleTagsCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListRoleTagsCommand}.
 */
export interface ListRoleTagsCommandInput extends ListRoleTagsRequest {}
/**
 * @public
 *
 * The output of {@link ListRoleTagsCommand}.
 */
export interface ListRoleTagsCommandOutput extends ListRoleTagsResponse, __MetadataBearer {}

/**
 * <p>Lists the tags that are attached to the specified role. The returned list of tags is
 *       sorted by tag key. For more information about tagging, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_tags.html">Tagging IAM resources</a> in the
 *       <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListRoleTagsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListRoleTagsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // ListRoleTagsRequest
 *   RoleName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * // { // ListRoleTagsResponse
 * //   Tags: [ // tagListType // required
 * //     { // Tag
 * //       Key: "STRING_VALUE", // required
 * //       Value: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRoleTagsCommandInput - {@link ListRoleTagsCommandInput}
 * @returns {@link ListRoleTagsCommandOutput}
 * @see {@link ListRoleTagsCommandInput} for command's `input` shape.
 * @see {@link ListRoleTagsCommandOutput} for command's `response` shape.
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
 * @public
 * @example To list the tags attached to an IAM role
 * ```javascript
 * // The following example shows how to list the tags attached to a role.
 * const input = {
 *   "RoleName": "taggedrole1"
 * };
 * const command = new ListRoleTagsCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "IsTruncated": false,
 *   "Tags": [
 *     {
 *       "Key": "Dept",
 *       "Value": "12345"
 *     },
 *     {
 *       "Key": "Team",
 *       "Value": "Accounting"
 *     }
 *   ]
 * }
 * *\/
 * // example id: to-list-the-tags-attached-to-an-iam-role-1506719238376
 * ```
 *
 */
export class ListRoleTagsCommand extends $Command
  .classBuilder<
    ListRoleTagsCommandInput,
    ListRoleTagsCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListRoleTags", {})
  .n("IAMClient", "ListRoleTagsCommand")
  .f(void 0, void 0)
  .ser(se_ListRoleTagsCommand)
  .de(de_ListRoleTagsCommand)
  .build() {}
