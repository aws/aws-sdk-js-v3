// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribePermissionsRequest, DescribePermissionsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribePermissionsCommand, se_DescribePermissionsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribePermissionsCommand}.
 */
export interface DescribePermissionsCommandInput extends DescribePermissionsRequest {}
/**
 * @public
 *
 * The output of {@link DescribePermissionsCommand}.
 */
export interface DescribePermissionsCommandOutput extends DescribePermissionsResult, __MetadataBearer {}

/**
 * <p>Describes the permissions for a specified stack.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribePermissionsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribePermissionsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribePermissionsRequest
 *   IamUserArn: "STRING_VALUE",
 *   StackId: "STRING_VALUE",
 * };
 * const command = new DescribePermissionsCommand(input);
 * const response = await client.send(command);
 * // { // DescribePermissionsResult
 * //   Permissions: [ // Permissions
 * //     { // Permission
 * //       StackId: "STRING_VALUE",
 * //       IamUserArn: "STRING_VALUE",
 * //       AllowSsh: true || false,
 * //       AllowSudo: true || false,
 * //       Level: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribePermissionsCommandInput - {@link DescribePermissionsCommandInput}
 * @returns {@link DescribePermissionsCommandOutput}
 * @see {@link DescribePermissionsCommandInput} for command's `input` shape.
 * @see {@link DescribePermissionsCommandOutput} for command's `response` shape.
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
 * @public
 */
export class DescribePermissionsCommand extends $Command
  .classBuilder<
    DescribePermissionsCommandInput,
    DescribePermissionsCommandOutput,
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
  .s("OpsWorks_20130218", "DescribePermissions", {})
  .n("OpsWorksClient", "DescribePermissionsCommand")
  .f(void 0, void 0)
  .ser(se_DescribePermissionsCommand)
  .de(de_DescribePermissionsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribePermissionsRequest;
      output: DescribePermissionsResult;
    };
    sdk: {
      input: DescribePermissionsCommandInput;
      output: DescribePermissionsCommandOutput;
    };
  };
}
