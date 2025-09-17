// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListGroupsForUserRequest, ListGroupsForUserResponse } from "../models/models_0";
import { de_ListGroupsForUserCommand, se_ListGroupsForUserCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGroupsForUserCommand}.
 */
export interface ListGroupsForUserCommandInput extends ListGroupsForUserRequest {}
/**
 * @public
 *
 * The output of {@link ListGroupsForUserCommand}.
 */
export interface ListGroupsForUserCommandOutput extends ListGroupsForUserResponse, __MetadataBearer {}

/**
 * <p>Lists the IAM groups that the specified IAM user belongs to.</p>
 *          <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListGroupsForUserCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListGroupsForUserCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // ListGroupsForUserRequest
 *   UserName: "STRING_VALUE", // required
 *   Marker: "STRING_VALUE",
 *   MaxItems: Number("int"),
 * };
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * // { // ListGroupsForUserResponse
 * //   Groups: [ // groupListType // required
 * //     { // Group
 * //       Path: "STRING_VALUE", // required
 * //       GroupName: "STRING_VALUE", // required
 * //       GroupId: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       CreateDate: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   IsTruncated: true || false,
 * //   Marker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGroupsForUserCommandInput - {@link ListGroupsForUserCommandInput}
 * @returns {@link ListGroupsForUserCommandOutput}
 * @see {@link ListGroupsForUserCommandInput} for command's `input` shape.
 * @see {@link ListGroupsForUserCommandOutput} for command's `response` shape.
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
 * @example To list the groups that an IAM user belongs to
 * ```javascript
 * // The following command displays the groups that the IAM user named Bob belongs to.
 * const input = {
 *   UserName: "Bob"
 * };
 * const command = new ListGroupsForUserCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Groups: [
 *     {
 *       Arn: "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/engineering/Test",
 *       CreateDate: "2016-11-30T14:10:01.156Z",
 *       GroupId: "AGP2111111111EXAMPLE",
 *       GroupName: "Test",
 *       Path: "/division_abc/subdivision_xyz/product_1234/engineering/"
 *     },
 *     {
 *       Arn: "arn:aws:iam::123456789012:group/division_abc/subdivision_xyz/product_1234/Managers",
 *       CreateDate: "2016-06-12T20:14:52.032Z",
 *       GroupId: "AGPI222222222SEXAMPLE",
 *       GroupName: "Managers",
 *       Path: "/division_abc/subdivision_xyz/product_1234/"
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class ListGroupsForUserCommand extends $Command
  .classBuilder<
    ListGroupsForUserCommandInput,
    ListGroupsForUserCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "ListGroupsForUser", {})
  .n("IAMClient", "ListGroupsForUserCommand")
  .f(void 0, void 0)
  .ser(se_ListGroupsForUserCommand)
  .de(de_ListGroupsForUserCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGroupsForUserRequest;
      output: ListGroupsForUserResponse;
    };
    sdk: {
      input: ListGroupsForUserCommandInput;
      output: ListGroupsForUserCommandOutput;
    };
  };
}
