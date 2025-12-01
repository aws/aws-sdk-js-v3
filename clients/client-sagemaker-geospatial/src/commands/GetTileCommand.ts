// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import type { MetadataBearer as __MetadataBearer, StreamingBlobPayloadOutputTypes } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { type GetTileInput, GetTileOutput } from "../models/models_0";
import type {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { GetTile } from "../schemas/schemas_0";

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
export interface GetTileCommandInput extends GetTileInput {}
/**
 * @public
 *
 * The output of {@link GetTileCommand}.
 */
export interface GetTileCommandOutput extends Omit<GetTileOutput, "BinaryFile">, __MetadataBearer {
  BinaryFile?: StreamingBlobPayloadOutputTypes;
}

/**
 * <p>Gets a web mercator tile for the given Earth Observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetTileCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetTileCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // GetTileInput
 *   x: Number("int"), // required
 *   y: Number("int"), // required
 *   z: Number("int"), // required
 *   ImageAssets: [ // StringListInput // required
 *     "STRING_VALUE",
 *   ],
 *   Target: "STRING_VALUE", // required
 *   Arn: "STRING_VALUE", // required
 *   ImageMask: true || false,
 *   OutputFormat: "STRING_VALUE",
 *   TimeRangeFilter: "STRING_VALUE",
 *   PropertyFilters: "STRING_VALUE",
 *   OutputDataType: "STRING_VALUE",
 *   ExecutionRoleArn: "STRING_VALUE",
 * };
 * const command = new GetTileCommand(input);
 * const response = await client.send(command);
 * // consume or destroy the stream to free the socket.
 * const bytes = await response.BinaryFile.transformToByteArray();
 * // const str = await response.BinaryFile.transformToString();
 * // response.BinaryFile.destroy(); // only applicable to Node.js Readable streams.
 *
 * // { // GetTileOutput
 * //   BinaryFile: "<SdkStream>", // see \@smithy/types -> StreamingBlobPayloadOutputTypes
 * // };
 *
 * ```
 *
 * @param GetTileCommandInput - {@link GetTileCommandInput}
 * @returns {@link GetTileCommandOutput}
 * @see {@link GetTileCommandInput} for command's `input` shape.
 * @see {@link GetTileCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>The request references a resource which does not exist.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 * @throws {@link SageMakerGeospatialServiceException}
 * <p>Base exception class for all service exceptions from SageMakerGeospatial service.</p>
 *
 *
 * @public
 */
export class GetTileCommand extends $Command
  .classBuilder<
    GetTileCommandInput,
    GetTileCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "GetTile", {})
  .n("SageMakerGeospatialClient", "GetTileCommand")
  .sc(GetTile)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetTileInput;
      output: GetTileOutput;
    };
    sdk: {
      input: GetTileCommandInput;
      output: GetTileCommandOutput;
    };
  };
}
