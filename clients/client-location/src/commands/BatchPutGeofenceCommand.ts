// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import {
  BatchPutGeofenceRequest,
  BatchPutGeofenceRequestFilterSensitiveLog,
  BatchPutGeofenceResponse,
} from "../models/models_0";
import { de_BatchPutGeofenceCommand, se_BatchPutGeofenceCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link BatchPutGeofenceCommand}.
 */
export interface BatchPutGeofenceCommandInput extends BatchPutGeofenceRequest {}
/**
 * @public
 *
 * The output of {@link BatchPutGeofenceCommand}.
 */
export interface BatchPutGeofenceCommandOutput extends BatchPutGeofenceResponse, __MetadataBearer {}

/**
 * <p>A batch request for storing geofence geometries into a given geofence collection, or
 *             updates the geometry of an existing geofence if a geofence ID is included in the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, BatchPutGeofenceCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, BatchPutGeofenceCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * const client = new LocationClient(config);
 * const input = { // BatchPutGeofenceRequest
 *   CollectionName: "STRING_VALUE", // required
 *   Entries: [ // BatchPutGeofenceRequestEntryList // required
 *     { // BatchPutGeofenceRequestEntry
 *       GeofenceId: "STRING_VALUE", // required
 *       Geometry: { // GeofenceGeometry
 *         Polygon: [ // LinearRings
 *           [ // LinearRing
 *             [ // Position
 *               Number("double"),
 *             ],
 *           ],
 *         ],
 *         Circle: { // Circle
 *           Center: [ // required
 *             Number("double"),
 *           ],
 *           Radius: Number("double"), // required
 *         },
 *         Geobuf: new Uint8Array(), // e.g. Buffer.from("") or new TextEncoder().encode("")
 *       },
 *       GeofenceProperties: { // PropertyMap
 *         "<keys>": "STRING_VALUE",
 *       },
 *     },
 *   ],
 * };
 * const command = new BatchPutGeofenceCommand(input);
 * const response = await client.send(command);
 * // { // BatchPutGeofenceResponse
 * //   Successes: [ // BatchPutGeofenceSuccessList // required
 * //     { // BatchPutGeofenceSuccess
 * //       GeofenceId: "STRING_VALUE", // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //     },
 * //   ],
 * //   Errors: [ // BatchPutGeofenceErrorList // required
 * //     { // BatchPutGeofenceError
 * //       GeofenceId: "STRING_VALUE", // required
 * //       Error: { // BatchItemError
 * //         Code: "STRING_VALUE",
 * //         Message: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param BatchPutGeofenceCommandInput - {@link BatchPutGeofenceCommandInput}
 * @returns {@link BatchPutGeofenceCommandOutput}
 * @see {@link BatchPutGeofenceCommandInput} for command's `input` shape.
 * @see {@link BatchPutGeofenceCommandOutput} for command's `response` shape.
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
export class BatchPutGeofenceCommand extends $Command
  .classBuilder<
    BatchPutGeofenceCommandInput,
    BatchPutGeofenceCommandOutput,
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
  .s("LocationService", "BatchPutGeofence", {})
  .n("LocationClient", "BatchPutGeofenceCommand")
  .f(BatchPutGeofenceRequestFilterSensitiveLog, void 0)
  .ser(se_BatchPutGeofenceCommand)
  .de(de_BatchPutGeofenceCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: BatchPutGeofenceRequest;
      output: BatchPutGeofenceResponse;
    };
    sdk: {
      input: BatchPutGeofenceCommandInput;
      output: BatchPutGeofenceCommandOutput;
    };
  };
}
