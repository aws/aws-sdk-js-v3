// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStacksRequest, DescribeStacksResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeStacksCommand, se_DescribeStacksCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandInput extends DescribeStacksRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStacksCommand}.
 */
export interface DescribeStacksCommandOutput extends DescribeStacksResult, __MetadataBearer {}

/**
 * <p>Requests a description of one or more stacks.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStacksCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStacksCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeStacksRequest
 *   StackIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeStacksCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStacksResult
 * //   Stacks: [ // Stacks
 * //     { // Stack
 * //       StackId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Arn: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       Attributes: { // StackAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       ServiceRoleArn: "STRING_VALUE",
 * //       DefaultInstanceProfileArn: "STRING_VALUE",
 * //       DefaultOs: "STRING_VALUE",
 * //       HostnameTheme: "STRING_VALUE",
 * //       DefaultAvailabilityZone: "STRING_VALUE",
 * //       DefaultSubnetId: "STRING_VALUE",
 * //       CustomJson: "STRING_VALUE",
 * //       ConfigurationManager: { // StackConfigurationManager
 * //         Name: "STRING_VALUE",
 * //         Version: "STRING_VALUE",
 * //       },
 * //       ChefConfiguration: { // ChefConfiguration
 * //         ManageBerkshelf: true || false,
 * //         BerkshelfVersion: "STRING_VALUE",
 * //       },
 * //       UseCustomCookbooks: true || false,
 * //       UseOpsworksSecurityGroups: true || false,
 * //       CustomCookbooksSource: { // Source
 * //         Type: "git" || "svn" || "archive" || "s3",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         SshKey: "STRING_VALUE",
 * //         Revision: "STRING_VALUE",
 * //       },
 * //       DefaultSshKeyName: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       DefaultRootDeviceType: "ebs" || "instance-store",
 * //       AgentVersion: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeStacksCommandInput - {@link DescribeStacksCommandInput}
 * @returns {@link DescribeStacksCommandOutput}
 * @see {@link DescribeStacksCommandInput} for command's `input` shape.
 * @see {@link DescribeStacksCommandOutput} for command's `response` shape.
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
export class DescribeStacksCommand extends $Command
  .classBuilder<
    DescribeStacksCommandInput,
    DescribeStacksCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeStacks", {})
  .n("OpsWorksClient", "DescribeStacksCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStacksCommand)
  .de(de_DescribeStacksCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStacksRequest;
      output: DescribeStacksResult;
    };
    sdk: {
      input: DescribeStacksCommandInput;
      output: DescribeStacksCommandOutput;
    };
  };
}
