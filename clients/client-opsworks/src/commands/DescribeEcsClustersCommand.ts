// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeEcsClustersRequest, DescribeEcsClustersResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DescribeEcsClustersCommand, se_DescribeEcsClustersCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeEcsClustersCommand}.
 */
export interface DescribeEcsClustersCommandInput extends DescribeEcsClustersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeEcsClustersCommand}.
 */
export interface DescribeEcsClustersCommandOutput extends DescribeEcsClustersResult, __MetadataBearer {}

/**
 * <p>Describes Amazon ECS clusters that are registered with a stack. If you specify only a stack ID,
 *     you can use the <code>MaxResults</code> and <code>NextToken</code> parameters to paginate the
 *           response. However, OpsWorks Stacks currently supports only one cluster per layer, so the result
 *     set has a maximum of one element.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Show, Deploy, or
 *       Manage permissions level for the stack or an attached policy that explicitly grants
 *       permission. For more information about user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 *          <p>This call accepts only one resource-identifying parameter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DescribeEcsClustersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeEcsClustersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeEcsClustersRequest
 *   EcsClusterArns: [ // Strings
 *     "STRING_VALUE",
 *   ],
 *   StackId: "STRING_VALUE",
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new DescribeEcsClustersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeEcsClustersResult
 * //   EcsClusters: [ // EcsClusters
 * //     { // EcsCluster
 * //       EcsClusterArn: "STRING_VALUE",
 * //       EcsClusterName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       RegisteredAt: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeEcsClustersCommandInput - {@link DescribeEcsClustersCommandInput}
 * @returns {@link DescribeEcsClustersCommandOutput}
 * @see {@link DescribeEcsClustersCommandInput} for command's `input` shape.
 * @see {@link DescribeEcsClustersCommandOutput} for command's `response` shape.
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
export class DescribeEcsClustersCommand extends $Command
  .classBuilder<
    DescribeEcsClustersCommandInput,
    DescribeEcsClustersCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeEcsClusters", {})
  .n("OpsWorksClient", "DescribeEcsClustersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeEcsClustersCommand)
  .de(de_DescribeEcsClustersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeEcsClustersRequest;
      output: DescribeEcsClustersResult;
    };
    sdk: {
      input: DescribeEcsClustersCommandInput;
      output: DescribeEcsClustersCommandOutput;
    };
  };
}
