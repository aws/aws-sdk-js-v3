// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetPolicyRequest, GetPolicyResponse } from "../models/models_0";
import { de_GetPolicyCommand, se_GetPolicyCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandInput extends GetPolicyRequest {}
/**
 * @public
 *
 * The output of {@link GetPolicyCommand}.
 */
export interface GetPolicyCommandOutput extends GetPolicyResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified managed policy, including the policy's
 *             default version and the total number of IAM users, groups, and roles to which the
 *             policy is attached. To retrieve the list of the specific users, groups, and roles that
 *             the policy is attached to, use <a>ListEntitiesForPolicy</a>. This operation
 *             returns metadata about the policy. To retrieve the actual policy document for a specific
 *             version of the policy, use <a>GetPolicyVersion</a>.</p>
 *          <p>This operation retrieves information about managed policies. To retrieve information
 *             about an inline policy that is embedded with an IAM user, group, or role, use <a>GetUserPolicy</a>, <a>GetGroupPolicy</a>, or <a>GetRolePolicy</a>.</p>
 *          <p>For more information about policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/policies-managed-vs-inline.html">Managed policies and inline
 *                 policies</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetPolicyCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetPolicyCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetPolicyRequest
 *   PolicyArn: "STRING_VALUE", // required
 * };
 * const command = new GetPolicyCommand(input);
 * const response = await client.send(command);
 * // { // GetPolicyResponse
 * //   Policy: { // Policy
 * //     PolicyName: "STRING_VALUE",
 * //     PolicyId: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     Path: "STRING_VALUE",
 * //     DefaultVersionId: "STRING_VALUE",
 * //     AttachmentCount: Number("int"),
 * //     PermissionsBoundaryUsageCount: Number("int"),
 * //     IsAttachable: true || false,
 * //     Description: "STRING_VALUE",
 * //     CreateDate: new Date("TIMESTAMP"),
 * //     UpdateDate: new Date("TIMESTAMP"),
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetPolicyCommandInput - {@link GetPolicyCommandInput}
 * @returns {@link GetPolicyCommandOutput}
 * @see {@link GetPolicyCommandInput} for command's `input` shape.
 * @see {@link GetPolicyCommandOutput} for command's `response` shape.
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
export class GetPolicyCommand extends $Command
  .classBuilder<
    GetPolicyCommandInput,
    GetPolicyCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetPolicy", {})
  .n("IAMClient", "GetPolicyCommand")
  .f(void 0, void 0)
  .ser(se_GetPolicyCommand)
  .de(de_GetPolicyCommand)
  .build() {}
