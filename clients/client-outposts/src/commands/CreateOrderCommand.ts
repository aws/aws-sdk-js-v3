// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { CreateOrderInput, CreateOrderOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_CreateOrderCommand, se_CreateOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link CreateOrderCommand}.
 */
export interface CreateOrderCommandInput extends CreateOrderInput {}
/**
 * @public
 *
 * The output of {@link CreateOrderCommand}.
 */
export interface CreateOrderCommandOutput extends CreateOrderOutput, __MetadataBearer {}

/**
 * <p>Creates an order for an Outpost.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // CreateOrderInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   LineItems: [ // LineItemRequestListDefinition // required
 *     { // LineItemRequest
 *       CatalogItemId: "STRING_VALUE",
 *       Quantity: Number("int"),
 *     },
 *   ],
 *   PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT", // required
 *   PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * };
 * const command = new CreateOrderCommand(input);
 * const response = await client.send(command);
 * // { // CreateOrderOutput
 * //   Order: { // Order
 * //     OutpostId: "STRING_VALUE",
 * //     OrderId: "STRING_VALUE",
 * //     Status: "RECEIVED" || "PENDING" || "PROCESSING" || "INSTALLING" || "FULFILLED" || "CANCELLED" || "PREPARING" || "IN_PROGRESS" || "DELIVERED" || "COMPLETED" || "ERROR",
 * //     LineItems: [ // LineItemListDefinition
 * //       { // LineItem
 * //         CatalogItemId: "STRING_VALUE",
 * //         LineItemId: "STRING_VALUE",
 * //         Quantity: Number("int"),
 * //         Status: "PREPARING" || "BUILDING" || "SHIPPED" || "DELIVERED" || "INSTALLING" || "INSTALLED" || "ERROR" || "CANCELLED" || "REPLACED",
 * //         ShipmentInformation: { // ShipmentInformation
 * //           ShipmentTrackingNumber: "STRING_VALUE",
 * //           ShipmentCarrier: "DHL" || "DBS" || "FEDEX" || "UPS" || "EXPEDITORS",
 * //         },
 * //         AssetInformationList: [ // LineItemAssetInformationList
 * //           { // LineItemAssetInformation
 * //             AssetId: "STRING_VALUE",
 * //             MacAddressList: [ // MacAddressList
 * //               "STRING_VALUE",
 * //             ],
 * //           },
 * //         ],
 * //         PreviousLineItemId: "STRING_VALUE",
 * //         PreviousOrderId: "STRING_VALUE",
 * //       },
 * //     ],
 * //     PaymentOption: "ALL_UPFRONT" || "NO_UPFRONT" || "PARTIAL_UPFRONT",
 * //     OrderSubmissionDate: new Date("TIMESTAMP"),
 * //     OrderFulfilledDate: new Date("TIMESTAMP"),
 * //     PaymentTerm: "THREE_YEARS" || "ONE_YEAR" || "FIVE_YEARS",
 * //     OrderType: "OUTPOST" || "REPLACEMENT",
 * //   },
 * // };
 *
 * ```
 *
 * @param CreateOrderCommandInput - {@link CreateOrderCommandInput}
 * @returns {@link CreateOrderCommandOutput}
 * @see {@link CreateOrderCommandInput} for command's `input` shape.
 * @see {@link CreateOrderCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have permission to perform this operation.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>Updating or deleting this resource can cause an inconsistent state.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded a service quota.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class CreateOrderCommand extends $Command
  .classBuilder<
    CreateOrderCommandInput,
    CreateOrderCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "CreateOrder", {})
  .n("OutpostsClient", "CreateOrderCommand")
  .f(void 0, void 0)
  .ser(se_CreateOrderCommand)
  .de(de_CreateOrderCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CreateOrderInput;
      output: CreateOrderOutput;
    };
    sdk: {
      input: CreateOrderCommandInput;
      output: CreateOrderCommandOutput;
    };
  };
}
