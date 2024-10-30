// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { GeoMapsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GeoMapsClient";
import { GetTileRequest, GetTileRequestFilterSensitiveLog, GetTileResponse } from "../models/models_0";
import { de_GetTileCommand, se_GetTileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetTileCommand}.
 */
export interface GetTileCommandInput extends GetTileRequest {}
/**
 * @public
 */
export type GetTileCommandOutputType = Omit<GetTileResponse, "Blob"> & {
  Blob?: Uint8ArrayBlobAdapter;
};

/**
 * @public
 *
 * The output of {@link GetTileCommand}.
 */
export interface GetTileCommandOutput extends GetTileCommandOutputType, __MetadataBearer {}

/**
 * <p>Returns a tile. Map tiles are used by clients to render a map. they're addressed using a grid arrangement with an X coordinate, Y coordinate, and Z (zoom) level.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GeoMapsClient, GetTileCommand } from "@aws-sdk/client-geo-maps"; // ES Modules import
 * // const { GeoMapsClient, GetTileCommand } = require("@aws-sdk/client-geo-maps"); // CommonJS import
 * const client = new GeoMapsClient(config);
 * const input = { // GetTileRequest
 *   Tileset: "STRING_VALUE", // required
 *   Z: "STRING_VALUE", // required
 *   X: "STRING_VALUE", // required
 *   Y: "STRING_VALUE", // required
 *   Key: "STRING_VALUE",
 * };
 * const command = new GetTileCommand(input);
 * const response = await client.send(command);
 * // { // GetTileResponse
 * //   Blob: new Uint8Array(),
 * //   ContentType: "STRING_VALUE",
 * //   CacheControl: "STRING_VALUE",
 * //   ETag: "STRING_VALUE",
 * //   PricingBucket: "STRING_VALUE", // required
 * // };
 *
 * ```
 *
 * @param GetTileCommandInput - {@link GetTileCommandInput}
 * @returns {@link GetTileCommandOutput}
 * @see {@link GetTileCommandInput} for command's `input` shape.
 * @see {@link GetTileCommandOutput} for command's `response` shape.
 * @see {@link GeoMapsClientResolvedConfig | config} for GeoMapsClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>The request was denied because of insufficient access or permissions. Check with an administrator to verify your permissions.</p>
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
 * @throws {@link GeoMapsServiceException}
 * <p>Base exception class for all service exceptions from GeoMaps service.</p>
 *
 * @public
 */
export class GetTileCommand extends $Command
  .classBuilder<
    GetTileCommandInput,
    GetTileCommandOutput,
    GeoMapsClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: GeoMapsClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("MapsService", "GetTile", {})
  .n("GeoMapsClient", "GetTileCommand")
  .f(GetTileRequestFilterSensitiveLog, void 0)
  .ser(se_GetTileCommand)
  .de(de_GetTileCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTileRequest;
      output: GetTileResponse;
    };
    sdk: {
      input: GetTileCommandInput;
      output: GetTileCommandOutput;
    };
  };
}
