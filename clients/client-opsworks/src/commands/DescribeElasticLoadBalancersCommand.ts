// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeElasticLoadBalancersRequest, DescribeElasticLoadBalancersResult } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import {
  de_DescribeElasticLoadBalancersCommand,
  se_DescribeElasticLoadBalancersCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeElasticLoadBalancersCommand}.
 */
export interface DescribeElasticLoadBalancersCommandInput extends DescribeElasticLoadBalancersRequest {}
/**
 * @public
 *
 * The output of {@link DescribeElasticLoadBalancersCommand}.
 */
export interface DescribeElasticLoadBalancersCommandOutput
  extends DescribeElasticLoadBalancersResult,
    __MetadataBearer {}

/**
 * <p>Describes a stack's Elastic Load Balancing instances.</p>
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
 * import { OpsWorksClient, DescribeElasticLoadBalancersCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DescribeElasticLoadBalancersCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DescribeElasticLoadBalancersRequest
 *   StackId: "STRING_VALUE",
 *   LayerIds: [ // Strings
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeElasticLoadBalancersCommand(input);
 * const response = await client.send(command);
 * // { // DescribeElasticLoadBalancersResult
 * //   ElasticLoadBalancers: [ // ElasticLoadBalancers
 * //     { // ElasticLoadBalancer
 * //       ElasticLoadBalancerName: "STRING_VALUE",
 * //       Region: "STRING_VALUE",
 * //       DnsName: "STRING_VALUE",
 * //       StackId: "STRING_VALUE",
 * //       LayerId: "STRING_VALUE",
 * //       VpcId: "STRING_VALUE",
 * //       AvailabilityZones: [ // Strings
 * //         "STRING_VALUE",
 * //       ],
 * //       SubnetIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //       Ec2InstanceIds: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeElasticLoadBalancersCommandInput - {@link DescribeElasticLoadBalancersCommandInput}
 * @returns {@link DescribeElasticLoadBalancersCommandOutput}
 * @see {@link DescribeElasticLoadBalancersCommandInput} for command's `input` shape.
 * @see {@link DescribeElasticLoadBalancersCommandOutput} for command's `response` shape.
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
export class DescribeElasticLoadBalancersCommand extends $Command
  .classBuilder<
    DescribeElasticLoadBalancersCommandInput,
    DescribeElasticLoadBalancersCommandOutput,
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
  .s("OpsWorks_20130218", "DescribeElasticLoadBalancers", {})
  .n("OpsWorksClient", "DescribeElasticLoadBalancersCommand")
  .f(void 0, void 0)
  .ser(se_DescribeElasticLoadBalancersCommand)
  .de(de_DescribeElasticLoadBalancersCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeElasticLoadBalancersRequest;
      output: DescribeElasticLoadBalancersResult;
    };
    sdk: {
      input: DescribeElasticLoadBalancersCommandInput;
      output: DescribeElasticLoadBalancersCommandOutput;
    };
  };
}
