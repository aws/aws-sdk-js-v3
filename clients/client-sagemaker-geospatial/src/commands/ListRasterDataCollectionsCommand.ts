// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { ListRasterDataCollectionsInput, ListRasterDataCollectionsOutput } from "../models/models_0";
import { ListRasterDataCollections$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link ListRasterDataCollectionsCommand}.
 */
export interface ListRasterDataCollectionsCommandInput extends ListRasterDataCollectionsInput {}
/**
 * @public
 *
 * The output of {@link ListRasterDataCollectionsCommand}.
 */
export interface ListRasterDataCollectionsCommandOutput extends ListRasterDataCollectionsOutput, __MetadataBearer {}

/**
 * Use this operation to get raster data collections.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListRasterDataCollectionsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListRasterDataCollectionsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // ListRasterDataCollectionsInput
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListRasterDataCollectionsCommand(input);
 * const response = await client.send(command);
 * // { // ListRasterDataCollectionsOutput
 * //   RasterDataCollectionSummaries: [ // DataCollectionsList // required
 * //     { // RasterDataCollectionMetadata
 * //       Name: "STRING_VALUE", // required
 * //       Arn: "STRING_VALUE", // required
 * //       Type: "STRING_VALUE", // required
 * //       Description: "STRING_VALUE", // required
 * //       DescriptionPageUrl: "STRING_VALUE",
 * //       SupportedFilters: [ // FilterList // required
 * //         { // Filter
 * //           Name: "STRING_VALUE", // required
 * //           Type: "STRING_VALUE", // required
 * //           Minimum: Number("float"),
 * //           Maximum: Number("float"),
 * //         },
 * //       ],
 * //       Tags: { // Tags
 * //         "<keys>": "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListRasterDataCollectionsCommandInput - {@link ListRasterDataCollectionsCommandInput}
 * @returns {@link ListRasterDataCollectionsCommandOutput}
 * @see {@link ListRasterDataCollectionsCommandInput} for command's `input` shape.
 * @see {@link ListRasterDataCollectionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ThrottlingException} (client fault)
 *
 * The request was denied due to request throttling.
 *
 * @throws {@link ValidationException} (client fault)
 *
 * The input fails to satisfy the constraints specified by an Amazon Web Services service.
 *
 * @throws {@link SageMakerGeospatialServiceException}
 *
 * Base exception class for all service exceptions from SageMakerGeospatial service.
 *
 * @public
 */
export class ListRasterDataCollectionsCommand extends command<ListRasterDataCollectionsCommandInput, ListRasterDataCollectionsCommandOutput>(
  _ep0,
  _mw0,
  "ListRasterDataCollections",
  ListRasterDataCollections$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: ListRasterDataCollectionsInput;
      output: ListRasterDataCollectionsOutput;
    };
    sdk: {
      input: ListRasterDataCollectionsCommandInput;
      output: ListRasterDataCollectionsCommandOutput;
    };
  };
}
