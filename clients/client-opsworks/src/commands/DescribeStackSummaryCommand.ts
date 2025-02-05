// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeStackSummaryRequest, DescribeStackSummaryResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeStackSummaryCommand, se_DescribeStackSummaryCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeStackSummaryCommand}.
 */
export interface DescribeStackSummaryCommandInput extends DescribeStackSummaryRequest {}
/**
 * @public
 *
 * The output of {@link DescribeStackSummaryCommand}.
 */
export interface DescribeStackSummaryCommandOutput extends DescribeStackSummaryResult, __MetadataBearer {}

/**
 * <p>Describes the number of layers and apps in a specified stack, and the number of instances in
 *       each state, such as <code>running_setup</code> or <code>online</code>.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack, or an attached policy that explicitly grants
 *       permissions. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeStackSummaryCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeStackSummaryCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeStackSummaryRequest
 *   StackId: "STRING_VALUE", // required
 * };
 * const command = new DescribeStackSummaryCommand(input);
 * const response = await client.send(command);
 * // { // DescribeStackSummaryResult
 * //   StackSummary: { // StackSummary
 * //     StackId: "STRING_VALUE",
 * //     Name: "STRING_VALUE",
 * //     Arn: "STRING_VALUE",
 * //     LayersCount: Number("int"),
 * //     AppsCount: Number("int"),
 * //     InstancesCount: { // InstancesCount
 * //       Assigning: Number("int"),
 * //       Booting: Number("int"),
 * //       ConnectionLost: Number("int"),
 * //       Deregistering: Number("int"),
 * //       Online: Number("int"),
 * //       Pending: Number("int"),
 * //       Rebooting: Number("int"),
 * //       Registered: Number("int"),
 * //       Registering: Number("int"),
 * //       Requested: Number("int"),
 * //       RunningSetup: Number("int"),
 * //       SetupFailed: Number("int"),
 * //       ShuttingDown: Number("int"),
 * //       StartFailed: Number("int"),
 * //       StopFailed: Number("int"),
 * //       Stopped: Number("int"),
 * //       Stopping: Number("int"),
 * //       Terminated: Number("int"),
 * //       Terminating: Number("int"),
 * //       Unassigning: Number("int"),
 * //     },
 * //   },
 * // };
 *
 * ```
 *
 * @param DescribeStackSummaryCommandInput - {@link DescribeStackSummaryCommandInput}
 * @returns {@link DescribeStackSummaryCommandOutput}
 * @see {@link DescribeStackSummaryCommandInput} for command's `input` shape.
 * @see {@link DescribeStackSummaryCommandOutput} for command's `response` shape.
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
export class DescribeStackSummaryCommand extends $Command
  .classBuilder<
    DescribeStackSummaryCommandInput,
    DescribeStackSummaryCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeStackSummary", {})
  .n("OpsWorksClient", "DescribeStackSummaryCommand")
  .f(void 0, void 0)
  .ser(se_DescribeStackSummaryCommand)
  .de(de_DescribeStackSummaryCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeStackSummaryRequest;
      output: DescribeStackSummaryResult;
    };
    sdk: {
      input: DescribeStackSummaryCommandInput;
      output: DescribeStackSummaryCommandOutput;
    };
  };
}
