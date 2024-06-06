// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { GetInstanceProfileRequest, GetInstanceProfileResponse } from "../models/models_0";
import { de_GetInstanceProfileCommand, se_GetInstanceProfileCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetInstanceProfileCommand}.
 */
export interface GetInstanceProfileCommandInput extends GetInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link GetInstanceProfileCommand}.
 */
export interface GetInstanceProfileCommandOutput extends GetInstanceProfileResponse, __MetadataBearer {}

/**
 * <p> Retrieves information about the specified instance profile, including the instance
 *             profile's path, GUID, ARN, and role. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html">Using
 *                 instance profiles</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, GetInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, GetInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const input = { // GetInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 * };
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // GetInstanceProfileResponse
 * //   InstanceProfile: { // InstanceProfile
 * //     Path: "STRING_VALUE", // required
 * //     InstanceProfileName: "STRING_VALUE", // required
 * //     InstanceProfileId: "STRING_VALUE", // required
 * //     Arn: "STRING_VALUE", // required
 * //     CreateDate: new Date("TIMESTAMP"), // required
 * //     Roles: [ // roleListType // required
 * //       { // Role
 * //         Path: "STRING_VALUE", // required
 * //         RoleName: "STRING_VALUE", // required
 * //         RoleId: "STRING_VALUE", // required
 * //         Arn: "STRING_VALUE", // required
 * //         CreateDate: new Date("TIMESTAMP"), // required
 * //         AssumeRolePolicyDocument: "STRING_VALUE",
 * //         Description: "STRING_VALUE",
 * //         MaxSessionDuration: Number("int"),
 * //         PermissionsBoundary: { // AttachedPermissionsBoundary
 * //           PermissionsBoundaryType: "PermissionsBoundaryPolicy",
 * //           PermissionsBoundaryArn: "STRING_VALUE",
 * //         },
 * //         Tags: [ // tagListType
 * //           { // Tag
 * //             Key: "STRING_VALUE", // required
 * //             Value: "STRING_VALUE", // required
 * //           },
 * //         ],
 * //         RoleLastUsed: { // RoleLastUsed
 * //           LastUsedDate: new Date("TIMESTAMP"),
 * //           Region: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //     Tags: [
 * //       {
 * //         Key: "STRING_VALUE", // required
 * //         Value: "STRING_VALUE", // required
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param GetInstanceProfileCommandInput - {@link GetInstanceProfileCommandInput}
 * @returns {@link GetInstanceProfileCommandOutput}
 * @see {@link GetInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link GetInstanceProfileCommandOutput} for command's `response` shape.
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
 * @example To get information about an instance profile
 * ```javascript
 * // The following command gets information about the instance profile named ExampleInstanceProfile.
 * const input = {
 *   "InstanceProfileName": "ExampleInstanceProfile"
 * };
 * const command = new GetInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "InstanceProfile": {
 *     "Arn": "arn:aws:iam::336924118301:instance-profile/ExampleInstanceProfile",
 *     "CreateDate": "2013-06-12T23:52:02Z",
 *     "InstanceProfileId": "AID2MAB8DPLSRHEXAMPLE",
 *     "InstanceProfileName": "ExampleInstanceProfile",
 *     "Path": "/",
 *     "Roles": [
 *       {
 *         "Arn": "arn:aws:iam::336924118301:role/Test-Role",
 *         "AssumeRolePolicyDocument": "<URL-encoded-JSON>",
 *         "CreateDate": "2013-01-09T06:33:26Z",
 *         "Path": "/",
 *         "RoleId": "AIDGPMS9RO4H3FEXAMPLE",
 *         "RoleName": "Test-Role"
 *       }
 *     ]
 *   }
 * }
 * *\/
 * // example id: 463b9ba5-18cc-4608-9ccb-5a7c6b6e5fe7
 * ```
 *
 */
export class GetInstanceProfileCommand extends $Command
  .classBuilder<
    GetInstanceProfileCommandInput,
    GetInstanceProfileCommandOutput,
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
  .s("AWSIdentityManagementV20100508", "GetInstanceProfile", {})
  .n("IAMClient", "GetInstanceProfileCommand")
  .f(void 0, void 0)
  .ser(se_GetInstanceProfileCommand)
  .de(de_GetInstanceProfileCommand)
  .build() {}
