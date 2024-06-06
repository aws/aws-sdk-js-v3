// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { DescribeReservedNodesOfferingsRequest, DescribeReservedNodesOfferingsResponse } from "../models/models_0";
import {
  de_DescribeReservedNodesOfferingsCommand,
  se_DescribeReservedNodesOfferingsCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link DescribeReservedNodesOfferingsCommand}.
 */
export interface DescribeReservedNodesOfferingsCommandInput extends DescribeReservedNodesOfferingsRequest {}
/**
 * @public
 *
 * The output of {@link DescribeReservedNodesOfferingsCommand}.
 */
export interface DescribeReservedNodesOfferingsCommandOutput
  extends DescribeReservedNodesOfferingsResponse,
    __MetadataBearer {}

/**
 * <p>Lists available reserved node offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, DescribeReservedNodesOfferingsCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, DescribeReservedNodesOfferingsCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * const client = new MemoryDBClient(config);
 * const input = { // DescribeReservedNodesOfferingsRequest
 *   ReservedNodesOfferingId: "STRING_VALUE",
 *   NodeType: "STRING_VALUE",
 *   Duration: "STRING_VALUE",
 *   OfferingType: "STRING_VALUE",
 *   MaxResults: Number("int"),
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new DescribeReservedNodesOfferingsCommand(input);
 * const response = await client.send(command);
 * // { // DescribeReservedNodesOfferingsResponse
 * //   NextToken: "STRING_VALUE",
 * //   ReservedNodesOfferings: [ // ReservedNodesOfferingList
 * //     { // ReservedNodesOffering
 * //       ReservedNodesOfferingId: "STRING_VALUE",
 * //       NodeType: "STRING_VALUE",
 * //       Duration: Number("int"),
 * //       FixedPrice: Number("double"),
 * //       OfferingType: "STRING_VALUE",
 * //       RecurringCharges: [ // RecurringChargeList
 * //         { // RecurringCharge
 * //           RecurringChargeAmount: Number("double"),
 * //           RecurringChargeFrequency: "STRING_VALUE",
 * //         },
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param DescribeReservedNodesOfferingsCommandInput - {@link DescribeReservedNodesOfferingsCommandInput}
 * @returns {@link DescribeReservedNodesOfferingsCommandOutput}
 * @see {@link DescribeReservedNodesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ReservedNodesOfferingNotFoundFault} (client fault)
 *  <p>The requested node offering does not exist.
 *
 *       </p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class DescribeReservedNodesOfferingsCommand extends $Command
  .classBuilder<
    DescribeReservedNodesOfferingsCommandInput,
    DescribeReservedNodesOfferingsCommandOutput,
    MemoryDBClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: MemoryDBClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("AmazonMemoryDB", "DescribeReservedNodesOfferings", {})
  .n("MemoryDBClient", "DescribeReservedNodesOfferingsCommand")
  .f(void 0, void 0)
  .ser(se_DescribeReservedNodesOfferingsCommand)
  .de(de_DescribeReservedNodesOfferingsCommand)
  .build() {}
