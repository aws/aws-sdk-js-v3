// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { DetachElasticLoadBalancerRequest } from "../models/models_0";
import { OpsWorksClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksClient";
import { de_DetachElasticLoadBalancerCommand, se_DetachElasticLoadBalancerCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DetachElasticLoadBalancerCommand}.
 */
export interface DetachElasticLoadBalancerCommandInput extends DetachElasticLoadBalancerRequest {}
/**
 * @public
 *
 * The output of {@link DetachElasticLoadBalancerCommand}.
 */
export interface DetachElasticLoadBalancerCommandOutput extends __MetadataBearer {}

/**
 * <p>Detaches a specified Elastic Load Balancing instance from its layer.</p>
 *          <p>
 *             <b>Required Permissions</b>: To use this action, an IAM user must have a Manage
 *           permissions
 *       level for the stack, or an attached policy that explicitly grants permissions. For more
 *       information on user permissions, see <a href="https://docs.aws.amazon.com/opsworks/latest/userguide/opsworks-security-users.html">Managing User
 *         Permissions</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksClient, DetachElasticLoadBalancerCommand } from "@aws-sdk/client-opsworks"; // ES Modules import
 * // const { OpsWorksClient, DetachElasticLoadBalancerCommand } = require("@aws-sdk/client-opsworks"); // CommonJS import
 * const client = new OpsWorksClient(config);
 * const input = { // DetachElasticLoadBalancerRequest
 *   ElasticLoadBalancerName: "STRING_VALUE", // required
 *   LayerId: "STRING_VALUE", // required
 * };
 * const command = new DetachElasticLoadBalancerCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DetachElasticLoadBalancerCommandInput - {@link DetachElasticLoadBalancerCommandInput}
 * @returns {@link DetachElasticLoadBalancerCommandOutput}
 * @see {@link DetachElasticLoadBalancerCommandInput} for command's `input` shape.
 * @see {@link DetachElasticLoadBalancerCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksClientResolvedConfig | config} for OpsWorksClient's `config` shape.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>Indicates that a resource was not found.</p>
 *
 * @throws {@link OpsWorksServiceException}
 * <p>Base exception class for all service exceptions from OpsWorks service.</p>
 *
 *
 * @public
 */
export class DetachElasticLoadBalancerCommand extends $Command
  .classBuilder<
    DetachElasticLoadBalancerCommandInput,
    DetachElasticLoadBalancerCommandOutput,
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
  .s("OpsWorks_20130218", "DetachElasticLoadBalancer", {})
  .n("OpsWorksClient", "DetachElasticLoadBalancerCommand")
  .f(void 0, void 0)
  .ser(se_DetachElasticLoadBalancerCommand)
  .de(de_DetachElasticLoadBalancerCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DetachElasticLoadBalancerRequest;
      output: {};
    };
    sdk: {
      input: DetachElasticLoadBalancerCommandInput;
      output: DetachElasticLoadBalancerCommandOutput;
    };
  };
}
