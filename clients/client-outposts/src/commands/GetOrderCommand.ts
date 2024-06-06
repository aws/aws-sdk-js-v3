// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetOrderInput, GetOrderOutput } from "../models/models_0";
import { OutpostsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OutpostsClient";
import { de_GetOrderCommand, se_GetOrderCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetOrderCommand}.
 */
export interface GetOrderCommandInput extends GetOrderInput {}
/**
 * @public
 *
 * The output of {@link GetOrderCommand}.
 */
export interface GetOrderCommandOutput extends GetOrderOutput, __MetadataBearer {}

/**
 * <p>Gets information about the specified order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, GetOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, GetOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * const client = new OutpostsClient(config);
 * const input = { // GetOrderInput
 *   OrderId: "STRING_VALUE", // required
 * };
 * const command = new GetOrderCommand(input);
 * const response = await client.send(command);
 * // { // GetOrderOutput
 * //   Order: { // Order
 * //     OutpostId: "STRING_VALUE",
 * //     OrderId: "STRING_VALUE",
 * //     Status: "RECEIVED" || "PENDING" || "PROCESSING" || "INSTALLING" || "FULFILLED" || "CANCELLED" || "PREPARING" || "IN_PROGRESS" || "COMPLETED" || "ERROR",
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
 * //     PaymentTerm: "THREE_YEARS" || "ONE_YEAR",
 * //     OrderType: "OUTPOST" || "REPLACEMENT",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetOrderCommandInput - {@link GetOrderCommandInput}
 * @returns {@link GetOrderCommandOutput}
 * @see {@link GetOrderCommandInput} for command's `input` shape.
 * @see {@link GetOrderCommandOutput} for command's `response` shape.
 * @see {@link OutpostsClientResolvedConfig | config} for OutpostsClient's `config` shape.
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>An internal error has occurred.</p>
 *
 * @throws {@link NotFoundException} (client fault)
 *  <p>The specified request is not valid.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>A parameter is not valid.</p>
 *
 * @throws {@link OutpostsServiceException}
 * <p>Base exception class for all service exceptions from Outposts service.</p>
 *
 * @public
 */
export class GetOrderCommand extends $Command
  .classBuilder<
    GetOrderCommandInput,
    GetOrderCommandOutput,
    OutpostsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: OutpostsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("OutpostsOlafService", "GetOrder", {})
  .n("OutpostsClient", "GetOrderCommand")
  .f(void 0, void 0)
  .ser(se_GetOrderCommand)
  .de(de_GetOrderCommand)
  .build() {}
