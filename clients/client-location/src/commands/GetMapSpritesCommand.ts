// smithy-typescript generated code
import { Uint8ArrayBlobAdapter } from "@smithy/core/serde";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { GetMapSpritesRequest, GetMapSpritesResponse } from "../models/models_0";
import { GetMapSprites$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link GetMapSpritesCommand}.
 */
export interface GetMapSpritesCommandInput extends GetMapSpritesRequest {}
/**
 * @public
 */
export type GetMapSpritesCommandOutputType = Omit<GetMapSpritesResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetMapSpritesCommand}.
 */
export interface GetMapSpritesCommandOutput extends GetMapSpritesCommandOutputType, __MetadataBearer {}

/**
 * > **Important:**
 * >
 * > This operation is no longer current and may be deprecated in the future. We recommend upgrading to [`GetSprites`](https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetSprites.html) unless you require `Grab` data.
 * >
 * > - `GetMapSprites` is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).
 * > - The version 2 `GetSprites` operation gives a better user experience and is compatible with the remainder of the V2 Maps API.
 * > - If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under `geo-maps` or `geo_maps`, not under `location`.
 * > - Since `Grab` is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using `Grab`.
 * > - Start your version 2 API journey with the [Maps V2 API Reference](https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html) or the [Developer Guide](https://docs.aws.amazon.com/location/latest/developerguide/maps.html).
 *
 * Retrieves the sprite sheet corresponding to a map resource. The sprite sheet is a PNG image paired with a JSON document describing the offsets of individual icons that will be displayed on a rendered map.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapSpritesCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapSpritesCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // import type { LocationClientConfig } from "@aws-sdk/client-location";
 * const config = {}; // type is LocationClientConfig
 * const client = new LocationClient(config);
 * const input = { // GetMapSpritesRequest
 *   MapName: "STRING_VALUE", // required
 *   FileName: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetMapSpritesCommand(input);
 * const response = await client.send(command);
 * // { // GetMapSpritesResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param GetMapSpritesCommandInput - {@link GetMapSpritesCommandInput}
 * @returns {@link GetMapSpritesCommandOutput}
 * @see {@link GetMapSpritesCommandInput} for command's `input` shape.
 * @see {@link GetMapSpritesCommandOutput} for command's `response` shape.
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
export class GetMapSpritesCommand extends command<GetMapSpritesCommandInput, GetMapSpritesCommandOutput>(
  _ep0,
  _mw0,
  "GetMapSprites",
  GetMapSprites$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetMapSpritesRequest;
      output: GetMapSpritesResponse;
    };
    sdk: {
      input: GetMapSpritesCommandInput;
      output: GetMapSpritesCommandOutput;
    };
  };
}
