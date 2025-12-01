// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import type { ListGeofencesRequest, ListGeofencesResponse } from "../models/models_0";
import { ListGeofences } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link ListGeofencesCommand}.
 */
export interface ListGeofencesCommandInput extends ListGeofencesRequest {}
/**
 * @public
 *
 * The output of {@link ListGeofencesCommand}.
 */
export interface ListGeofencesCommandOutput extends ListGeofencesResponse, __MetadataBearer {}

/**
 * <p>Lists geofences stored in a given geofence collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, ListGeofencesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, ListGeofencesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // ListGeofencesRequest
 *   CollectionName: "STRING_VALUE", // required
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListGeofencesCommand(input);
 * const response = await client.send(command);
 * // { // ListGeofencesResponse
 * //   Entries: [ // ListGeofenceResponseEntryList // required
 * //     { // ListGeofenceResponseEntry
 * //       GeofenceId: "STRING_VALUE", // required
 * //       Geometry: { // GeofenceGeometry
 * //         Polygon: [ // LinearRings
 * //           [ // LinearRing
 * //             [ // Position
 * //               Number("double"),
 * //             ],
 * //           ],
 * //         ],
 * //         Circle: { // Circle
 * //           Center: [ // required
 * //             Number("double"),
 * //           ],
 * //           Radius: Number("double"), // required
 * //         },
 * //         Geobuf: new Uint8Array(),
 * //         MultiPolygon: [ // MultiLinearRings
 * //           [
 * //             [
 * //               "<Position>",
 * //             ],
 * //           ],
 * //         ],
 * //       },
 * //       Status: "STRING_VALUE", // required
 * //       CreateTime: new Date("TIMESTAMP"), // required
 * //       UpdateTime: new Date("TIMESTAMP"), // required
 * //       GeofenceProperties: { // PropertyMap
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListGeofencesCommandInput - {@link ListGeofencesCommandInput}
 * @returns {@link ListGeofencesCommandOutput}
 * @see {@link ListGeofencesCommandInput} for command's `input` shape.
 * @see {@link ListGeofencesCommandOutput} for command's `response` shape.
 * @see {@link LocationClientResolvedConfig | config} for LocationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
export class ListGeofencesCommand extends $Command
  .classBuilder<
    ListGeofencesCommandInput,
    ListGeofencesCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "ListGeofences", {})
  .n("LocationClient", "ListGeofencesCommand")
  .sc(ListGeofences)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListGeofencesRequest;
      output: ListGeofencesResponse;
    };
    sdk: {
      input: ListGeofencesCommandInput;
      output: ListGeofencesCommandOutput;
    };
  };
}
