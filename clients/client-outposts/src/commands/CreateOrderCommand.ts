// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CreateOrderInput, CreateOrderOutput } from "../models/models_0";
import { CreateOrder$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
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
 * Creates an order for an Outpost.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OutpostsClient, CreateOrderCommand } from "@aws-sdk/client-outposts"; // ES Modules import
 * // const { OutpostsClient, CreateOrderCommand } = require("@aws-sdk/client-outposts"); // CommonJS import
 * // import type { OutpostsClientConfig } from "@aws-sdk/client-outposts";
 * const config = {}; // type is OutpostsClientConfig
 * const client = new OutpostsClient(config);
 * const input = { // CreateOrderInput
 *   OutpostIdentifier: "STRING_VALUE", // required
 *   QuoteIdentifier: "STRING_VALUE",
 *   QuoteOptionIdentifier: "STRING_VALUE",
 *   LineItems: [ // LineItemRequestListDefinition
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
 * //     QuoteIdentifier: "STRING_VALUE",
 * //     QuoteOptionIdentifier: "STRING_VALUE",
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
 *
 * You do not have permission to perform this operation.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting this resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * An internal error has occurred.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * The specified request is not valid.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded a service quota.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * A parameter is not valid.
 *
 * @throws {@link OutpostsServiceException}
 *
 * Base exception class for all service exceptions from Outposts service.
 *
 * @public
 */
export class CreateOrderCommand extends command<CreateOrderCommandInput, CreateOrderCommandOutput>(
  _ep0,
  _mw0,
  "CreateOrder",
  CreateOrder$
) {
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
