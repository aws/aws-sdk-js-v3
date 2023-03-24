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
  SearchRasterDataCollectionInput,
  SearchRasterDataCollectionInputFilterSensitiveLog,
  SearchRasterDataCollectionOutput,
  SearchRasterDataCollectionOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1SearchRasterDataCollectionCommand,
  serializeAws_restJson1SearchRasterDataCollectionCommand,
} from "../protocols/Aws_restJson1";
import {
  SageMakerGeospatialClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../SageMakerGeospatialClient";

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
 * const input = {
 *   Arn: "STRING_VALUE", // required
 *   RasterDataCollectionQuery: {
 *     TimeRangeFilter: {
 *       StartTime: new Date("TIMESTAMP"), // required
 *       EndTime: new Date("TIMESTAMP"), // required
 *     },
 *     AreaOfInterest: { // Union: only one key present
 *       AreaOfInterestGeometry: { // Union: only one key present
 *         PolygonGeometry: {
 *           Coordinates: [ // required
 *             [
 *               [
 *                 Number("double"),
 *               ],
 *             ],
 *           ],
 *         },
 *         MultiPolygonGeometry: {
 *           Coordinates: [ // required
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
 *     PropertyFilters: {
 *       Properties: [
 *         {
 *           Property: { // Union: only one key present
 *             EoCloudCover: {
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewOffNadir: {
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewSunAzimuth: {
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             ViewSunElevation: {
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *             Platform: {
 *               Value: "STRING_VALUE", // required
 *               ComparisonOperator: "STRING_VALUE",
 *             },
 *             LandsatCloudCoverLand: {
 *               LowerBound: Number("float"), // required
 *               UpperBound: Number("float"), // required
 *             },
 *           },
 *         },
 *       ],
 *       LogicalOperator: "STRING_VALUE",
 *     },
 *     BandFilter: [
 *       "STRING_VALUE",
 *     ],
 *   },
 *   NextToken: "STRING_VALUE",
 * };
 * const command = new SearchRasterDataCollectionCommand(input);
 * const response = await client.send(command);
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
 *  <p/>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an Amazon Web Services service.</p>
 *
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
    return serializeAws_restJson1SearchRasterDataCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<SearchRasterDataCollectionCommandOutput> {
    return deserializeAws_restJson1SearchRasterDataCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
