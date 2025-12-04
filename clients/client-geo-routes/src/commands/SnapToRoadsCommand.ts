// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { GeoRoutesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoRoutesClient";
import type { SnapToRoadsRequest, SnapToRoadsResponse } from "../models/models_0";
import { SnapToRoads } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link SnapToRoadsCommand}.
 */
export interface SnapToRoadsCommandInput extends SnapToRoadsRequest {}
/**
 * @public
 *
 * The output of {@link SnapToRoadsCommand}.
 */
export interface SnapToRoadsCommandOutput extends SnapToRoadsResponse, __MetadataBearer {}

/**
 * <p> <code>SnapToRoads</code> matches GPS trace to roads most likely traveled on.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoRoutesClient, SnapToRoadsCommand } from "@aws-sdk/client-geo-routes"; // ES Modules import
 * // const { GeoRoutesClient, SnapToRoadsCommand } = require("@aws-sdk/client-geo-routes"); // CommonJS import
 * // import type { GeoRoutesClientConfig } from "@aws-sdk/client-geo-routes";
 * const config = {}; // type is GeoRoutesClientConfig
 * const client = new GeoRoutesClient(config);
 * const input = { // SnapToRoadsRequest
 *   Key: "STRING_VALUE",
 *   SnappedGeometryFormat: "STRING_VALUE",
 *   SnapRadius: Number("long"),
 *   TracePoints: [ // RoadSnapTracePointList // required
 *     { // RoadSnapTracePoint
 *       Heading: Number("double"),
 *       Position: [ // Position // required
 *         Number("double"),
 *       ],
 *       Speed: Number("double"),
 *       Timestamp: "STRING_VALUE",
 *     },
 *   ],
 *   TravelMode: "STRING_VALUE",
 *   TravelModeOptions: { // RoadSnapTravelModeOptions
 *     Truck: { // RoadSnapTruckOptions
 *       GrossWeight: Number("long"),
 *       HazardousCargos: [ // RoadSnapHazardousCargoTypeList
 *         "STRING_VALUE",
 *       ],
 *       Height: Number("long"),
 *       Length: Number("long"),
 *       Trailer: { // RoadSnapTrailerOptions
 *         TrailerCount: Number("int"),
 *       },
 *       TunnelRestrictionCode: "STRING_VALUE",
 *       Width: Number("long"),
 *     },
 *   },
 * };
 * const command = new SnapToRoadsCommand(input);
 * const response = await client.send(command);
 * // { // SnapToRoadsResponse
 * //   Notices: [ // RoadSnapNoticeList // required
 * //     { // RoadSnapNotice
 * //       Code: "STRING_VALUE", // required
 * //       Title: "STRING_VALUE", // required
 * //       TracePointIndexes: [ // RoadSnapTracePointIndexList // required
 * //         Number("int"),
 * //       ],
 * //     },
 * //   ],
 * //   PricingBucket: "STRING_VALUE", // required
 * //   SnappedGeometry: { // RoadSnapSnappedGeometry
 * //     LineString: [ // LineString
 * //       [ // Position
 * //         Number("double"),
 * //       ],
 * //     ],
 * //     Polyline: "STRING_VALUE",
 * //   },
 * //   SnappedGeometryFormat: "STRING_VALUE", // required
 * //   SnappedTracePoints: [ // RoadSnapSnappedTracePointList // required
 * //     { // RoadSnapSnappedTracePoint
 * //       Confidence: Number("double"), // required
 * //       OriginalPosition: [ // required
 * //         Number("double"),
 * //       ],
 * //       SnappedPosition: [ // required
 * //         Number("double"),
 * //       ],
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SnapToRoadsCommandInput - {@link SnapToRoadsCommandInput}
 * @returns {@link SnapToRoadsCommandOutput}
 * @see {@link SnapToRoadsCommandInput} for command's `input` shape.
 * @see {@link SnapToRoadsCommandOutput} for command's `response` shape.
 * @see {@link GeoRoutesClientResolvedConfig | config} for GeoRoutesClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You don't have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or failure.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link GeoRoutesServiceException}
 * <p>Base exception class for all service exceptions from GeoRoutes service.</p>
 *
 *
 * @public
 */
export class SnapToRoadsCommand extends $Command
  .classBuilder<
    SnapToRoadsCommandInput,
    SnapToRoadsCommandOutput,
    GeoRoutesClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoRoutesClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("RoutesService", "SnapToRoads", {})
  .n("GeoRoutesClient", "SnapToRoadsCommand")
  .sc(SnapToRoads)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SnapToRoadsRequest;
      output: SnapToRoadsResponse;
    };
    sdk: {
      input: SnapToRoadsCommandInput;
      output: SnapToRoadsCommandOutput;
    };
  };
}
