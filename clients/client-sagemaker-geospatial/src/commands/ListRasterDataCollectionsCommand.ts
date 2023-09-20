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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import {
  ListRasterDataCollectionsInput,
  ListRasterDataCollectionsInputFilterSensitiveLog,
  ListRasterDataCollectionsOutput,
  ListRasterDataCollectionsOutputFilterSensitiveLog,
} from "../models/models_0";
import { de_ListRasterDataCollectionsCommand, se_ListRasterDataCollectionsCommand } from "../protocols/Aws_restJson1";
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
 * @public
 * <p>Use this operation to get raster data collections.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerGeospatialClient, ListRasterDataCollectionsCommand } from "@aws-sdk/client-sagemaker-geospatial"; // ES Modules import
 * // const { SageMakerGeospatialClient, ListRasterDataCollectionsCommand } = require("@aws-sdk/client-sagemaker-geospatial"); // CommonJS import
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
export class ListRasterDataCollectionsCommand extends $Command<
  ListRasterDataCollectionsCommandInput,
  ListRasterDataCollectionsCommandOutput,
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
  constructor(readonly input: ListRasterDataCollectionsCommandInput) {
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
  ): Handler<ListRasterDataCollectionsCommandInput, ListRasterDataCollectionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListRasterDataCollectionsCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SageMakerGeospatialClient";
    const commandName = "ListRasterDataCollectionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListRasterDataCollectionsInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListRasterDataCollectionsOutputFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "SageMakerGeospatial",
        operation: "ListRasterDataCollections",
      },
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
  private serialize(input: ListRasterDataCollectionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListRasterDataCollectionsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListRasterDataCollectionsCommandOutput> {
    return de_ListRasterDataCollectionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
