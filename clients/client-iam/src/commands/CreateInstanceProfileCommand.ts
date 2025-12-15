// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import type { CreateInstanceProfileRequest, CreateInstanceProfileResponse } from "../models/models_0";
import { CreateInstanceProfile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandInput extends CreateInstanceProfileRequest {}
/**
 * @public
 *
 * The output of {@link CreateInstanceProfileCommand}.
 */
export interface CreateInstanceProfileCommandOutput extends CreateInstanceProfileResponse, __MetadataBearer {}

/**
 * <p> Creates a new instance profile. For information about instance profiles, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2.html">Using
 *                 roles for applications on Amazon EC2</a> in the
 *             <i>IAM User Guide</i>, and <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/iam-roles-for-amazon-ec2.html#ec2-instance-profile">Instance profiles</a> in the <i>Amazon EC2 User Guide</i>.</p>
 *          <p> For information about the number of instance profiles you can create, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html">IAM object
 *                 quotas</a> in the <i>IAM User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, CreateInstanceProfileCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, CreateInstanceProfileCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * // import type { IAMClientConfig } from "@aws-sdk/client-iam";
 * const config = {}; // type is IAMClientConfig
 * const client = new IAMClient(config);
 * const input = { // CreateInstanceProfileRequest
 *   InstanceProfileName: "STRING_VALUE", // required
 *   Path: "STRING_VALUE",
 *   Tags: [ // tagListType
 *     { // Tag
 *       Key: "STRING_VALUE", // required
 *       Value: "STRING_VALUE", // required
 *     },
 *   ],
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * // { // CreateInstanceProfileResponse
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
 * @param CreateInstanceProfileCommandInput - {@link CreateInstanceProfileCommandInput}
 * @returns {@link CreateInstanceProfileCommandOutput}
 * @see {@link CreateInstanceProfileCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceProfileCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for IAMClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>The request was rejected because multiple requests to change this object were submitted
 *       simultaneously. Wait a few minutes and submit your request again.</p>
 *
 * @throws {@link EntityAlreadyExistsException} (client fault)
 *  <p>The request was rejected because it attempted to create a resource that already
 *       exists.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The request was rejected because an invalid or out-of-range value was supplied for an
 *       input parameter.</p>
 *
 * @throws {@link LimitExceededException} (client fault)
 *  <p>The request was rejected because it attempted to create resources beyond the current
 *       Amazon Web Services account limits. The error message describes the limit exceeded.</p>
 *
 * @throws {@link ServiceFailureException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link IAMServiceException}
 * <p>Base exception class for all service exceptions from IAM service.</p>
 *
 *
 * @example To create an instance profile
 * ```javascript
 * // The following command creates an instance profile named Webserver that is ready to have a role attached and then be associated with an EC2 instance.
 * const input = {
 *   InstanceProfileName: "Webserver"
 * };
 * const command = new CreateInstanceProfileCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   InstanceProfile: {
 *     Arn: "arn:aws:iam::123456789012:instance-profile/Webserver",
 *     CreateDate: "2015-03-09T20:33:19.626Z",
 *     InstanceProfileId: "AIPAJMBYC7DLSPEXAMPLE",
 *     InstanceProfileName: "Webserver",
 *     Path: "/",
 *     Roles:     []
 *   }
 * }
 * *\/
 * ```
 *
 * @public
 */
export class CreateInstanceProfileCommand extends $Command
  .classBuilder<
    CreateInstanceProfileCommandInput,
    CreateInstanceProfileCommandOutput,
    IAMClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: IAMClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AWSIdentityManagementV20100508", "CreateInstanceProfile", {})
  .n("IAMClient", "CreateInstanceProfileCommand")
  .sc(CreateInstanceProfile$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateInstanceProfileRequest;
      output: CreateInstanceProfileResponse;
    };
    sdk: {
      input: CreateInstanceProfileCommandInput;
      output: CreateInstanceProfileCommandOutput;
    };
  };
}
