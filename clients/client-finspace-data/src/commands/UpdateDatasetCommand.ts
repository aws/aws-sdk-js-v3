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

import { FinspaceDataClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FinspaceDataClient";
import { UpdateDatasetRequest, UpdateDatasetResponse } from "../models/models_0";
import { de_UpdateDatasetCommand, se_UpdateDatasetCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandInput extends UpdateDatasetRequest {}
/**
 * @public
 *
 * The output of {@link UpdateDatasetCommand}.
 */
export interface UpdateDatasetCommandOutput extends UpdateDatasetResponse, __MetadataBearer {}

/**
 * @public
 * <p>Updates a FinSpace Dataset.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, UpdateDatasetCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, UpdateDatasetCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // UpdateDatasetRequest
 *   clientToken: "STRING_VALUE",
 *   datasetId: "STRING_VALUE", // required
 *   datasetTitle: "STRING_VALUE", // required
 *   kind: "TABULAR" || "NON_TABULAR", // required
 *   datasetDescription: "STRING_VALUE",
 *   alias: "STRING_VALUE",
 *   schemaDefinition: { // SchemaUnion
 *     tabularSchemaConfig: { // SchemaDefinition
 *       columns: [ // ColumnList
 *         { // ColumnDefinition
 *           dataType: "STRING" || "CHAR" || "INTEGER" || "TINYINT" || "SMALLINT" || "BIGINT" || "FLOAT" || "DOUBLE" || "DATE" || "DATETIME" || "BOOLEAN" || "BINARY",
 *           columnName: "STRING_VALUE",
 *           columnDescription: "STRING_VALUE",
 *         },
 *       ],
 *       primaryKeyColumns: [ // ColumnNameList
 *         "STRING_VALUE",
 *       ],
 *     },
 *   },
 * };
 * const command = new UpdateDatasetCommand(input);
 * const response = await client.send(command);
 * // { // UpdateDatasetResponse
 * //   datasetId: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateDatasetCommandInput - {@link UpdateDatasetCommandInput}
 * @returns {@link UpdateDatasetCommandOutput}
 * @see {@link UpdateDatasetCommandInput} for command's `input` shape.
 * @see {@link UpdateDatasetCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>You do not have sufficient access to perform this action.</p>
 *
 * @throws {@link ConflictException} (client fault)
 *  <p>The request conflicts with an existing resource.</p>
 *
 * @throws {@link InternalServerException} (server fault)
 *  <p>The request processing has failed because of an unknown error, exception or
 *       failure.</p>
 *
 * @throws {@link ResourceNotFoundException} (client fault)
 *  <p>One or more resources can't be found.</p>
 *
 * @throws {@link ThrottlingException} (client fault)
 *  <p>The request was denied due to request throttling.</p>
 *
 * @throws {@link ValidationException} (client fault)
 *  <p>The input fails to satisfy the constraints specified by an AWS service.</p>
 *
 * @throws {@link FinspaceDataServiceException}
 * <p>Base exception class for all service exceptions from FinspaceData service.</p>
 *
 */
export class UpdateDatasetCommand extends $Command<
  UpdateDatasetCommandInput,
  UpdateDatasetCommandOutput,
  FinspaceDataClientResolvedConfig
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
  constructor(readonly input: UpdateDatasetCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: FinspaceDataClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDatasetCommandInput, UpdateDatasetCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UpdateDatasetCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "UpdateDatasetCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "UpdateDataset",
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
  private serialize(input: UpdateDatasetCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateDatasetCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDatasetCommandOutput> {
    return de_UpdateDatasetCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
