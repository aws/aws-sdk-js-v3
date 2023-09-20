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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { GetColumnStatisticsForTableRequest, GetColumnStatisticsForTableResponse } from "../models/models_1";
import { de_GetColumnStatisticsForTableCommand, se_GetColumnStatisticsForTableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link GetColumnStatisticsForTableCommand}.
 */
export interface GetColumnStatisticsForTableCommandInput extends GetColumnStatisticsForTableRequest {}
/**
 * @public
 *
 * The output of {@link GetColumnStatisticsForTableCommand}.
 */
export interface GetColumnStatisticsForTableCommandOutput
  extends GetColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Retrieves table statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>GetTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, GetColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, GetColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // GetColumnStatisticsForTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnNames: [ // GetColumnNamesList // required
 *     "STRING_VALUE",
 *   ],
 * };
 * const command = new GetColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * // { // GetColumnStatisticsForTableResponse
 * //   ColumnStatisticsList: [ // ColumnStatisticsList
 * //     { // ColumnStatistics
 * //       ColumnName: "STRING_VALUE", // required
 * //       ColumnType: "STRING_VALUE", // required
 * //       AnalyzedTime: new Date("TIMESTAMP"), // required
 * //       StatisticsData: { // ColumnStatisticsData
 * //         Type: "BOOLEAN" || "DATE" || "DECIMAL" || "DOUBLE" || "LONG" || "STRING" || "BINARY", // required
 * //         BooleanColumnStatisticsData: { // BooleanColumnStatisticsData
 * //           NumberOfTrues: Number("long"), // required
 * //           NumberOfFalses: Number("long"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //         },
 * //         DateColumnStatisticsData: { // DateColumnStatisticsData
 * //           MinimumValue: new Date("TIMESTAMP"),
 * //           MaximumValue: new Date("TIMESTAMP"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         DecimalColumnStatisticsData: { // DecimalColumnStatisticsData
 * //           MinimumValue: { // DecimalNumber
 * //             UnscaledValue: "BLOB_VALUE", // required
 * //             Scale: Number("int"), // required
 * //           },
 * //           MaximumValue: {
 * //             UnscaledValue: "BLOB_VALUE", // required
 * //             Scale: Number("int"), // required
 * //           },
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         DoubleColumnStatisticsData: { // DoubleColumnStatisticsData
 * //           MinimumValue: Number("double"),
 * //           MaximumValue: Number("double"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         LongColumnStatisticsData: { // LongColumnStatisticsData
 * //           MinimumValue: Number("long"),
 * //           MaximumValue: Number("long"),
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         StringColumnStatisticsData: { // StringColumnStatisticsData
 * //           MaximumLength: Number("long"), // required
 * //           AverageLength: Number("double"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //           NumberOfDistinctValues: Number("long"), // required
 * //         },
 * //         BinaryColumnStatisticsData: { // BinaryColumnStatisticsData
 * //           MaximumLength: Number("long"), // required
 * //           AverageLength: Number("double"), // required
 * //           NumberOfNulls: Number("long"), // required
 * //         },
 * //       },
 * //     },
 * //   ],
 * //   Errors: [ // ColumnErrors
 * //     { // ColumnError
 * //       ColumnName: "STRING_VALUE",
 * //       Error: { // ErrorDetail
 * //         ErrorCode: "STRING_VALUE",
 * //         ErrorMessage: "STRING_VALUE",
 * //       },
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param GetColumnStatisticsForTableCommandInput - {@link GetColumnStatisticsForTableCommandInput}
 * @returns {@link GetColumnStatisticsForTableCommandOutput}
 * @see {@link GetColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link GetColumnStatisticsForTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
 *
 * @throws {@link GlueEncryptionException} (client fault)
 *  <p>An encryption operation failed.</p>
 *
 * @throws {@link InternalServiceException} (server fault)
 *  <p>An internal service error occurred.</p>
 *
 * @throws {@link InvalidInputException} (client fault)
 *  <p>The input provided was not valid.</p>
 *
 * @throws {@link OperationTimeoutException} (client fault)
 *  <p>The operation timed out.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class GetColumnStatisticsForTableCommand extends $Command<
  GetColumnStatisticsForTableCommandInput,
  GetColumnStatisticsForTableCommandOutput,
  GlueClientResolvedConfig
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
  constructor(readonly input: GetColumnStatisticsForTableCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetColumnStatisticsForTableCommandInput, GetColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetColumnStatisticsForTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "GetColumnStatisticsForTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSGlue",
        operation: "GetColumnStatisticsForTable",
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
  private serialize(input: GetColumnStatisticsForTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_GetColumnStatisticsForTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetColumnStatisticsForTableCommandOutput> {
    return de_GetColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
