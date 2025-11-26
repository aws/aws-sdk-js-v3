// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { GetRoleRequest, GetRoleResponse } from "../models/models_0";
import { GetRole } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRoleCommand}.
 */
export interface GetRoleCommandInput extends GetRoleRequest {}
/**
 * @public
 *
 * The output of {@link GetRoleCommand}.
 */
export interface GetRoleCommandOutput extends GetRoleResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about the specified role, including the role's path, GUID, ARN,
 *             and the role's trust policy that grants permission to assume the role. For more
 *             information about roles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html">IAM roles</a> in the
 *                 <i>IAM User Guide</i>.</p>
 *          <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 *     automatically.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetRoleCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetRoleCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetRoleRequest
 *   RoleName: "STRING_VALUE", // required
 * };
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * // { // GetRoleResponse
 * //   Role: { // Role
 * //     Path: "STRING_VALUE", // required
 * //     RoleName: "STRING_VALUE", // required
 * //     RoleId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     AssumeRolePolicyDocument: "STRING_VALUE",
 * //     Description: "STRING_VALUE",
 * //     MaxSessionDuration: Number("int"),
 * //     PermissionsBoundary: { // AttachedPermissionsBoundary
 * //       PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //       PermissionsBoundaryArn: "STRING_VALUE",
 * //     },
 * //     Tags: [ // tagListType
 * //       { // Tag
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //     RoleLastUsed: { // RoleLastUsed
 * //       LastUsedDate: new Date("TIMESTAMP"),
 * //       Region: "STRING_VALUE",
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRoleCommandInput - {@link GetRoleCommandInput}
 * @returns {@link GetRoleCommandOutput}
 * @see {@link GetRoleCommandInput} for command's `input` shape.
 * @see {@link GetRoleCommandOutput} for command's `response` shape.
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
 * @example To get information about an IAM role
 * ```javascript
 * // The following command gets information about the role named Test-Role.
 * const input = {
 *   RoleName: "Test-Role"
 * };
 * const command = new GetRoleCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   Role: {
 *     Arn: "arn:aws:iam::123456789012:role/Test-Role",
 *     AssumeRolePolicyDocument: "<URL-encoded-JSON>",
 *     CreateDate: "2013-04-18T05:01:58Z",
 *     MaxSessionDuration: 3600,
 *     Path: "/",
 *     RoleId: "AROADBQP57FF2AEXAMPLE",
 *     RoleLastUsed: {
 *       LastUsedDate: "2019-11-18T05:01:58Z",
 *       Region: "us-east-1"
 *     },
 *     RoleName: "Test-Role"
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class GetRoleCommand extends $Command
  .classBuilder<
    GetRoleCommandInput,
    GetRoleCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetRole", {})
  .n("IAMClient", "GetRoleCommand")
  .sc(GetRole)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRoleRequest;
      output: GetRoleResponse;
    };
    sdk: {
      input: GetRoleCommandInput;
      output: GetRoleCommandOutput;
    };
  };
}
