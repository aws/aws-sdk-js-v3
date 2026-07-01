// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeAccountLimitsInput, DescribeAccountLimitsOutput } from "../models/models_0";
import { DescribeAccountLimits$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandInput extends DescribeAccountLimitsInput {}
/**
 * @public
 *
 * The output of {@link DescribeAccountLimitsCommand}.
 */
export interface DescribeAccountLimitsCommandOutput extends DescribeAccountLimitsOutput, __MetadataBearer {}

/**
 * <p>Describes the current Elastic Load Balancing resource limits for your AWS account.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/elasticloadbalancing/latest/classic/elb-limits.html">Limits for Your Classic Load Balancer</a>
 *             in the <i>Classic Load Balancers Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeAccountLimitsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeAccountLimitsInput
 *   Marker: "STRING_VALUE",
 *   PageSize: Number("int"),
 * };
 * const command = new DescribeAccountLimitsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeAccountLimitsOutput
 * //   Limits: [ // Limits
 * //     { // Limit
 * //       Name: "STRING_VALUE",
 * //       Max: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextMarker: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param DescribeAccountLimitsCommandInput - {@link DescribeAccountLimitsCommandInput}
 * @returns {@link DescribeAccountLimitsCommandOutput}
 * @see {@link DescribeAccountLimitsCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountLimitsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @public
 */
export class DescribeAccountLimitsCommand extends command<DescribeAccountLimitsCommandInput, DescribeAccountLimitsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeAccountLimits",
  DescribeAccountLimits$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeAccountLimitsInput;
      output: DescribeAccountLimitsOutput;
    };
    sdk: {
      input: DescribeAccountLimitsCommandInput;
      output: DescribeAccountLimitsCommandOutput;
    };
  };
}
