// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";
import { Uint8ArrayBlobAdapter } from "@smithy/util-stream";

import { commonParams } from "../endpoint/EndpointParameters";
import { LocationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LocationClient";
import { GetMapTileRequest, GetMapTileRequestFilterSensitiveLog, GetMapTileResponse } from "../models/models_0";
import { de_GetMapTileCommand, se_GetMapTileCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
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
 * <p>Retrieves a vector data tile from the map resource. Map tiles are used by clients to
 *             render a map. they're addressed using a grid arrangement with an X coordinate, Y
 *             coordinate, and Z (zoom) level. </p>
 *          <p>The origin (0, 0) is the top left of the map. Increasing the zoom level by 1 doubles
 *             both the X and Y dimensions, so a tile containing data for the entire world at (0/0/0)
 *             will be split into 4 tiles at zoom 1 (1/0/0, 1/0/1, 1/1/0, 1/1/1).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LocationClient, GetMapTileCommand } from "@aws-sdk/client-location"; // ES Modules import
 * // const { LocationClient, GetMapTileCommand } = require("@aws-sdk/client-location"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
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
 * @public
 */
export class GetMapTileCommand extends $Command
  .classBuilder<
    GetMapTileCommandInput,
    GetMapTileCommandOutput,
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
  .s("LocationService", "GetMapTile", {})
  .n("LocationClient", "GetMapTileCommand")
  .f(GetMapTileRequestFilterSensitiveLog, void 0)
  .ser(se_GetMapTileCommand)
  .de(de_GetMapTileCommand)
  .build() {
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
