// smithy-typescript generated code
import { getEndpointDiscoveryPlugin } from "@aws-sdk/middleware-endpoint-discovery";
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
  PrepareQueryRequest,
  PrepareQueryRequestFilterSensitiveLog,
  PrepareQueryResponse,
  PrepareQueryResponseFilterSensitiveLog,
} from "../models/models_0";
import { de_PrepareQueryCommand, se_PrepareQueryCommand } from "../protocols/Aws_json1_0";
import { ServiceInputTypes, ServiceOutputTypes, TimestreamQueryClientResolvedConfig } from "../TimestreamQueryClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link PrepareQueryCommand}.
 */
export interface PrepareQueryCommandInput extends PrepareQueryRequest {}
/**
 * @public
 *
 * The output of {@link PrepareQueryCommand}.
 */
export interface PrepareQueryCommandOutput extends PrepareQueryResponse, __MetadataBearer {}

/**
 * @public
 * <p>A synchronous operation that allows you to submit a query with parameters to be stored
 *             by Timestream for later running. Timestream only supports using this operation with the
 *                 <code>PrepareQueryRequest$ValidateOnly</code> set to <code>true</code>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TimestreamQueryClient, PrepareQueryCommand } from "@aws-sdk/client-timestream-query"; // ES Modules import
 * // const { TimestreamQueryClient, PrepareQueryCommand } = require("@aws-sdk/client-timestream-query"); // CommonJS import
 * const client = new TimestreamQueryClient(config);
 * const input = { // PrepareQueryRequest
 *   QueryString: "STRING_VALUE", // required
 *   ValidateOnly: true || false,
 * };
 * const command = new PrepareQueryCommand(input);
 * const response = await client.send(command);
 * // { // PrepareQueryResponse
 * //   QueryString: "STRING_VALUE", // required
 * //   Columns: [ // SelectColumnList // required
 * //     { // SelectColumn
 * //       Name: "STRING_VALUE",
 * //       Type: { // Type
 * //         ScalarType: "STRING_VALUE",
 * //         ArrayColumnInfo: { // ColumnInfo
 * //           Name: "STRING_VALUE",
 * //           Type: {
 * //             ScalarType: "STRING_VALUE",
 * //             ArrayColumnInfo: {
 * //               Name: "STRING_VALUE",
 * //               Type: "<Type>", // required
 * //             },
 * //             TimeSeriesMeasureValueColumnInfo: {
 * //               Name: "STRING_VALUE",
 * //               Type: "<Type>", // required
 * //             },
 * //             RowColumnInfo: [ // ColumnInfoList
 * //               "<ColumnInfo>",
 * //             ],
 * //           },
 * //         },
 * //         TimeSeriesMeasureValueColumnInfo: "<ColumnInfo>",
 * //         RowColumnInfo: [
 * //           "<ColumnInfo>",
 * //         ],
 * //       },
 * //       DatabaseName: "STRING_VALUE",
 * //       TableName: "STRING_VALUE",
 * //       Aliased: true || false,
 * //     },
 * //   ],
 * //   Parameters: [ // ParameterMappingList // required
 * //     { // ParameterMapping
 * //       Name: "STRING_VALUE", // required
 * //       Type: "<Type>", // required
 * //     },
 * //   ],
 * // };
 *
 * ```
 *
 * @param PrepareQueryCommandInput - {@link PrepareQueryCommandInput}
 * @returns {@link PrepareQueryCommandOutput}
 * @see {@link PrepareQueryCommandInput} for command's `input` shape.
 * @see {@link PrepareQueryCommandOutput} for command's `response` shape.
 * @see {@link TimestreamQueryClientResolvedConfig | config} for TimestreamQueryClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p> You are not authorized to perform this action. </p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>
 *             Timestream was unable to fully process this request because of an internal
 *             server error. </p>
 *
 * @throws {@link InvalidEndpointException} (client fault)
 *  <p>The requested endpoint was not valid.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p> Invalid or malformed request. </p>
 *
 * @throws {@link TimestreamQueryServiceException}
 * <p>Base exception class for all service exceptions from TimestreamQuery service.</p>
 *
 */
export class PrepareQueryCommand extends $Command<
  PrepareQueryCommandInput,
  PrepareQueryCommandOutput,
  TimestreamQueryClientResolvedConfig
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
  constructor(readonly input: PrepareQueryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamQueryClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PrepareQueryCommandInput, PrepareQueryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, PrepareQueryCommand.getEndpointParameterInstructions()));
    this.middlewareStack.use(
      getEndpointDiscoveryPlugin(configuration, { clientStack, options, isDiscoveredEndpointRequired: true })
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamQueryClient";
    const commandName = "PrepareQueryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PrepareQueryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PrepareQueryResponseFilterSensitiveLog,
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
  private serialize(input: PrepareQueryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_PrepareQueryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PrepareQueryCommandOutput> {
    return de_PrepareQueryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
