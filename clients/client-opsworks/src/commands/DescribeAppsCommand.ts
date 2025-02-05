// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeAppsRequest, DescribeAppsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeAppsCommand, se_DescribeAppsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeAppsCommand}.
 */
export interface DescribeAppsCommandInput extends DescribeAppsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeAppsCommand}.
 */
export interface DescribeAppsCommandOutput extends DescribeAppsResult, __MetadataBearer {}

/**
 * <p>Requests a description of a specified set of apps.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy,
 *           or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeAppsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeAppsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeAppsRequest
 *   StackId: "STRING_VALUE",
 *   AppIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeAppsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAppsResult
 * //   Apps: [ // Apps
 * //     { // App
 * //       AppId: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       Shortname: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       Description: "STRING_VALUE",
 * //       DataSources: [ // DataSources
 * //         { // DataSource
 * //           Type: "STRING_VALUE",
 * //           Arn: "STRING_VALUE",
 * //           DatabaseName: "STRING_VALUE",
 * //         },
 * //       ],
 * //       Type: "aws-flow-ruby" || "java" || "rails" || "php" || "nodejs" || "static" || "other",
 * //       AppSource: { // Source
 * //         Type: "git" || "svn" || "archive" || "s3",
 * //         Url: "STRING_VALUE",
 * //         Username: "STRING_VALUE",
 * //         Password: "STRING_VALUE",
 * //         SshKey: "STRING_VALUE",
 * //         Revision: "STRING_VALUE",
 * //       },
 * //       Domains: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       EnableSsl: true || false,
 * //       SslConfiguration: { // SslConfiguration
 * //         Certificate: "STRING_VALUE", // required
 * //         PrivateKey: "STRING_VALUE", // required
 * //         Chain: "STRING_VALUE",
 * //       },
 * //       Attributes: { // AppAttributes
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //       CreatedAt: "STRING_VALUE",
 * //       Environment: [ // EnvironmentVariables
 * //         { // EnvironmentVariable
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE", // required
 * //           Secure: true || false,
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeAppsCommandInput - {@link DescribeAppsCommandInput}
 * @returns {@link DescribeAppsCommandOutput}
 * @see {@link DescribeAppsCommandInput} for command's `input` shape.
 * @see {@link DescribeAppsCommandOutput} for command's `response` shape.
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
export class DescribeAppsCommand extends $Command
  .classBuilder<
    DescribeAppsCommandInput,
    DescribeAppsCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeApps", {})
  .n("OpsWorksClient", "DescribeAppsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeAppsCommand)
  .de(de_DescribeAppsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAppsRequest;
      output: DescribeAppsResult;
    };
    sdk: {
      input: DescribeAppsCommandInput;
      output: DescribeAppsCommandOutput;
    };
  };
}
