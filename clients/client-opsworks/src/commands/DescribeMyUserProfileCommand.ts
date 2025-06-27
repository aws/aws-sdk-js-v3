// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeMyUserProfileResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeMyUserProfileCommand, se_DescribeMyUserProfileCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeMyUserProfileCommand}.
 */
export interface DescribeMyUserProfileCommandInput {}
/**
 * @public
 *
 * The output of {@link DescribeMyUserProfileCommand}.
 */
export interface DescribeMyUserProfileCommandOutput extends DescribeMyUserProfileResult, __MetadataBearer {}

/**
 * <p>Describes a user's SSH information.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have self-management
 *       enabled or an attached policy that explicitly grants permissions. For more information about user
 *       permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeMyUserProfileCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeMyUserProfileCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = {};
 * const command = new DescribeMyUserProfileCommand(input);
 * const response = await client.send(command);
 * // { // DescribeMyUserProfileResult
 * //   UserProfile: { // SelfUserProfile
 * //     IamUserArn: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     SshUsername: "STRING_VALUE",
 * //     SshPublicKey: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeMyUserProfileCommandInput - {@link DescribeMyUserProfileCommandInput}
 * @returns {@link DescribeMyUserProfileCommandOutput}
 * @see {@link DescribeMyUserProfileCommandInput} for command's `input` shape.
 * @see {@link DescribeMyUserProfileCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DescribeMyUserProfileCommand extends $Command
  .classBuilder<
    DescribeMyUserProfileCommandInput,
    DescribeMyUserProfileCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeMyUserProfile", {})
  .n("OpsWorksClient", "DescribeMyUserProfileCommand")
  .f(void 0, void 0)
  .ser(se_DescribeMyUserProfileCommand)
  .de(de_DescribeMyUserProfileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: {};
      output: DescribeMyUserProfileResult;
    };
    sdk: {
      input: DescribeMyUserProfileCommandInput;
      output: DescribeMyUserProfileCommandOutput;
    };
  };
}
