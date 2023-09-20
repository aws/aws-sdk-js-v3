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

import { LakeFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LakeFormationClient";
import { ListDataCellsFilterRequest, ListDataCellsFilterResponse } from "../models/models_0";
import { de_ListDataCellsFilterCommand, se_ListDataCellsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ListDataCellsFilterCommand}.
 */
export interface ListDataCellsFilterCommandInput extends ListDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link ListDataCellsFilterCommand}.
 */
export interface ListDataCellsFilterCommandOutput extends ListDataCellsFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Lists all the data cell filters on a table.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, ListDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, ListDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // ListDataCellsFilterRequest
 *   Table: { // TableResource
 *     CatalogId: "STRING_VALUE",
 *     DatabaseName: "STRING_VALUE", // required
 *     Name: "STRING_VALUE",
 *     TableWildcard: {},
 *   },
 *   NextToken: "STRING_VALUE",
 *   MaxResults: Number("int"),
 * };
 * const command = new ListDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // { // ListDataCellsFilterResponse
 * //   DataCellsFilters: [ // DataCellsFilterList
 * //     { // DataCellsFilter
 * //       TableCatalogId: "STRING_VALUE", // required
 * //       DatabaseName: "STRING_VALUE", // required
 * //       TableName: "STRING_VALUE", // required
 * //       Name: "STRING_VALUE", // required
 * //       RowFilter: { // RowFilter
 * //         FilterExpression: "STRING_VALUE",
 * //         AllRowsWildcard: {},
 * //       },
 * //       ColumnNames: [ // ColumnNames
 * //         "STRING_VALUE",
 * //       ],
 * //       ColumnWildcard: { // ColumnWildcard
 * //         ExcludedColumnNames: [
 * //           "STRING_VALUE",
 * //         ],
 * //       },
 * //       VersionId: "STRING_VALUE",
 * //     },
 * //   ],
 * //   NextToken: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ListDataCellsFilterCommandInput - {@link ListDataCellsFilterCommandInput}
 * @returns {@link ListDataCellsFilterCommandOutput}
 * @see {@link ListDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link ListDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
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
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class ListDataCellsFilterCommand extends $Command<
  ListDataCellsFilterCommandInput,
  ListDataCellsFilterCommandOutput,
  LakeFormationClientResolvedConfig
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
  constructor(readonly input: ListDataCellsFilterCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LakeFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListDataCellsFilterCommandInput, ListDataCellsFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListDataCellsFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "ListDataCellsFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "ListDataCellsFilter",
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
  private serialize(input: ListDataCellsFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ListDataCellsFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListDataCellsFilterCommandOutput> {
    return de_ListDataCellsFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
