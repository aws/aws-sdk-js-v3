// smithy-typescript generated code
import { getEndpointPlugin } from "@smithy/middleware-endpoint";
import { Command as $Command } from "@smithy/smithy-client";
import { MetadataBearer as __MetadataBearer } from "@smithy/types";

import { commonParams } from "../endpoint/EndpointParameters";
import { GetEarthObservationJobInput, GetEarthObservationJobOutput } from "../models/models_0";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";
import { GetEarthObservationJob } from "../schemas/schemas_3_Job";

/**
 * @public
 */
export type { __MetadataBearer };
export { $Command };
/**
 * @public
 *
 * The input for {@link GetEarthObservationJobCommand}.
 */
export interface GetEarthObservationJobCommandInput extends GetEarthObservationJobInput {}
/**
 * @public
 *
 * The output of {@link GetEarthObservationJobCommand}.
 */
export interface GetEarthObservationJobCommandOutput extends GetEarthObservationJobOutput, __MetadataBearer {}

/**
 * <p>Get the details for a previously initiated Earth Observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * // import type { SageMakerGeospatialClientConfig } from "@aws-sdk/client-sagemaker-geospatial";
 * const config = {}; // type is SageMakerGeospatialClientConfig
 * const client = new SageMakerGeospatialClient(config);
 * const input = { // GetEarthObservationJobInput
 *   Arn: "STRING_VALUE", // required
 * };
 * const command = new GetEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * // { // GetEarthObservationJobOutput
 * //   Arn: "STRING_VALUE", // required
 * //   Name: "STRING_VALUE", // required
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
 * //   OutputBands: [ // EarthObservationJobOutputBands
 * //     { // OutputBand
 * //       BandName: "STRING_VALUE", // required
 * //       OutputDataType: "STRING_VALUE", // required
 * //     },
 * //   ],
 * //   ExecutionRoleArn: "STRING_VALUE",
 * //   ErrorDetails: { // EarthObservationJobErrorDetails
 * //     Type: "STRING_VALUE",
 * //     Message: "STRING_VALUE",
 * //   },
 * //   ExportStatus: "STRING_VALUE",
 * //   ExportErrorDetails: { // ExportErrorDetails
 * //     ExportResults: { // ExportErrorDetailsOutput
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //     ExportSourceImages: {
 * //       Type: "STRING_VALUE",
 * //       Message: "STRING_VALUE",
 * //     },
 * //   },
 * //   Tags: { // Tags
 * //     "<keys>": "STRING_VALUE",
 * //   },
 * // };
 *
 * ```
 *
 * @param GetEarthObservationJobCommandInput - {@link GetEarthObservationJobCommandInput}
 * @returns {@link GetEarthObservationJobCommandOutput}
 * @see {@link GetEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link GetEarthObservationJobCommandOutput} for command's `response` shape.
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
export class GetEarthObservationJobCommand extends $Command
  .classBuilder<
    GetEarthObservationJobCommandInput,
    GetEarthObservationJobCommandOutput,
    SageMakerGeospatialClientResolvedConfig,
    ServiceInputTypes,
    ServiceOutputTypes
  >()
  .ep(commonParams)
  .m(function (this: any, Command: any, cs: any, config: SageMakerGeospatialClientResolvedConfig, o: any) {
    return [getEndpointPlugin(config, Command.getEndpointParameterInstructions())];
  })
  .s("SageMakerGeospatial", "GetEarthObservationJob", {})
  .n("SageMakerGeospatialClient", "GetEarthObservationJobCommand")
  .sc(GetEarthObservationJob)
  .build() {
  /** @internal type navigation helper, not in runtime. */
  protected declare static __types: {
    api: {
      input: GetEarthObservationJobInput;
      output: GetEarthObservationJobOutput;
    };
    sdk: {
      input: GetEarthObservationJobCommandInput;
      output: GetEarthObservationJobCommandOutput;
    };
  };
}
