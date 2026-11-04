// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { SearchRasterDataCollectionInput, SearchRasterDataCollectionOutput } from "../models/models_0";
import { SearchRasterDataCollection$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link SearchRasterDataCollectionCommand}.
 */
export interface SearchRasterDataCollectionCommandInput extends SearchRasterDataCollectionInput {}
/**
 * @public
 *
 * The output of {@link SearchRasterDataCollectionCommand}.
 */
export interface SearchRasterDataCollectionCommandOutput extends SearchRasterDataCollectionOutput, __MetadataBearer {}

/**
 * Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, SearchRasterDataCollectionCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, SearchRasterDataCollectionCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // SearchRasterDataCollectionInput
 *   Arn: "STRING_VALUE", // required
 *   RasterDataCollectionQuery: { // RasterDataCollectionQueryWithBandFilterInput
 *     TimeRangeFilter: { // TimeRangeFilterInput
 *       StartTime: new Date("TIMESTAMP"), // required
 *       EndTime: new Date("TIMESTAMP"), // required
 *     },
 *     AreaOfInterest: { // AreaOfInterest Union: only one key present
 *       AreaOfInterestGeometry: { // AreaOfInterestGeometry Union: only one key present
 *         PolygonGeometry: { // PolygonGeometryInput
 *           Coordinates: [ // LinearRings // required
 *             [ // LinearRing
 *               [ // Position
 *                 Number("double"),
 *               ],
 *             ],
 *           ],
 *         },
 *         MultiPolygonGeometry: { // MultiPolygonGeometryInput
 *           Coordinates: [ // LinearRingsList // required
 *             [
 *               [
 *                 [
 *                   Number("double"),
 *                 ],
 *               ],
 *             ],
 *           ],
 *         },
 *       },
 *     },
 *     PropertyFilters: { // PropertyFilters
 *       Properties: [ // PropertyFiltersList
 *         { // PropertyFilter
 *           Property: { // Property Union: only one key present
 *             EoCloudCover: { // EoCloudCoverInput
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewOffNadir: { // ViewOffNadirInput
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewSunAzimuth: { // ViewSunAzimuthInput
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewSunElevation: { // ViewSunElevationInput
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             Platform: { // PlatformInput
 *               Value: "STRING_VALUE", // required
 *               ComparisonOperator: "STRING_VALUE",
 *             },
 *             LandsatCloudCoverLand: { // LandsatCloudCoverLandInput
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *           },
 *         },
 *       ],
 *       LogicalOperator: "STRING_VALUE",
 *     },
 *     BandFilter: [ // StringListInput
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchRasterDataCollectionCommand(input);
 * const response = await client.send(command);
 * // { // SearchRasterDataCollectionOutput
 * //   ApproximateResultCount: Number("int"), // required
 * //   NextToken: "STRING_VALUE",
 * //   Items: [ // ItemSourceList
 * //     { // ItemSource
 * //       Id: "STRING_VALUE", // required
 * //       Geometry: { // Geometry
 * //         Type: "STRING_VALUE", // required
 * //         Coordinates: [ // LinearRings // required
 * //           [ // LinearRing
 * //             [ // Position
 * //               Number("double"),
 * //             ],
 * //           ],
 * //         ],
 * //       },
 * //       Assets: { // AssetsMap
 * //         "<keys>": { // AssetValue
 * //           Href: "STRING_VALUE",
 * //         },
 * //       },
 * //       DateTime: new Date("TIMESTAMP"), // required
 * //       Properties: { // Properties
 * //         EoCloudCover: Number("float"),
 * //         ViewOffNadir: Number("float"),
 * //         ViewSunAzimuth: Number("float"),
 * //         ViewSunElevation: Number("float"),
 * //         Platform: "STRING_VALUE",
 * //         LandsatCloudCoverLand: Number("float"),
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param SearchRasterDataCollectionCommandInput - {@link SearchRasterDataCollectionCommandInput}
 * @returns {@link SearchRasterDataCollectionCommandOutput}
 * @see {@link SearchRasterDataCollectionCommandInput} for command's `input` shape.
 * @see {@link SearchRasterDataCollectionCommandOutput} for command's `response` shape.
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
export class SearchRasterDataCollectionCommand extends command<SearchRasterDataCollectionCommandInput, SearchRasterDataCollectionCommandOutput>(
  _ep0,
  _mw0,
  "SearchRasterDataCollection",
  SearchRasterDataCollection$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: SearchRasterDataCollectionInput;
      output: SearchRasterDataCollectionOutput;
    };
    sdk: {
      input: SearchRasterDataCollectionCommandInput;
      output: SearchRasterDataCollectionCommandOutput;
    };
  };
}
