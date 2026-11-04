// smithy-typescript generated code
import type { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { _ep0, _mw0, command } from "../commandBuilder";
import type { StartEarthObservationJobInput, StartEarthObservationJobOutput } from "../models/models_0";
import { StartEarthObservationJob$ } from "../schemas/schemas_0";

/**
 * @public
 */
export type { __MetadataBearer };
/**
 * @public
 *
 * The input for {@link StartEarthObservationJobCommand}.
 */
export interface StartEarthObservationJobCommandInput extends StartEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link StartEarthObservationJobCommand}.
 */
export interface StartEarthObservationJobCommandOutput extends StartEarthObservationJobOutput, __MetadataBearer {}

/**
 * Use this operation to create an Earth observation job.
 *
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StartEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StartEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // StartEarthObservationJobInput
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   InputConfig: { // InputConfigInput
 *     PreviousEarthObservationJobArn: "STRING_VALUE",
 *     RasterDataCollectionQuery: { // RasterDataCollectionQueryInput
 *       RasterDataCollectionArn: "STRING_VALUE", // required
 *       TimeRangeFilter: { // TimeRangeFilterInput
 *         StartTime: new Date("TIMESTAMP"), // required
 *         EndTime: new Date("TIMESTAMP"), // required
 *       },
 *       AreaOfInterest: { // AreaOfInterest Union: only one key present
 *         AreaOfInterestGeometry: { // AreaOfInterestGeometry Union: only one key present
 *           PolygonGeometry: { // PolygonGeometryInput
 *             Coordinates: [ // LinearRings // required
 *               [ // LinearRing
 *                 [ // Position
 *                   Number("double"),
 *                 ],
 *               ],
 *             ],
 *           },
 *           MultiPolygonGeometry: { // MultiPolygonGeometryInput
 *             Coordinates: [ // LinearRingsList // required
 *               [
 *                 [
 *                   [
 *                     Number("double"),
 *                   ],
 *                 ],
 *               ],
 *             ],
 *           },
 *         },
 *       },
 *       PropertyFilters: { // PropertyFilters
 *         Properties: [ // PropertyFiltersList
 *           { // PropertyFilter
 *             Property: { // Property Union: only one key present
 *               EoCloudCover: { // EoCloudCoverInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewOffNadir: { // ViewOffNadirInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunAzimuth: { // ViewSunAzimuthInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunElevation: { // ViewSunElevationInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               Platform: { // PlatformInput
 *                 Value: "STRING_VALUE", // required
 *                 ComparisonOperator: "STRING_VALUE",
 *               },
 *               LandsatCloudCoverLand: { // LandsatCloudCoverLandInput
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *             },
 *           },
 *         ],
 *         LogicalOperator: "STRING_VALUE",
 *       },
 *     },
 *   },
 *   JobConfig: { // JobConfigInput Union: only one key present
 *     BandMathConfig: { // BandMathConfigInput
 *       PredefinedIndices: [ // StringListInput
 *         "STRING_VALUE",
 *       ],
 *       CustomIndices: { // CustomIndicesInput
 *         Operations: [ // OperationsListInput
 *           { // Operation
 *             Name: "STRING_VALUE", // required
 *             Equation: "STRING_VALUE", // required
 *             OutputType: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     ResamplingConfig: { // ResamplingConfigInput
 *       OutputResolution: { // OutputResolutionResamplingInput
 *         UserDefined: { // UserDefined
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     TemporalStatisticsConfig: { // TemporalStatisticsConfigInput
 *       GroupBy: "STRING_VALUE",
 *       Statistics: [ // TemporalStatisticsListInput // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CloudRemovalConfig: { // CloudRemovalConfigInput
 *       AlgorithmName: "STRING_VALUE",
 *       InterpolationValue: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ZonalStatisticsConfig: { // ZonalStatisticsConfigInput
 *       ZoneS3Path: "STRING_VALUE", // required
 *       Statistics: [ // ZonalStatisticsListInput // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *       ZoneS3PathKmsKeyId: "STRING_VALUE",
 *     },
 *     GeoMosaicConfig: { // GeoMosaicConfigInput
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: "<StringListInput>",
 *     },
 *     StackConfig: { // StackConfigInput
 *       OutputResolution: { // OutputResolutionStackInput
 *         Predefined: "STRING_VALUE",
 *         UserDefined: {
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       TargetBands: "<StringListInput>",
 *     },
 *     CloudMaskingConfig: {},
 *     LandCoverSegmentationConfig: {},
 *   },
 *   ExecutionRoleArn: "STRING_VALUE", // required
 *   Tags: { // Tags
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // { // StartEarthObservationJobOutput
 * //   Name: "STRING_VALUE", // required
 * //   Arn: "STRING_VALUE", // required
 * //   CreationTime: new Date("TIMESTAMP"), // required
 * //   DurationInSeconds: Number("int"), // required
 * //   Status: "STRING_VALUE", // required
 * //   KmsKeyId: "STRING_VALUE",
 * //   InputConfig: { // InputConfigOutput
 * //     PreviousEarthObservationJobArn: "STRING_VALUE",
 * //     RasterDataCollectionQuery: { // RasterDataCollectionQueryOutput
 * //       RasterDataCollectionArn: "STRING_VALUE", // required
 * //       RasterDataCollectionName: "STRING_VALUE", // required
 * //       TimeRangeFilter: { // TimeRangeFilterOutput
 * //         StartTime: new Date("TIMESTAMP"), // required
 * //         EndTime: new Date("TIMESTAMP"), // required
 * //       },
 * //       AreaOfInterest: { // AreaOfInterest Union: only one key present
 * //         AreaOfInterestGeometry: { // AreaOfInterestGeometry Union: only one key present
 * //           PolygonGeometry: { // PolygonGeometryInput
 * //             Coordinates: [ // LinearRings // required
 * //               [ // LinearRing
 * //                 [ // Position
 * //                   Number("double"),
 * //                 ],
 * //               ],
 * //             ],
 * //           },
 * //           MultiPolygonGeometry: { // MultiPolygonGeometryInput
 * //             Coordinates: [ // LinearRingsList // required
 * //               [
 * //                 [
 * //                   [
 * //                     Number("double"),
 * //                   ],
 * //                 ],
 * //               ],
 * //             ],
 * //           },
 * //         },
 * //       },
 * //       PropertyFilters: { // PropertyFilters
 * //         Properties: [ // PropertyFiltersList
 * //           { // PropertyFilter
 * //             Property: { // Property Union: only one key present
 * //               EoCloudCover: { // EoCloudCoverInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewOffNadir: { // ViewOffNadirInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewSunAzimuth: { // ViewSunAzimuthInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               ViewSunElevation: { // ViewSunElevationInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //               Platform: { // PlatformInput
 * //                 Value: "STRING_VALUE", // required
 * //                 ComparisonOperator: "STRING_VALUE",
 * //               },
 * //               LandsatCloudCoverLand: { // LandsatCloudCoverLandInput
 * //                 LowerBound: Number("float"), // required
 * //                 UpperBound: Number("float"), // required
 * //               },
 * //             },
 * //           },
 * //         ],
 * //         LogicalOperator: "STRING_VALUE",
 * //       },
 * //     },
 * //   },
 * //   JobConfig: { // JobConfigInput Union: only one key present
 * //     BandMathConfig: { // BandMathConfigInput
 * //       PredefinedIndices: [ // StringListInput
 * //         "STRING_VALUE",
 * //       ],
 * //       CustomIndices: { // CustomIndicesInput
 * //         Operations: [ // OperationsListInput
 * //           { // Operation
 * //             Name: "STRING_VALUE", // required
 * //             Equation: "STRING_VALUE", // required
 * //             OutputType: "STRING_VALUE",
 * //           },
 * //         ],
 * //       },
 * //     },
 * //     ResamplingConfig: { // ResamplingConfigInput
 * //       OutputResolution: { // OutputResolutionResamplingInput
 * //         UserDefined: { // UserDefined
 * //           Value: Number("float"), // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       AlgorithmName: "STRING_VALUE",
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     TemporalStatisticsConfig: { // TemporalStatisticsConfigInput
 * //       GroupBy: "STRING_VALUE",
 * //       Statistics: [ // TemporalStatisticsListInput // required
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     CloudRemovalConfig: { // CloudRemovalConfigInput
 * //       AlgorithmName: "STRING_VALUE",
 * //       InterpolationValue: "STRING_VALUE",
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //     },
 * //     ZonalStatisticsConfig: { // ZonalStatisticsConfigInput
 * //       ZoneS3Path: "STRING_VALUE", // required
 * //       Statistics: [ // ZonalStatisticsListInput // required
 * //         "STRING_VALUE",
 * //       ],
 * //       TargetBands: [
 * //         "STRING_VALUE",
 * //       ],
 * //       ZoneS3PathKmsKeyId: "STRING_VALUE",
 * //     },
 * //     GeoMosaicConfig: { // GeoMosaicConfigInput
 * //       AlgorithmName: "STRING_VALUE",
 * //       TargetBands: "<StringListInput>",
 * //     },
 * //     StackConfig: { // StackConfigInput
 * //       OutputResolution: { // OutputResolutionStackInput
 * //         Predefined: "STRING_VALUE",
 * //         UserDefined: {
 * //           Value: Number("float"), // required
 * //           Unit: "STRING_VALUE", // required
 * //         },
 * //       },
 * //       TargetBands: "<StringListInput>",
 * //     },
 * //     CloudMaskingConfig: {},
 * //     LandCoverSegmentationConfig: {},
 * //   },
 * //   ExecutionRoleArn: "STRING_VALUE", // required
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param StartEarthObservationJobCommandInput - {@link StartEarthObservationJobCommandInput}
 * @returns {@link StartEarthObservationJobCommandOutput}
 * @see {@link StartEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link StartEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *
 * You do not have sufficient access to perform this action.
 *
 * @throws {@link ConflictException} (client fault)
 *
 * Updating or deleting a resource can cause an inconsistent state.
 *
 * @throws {@link InternalServerException} (server fault)
 *
 * The request processing has failed because of an unknown error, exception, or failure.
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *
 * The request references a resource which does not exist.
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *
 * You have exceeded the service quota.
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
export class StartEarthObservationJobCommand extends command<StartEarthObservationJobCommandInput, StartEarthObservationJobCommandOutput>(
  _ep0,
  _mw0,
  "StartEarthObservationJob",
  StartEarthObservationJob$
) {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: StartEarthObservationJobInput;
      output: StartEarthObservationJobOutput;
    };
    sdk: {
      input: StartEarthObservationJobCommandInput;
      output: StartEarthObservationJobCommandOutput;
    };
  };
}
