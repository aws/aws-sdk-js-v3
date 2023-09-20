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
import { ListDatasetsRequest, ListDatasetsResponse, ListDatasetsResponseFilterSensitiveLog } from "../models/models_0";
import { de_ListDatasetsCommand, se_ListDatasetsCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandInput extends ListDatasetsRequest {}
/**
 * @public
 *
 * The output of {@link ListDatasetsCommand}.
 */
export interface ListDatasetsCommandOutput extends ListDatasetsResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all of the active Datasets that a user has access to.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FinspaceDataClient, ListDatasetsCommand } from "@aws-sdk/client-finspace-data"; // ES Modules import
 * // const { FinspaceDataClient, ListDatasetsCommand } = require("@aws-sdk/client-finspace-data"); // CommonJS import
 * const client = new FinspaceDataClient(config);
 * const input = { // ListDatasetsRequest
 *   nextToken: "STRING_VALUE",
 *   maxResults: Number("int"),
 * };
 * const command = new ListDatasetsCommand(input);
 * const response = await client.send(command);
 * // { // ListDatasetsResponse
 * //   datasets: [ // DatasetList
 * //     { // Dataset
 * //       datasetId: "STRING_VALUE",
 * //       datasetArn: "STRING_VALUE",
 * //       datasetTitle: "STRING_VALUE",
 * //       kind: "TABULAR" || "NON_TABULAR",
 * //       datasetDescription: "STRING_VALUE",
 * //       ownerInfo: { // DatasetOwnerInfo
 * //         name: "STRING_VALUE",
 * //         phoneNumber: "STRING_VALUE",
 * //         email: "STRING_VALUE",
 * //       },
 * //       createTime: Number("long"),
 * //       lastModifiedTime: Number("long"),
 * //       schemaDefinition: { // SchemaUnion
 * //         tabularSchemaConfig: { // SchemaDefinition
 * //           columns: [ // ColumnList
 * //             { // ColumnDefinition
 * //               dataType: "STRING" || "CHAR" || "INTEGER" || "TINYINT" || "SMALLINT" || "BIGINT" || "FLOAT" || "DOUBLE" || "DATE" || "DATETIME" || "BOOLEAN" || "BINARY",
 * //               columnName: "STRING_VALUE",
 * //               columnDescription: "STRING_VALUE",
 * //             },
 * //           ],
 * //           primaryKeyColumns: [ // ColumnNameList
 * //             "STRING_VALUE",
 * //           ],
 * //         },
 * //       },
 * //       alias: "STRING_VALUE",
 * //     },
 * //   ],
 * //   nextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDatasetsCommandInput - {@link ListDatasetsCommandInput}
 * @returns {@link ListDatasetsCommandOutput}
 * @see {@link ListDatasetsCommandInput} for command's `input` shape.
 * @see {@link ListDatasetsCommandOutput} for command's `response` shape.
 * @see {@link FinspaceDataClientResolvedConfig | config} for FinspaceDataClient's `config` shape.
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
export class ListDatasetsCommand extends $Command<
  ListDatasetsCommandInput,
  ListDatasetsCommandOutput,
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
  constructor(readonly input: ListDatasetsCommandInput) {
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
  ): Handler<ListDatasetsCommandInput, ListDatasetsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, ListDatasetsCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "FinspaceDataClient";
    const commandName = "ListDatasetsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: ListDatasetsResponseFilterSensitiveLog,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSHabaneroPublicAPI",
        operation: "ListDatasets",
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
  private serialize(input: ListDatasetsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDatasetsCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDatasetsCommandOutput> {
    return de_ListDatasetsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
