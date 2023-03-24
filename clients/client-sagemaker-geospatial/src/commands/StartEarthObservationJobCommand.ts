// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import {
  StartEarthObservationJobInput,
  StartEarthObservationJobInputFilterSensitiveLog,
  StartEarthObservationJobOutput,
  StartEarthObservationJobOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1StartEarthObservationJobCommand,
  serializeAws_restJson1StartEarthObservationJobCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

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
 * @public
 * <p>Use this operation to create an Earth observation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, StartEarthObservationJobCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, StartEarthObservationJobCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
 * const client = new SageMakerGeospatialClient(config);
 * const input = {
 *   Name: "STRING_VALUE", // required
 *   ClientToken: "STRING_VALUE",
 *   KmsKeyId: "STRING_VALUE",
 *   InputConfig: {
 *     PreviousEarthObservationJobArn: "STRING_VALUE",
 *     DataSourceConfig: { // Union: only one key present
 *       S3Data: {
 *         S3Uri: "STRING_VALUE", // required
 *         MetadataProvider: "STRING_VALUE", // required
 *         KmsKeyId: "STRING_VALUE",
 *       },
 *     },
 *     RasterDataCollectionQuery: {
 *       RasterDataCollectionArn: "STRING_VALUE", // required
 *       TimeRangeFilter: {
 *         StartTime: new Date("TIMESTAMP"), // required
 *         EndTime: new Date("TIMESTAMP"), // required
 *       },
 *       AreaOfInterest: { // Union: only one key present
 *         AreaOfInterestGeometry: { // Union: only one key present
 *           PolygonGeometry: {
 *             Coordinates: [ // required
 *               [
 *                 [
 *                   Number("double"),
 *                 ],
 *               ],
 *             ],
 *           },
 *           MultiPolygonGeometry: {
 *             Coordinates: [ // required
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
 *       PropertyFilters: {
 *         Properties: [
 *           {
 *             Property: { // Union: only one key present
 *               EoCloudCover: {
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewOffNadir: {
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunAzimuth: {
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               ViewSunElevation: {
 *                 LowerBound: Number("float"), // required
 *                 UpperBound: Number("float"), // required
 *               },
 *               Platform: {
 *                 Value: "STRING_VALUE", // required
 *                 ComparisonOperator: "STRING_VALUE",
 *               },
 *               LandsatCloudCoverLand: {
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
 *   JobConfig: { // Union: only one key present
 *     BandMathConfig: {
 *       PredefinedIndices: [
 *         "STRING_VALUE",
 *       ],
 *       CustomIndices: {
 *         Operations: [
 *           {
 *             Name: "STRING_VALUE", // required
 *             Equation: "STRING_VALUE", // required
 *             OutputType: "STRING_VALUE",
 *           },
 *         ],
 *       },
 *     },
 *     ResamplingConfig: {
 *       OutputResolution: {
 *         UserDefined: {
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     TemporalStatisticsConfig: {
 *       GroupBy: "STRING_VALUE",
 *       Statistics: [ // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CloudRemovalConfig: {
 *       AlgorithmName: "STRING_VALUE",
 *       InterpolationValue: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     ZonalStatisticsConfig: {
 *       ZoneS3Path: "STRING_VALUE", // required
 *       Statistics: [ // required
 *         "STRING_VALUE",
 *       ],
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     GeoMosaicConfig: {
 *       AlgorithmName: "STRING_VALUE",
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     StackConfig: {
 *       OutputResolution: {
 *         Predefined: "STRING_VALUE",
 *         UserDefined: {
 *           Value: Number("float"), // required
 *           Unit: "STRING_VALUE", // required
 *         },
 *       },
 *       TargetBands: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     CloudMaskingConfig: {},
 *     LandCoverSegmentationConfig: {},
 *   },
 *   ExecutionRoleArn: "STRING_VALUE",
 *   Tags: {
 *     "<keys>": "STRING_VALUE",
 *   },
 * };
 * const command = new StartEarthObservationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param StartEarthObservationJobCommandInput - {@link StartEarthObservationJobCommandInput}
 * @returns {@link StartEarthObservationJobCommandOutput}
 * @see {@link StartEarthObservationJobCommandInput} for command's `input` shape.
 * @see {@link StartEarthObservationJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerGeospatialClientResolvedConfig | config} for SageMakerGeospatialClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p/>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception, or failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p/>
 *
 * @throws {@link ServiceQuotaExceededException} (client fault)
 *  <p>You have exceeded the service quota.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
 *
 */
export class StartEarthObservationJobCommand extends $Command<
  StartEarthObservationJobCommandInput,
  StartEarthObservationJobCommandOutput,
  SageMakerGeospatialClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  /**
   * @public
   */
  constructor(readonly input: StartEarthObservationJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SageMakerGeospatialClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartEarthObservationJobCommandInput, StartEarthObservationJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartEarthObservationJobCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "StartEarthObservationJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartEarthObservationJobInputFilterSensitiveLog,
      outputFilterSensitiveLog: StartEarthObservationJobOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: StartEarthObservationJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1StartEarthObservationJobCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartEarthObservationJobCommandOutput> {
    return deserializeAws_restJson1StartEarthObservationJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
