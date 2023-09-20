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
import { CreateDataCellsFilterRequest, CreateDataCellsFilterResponse } from "../models/models_0";
import { de_CreateDataCellsFilterCommand, se_CreateDataCellsFilterCommand } from "../protocols/Aws_restJson1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link CreateDataCellsFilterCommand}.
 */
export interface CreateDataCellsFilterCommandInput extends CreateDataCellsFilterRequest {}
/**
 * @public
 *
 * The output of {@link CreateDataCellsFilterCommand}.
 */
export interface CreateDataCellsFilterCommandOutput extends CreateDataCellsFilterResponse, __MetadataBearer {}

/**
 * @public
 * <p>Creates a data cell filter to allow one to grant access to certain columns on certain rows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LakeFormationClient, CreateDataCellsFilterCommand } from "@aws-sdk/client-lakeformation"; // ES Modules import
 * // const { LakeFormationClient, CreateDataCellsFilterCommand } = require("@aws-sdk/client-lakeformation"); // CommonJS import
 * const client = new LakeFormationClient(config);
 * const input = { // CreateDataCellsFilterRequest
 *   TableData: { // DataCellsFilter
 *     TableCatalogId: "STRING_VALUE", // required
 *     DatabaseName: "STRING_VALUE", // required
 *     TableName: "STRING_VALUE", // required
 *     Name: "STRING_VALUE", // required
 *     RowFilter: { // RowFilter
 *       FilterExpression: "STRING_VALUE",
 *       AllRowsWildcard: {},
 *     },
 *     ColumnNames: [ // ColumnNames
 *       "STRING_VALUE",
 *     ],
 *     ColumnWildcard: { // ColumnWildcard
 *       ExcludedColumnNames: [
 *         "STRING_VALUE",
 *       ],
 *     },
 *     VersionId: "STRING_VALUE",
 *   },
 * };
 * const command = new CreateDataCellsFilterCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param CreateDataCellsFilterCommandInput - {@link CreateDataCellsFilterCommandInput}
 * @returns {@link CreateDataCellsFilterCommandOutput}
 * @see {@link CreateDataCellsFilterCommandInput} for command's `input` shape.
 * @see {@link CreateDataCellsFilterCommandOutput} for command's `response` shape.
 * @see {@link LakeFormationClientResolvedConfig | config} for LakeFormationClient's `config` shape.
 *
 * @throws {@link AccessDeniedException} (client fault)
 *  <p>Access to a resource was denied.</p>
 *
 * @throws {@link AlreadyExistsException} (client fault)
 *  <p>A resource to be created or added already exists.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist.</p>
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
 * @throws {@link ResourceNumberLimitExceededException} (client fault)
 *  <p>A resource numerical limit was exceeded.</p>
 *
 * @throws {@link LakeFormationServiceException}
 * <p>Base exception class for all service exceptions from LakeFormation service.</p>
 *
 */
export class CreateDataCellsFilterCommand extends $Command<
  CreateDataCellsFilterCommandInput,
  CreateDataCellsFilterCommandOutput,
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
  constructor(readonly input: CreateDataCellsFilterCommandInput) {
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
  ): Handler<CreateDataCellsFilterCommandInput, CreateDataCellsFilterCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateDataCellsFilterCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LakeFormationClient";
    const commandName = "CreateDataCellsFilterCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AWSLakeFormation",
        operation: "CreateDataCellsFilter",
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
  private serialize(input: CreateDataCellsFilterCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_CreateDataCellsFilterCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDataCellsFilterCommandOutput> {
    return de_CreateDataCellsFilterCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
