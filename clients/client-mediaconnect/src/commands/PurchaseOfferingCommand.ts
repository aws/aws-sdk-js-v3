// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { PurchaseOfferingRequest, PurchaseOfferingResponse } from "../models/models_1";
import { PurchaseOffering$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandInput extends PurchaseOfferingRequest {}
/**
 * @public
 *
 * The output of {@link PurchaseOfferingCommand}.
 */
export interface PurchaseOfferingCommandOutput extends PurchaseOfferingResponse, __MetadataBearer {}

/**
 * Submits a request to purchase an offering. If you already have an active reservation, you can't purchase another offering.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaConnectClient, PurchaseOfferingCommand } from "@aws-sdk/client-mediaconnect"; // ES Modules import
 * // const { MediaConnectClient, PurchaseOfferingCommand } = require("@aws-sdk/client-mediaconnect"); // CommonJS import
 * // import type { MediaConnectClientConfig } from "@aws-sdk/client-mediaconnect";
 * const config = {}; // type is MediaConnectClientConfig
 * const client = new MediaConnectClient(config);
 * const input = { // PurchaseOfferingRequest
 *   OfferingArn: "STRING_VALUE", // required
 *   ReservationName: "STRING_VALUE", // required
 *   Start: "STRING_VALUE", // required
 * };
 * const command = new PurchaseOfferingCommand(input);
 * const response = await client.send(command);
 * // { // PurchaseOfferingResponse
 * //   Reservation: { // Reservation
 * //     CurrencyCode: "STRING_VALUE", // required
 * //     Duration: Number("int"), // required
 * //     DurationUnits: "MONTHS", // required
 * //     End: "STRING_VALUE", // required
 * //     OfferingArn: "STRING_VALUE", // required
 * //     OfferingDescription: "STRING_VALUE", // required
 * //     PricePerUnit: "STRING_VALUE", // required
 * //     PriceUnits: "HOURLY", // required
 * //     ReservationArn: "STRING_VALUE", // required
 * //     ReservationName: "STRING_VALUE", // required
 * //     ReservationState: "ACTIVE" || "EXPIRED" || "PROCESSING" || "CANCELED", // required
 * //     ResourceSpecification: { // ResourceSpecification
 * //       ReservedBitrate: Number("int"),
 * //       ResourceType: "Mbps_Outbound_Bandwidth", // required
 * //     },
 * //     Start: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param PurchaseOfferingCommandInput - {@link PurchaseOfferingCommandInput}
 * @returns {@link PurchaseOfferingCommandOutput}
 * @see {@link PurchaseOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseOfferingCommandOutput} for command's `response` shape.
 * @see {@link MediaConnectClientResolvedConfig | config} for MediaConnectClient's `config` shape.
 *
 * @throws {@link BadRequestException} (client fault)
 *
 * This exception is thrown if the request contains a semantic error. The precise meaning depends on the API, and is documented in the error message.
 *
 * @throws {@link ForbiddenException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerErrorException} (server fault)
 *
 * The server encountered an internal error and is unable to complete the request.
 *
 * @throws {@link NotFoundException} (client fault)
 *
 * One or more of the resources in the request does not exist in the system.
 *
 * @throws {@link ServiceUnavailableException} (server fault)
 *
 * The service is currently unavailable or busy.
 *
 * @throws {@link TooManyRequestsException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link MediaConnectServiceException}
 *
 * Base exception class for all service exceptions from MediaConnect service.
 *
 * @public
 */
export class PurchaseOfferingCommand extends command<PurchaseOfferingCommandInput, PurchaseOfferingCommandOutput>(
  _ep0,
  _mw0,
  "PurchaseOffering",
  PurchaseOffering$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: PurchaseOfferingRequest;
      output: PurchaseOfferingResponse;
    };
    sdk: {
      input: PurchaseOfferingCommandInput;
      output: PurchaseOfferingCommandOutput;
    };
  };
}
