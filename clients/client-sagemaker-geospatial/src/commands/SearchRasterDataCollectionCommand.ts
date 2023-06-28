// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import {
  SearchRasterDataCollectionInput,
  SearchRasterDataCollectionInputFilterSensitiveLog,
  SearchRasterDataCollectionOutput,
  SearchRasterDataCollectionOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_SearchRasterDataCollectionCommand, se_SearchRasterDataCollectionCommand } from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Allows you run image query on a specific raster data collection to get a list of the satellite imagery matching the selected filters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, SearchRasterDataCollectionCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, SearchRasterDataCollectionCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
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
 */
export class SearchRasterDataCollectionCommand extends $Command<
  SearchRasterDataCollectionCommandInput,
  SearchRasterDataCollectionCommandOutput,
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
  constructor(readonly input: SearchRasterDataCollectionCommandInput) {
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
  ): Handler<SearchRasterDataCollectionCommandInput, SearchRasterDataCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, SearchRasterDataCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "SearchRasterDataCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SearchRasterDataCollectionInputFilterSensitiveLog,
      outputFilterSensitiveLog: SearchRasterDataCollectionOutputFilterSensitiveLog,
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
  private serialize(input: SearchRasterDataCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_SearchRasterDataCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchRasterDataCollectionCommandOutput> {
    return de_SearchRasterDataCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
