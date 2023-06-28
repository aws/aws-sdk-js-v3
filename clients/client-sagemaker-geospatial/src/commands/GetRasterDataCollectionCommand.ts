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
export { __MetadataBearer, $Command };
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
 * @public
 * <p>Use this operation to get details of a specific raster data collection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, GetRasterDataCollectionCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, GetRasterDataCollectionCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
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
 */
export class GetRasterDataCollectionCommand extends $Command<
  GetRasterDataCollectionCommandInput,
  GetRasterDataCollectionCommandOutput,
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
  constructor(readonly input: GetRasterDataCollectionCommandInput) {
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
  ): Handler<GetRasterDataCollectionCommandInput, GetRasterDataCollectionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetRasterDataCollectionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "GetRasterDataCollectionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
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
  private serialize(input: GetRasterDataCollectionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetRasterDataCollectionCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRasterDataCollectionCommandOutput> {
    return de_GetRasterDataCollectionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
