// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetAccountAuthorizationDetailsRequest, GetAccountAuthorizationDetailsResponse } from "../models/models_0";
import { GetAccountAuthorizationDetails } from "../schemas/schemas_8_Instance";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetAccountAuthorizationDetailsCommand}.
 */
export interface GetAccountAuthorizationDetailsCommandInput extends GetAccountAuthorizationDetailsRequest {}
/**
 * @public
 *
 * The output of {@link GetAccountAuthorizationDetailsCommand}.
 */
export interface GetAccountAuthorizationDetailsCommandOutput
  extends GetAccountAuthorizationDetailsResponse,
    __MetadataBearer {}

/**
 * <p>Retrieves information about all IAM users, groups, roles, and policies in your Amazon Web Services
 *             account, including their relationships to one another. Use this operation to obtain a
 *             snapshot of the configuration of IAM permissions (users, groups, roles, and policies)
 *             in your account.</p>
 *          <note>
 *             <p>Policies returned by this operation are URL-encoded compliant
 *     with <a href="https://tools.ietf.org/html/rfc3986">RFC 3986</a>. You can use a URL
 *     decoding method to convert the policy back to plain JSON text. For example, if you use Java, you
 *     can use the <code>decode</code> method of the <code>java.net.URLDecoder</code> utility class in
 *     the Java SDK. Other languages and SDKs provide similar functionality, and some SDKs do this decoding
 *     automatically.</p>
 *          </note>
 *          <p>You can optionally filter the results using the <code>Filter</code> parameter. You can
 *             paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetAccountAuthorizationDetailsCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetAccountAuthorizationDetailsCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // GetAccountAuthorizationDetailsRequest
 *   Filter: [ // entityListType
 *     "User" || "Role" || "Group" || "LocalManagedPolicy" || "AWSManagedPolicy",
 *   ],
 *   MaxItems: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new GetAccountAuthorizationDetailsCommand(input);
 * const response = await client.send(command);
 * // { // GetAccountAuthorizationDetailsResponse
 * //   UserDetailList: [ // userDetailListType
 * //     { // UserDetail
 * //       Path: "STRING_VALUE",
 * //       UserName: "STRING_VALUE",
 * //       UserId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       UserPolicyList: [ // policyDetailListType
 * //         { // PolicyDetail
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       GroupList: [ // groupNameListType
 * //         "STRING_VALUE",
 * //       ],
 * //       AttachedManagedPolicies: [ // attachedPoliciesListType
 * //         { // AttachedPolicy
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
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
 * //   GroupDetailList: [ // groupDetailListType
 * //     { // GroupDetail
 * //       Path: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       GroupId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       GroupPolicyList: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachedManagedPolicies: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * //   RoleDetailList: [ // roleDetailListType
 * //     { // RoleDetail
 * //       Path: "STRING_VALUE",
 * //       RoleName: "STRING_VALUE",
 * //       RoleId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       AssumeRolePolicyDocument: "STRING_VALUE",
 * //       InstanceProfileList: [ // instanceProfileListType
 * //         { // InstanceProfile
 * //           Path: "STRING_VALUE", // required
 * //           InstanceProfileName: "STRING_VALUE", // required
 * //           InstanceProfileId: "STRING_VALUE", // required
 * //           Arn: "STRING_VALUE", // required
 * //           CreateDate: new Date("TIMESTAMP"), // required
 * //           Roles: [ // roleListType // required
 * //             { // Role
 * //               Path: "STRING_VALUE", // required
 * //               RoleName: "STRING_VALUE", // required
 * //               RoleId: "STRING_VALUE", // required
 * //               Arn: "STRING_VALUE", // required
 * //               CreateDate: new Date("TIMESTAMP"), // required
 * //               AssumeRolePolicyDocument: "STRING_VALUE",
 * //               Description: "STRING_VALUE",
 * //               MaxSessionDuration: Number("int"),
 * //               PermissionsBoundary: {
 * //                 PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //                 PermissionsBoundaryArn: "STRING_VALUE",
 * //               },
 * //               Tags: [
 * //                 {
 * //                   Key: "STRING_VALUE", // required
 * //                   Value: "STRING_VALUE", // required
 * //                 },
 * //               ],
 * //               RoleLastUsed: { // RoleLastUsed
 * //                 LastUsedDate: new Date("TIMESTAMP"),
 * //                 Region: "STRING_VALUE",
 * //               },
 * //             },
 * //           ],
 * //           Tags: "<tagListType>",
 * //         },
 * //       ],
 * //       RolePolicyList: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyDocument: "STRING_VALUE",
 * //         },
 * //       ],
 * //       AttachedManagedPolicies: [
 * //         {
 * //           PolicyName: "STRING_VALUE",
 * //           PolicyArn: "STRING_VALUE",
 * //         },
 * //       ],
 * //       PermissionsBoundary: {
 * //         PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //         PermissionsBoundaryArn: "STRING_VALUE",
 * //       },
 * //       Tags: "<tagListType>",
 * //       RoleLastUsed: {
 * //         LastUsedDate: new Date("TIMESTAMP"),
 * //         Region: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   Policies: [ // ManagedPolicyDetailListType
 * //     { // ManagedPolicyDetail
 * //       PolicyName: "STRING_VALUE",
 * //       PolicyId: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Path: "STRING_VALUE",
 * //       DefaultVersionId: "STRING_VALUE",
 * //       AttachmentCount: Number("int"),
 * //       PermissionsBoundaryUsageCount: Number("int"),
 * //       IsAttachable: true || false,
 * //       Description: "STRING_VALUE",
 * //       CreateDate: new Date("TIMESTAMP"),
 * //       UpdateDate: new Date("TIMESTAMP"),
 * //       PolicyVersionList: [ // policyDocumentVersionListType
 * //         { // PolicyVersion
 * //           Document: "STRING_VALUE",
 * //           VersionId: "STRING_VALUE",
 * //           IsDefaultVersion: true || false,
 * //           CreateDate: new Date("TIMESTAMP"),
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
 * @param GetAccountAuthorizationDetailsCommandInput - {@link GetAccountAuthorizationDetailsCommandInput}
 * @returns {@link GetAccountAuthorizationDetailsCommandOutput}
 * @see {@link GetAccountAuthorizationDetailsCommandInput} for command's `input` shape.
 * @see {@link GetAccountAuthorizationDetailsCommandOutput} for command's `response` shape.
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
export class GetAccountAuthorizationDetailsCommand extends $Command
  .classBuilder<
    GetAccountAuthorizationDetailsCommandInput,
    GetAccountAuthorizationDetailsCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "GetAccountAuthorizationDetails", {})
  .n("IAMClient", "GetAccountAuthorizationDetailsCommand")
  .sc(GetAccountAuthorizationDetails)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetAccountAuthorizationDetailsRequest;
      output: GetAccountAuthorizationDetailsResponse;
    };
    sdk: {
      input: GetAccountAuthorizationDetailsCommandInput;
      output: GetAccountAuthorizationDetailsCommandOutput;
    };
  };
}
