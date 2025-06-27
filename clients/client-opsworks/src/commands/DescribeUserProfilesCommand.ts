// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeUserProfilesRequest, DescribeUserProfilesResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeUserProfilesCommand, se_DescribeUserProfilesCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeUserProfilesCommand}.
 */
export interface DescribeUserProfilesCommandInput extends DescribeUserProfilesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeUserProfilesCommand}.
 */
export interface DescribeUserProfilesCommandOutput extends DescribeUserProfilesResult, __MetadataBearer {}

/**
 * <p>Describe specified users.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have an attached policy
 *       that explicitly grants permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeUserProfilesCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeUserProfilesCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeUserProfilesRequest
 *   IamUserArns: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeUserProfilesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeUserProfilesResult
 * //   UserProfiles: [ // UserProfiles
 * //     { // UserProfile
 * //       IamUserArn: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       SshUsername: "STRING_VALUE",
 * //       SshPublicKey: "STRING_VALUE",
 * //       AllowSelfManagement: true || false,
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeUserProfilesCommandInput - {@link DescribeUserProfilesCommandInput}
 * @returns {@link DescribeUserProfilesCommandOutput}
 * @see {@link DescribeUserProfilesCommandInput} for command's `input` shape.
 * @see {@link DescribeUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>Indicates that a request was not valid.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DescribeUserProfilesCommand extends $Command
  .classBuilder<
    DescribeUserProfilesCommandInput,
    DescribeUserProfilesCommandOutput,
    OpsWorksClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OpsWorksClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OpsWorks_20130218", "DescribeUserProfiles", {})
  .n("OpsWorksClient", "DescribeUserProfilesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeUserProfilesCommand)
  .de(de_DescribeUserProfilesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeUserProfilesRequest;
      output: DescribeUserProfilesResult;
    };
    sdk: {
      input: DescribeUserProfilesCommandInput;
      output: DescribeUserProfilesCommandOutput;
    };
  };
}
