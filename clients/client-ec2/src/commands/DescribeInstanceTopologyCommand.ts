// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeInstanceTopologyRequest, DescribeInstanceTopologyResult } from "../models/models_4";
import { de_DescribeInstanceTopologyCommand, se_DescribeInstanceTopologyCommand } from "../protocols/Aws_ec2";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeInstanceTopologyCommand}.
 */
export interface DescribeInstanceTopologyCommandInput extends DescribeInstanceTopologyRequest {}
/**
 * @public
 *
 * The output of {@link DescribeInstanceTopologyCommand}.
 */
export interface DescribeInstanceTopologyCommandOutput extends DescribeInstanceTopologyResult, __MetadataBearer {}

/**
 * <p>Describes a tree-based hierarchy that represents the physical host placement of your
 *             EC2 instances within an Availability Zone or Local Zone. You can use this information to
 *             determine the relative proximity of your EC2 instances within the Amazon Web Services network to
 *             support your tightly coupled workloads.</p>
 *          <p class="title">
 *             <b>Limitations</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>Supported zones</p>
 *                <ul>
 *                   <li>
 *                      <p>Availability Zone</p>
 *                   </li>
 *                   <li>
 *                      <p>Local Zone</p>
 *                   </li>
 *                </ul>
 *             </li>
 *             <li>
 *                <p>Supported instance types</p>
 *                <ul>
 *                   <li>
 *                      <p>Returns 3 network nodes in the response</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>hpc6a.48xlarge</code> | <code>hpc6id.32xlarge</code> |
 *                                     <code>hpc7a.12xlarge</code> | <code>hpc7a.24xlarge</code> |
 *                                     <code>hpc7a.48xlarge</code> | <code>hpc7a.96xlarge</code> |
 *                                     <code>hpc7g.4xlarge</code> | <code>hpc7g.8xlarge</code> |
 *                                     <code>hpc7g.16xlarge</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>p3dn.24xlarge</code> | <code>p4d.24xlarge</code> |
 *                                     <code>p4de.24xlarge</code> | <code>p5.48xlarge</code> |
 *                                     <code>p5e.48xlarge</code> | <code>p5en.48xlarge</code>
 *                            </p>
 *                         </li>
 *                         <li>
 *                            <p>
 *                               <code>trn1.2xlarge</code> | <code>trn1.32xlarge</code> |
 *                                     <code>trn1n.32xlarge</code> | <code>trn2.48xlarge</code> |
 *                                     <code>trn2u.48xlarge</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                   <li>
 *                      <p>Returns 4 network nodes in the response</p>
 *                      <ul>
 *                         <li>
 *                            <p>
 *                               <code>p6-b200.48xlarge</code>
 *                            </p>
 *                         </li>
 *                      </ul>
 *                   </li>
 *                </ul>
 *             </li>
 *          </ul>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-instance-topology.html">Amazon EC2 instance
 *                 topology</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstanceTopologyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstanceTopologyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const input = { // DescribeInstanceTopologyRequest
 *   DryRun: true || false,
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   InstanceIds: [ // DescribeInstanceTopologyInstanceIdSet
 *     "STRING_VALUE",
 *   ],
 *   GroupNames: [ // DescribeInstanceTopologyGroupNameSet
 *     "STRING_VALUE",
 *   ],
 *   Filters: [ // FilterList
 *     { // Filter
 *       Name: "STRING_VALUE",
 *       Values: [ // ValueStringList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   ],
 * };
 * const command = new DescribeInstanceTopologyCommand(input);
 * const response = await client.send(command);
 * // { // DescribeInstanceTopologyResult
 * //   Instances: [ // InstanceSet
 * //     { // InstanceTopology
 * //       InstanceId: "STRING_VALUE",
 * //       InstanceType: "STRING_VALUE",
 * //       GroupName: "STRING_VALUE",
 * //       NetworkNodes: [ // NetworkNodesList
 * //         "STRING_VALUE",
 * //       ],
 * //       AvailabilityZone: "STRING_VALUE",
 * //       ZoneId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeInstanceTopologyCommandInput - {@link DescribeInstanceTopologyCommandInput}
 * @returns {@link DescribeInstanceTopologyCommandOutput}
 * @see {@link DescribeInstanceTopologyCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceTopologyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for EC2Client's `config` shape.
 *
 * @throws {@link EC2ServiceException}
 * <p>Base exception class for all service exceptions from EC2 service.</p>
 *
 *
 * @public
 */
export class DescribeInstanceTopologyCommand extends $Command
  .classBuilder<
    DescribeInstanceTopologyCommandInput,
    DescribeInstanceTopologyCommandOutput,
    EC2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: EC2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonEC2", "DescribeInstanceTopology", {})
  .n("EC2Client", "DescribeInstanceTopologyCommand")
  .f(void 0, void 0)
  .ser(se_DescribeInstanceTopologyCommand)
  .de(de_DescribeInstanceTopologyCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeInstanceTopologyRequest;
      output: DescribeInstanceTopologyResult;
    };
    sdk: {
      input: DescribeInstanceTopologyCommandInput;
      output: DescribeInstanceTopologyCommandOutput;
    };
  };
}
