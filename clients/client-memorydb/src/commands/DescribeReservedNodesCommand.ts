// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeReservedNodesRequest, DescribeReservedNodesResponse } from "../models/models_0";
import { de_DescribeReservedNodesCommand, se_DescribeReservedNodesCommand } from "../protocols/Aws_json1_1";

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
export interface DescribeReservedNodesCommandInput extends DescribeReservedNodesRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodesCommand}.
 */
export interface DescribeReservedNodesCommandOutput extends DescribeReservedNodesResponse, __MetadataBearer {}

/**
 * <p>Returns information about reserved nodes for this account, or about a specified reserved node.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeReservedNodesCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeReservedNodesCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeReservedNodesRequest
 *   ReservationId: "STRING_VALUE",
 *   ReservedNodesOfferingId: "STRING_VALUE",
 *   NodeType: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReservedNodesCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedNodesResponse
 * //   NextToken: "STRING_VALUE",
 * //   ReservedNodes: [ // ReservedNodeList
 * //     { // ReservedNode
 * //       ReservationId: "STRING_VALUE",
 * //       ReservedNodesOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       StartTime: new Date("TIMESTAMP"),
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       NodeCount: Number("int"),
 * //       OfferingType: "STRING_VALUE",
 * //       State: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //       ARN: "STRING_VALUE",
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
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ReservedNodeNotFoundFault} (client fault)
 *  <p>The requested node does not exist.</p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 *
 * @public
 */
export class DescribeReservedNodesCommand extends $Command
  .classBuilder<
    DescribeReservedNodesCommandInput,
    DescribeReservedNodesCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "DescribeReservedNodes", {})
  .n("MemoryDBClient", "DescribeReservedNodesCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedNodesCommand)
  .de(de_DescribeReservedNodesCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: DescribeReservedNodesRequest;
      output: DescribeReservedNodesResponse;
    };
    sdk: {
      input: DescribeReservedNodesCommandInput;
      output: DescribeReservedNodesCommandOutput;
    };
  };
}
