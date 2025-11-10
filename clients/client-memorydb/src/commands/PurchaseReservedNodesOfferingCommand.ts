// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { MemoryDBClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MemoryDBClient";
import { PurchaseReservedNodesOfferingRequest, PurchaseReservedNodesOfferingResponse } from "../models/models_0";
import { PurchaseReservedNodesOffering } from "../schemas/schemas_0";

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
 * // import type { MemoryDBClientConfig } from "@aws-sdk/client-memorydb";
 * const config = {}; // type is MemoryDBClientConfig
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
 *  <p>The specified parameter combination is not valid.</p>
 *
 * @throws {@link InvalidParameterValueException} (client fault)
 *  <p>The specified parameter value is not valid.</p>
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
 *  <p>The required service-linked role was not found.</p>
 *
 * @throws {@link TagQuotaPerResourceExceeded} (client fault)
 *  <p>The request cannot be processed because it would exceed the maximum number of tags allowed per resource.</p>
 *
 * @throws {@link MemoryDBServiceException}
 * <p>Base exception class for all service exceptions from MemoryDB service.</p>
 *
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
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("AmazonMemoryDB", "PurchaseReservedNodesOffering", {})
  .n("MemoryDBClient", "PurchaseReservedNodesOfferingCommand")
  .sc(PurchaseReservedNodesOffering)
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
