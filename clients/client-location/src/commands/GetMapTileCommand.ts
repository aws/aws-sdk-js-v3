// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMapTileRequest, GetMapTileResponse } from "../models/models_0";
import { GetMapTile$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMapTileCommand}.
 */
export interface GetMapTileCommandInput extends GetMapTileRequest {}
/**
 * @public
 */
export type GetMapTileCommandOutputType = Omit<GetMapTileResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapTileCommand}.
 */
export interface GetMapTileCommandOutput extends GetMapTileCommandOutputType, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to [`GetTile`](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetTile.html) unless you require `Grab` data.
 * >
 * > - `GetMapTile` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `GetTile` operation gives a better user experience and is compatible with the remainder of the V2 Maps API.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Retrieves a vector data tile from the map resource. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.
 *
 * The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0) will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapTileCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapTileCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetMapTileRequest
 *   MapName: "STRING_VALUE", // required
 *   Z: "STRING_VALUE", // required
 *   X: "STRING_VALUE", // required
 *   Y: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapTileCommand(input);
 * const response = await client.send(command);
 * // { // GetMapTileResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapTileCommandInput - {@link GetMapTileCommandInput}
 * @returns {@link GetMapTileCommandOutput}
 * @see {@link GetMapTileCommandInput} for command's `input` shape.
 * @see {@link GetMapTileCommandOutput} for command's `response` shape.
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
export class GetMapTileCommand extends command<GetMapTileCommandInput, GetMapTileCommandOutput>(
  _ep0,
  _mw0,
  "GetMapTile",
  GetMapTile$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMapTileRequest;
      output: GetMapTileResponse;
    };
    sdk: {
      input: GetMapTileCommandInput;
      output: GetMapTileCommandOutput;
    };
  };
}
