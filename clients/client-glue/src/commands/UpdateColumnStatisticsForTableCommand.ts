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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { UpdateColumnStatisticsForTableRequest, UpdateColumnStatisticsForTableResponse } from "../models/models_2";
import {
  deserializeAws_json1_1UpdateColumnStatisticsForTableCommand,
  serializeAws_json1_1UpdateColumnStatisticsForTableCommand,
} from "../protocols/Aws_json1_1";

/**
 * @public
 *
 * The input for {@link UpdateColumnStatisticsForTableCommand}.
 */
export interface UpdateColumnStatisticsForTableCommandInput extends UpdateColumnStatisticsForTableRequest {}
/**
 * @public
 *
 * The output of {@link UpdateColumnStatisticsForTableCommand}.
 */
export interface UpdateColumnStatisticsForTableCommandOutput
  extends UpdateColumnStatisticsForTableResponse,
    __MetadataBearer {}

/**
 * @public
 * <p>Creates or updates table statistics of columns.</p>
 *          <p>The Identity and Access Management (IAM) permission required for this operation is <code>UpdateTable</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, UpdateColumnStatisticsForTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, UpdateColumnStatisticsForTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = {
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   TableName: "STRING_VALUE", // required
 *   ColumnStatisticsList: [ // required
 *     {
 *       ColumnName: "STRING_VALUE", // required
 *       ColumnType: "STRING_VALUE", // required
 *       AnalyzedTime: new Date("TIMESTAMP"), // required
 *       StatisticsData: {
 *         Type: "BOOLEAN" || "DATE" || "DECIMAL" || "DOUBLE" || "LONG" || "STRING" || "BINARY", // required
 *         BooleanColumnStatisticsData: {
 *           NumberOfTrues: Number("long"), // required
 *           NumberOfFalses: Number("long"), // required
 *           NumberOfNulls: Number("long"), // required
 *         },
 *         DateColumnStatisticsData: {
 *           MinimumValue: new Date("TIMESTAMP"),
 *           MaximumValue: new Date("TIMESTAMP"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         DecimalColumnStatisticsData: {
 *           MinimumValue: {
 *             UnscaledValue: "BLOB_VALUE", // required
 *             Scale: Number("int"), // required
 *           },
 *           MaximumValue: {
 *             UnscaledValue: "BLOB_VALUE", // required
 *             Scale: Number("int"), // required
 *           },
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         DoubleColumnStatisticsData: {
 *           MinimumValue: Number("double"),
 *           MaximumValue: Number("double"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         LongColumnStatisticsData: {
 *           MinimumValue: Number("long"),
 *           MaximumValue: Number("long"),
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         StringColumnStatisticsData: {
 *           MaximumLength: Number("long"), // required
 *           AverageLength: Number("double"), // required
 *           NumberOfNulls: Number("long"), // required
 *           NumberOfDistinctValues: Number("long"), // required
 *         },
 *         BinaryColumnStatisticsData: {
 *           MaximumLength: Number("long"), // required
 *           AverageLength: Number("double"), // required
 *           NumberOfNulls: Number("long"), // required
 *         },
 *       },
 *     },
 *   ],
 * };
 * const command = new UpdateColumnStatisticsForTableCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @param UpdateColumnStatisticsForTableCommandInput - {@link UpdateColumnStatisticsForTableCommandInput}
 * @returns {@link UpdateColumnStatisticsForTableCommandOutput}
 * @see {@link UpdateColumnStatisticsForTableCommandInput} for command's `input` shape.
 * @see {@link UpdateColumnStatisticsForTableCommandOutput} for command's `response` shape.
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
 *
 */
export class UpdateColumnStatisticsForTableCommand extends $Command<
  UpdateColumnStatisticsForTableCommandInput,
  UpdateColumnStatisticsForTableCommandOutput,
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
  constructor(readonly input: UpdateColumnStatisticsForTableCommandInput) {
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
  ): Handler<UpdateColumnStatisticsForTableCommandInput, UpdateColumnStatisticsForTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateColumnStatisticsForTableCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "UpdateColumnStatisticsForTableCommand";
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
  private serialize(
    input: UpdateColumnStatisticsForTableCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateColumnStatisticsForTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateColumnStatisticsForTableCommandOutput> {
    return deserializeAws_json1_1UpdateColumnStatisticsForTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
