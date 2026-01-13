// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import type { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReservedCacheNodesMessage, ReservedCacheNodeMessage } from "../models/models_0";
import { DescribeReservedCacheNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedCacheNodesCommand}.
 */
export interface DescribeReservedCacheNodesCommandInput extends DescribeReservedCacheNodesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedCacheNodesCommand}.
 */
export interface DescribeReservedCacheNodesCommandOutput extends ReservedCacheNodeMessage, __MetadataBearer {}

/**
 * <p>Returns information about reserved cache nodes for this account, or about a specified
 *             reserved cache node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // DescribeReservedCacheNodesMessage
 *   ReservedCacheNodeId: "STRING_VALUE",
 *   ReservedCacheNodesOfferingId: "STRING_VALUE",
 *   CacheNodeType: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   ProductDescription: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * // { // ReservedCacheNodeMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedCacheNodes: [ // ReservedCacheNodeList
 * //     { // ReservedCacheNode
 * //       ReservedCacheNodeId: "STRING_VALUE",
 * //       ReservedCacheNodesOfferingId: "STRING_VALUE",
 * //       CacheNodeType: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CacheNodeCount: Number("int"),
 * //       ProductDescription: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservationARN: "STRING_VALUE",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedCacheNodesCommandInput - {@link DescribeReservedCacheNodesCommandInput}
 * @returns {@link DescribeReservedCacheNodesCommandOutput}
 * @see {@link DescribeReservedCacheNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReservedCacheNodeNotFoundFault} (client fault)
 *  <p>The requested reserved cache node was not found.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example DescribeReservedCacheNodes
 * ```javascript
 * // Returns information about reserved cache nodes for this account, or about a specified reserved cache node. If the account has no reserved cache nodes, the operation returns an empty list, as shown here.
 * const input = {
 *   MaxRecords: 25
 * };
 * const command = new DescribeReservedCacheNodesCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class DescribeReservedCacheNodesCommand extends $Command
  .classBuilder<
    DescribeReservedCacheNodesCommandInput,
    DescribeReservedCacheNodesCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "DescribeReservedCacheNodes", {})
  .n("ElastiCacheClient", "DescribeReservedCacheNodesCommand")
  .sc(DescribeReservedCacheNodes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedCacheNodesMessage;
      output: ReservedCacheNodeMessage;
    };
    sdk: {
      input: DescribeReservedCacheNodesCommandInput;
      output: DescribeReservedCacheNodesCommandOutput;
    };
  };
}
