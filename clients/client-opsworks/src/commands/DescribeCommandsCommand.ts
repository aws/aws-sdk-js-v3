// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeCommandsRequest, DescribeCommandsResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeCommandsCommand, se_DescribeCommandsCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeCommandsCommand}.
 */
export interface DescribeCommandsCommandInput extends DescribeCommandsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeCommandsCommand}.
 */
export interface DescribeCommandsCommandOutput extends DescribeCommandsResult, __MetadataBearer {}

/**
 * <p>Describes the results of specified commands.</p>
 *          <note>
 *             <p>This call accepts only one resource-identifying parameter.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeCommandsCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeCommandsCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeCommandsRequest
 *   DeploymentId: "STRING_VALUE",
 *   InstanceId: "STRING_VALUE",
 *   CommandIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeCommandsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeCommandsResult
 * //   Commands: [ // Commands
 * //     { // Command
 * //       CommandId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       DeploymentId: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       AcknowledgedAt: "STRING_VALUE",
 * //       CompletedAt: "STRING_VALUE",
 * //       Status: "STRING_VALUE",
 * //       ExitCode: Number("int"),
 * //       LogUrl: "STRING_VALUE",
 * //       Type: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeCommandsCommandInput - {@link DescribeCommandsCommandInput}
 * @returns {@link DescribeCommandsCommandOutput}
 * @see {@link DescribeCommandsCommandInput} for command's `input` shape.
 * @see {@link DescribeCommandsCommandOutput} for command's `response` shape.
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
export class DescribeCommandsCommand extends $Command
  .classBuilder<
    DescribeCommandsCommandInput,
    DescribeCommandsCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeCommands", {})
  .n("OpsWorksClient", "DescribeCommandsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeCommandsCommand)
  .de(de_DescribeCommandsCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeCommandsRequest;
      output: DescribeCommandsResult;
    };
    sdk: {
      input: DescribeCommandsCommandInput;
      output: DescribeCommandsCommandOutput;
    };
  };
}
