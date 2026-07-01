// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { DescribeTagsInput, DescribeTagsOutput } from "../models/models_0";
import { DescribeTags$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandInput extends DescribeTagsInput {}
/**
 * @public
 *
 * The output of {@link DescribeTagsCommand}.
 */
export interface DescribeTagsCommandOutput extends DescribeTagsOutput, __MetadataBearer {}

/**
 * <p>Describes the tags associated with the specified load balancers.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticLoadBalancingClient, DescribeTagsCommand } from "@aws-sdk/client-elastic-load-balancing"; // ES Modules import
 * // const { ElasticLoadBalancingClient, DescribeTagsCommand } = require("@aws-sdk/client-elastic-load-balancing"); // CommonJS import
 * // import type { ElasticLoadBalancingClientConfig } from "@aws-sdk/client-elastic-load-balancing";
 * const config = {}; // type is ElasticLoadBalancingClientConfig
 * const client = new ElasticLoadBalancingClient(config);
 * const input = { // DescribeTagsInput
 *   LoadBalancerNames: [ // LoadBalancerNamesMax20 // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeTagsOutput
 * //   TagDescriptions: [ // TagDescriptions
 * //     { // TagDescription
 * //       LoadBalancerName: "STRING_VALUE",
 * //       Tags: [ // TagList
 * //         { // Tag
 * //           Key: "STRING_VALUE", // required
 * //           Value: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeTagsCommandInput - {@link DescribeTagsCommandInput}
 * @returns {@link DescribeTagsCommandOutput}
 * @see {@link DescribeTagsCommandInput} for command's `input` shape.
 * @see {@link DescribeTagsCommandOutput} for command's `response` shape.
 * @see {@link ElasticLoadBalancingClientResolvedConfig | config} for ElasticLoadBalancingClient's `config` shape.
 *
 * @throws {@link AccessPointNotFoundException} (client fault)
 *  <p>The specified load balancer does not exist.</p>
 *
 * @throws {@link ElasticLoadBalancingServiceException}
 * <p>Base exception class for all service exceptions from ElasticLoadBalancing service.</p>
 *
 *
 * @example To describe the tags for a load balancer
 * ```javascript
 * // This example describes the tags for the specified load balancer.
 * const input = {
 *   LoadBalancerNames: [
 *     "my-load-balancer"
 *   ]
 * };
 * const command = new DescribeTagsCommand(input);
 * const response = await client.send(command);
 * /* response is
 * {
 *   TagDescriptions: [
 *     {
 *       LoadBalancerName: "my-load-balancer",
 *       Tags: [
 *         {
 *           Key: "project",
 *           Value: "lima"
 *         },
 *         {
 *           Key: "department",
 *           Value: "digital-media"
 *         }
 *       ]
 *     }
 *   ]
 * }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeTagsCommand extends command<DescribeTagsCommandInput, DescribeTagsCommandOutput>(
  _ep0,
  _mw0,
  "DescribeTags",
  DescribeTags$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeTagsInput;
      output: DescribeTagsOutput;
    };
    sdk: {
      input: DescribeTagsCommandInput;
      output: DescribeTagsCommandOutput;
    };
  };
}
