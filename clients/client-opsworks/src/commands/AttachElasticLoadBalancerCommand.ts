// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { AttachElasticLoadBalancerRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_AttachElasticLoadBalancerCommand, se_AttachElasticLoadBalancerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link AttachElasticLoadBalancerCommand}.
 */
export interface AttachElasticLoadBalancerCommandInput extends AttachElasticLoadBalancerRequest {}
/**
 * @public
 *
 * The output of {@link AttachElasticLoadBalancerCommand}.
 */
export interface AttachElasticLoadBalancerCommandOutput extends __MetadataBearer {}

/**
 * <p>Attaches an Elastic Load Balancing load balancer to a specified layer. OpsWorks Stacks does not support
 *           Application Load Balancer. You can only use Classic Load Balancer with OpsWorks Stacks.
 *           For more information, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/layers-elb.html">Elastic Load
 *         Balancing</a>.</p>
 *          <note>
 *             <p>You must create the Elastic Load Balancing instance separately, by using the Elastic Load Balancing console, API, or CLI. For
 *         more information, see the <a href="https://docs.aws.amazon.com/ElasticLoadBalancing/latest/DeveloperGuide/Welcome.html">Elastic Load Balancing Developer Guide</a>.</p>
 *          </note>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, AttachElasticLoadBalancerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, AttachElasticLoadBalancerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // AttachElasticLoadBalancerRequest
 *   ElasticLoadBalancerName: "STRING_VALUE", // required
 *   LayerId: "STRING_VALUE", // required
 * };
 * const command = new AttachElasticLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param AttachElasticLoadBalancerCommandInput - {@link AttachElasticLoadBalancerCommandInput}
 * @returns {@link AttachElasticLoadBalancerCommandOutput}
 * @see {@link AttachElasticLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link AttachElasticLoadBalancerCommandOutput} for command's `response` shape.
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
export class AttachElasticLoadBalancerCommand extends $Command
  .classBuilder<
    AttachElasticLoadBalancerCommandInput,
    AttachElasticLoadBalancerCommandOutput,
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
  .s("OpsWorks_20130218", "AttachElasticLoadBalancer", {})
  .n("OpsWorksClient", "AttachElasticLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_AttachElasticLoadBalancerCommand)
  .de(de_AttachElasticLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: AttachElasticLoadBalancerRequest;
      output: {};
    };
    sdk: {
      input: AttachElasticLoadBalancerCommandInput;
      output: AttachElasticLoadBalancerCommandOutput;
    };
  };
}
