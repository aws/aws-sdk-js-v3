// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { PutGeofenceRequest, PutGeofenceRequestFilterSensitiveLog, PutGeofenceResponse } from "../models/models_0";
import { de_PutGeofenceCommand, se_PutGeofenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link PutGeofenceCommand}.
 */
export interface PutGeofenceCommandInput extends PutGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link PutGeofenceCommand}.
 */
export interface PutGeofenceCommandOutput extends PutGeofenceResponse, __MetadataBearer {}

/**
 * <p>Stores a geofence geometry in a given geofence collection, or updates the geometry of
 *             an existing geofence if a geofence ID is included in the request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, PutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, PutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // PutGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   GeofenceId: "STRING_VALUE", // required
 *   Geometry: { // GeofenceGeometry
 *     Polygon: [ // LinearRings
 *       [ // LinearRing
 *         [ // Position
 *           Number("double"),
 *         ],
 *       ],
 *     ],
 *     Circle: { // Circle
 *       Center: [ // required
 *         Number("double"),
 *       ],
 *       Radius: Number("double"), // required
 *     },
 *   },
 *   GeofenceProperties: { // PropertyMap
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new PutGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // PutGeofenceResponse
 * //   GeofenceId: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * // };
 *
 * ```
 *
 * @param PutGeofenceCommandInput - {@link PutGeofenceCommandInput}
 * @returns {@link PutGeofenceCommandOutput}
 * @see {@link PutGeofenceCommandInput} for command's `input` shape.
 * @see {@link PutGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request was unsuccessful because of a conflict.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request has failed to process because of an unknown server error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The resource that you've entered was not found in your AWS account.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied because of request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input failed to meet the constraints specified by the AWS service. </p>
 *
 * @throws {@link LocationServiceException}
 * <p>Base exception class for all service exceptions from Location service.</p>
 *
 * @public
 */
export class PutGeofenceCommand extends $Command
  .classBuilder<
    PutGeofenceCommandInput,
    PutGeofenceCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep({
    ...commonParams,
  })
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "PutGeofence", {})
  .n("LocationClient", "PutGeofenceCommand")
  .f(PutGeofenceRequestFilterSensitiveLog, void 0)
  .ser(se_PutGeofenceCommand)
  .de(de_PutGeofenceCommand)
  .build() {}
