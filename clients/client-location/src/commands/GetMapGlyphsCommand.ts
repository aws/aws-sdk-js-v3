// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import type { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { type GetMapGlyphsRequest, GetMapGlyphsResponse } from "../models/models_0";
import { GetMapGlyphs } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <important> <p>This operation is no longer current and may be deprecated in the future. We recommend upgrading to <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_geomaps_GetGlyphs.html"> <code>GetGlyphs</code> </a> unless you require <code>Grab</code> data.</p> <ul> <li> <p> <code>GetMapGlyphs</code> is part of a previous Amazon Location Service Maps API (version 1) which has been superseded by a more intuitive, powerful, and complete API (version 2).</p> </li> <li> <p>The version 2 <code>GetGlyphs</code> operation gives a better user experience and is compatible with the remainder of the V2 Maps API.</p> </li> <li> <p>If you are using an AWS SDK or the AWS CLI, note that the Maps API version 2 is found under <code>geo-maps</code> or <code>geo_maps</code>, not under <code>location</code>.</p> </li> <li> <p>Since <code>Grab</code> is not yet fully supported in Maps API version 2, we recommend you continue using API version 1 when using <code>Grab</code>.</p> </li> <li> <p>Start your version 2 API journey with the <a href="https://docs.aws.amazon.com/location/latest/APIReference/API_Operations_Amazon_Location_Service_Maps_V2.html">Maps V2 API Reference</a> or the <a href="https://docs.aws.amazon.com/location/latest/developerguide/maps.html">Developer Guide</a>.</p> </li> </ul> </important> <p>Retrieves glyphs used to display labels on a map.</p>
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
export class GetMapGlyphsCommand extends $Command
  .classBuilder<
    GetMapGlyphsCommandInput,
    GetMapGlyphsCommandOutput,
    LocationClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: LocationClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("LocationService", "GetMapGlyphs", {})
  .n("LocationClient", "GetMapGlyphsCommand")
  .sc(GetMapGlyphs)
  .build() {
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
