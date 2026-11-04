// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { CalculateRouteMatrixRequest, CalculateRouteMatrixResponse } from "../models/models_0";
import { CalculateRouteMatrix$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandInput extends CalculateRouteMatrixRequest {}
/**
 * @public
 *
 * The output of {@link CalculateRouteMatrixCommand}.
 */
export interface CalculateRouteMatrixCommandOutput extends CalculateRouteMatrixResponse, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend you upgrade to the [V2 `CalculateRouteMatrix`](/location/latest/APIReference/API_CalculateRouteMatrix.html) unless you require Grab data.
 * >
 * > - This version of `CalculateRouteMatrix` is part of a previous Amazon Location Service Routes API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `CalculateRouteMatrix` operation gives better results for matrix routing calculations.
 * > - If you are using an Amazon Web Services SDK or the Amazon Web Services CLI, note that the Routes API version 2 is found under `geo-routes` or `geo_routes`, not under `location`.
 * > - Since Grab is not yet fully supported in Routes API version 2, we recommend you continue using API version 1 when using Grab.
 * > - Start your version 2 API journey with the Routes V2 [API Reference](/location/latest/APIReference/API_Operations_Amazon_Location_Service_Routes_V2.html) or the [Developer Guide](/location/latest/developerguide/routes.html).
 *
 * [Calculates a route matrix](https://docs.aws.amazon.com/location/previous/developerguide/calculate-route-matrix.html) given the following required parameters: `DeparturePositions` and `DestinationPositions`. `CalculateRouteMatrix` calculates routes and returns the travel time and travel distance from each departure position to each destination position in the request. For example, given departure positions A and B, and destination positions X and Y, `CalculateRouteMatrix` will return time and distance for routes from A to X, A to Y, B to X, and B to Y (in that order). The number of results returned (and routes calculated) will be the number of `DeparturePositions` times the number of `DestinationPositions`.
 *
 * > **Note:** Your account is charged for each route calculated, not the number of requests.
 *
 * Requires that you first [create a route calculator resource](https://docs.aws.amazon.com/location-routes/latest/APIReference/API_CreateRouteCalculator.html).
 *
 * By default, a request that doesn't specify a departure time uses the best time of day to travel with the best traffic conditions when calculating routes.
 *
 * Additional options include:
 *
 * - [Specifying a departure time](https://docs.aws.amazon.com/location/previous/developerguide/departure-time.html) using either `DepartureTime` or `DepartNow`. This calculates routes based on predictive traffic data at the given time.
 *
 *   > **Note:** You can't specify both `DepartureTime` and `DepartNow` in a single request. Specifying both parameters returns a validation error.
 * - [Specifying a travel mode](https://docs.aws.amazon.com/location/previous/developerguide/travel-mode.html) using TravelMode sets the transportation mode used to calculate the routes. This also lets you specify additional route preferences in `CarModeOptions` if traveling by `Car`, or `TruckModeOptions` if traveling by `Truck`.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, CalculateRouteMatrixCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, CalculateRouteMatrixCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // CalculateRouteMatrixRequest
 *   CalculatorName: "STRING_VALUE", // required
 *   DeparturePositions: [ // PositionList // required
 *     [ // Position
 *       Number("double"),
 *     ],
 *   ],
 *   DestinationPositions: [ // required
 *     [
 *       Number("double"),
 *     ],
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   DepartureTime: new Date("TIMESTAMP"),
 *   DepartNow: true || false,
 *   DistanceUnit: "STRING_VALUE",
 *   CarModeOptions: { // CalculateRouteCarModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *   },
 *   TruckModeOptions: { // CalculateRouteTruckModeOptions
 *     AvoidFerries: true || false,
 *     AvoidTolls: true || false,
 *     Dimensions: { // TruckDimensions
 *       Length: Number("double"),
 *       Height: Number("double"),
 *       Width: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *     Weight: { // TruckWeight
 *       Total: Number("double"),
 *       Unit: "STRING_VALUE",
 *     },
 *   },
 *   Key: "STRING_VALUE",
 * };
 * const command = new CalculateRouteMatrixCommand(input);
 * const response = await client.send(command);
 * // { // CalculateRouteMatrixResponse
 * //   RouteMatrix: [ // RouteMatrix // required
 * //     [ // RouteMatrixRow
 * //       { // RouteMatrixEntry
 * //         Distance: Number("double"),
 * //         DurationSeconds: Number("double"),
 * //         Error: { // RouteMatrixEntryError
 * //           Code: "STRING_VALUE", // required
 * //           Message: "STRING_VALUE",
 * //         },
 * //       },
 * //     ],
 * //   ],
 * //   SnappedDeparturePositions: [ // PositionList
 * //     [ // Position
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   SnappedDestinationPositions: [
 * //     [
 * //       Number("double"),
 * //     ],
 * //   ],
 * //   Summary: { // CalculateRouteMatrixSummary
 * //     DataSource: "STRING_VALUE", // required
 * //     RouteCount: Number("int"), // required
 * //     ErrorCount: Number("int"), // required
 * //     DistanceUnit: "STRING_VALUE", // required
 * //   },
 * // };
 *
 * ```
 *
 * @param CalculateRouteMatrixCommandInput - {@link CalculateRouteMatrixCommandInput}
 * @returns {@link CalculateRouteMatrixCommandOutput}
 * @see {@link CalculateRouteMatrixCommandInput} for command's `input` shape.
 * @see {@link CalculateRouteMatrixCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request has failed to process because of an unknown server error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The resource that you've entered was not found in your AWS account.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied because of request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input failed to meet the constraints specified by the AWS service.
 *
 * @throws {@link LocationServiceException}
 *
 * Base exception class for all service exceptions from Location service.
 *
 * @public
 */
export class CalculateRouteMatrixCommand extends command<CalculateRouteMatrixCommandInput, CalculateRouteMatrixCommandOutput>(
  _ep0,
  _mw0,
  "CalculateRouteMatrix",
  CalculateRouteMatrix$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: CalculateRouteMatrixRequest;
      output: CalculateRouteMatrixResponse;
    };
    sdk: {
      input: CalculateRouteMatrixCommandInput;
      output: CalculateRouteMatrixCommandOutput;
    };
  };
}
