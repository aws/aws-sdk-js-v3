// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetGeofenceRequest, GetGeofenceResponse, GetGeofenceResponseFilterSensitiveLog } from "../models/models_0";
import { de_GetGeofenceCommand, se_GetGeofenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetGeofenceCommand}.
 */
export interface GetGeofenceCommandInput extends GetGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link GetGeofenceCommand}.
 */
export interface GetGeofenceCommandOutput extends GetGeofenceResponse, __MetadataBearer {}

/**
 * <p>Retrieves the geofence details from a geofence collection.</p>
 *          <note>
 *             <p>The returned geometry will always match the geometry format used when the geofence was created.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // GetGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   GeofenceId: "STRING_VALUE", // required
 * };
 * const command = new GetGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // GetGeofenceResponse
 * //   GeofenceId: "STRING_VALUE", // required
 * //   Geometry: { // GeofenceGeometry
 * //     Polygon: [ // LinearRings
 * //       [ // LinearRing
 * //         [ // Position
 * //           Number("double"),
 * //         ],
 * //       ],
 * //     ],
 * //     Circle: { // Circle
 * //       Center: [ // required
 * //         Number("double"),
 * //       ],
 * //       Radius: Number("double"), // required
 * //     },
 * //     Geobuf: new Uint8Array(),
 * //   },
 * //   Status: "STRING_VALUE", // required
 * //   CreateTime: new Date("TIMESTAMP"), // required
 * //   UpdateTime: new Date("TIMESTAMP"), // required
 * //   GeofenceProperties: { // PropertyMap
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetGeofenceCommandInput - {@link GetGeofenceCommandInput}
 * @returns {@link GetGeofenceCommandOutput}
 * @see {@link GetGeofenceCommandInput} for command's `input` shape.
 * @see {@link GetGeofenceCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an
 *       administrator to verify your permissions.</p>
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
 *
 * @public
 */
export class GetGeofenceCommand extends $Command
  .classBuilder<
    GetGeofenceCommandInput,
    GetGeofenceCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("LocationService", "GetGeofence", {})
  .n("LocationClient", "GetGeofenceCommand")
  .f(void 0, GetGeofenceResponseFilterSensitiveLog)
  .ser(se_GetGeofenceCommand)
  .de(de_GetGeofenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetGeofenceRequest;
      output: GetGeofenceResponse;
    };
    sdk: {
      input: GetGeofenceCommandInput;
      output: GetGeofenceCommandOutput;
    };
  };
}
