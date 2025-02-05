// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import {
  ElasticLoadBalancingV2ClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ElasticLoadBalancingV2Client";
import { commonParams } from "../endpoint/EndpointParameters";
import { DescribeListenerAttributesInput, DescribeListenerAttributesOutput } from "../models/models_0";
import { de_DescribeListenerAttributesCommand, se_DescribeListenerAttributesCommand } from "../protocols/Aws_query";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeListenerAttributesCommand}.
 */
export interface DescribeListenerAttributesCommandInput extends DescribeListenerAttributesInput {}
/**
 * @public
 *
 * The output of {@link DescribeListenerAttributesCommand}.
 */
export interface DescribeListenerAttributesCommandOutput extends DescribeListenerAttributesOutput, __MetadataBearer {}

/**
 * <p>Describes the attributes for the specified listener.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingV2Client, DescribeListenerAttributesCommand } from "@aws-sdk/client-elastic-load-balancing-v2"; // ES Modules import
 * // const { ElasticLoadBalancingV2Client, DescribeListenerAttributesCommand } = require("@aws-sdk/client-elastic-load-balancing-v2"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new ElasticLoadBalancingV2Client(config);
 * const input = { // DescribeListenerAttributesInput
 *   ListenerArn: "STRING_VALUE", // required
 * };
 * const command = new DescribeListenerAttributesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeListenerAttributesOutput
 * //   Attributes: [ // ListenerAttributes
 * //     { // ListenerAttribute
 * //       Key: "STRING_VALUE",
 * //       Value: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeListenerAttributesCommandInput - {@link DescribeListenerAttributesCommandInput}
 * @returns {@link DescribeListenerAttributesCommandOutput}
 * @see {@link DescribeListenerAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeListenerAttributesCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingV2ClientResolvedConfig | config} for ElasticLoadBalancingV2Client's `config` shape.
 *
 * @throws {@link ListenerNotFoundException} (client fault)
 *  <p>The specified listener does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingV2ServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancingV2 service.</p>
 *
 * @public
 * @example Describe listener attributes
 * ```javascript
 * // This example describes the attributes of the specified listener.
 * const input = {
 *   "ListenerArn": "aws:elasticloadbalancing:us-east-1:123456789012:listener/net/my-listener/73e2d6bc24d8a067/d5dc06411fa5bcea"
 * };
 * const command = new DescribeListenerAttributesCommand(input);
 * await client.send(command);
 * // example id: describe-listener-attributes-1724874395194
 * ```
 *
 */
export class DescribeListenerAttributesCommand extends $Command
  .classBuilder<
    DescribeListenerAttributesCommandInput,
    DescribeListenerAttributesCommandOutput,
    ElasticLoadBalancingV2ClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElasticLoadBalancingV2ClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("ElasticLoadBalancing_v10", "DescribeListenerAttributes", {})
  .n("ElasticLoadBalancingV2Client", "DescribeListenerAttributesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeListenerAttributesCommand)
  .de(de_DescribeListenerAttributesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeListenerAttributesInput;
      output: DescribeListenerAttributesOutput;
    };
    sdk: {
      input: DescribeListenerAttributesCommandInput;
      output: DescribeListenerAttributesCommandOutput;
    };
  };
}
