// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMapGlyphsRequest, GetMapGlyphsResponse } from "../models/models_0";
import { GetMapGlyphs$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMapGlyphsCommand}.
 */
export interface GetMapGlyphsCommandInput extends GetMapGlyphsRequest {}
/**
 * @public
 */
export type GetMapGlyphsCommandOutputType = Omit<GetMapGlyphsResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapGlyphsCommand}.
 */
export interface GetMapGlyphsCommandOutput extends GetMapGlyphsCommandOutputType, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to [`GetGlyphs`](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetGlyphs.html) unless you require `Grab` data.
 * >
 * > - `GetMapGlyphs` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `GetGlyphs` operation gives a better user experience and is compatible with the remainder of the V2 Maps API.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Retrieves glyphs used to display labels on a map.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapGlyphsCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapGlyphsCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetMapGlyphsRequest
 *   MapName: "STRING_VALUE", // required
 *   FontStack: "STRING_VALUE", // required
 *   FontUnicodeRange: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapGlyphsCommand(input);
 * const response = await client.send(command);
 * // { // GetMapGlyphsResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapGlyphsCommandInput - {@link GetMapGlyphsCommandInput}
 * @returns {@link GetMapGlyphsCommandOutput}
 * @see {@link GetMapGlyphsCommandInput} for command's `input` shape.
 * @see {@link GetMapGlyphsCommandOutput} for command's `response` shape.
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
export class GetMapGlyphsCommand extends command<GetMapGlyphsCommandInput, GetMapGlyphsCommandOutput>(
  _ep0,
  _mw0,
  "GetMapGlyphs",
  GetMapGlyphs$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMapGlyphsRequest;
      output: GetMapGlyphsResponse;
    };
    sdk: {
      input: GetMapGlyphsCommandInput;
      output: GetMapGlyphsCommandOutput;
    };
  };
}
