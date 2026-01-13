// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { DescribeReservedNodesMessage, ReservedNodesMessage } from "../models/models_0";
import type { RedshiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RedshiftClient";
import { DescribeReservedNodes$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedNodesCommand}.
 */
export interface DescribeReservedNodesCommandInput extends DescribeReservedNodesMessage {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodesCommand}.
 */
export interface DescribeReservedNodesCommandOutput extends ReservedNodesMessage, __MetadataBearer {}

/**
 * <p>Returns the descriptions of the reserved nodes.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodesCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodesCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * // import type { RedshiftClientConfig } from "@aws-sdk/client-redshift";
 * const config = {}; // type is RedshiftClientConfig
 * const client = new RedshiftClient(config);
 * const input = { // DescribeReservedNodesMessage
 *   ReservedNodeId: "STRING_VALUE",
 *   MaxRecords: Number("int"),
 *   Marker: "STRING_VALUE",
 * };
 * const command = new DescribeReservedNodesCommand(input);
 * const response = await client.send(command);
 * // { // ReservedNodesMessage
 * //   Marker: "STRING_VALUE",
 * //   ReservedNodes: [ // ReservedNodeList
 * //     { // ReservedNode
 * //       ReservedNodeId: "STRING_VALUE",
 * //       ReservedNodeOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       UsagePrice: Number("double"),
 * //       CurrencyCode: "STRING_VALUE",
 * //       NodeCount: Number("int"),
 * //       State: "STRING_VALUE",
 * //       OfferingType: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ReservedNodeOfferingType: "Regular" || "Upgradable",
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedNodesCommandInput - {@link DescribeReservedNodesCommandInput}
 * @returns {@link DescribeReservedNodesCommandOutput}
 * @see {@link DescribeReservedNodesCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodesCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for RedshiftClient's `config` shape.
 *
 * @throws {@link DependentServiceUnavailableFault} (client fault)
 *  <p>Your request cannot be completed because a dependent internal service is
 *             temporarily unavailable. Wait 30 to 60 seconds and try again.</p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The specified reserved compute node not found.</p>
 *
 * @throws {@link RedshiftServiceException}
 * <p>Base exception class for all service exceptions from Redshift service.</p>
 *
 *
 * @public
 */
export class DescribeReservedNodesCommand extends $Command
  .classBuilder<
    DescribeReservedNodesCommandInput,
    DescribeReservedNodesCommandOutput,
    RedshiftClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: RedshiftClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RedshiftServiceVersion20121201", "DescribeReservedNodes", {})
  .n("RedshiftClient", "DescribeReservedNodesCommand")
  .sc(DescribeReservedNodes$)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedNodesMessage;
      output: ReservedNodesMessage;
    };
    sdk: {
      input: DescribeReservedNodesCommandInput;
      output: DescribeReservedNodesCommandOutput;
    };
  };
}
