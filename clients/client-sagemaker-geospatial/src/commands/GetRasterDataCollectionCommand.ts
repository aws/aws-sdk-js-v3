// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetRasterDataCollectionInput, GetRasterDataCollectionOutput } from "../models/models_0";
import { de_GetRasterDataCollectionCommand, se_GetRasterDataCollectionCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetRasterDataCollectionCommand}.
 */
export interface GetRasterDataCollectionCommandInput extends GetRasterDataCollectionInput {}
/**
 * @public
 *
 * The output of {@link GetRasterDataCollectionCommand}.
 */
export interface GetRasterDataCollectionCommandOutput extends GetRasterDataCollectionOutput, __MetadataBearer {}

/**
 * <p>Use this operation to get details of a specific raster data collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetRasterDataCollectionCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetRasterDataCollectionCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // See AWS SDK config options: https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/configuring-the-jssdk.html
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // GetRasterDataCollectionInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetRasterDataCollectionCommand(input);
 * const response = await client.send(command);
 * // { // GetRasterDataCollectionOutput
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   Type: "STRING_VALUE", // required
 * //   Description: "STRING_VALUE", // required
 * //   DescriptionPageUrl: "STRING_VALUE", // required
 * //   SupportedFilters: [ // FilterList // required
 * //     { // Filter
 * //       Name: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE", // required
 * //       Minimum: Number("float"),
 * //       Maximum: Number("float"),
 * //     },
 * //   ],
 * //   ImageSourceBands: [ // ImageSourceBandList // required
 * //     "STRING_VALUE",
 * //   ],
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetRasterDataCollectionCommandInput - {@link GetRasterDataCollectionCommandInput}
 * @returns {@link GetRasterDataCollectionCommandOutput}
 * @see {@link GetRasterDataCollectionCommandInput} for command's `input` shape.
 * @see {@link GetRasterDataCollectionCommandOutput} for command's `response` shape.
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
 * @public
 */
export class GetRasterDataCollectionCommand extends $Command
  .classBuilder<
    GetRasterDataCollectionCommandInput,
    GetRasterDataCollectionCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [
      getSerdePlugin(config, this.serialize, this.deserialize),
      getEndpointPlugin(config, Command.getEndpointParameterInstructions()),
    ];
  })
  .s("SageMakerGeospatial", "GetRasterDataCollection", {})
  .n("SageMakerGeospatialClient", "GetRasterDataCollectionCommand")
  .f(void 0, void 0)
  .ser(se_GetRasterDataCollectionCommand)
  .de(de_GetRasterDataCollectionCommand)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetRasterDataCollectionInput;
      output: GetRasterDataCollectionOutput;
    };
    sdk: {
      input: GetRasterDataCollectionCommandInput;
      output: GetRasterDataCollectionCommandOutput;
    };
  };
}
