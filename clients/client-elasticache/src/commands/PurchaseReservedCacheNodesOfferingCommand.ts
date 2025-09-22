// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { ElastiCacheClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ElastiCacheClient";
import { commonParams } from "../endpoint/EndpointParameters";
import {
  PurchaseReservedCacheNodesOfferingMessage,
  PurchaseReservedCacheNodesOfferingResult,
} from "../models/models_0";
import { PurchaseReservedCacheNodesOffering } from "../schemas/schemas_6_Nodes";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedCacheNodesOfferingCommand}.
 */
export interface PurchaseReservedCacheNodesOfferingCommandInput extends PurchaseReservedCacheNodesOfferingMessage {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedCacheNodesOfferingCommand}.
 */
export interface PurchaseReservedCacheNodesOfferingCommandOutput
  extends PurchaseReservedCacheNodesOfferingResult,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase a reserved cache node offering. Reserved nodes are not eligible
 *             for cancellation and are non-refundable. For more information, see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/dg/reserved-nodes.html">Managing Costs with Reserved Nodes</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * // import type { ElastiCacheClientConfig } from "@aws-sdk/client-elasticache";
 * const config = {}; // type is ElastiCacheClientConfig
 * const client = new ElastiCacheClient(config);
 * const input = { // PurchaseReservedCacheNodesOfferingMessage
 *   ReservedCacheNodesOfferingId: "STRING_VALUE", // required
 *   ReservedCacheNodeId: "STRING_VALUE",
 *   CacheNodeCount: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PurchaseReservedCacheNodesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedCacheNodesOfferingResult
 * //   ReservedCacheNode: { // ReservedCacheNode
 * //     ReservedCacheNodeId: "STRING_VALUE",
 * //     ReservedCacheNodesOfferingId: "STRING_VALUE",
 * //     CacheNodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     UsagePrice: Number("double"),
 * //     CacheNodeCount: Number("int"),
 * //     ProductDescription: "STRING_VALUE",
 * //     OfferingType: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ReservationARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseReservedCacheNodesOfferingCommandInput - {@link PurchaseReservedCacheNodesOfferingCommandInput}
 * @returns {@link PurchaseReservedCacheNodesOfferingCommandOutput}
 * @see {@link PurchaseReservedCacheNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedCacheNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for ElastiCacheClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p>Two or more incompatible parameters were specified.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The value for a parameter is invalid.</p>
 *
 * @throws {@link ReservedCacheNodeAlreadyExistsFault} (client fault)
 *  <p>You already have a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedCacheNodeQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the user's cache node
 *             quota.</p>
 *
 * @throws {@link ReservedCacheNodesOfferingNotFoundFault} (client fault)
 *  <p>The requested cache node offering does not exist.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would cause the resource to have more than
 *             the allowed number of tags. The maximum number of tags permitted on a resource is
 *             50.</p>
 *
 * @throws {@link ElastiCacheServiceException}
 * <p>Base exception class for all service exceptions from ElastiCache service.</p>
 *
 *
 * @example PurchaseReservedCacheNodesOfferings
 * ```javascript
 * // Allows you to purchase a reserved cache node offering.
 * const input = {
 *   ReservedCacheNodesOfferingId: "1ef01f5b-94ff-433f-a530-61a56bfc8e7a"
 * };
 * const command = new PurchaseReservedCacheNodesOfferingCommand(input);
 * const response = await client.send(command);
 * /* response is
 * { /* metadata only *\/ }
 * *\/
 * ```
 *
 * @public
 */
export class PurchaseReservedCacheNodesOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedCacheNodesOfferingCommandInput,
    PurchaseReservedCacheNodesOfferingCommandOutput,
    ElastiCacheClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: ElastiCacheClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonElastiCacheV9", "PurchaseReservedCacheNodesOffering", {})
  .n("ElastiCacheClient", "PurchaseReservedCacheNodesOfferingCommand")
  .sc(PurchaseReservedCacheNodesOffering)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseReservedCacheNodesOfferingMessage;
      output: PurchaseReservedCacheNodesOfferingResult;
    };
    sdk: {
      input: PurchaseReservedCacheNodesOfferingCommandInput;
      output: PurchaseReservedCacheNodesOfferingCommandOutput;
    };
  };
}
