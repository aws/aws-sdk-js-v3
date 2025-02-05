// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeRaidArraysRequest, DescribeRaidArraysResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeRaidArraysCommand, se_DescribeRaidArraysCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeRaidArraysCommand}.
 */
export interface DescribeRaidArraysCommandInput extends DescribeRaidArraysRequest {}
/**
 * @public
 *
 * The output of {@link DescribeRaidArraysCommand}.
 */
export interface DescribeRaidArraysCommandOutput extends DescribeRaidArraysResult, __MetadataBearer {}

/**
 * <p>Describe an instance's RAID arrays.</p>
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
 * import { OpsWorksClient, DescribeRaidArraysCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeRaidArraysCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeRaidArraysRequest
 *   InstanceId: "STRING_VALUE",
 *   StackId: "STRING_VALUE",
 *   RaidArrayIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeRaidArraysCommand(input);
 * const response = await client.send(command);
 * // { // DescribeRaidArraysResult
 * //   RaidArrays: [ // RaidArrays
 * //     { // RaidArray
 * //       RaidArrayId: "STRING_VALUE",
 * //       InstanceId: "STRING_VALUE",
 * //       Name: "STRING_VALUE",
 * //       RaidLevel: Number("int"),
 * //       NumberOfDisks: Number("int"),
 * //       Size: Number("int"),
 * //       Device: "STRING_VALUE",
 * //       MountPoint: "STRING_VALUE",
 * //       AvailabilityZone: "STRING_VALUE",
 * //       CreatedAt: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       VolumeType: "STRING_VALUE",
 * //       Iops: Number("int"),
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeRaidArraysCommandInput - {@link DescribeRaidArraysCommandInput}
 * @returns {@link DescribeRaidArraysCommandOutput}
 * @see {@link DescribeRaidArraysCommandInput} for command's `input` shape.
 * @see {@link DescribeRaidArraysCommandOutput} for command's `response` shape.
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
export class DescribeRaidArraysCommand extends $Command
  .classBuilder<
    DescribeRaidArraysCommandInput,
    DescribeRaidArraysCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeRaidArrays", {})
  .n("OpsWorksClient", "DescribeRaidArraysCommand")
  .f(void 0, void 0)
  .ser(se_DescribeRaidArraysCommand)
  .de(de_DescribeRaidArraysCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeRaidArraysRequest;
      output: DescribeRaidArraysResult;
    };
    sdk: {
      input: DescribeRaidArraysCommandInput;
      output: DescribeRaidArraysCommandOutput;
    };
  };
}
