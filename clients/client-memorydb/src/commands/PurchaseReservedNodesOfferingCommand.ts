// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { PurchaseReservedNodesOfferingRequest, PurchaseReservedNodesOfferingResponse } from "../models/models_0";
import {
  de_PurchaseReservedNodesOfferingCommand,
  se_PurchaseReservedNodesOfferingCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandInput extends PurchaseReservedNodesOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseReservedNodesOfferingCommand}.
 */
export interface PurchaseReservedNodesOfferingCommandOutput
  extends PurchaseReservedNodesOfferingResponse,
    __MetadataBearer {}

/**
 * <p>Allows you to purchase a reserved  node offering. Reserved nodes are not eligible for cancellation and are non-refundable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MemoryDBClient, PurchaseReservedNodesOfferingCommand } from "@aws-sdk/client-memorydb"; // ES Modules import
 * // const { MemoryDBClient, PurchaseReservedNodesOfferingCommand } = require("@aws-sdk/client-memorydb"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new MemoryDBClient(config);
 * const input = { // PurchaseReservedNodesOfferingRequest
 *   ReservedNodesOfferingId: "STRING_VALUE", // required
 *   ReservationId: "STRING_VALUE",
 *   NodeCount: Number("int"),
 *   Tags: [ // TagList
 *     { // Tag
 *       Key: "STRING_VALUE",
 *       Value: "STRING_VALUE",
 *     },
 *   ],
 * };
 * const command = new PurchaseReservedNodesOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseReservedNodesOfferingResponse
 * //   ReservedNode: { // ReservedNode
 * //     ReservationId: "STRING_VALUE",
 * //     ReservedNodesOfferingId: "STRING_VALUE",
 * //     NodeType: "STRING_VALUE",
 * //     StartTime: new Date("TIMESTAMP"),
 * //     Duration: Number("int"),
 * //     FixedPrice: Number("double"),
 * //     NodeCount: Number("int"),
 * //     OfferingType: "STRING_VALUE",
 * //     State: "STRING_VALUE",
 * //     RecurringCharges: [ // RecurringChargeList
 * //       { // RecurringCharge
 * //         RecurringChargeAmount: Number("double"),
 * //         RecurringChargeFrequency: "STRING_VALUE",
 * //       },
 * //     ],
 * //     ARN: "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseReservedNodesOfferingCommandInput - {@link PurchaseReservedNodesOfferingCommandInput}
 * @returns {@link PurchaseReservedNodesOfferingCommandOutput}
 * @see {@link PurchaseReservedNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link MemoryDBClientResolvedConfig | config} for MemoryDBClient's `config` shape.
 *
 * @throws {@link InvalidParameterCombinationException} (client fault)
 *  <p></p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p></p>
 *
 * @throws {@link ReservedNodeAlreadyExistsFault} (client fault)
 *  <p>You already have a reservation with the given identifier.</p>
 *
 * @throws {@link ReservedNodeQuotaExceededFault} (client fault)
 *  <p>The request cannot be processed because it would exceed the user's node quota.</p>
 *
 * @throws {@link ReservedNodesOfferingNotFoundFault} (client fault)
 *  <p>The requested node offering does not exist.
 *
 *       </p>
 *
 * @throws {@link ServiceLinkedRoleNotFoundFault} (client fault)
 *  <p></p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p></p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
 * @public
 */
export class PurchaseReservedNodesOfferingCommand extends $Command
  .classBuilder<
    PurchaseReservedNodesOfferingCommandInput,
    PurchaseReservedNodesOfferingCommandOutput,
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
  .s("AmazonMemoryDB", "PurchaseReservedNodesOffering", {})
  .n("MemoryDBClient", "PurchaseReservedNodesOfferingCommand")
  .f(void 0, void 0)
  .ser(se_PurchaseReservedNodesOfferingCommand)
  .de(de_PurchaseReservedNodesOfferingCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseReservedNodesOfferingRequest;
      output: PurchaseReservedNodesOfferingResponse;
    };
    sdk: {
      input: PurchaseReservedNodesOfferingCommandInput;
      output: PurchaseReservedNodesOfferingCommandOutput;
    };
  };
}
