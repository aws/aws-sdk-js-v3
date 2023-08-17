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

import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { DeleteTableRequest, DeleteTableResponse } from "../models/models_1";
import { de_DeleteTableCommand, se_DeleteTableCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteTableCommand}.
 */
export interface DeleteTableCommandInput extends DeleteTableRequest {}
/**
 * @public
 *
 * The output of {@link DeleteTableCommand}.
 */
export interface DeleteTableCommandOutput extends DeleteTableResponse, __MetadataBearer {}

/**
 * @public
 * <p>Removes a table definition from the Data Catalog.</p>
 *          <note>
 *             <p>After completing this operation, you no longer have access to the table versions and
 *         partitions that belong to the deleted table. Glue deletes these "orphaned" resources
 *         asynchronously in a timely manner, at the discretion of the service.</p>
 *             <p>To ensure the immediate deletion of all related resources, before calling
 *           <code>DeleteTable</code>, use <code>DeleteTableVersion</code> or
 *           <code>BatchDeleteTableVersion</code>, and <code>DeletePartition</code> or
 *           <code>BatchDeletePartition</code>, to delete any resources that belong to the
 *         table.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, DeleteTableCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, DeleteTableCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const input = { // DeleteTableRequest
 *   CatalogId: "STRING_VALUE",
 *   DatabaseName: "STRING_VALUE", // required
 *   Name: "STRING_VALUE", // required
 *   TransactionId: "STRING_VALUE",
 * };
 * const command = new DeleteTableCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param DeleteTableCommandInput - {@link DeleteTableCommandInput}
 * @returns {@link DeleteTableCommandOutput}
 * @see {@link DeleteTableCommandInput} for command's `input` shape.
 * @see {@link DeleteTableCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for GlueClient's `config` shape.
 *
 * @throws {@link ConcurrentModificationException} (client fault)
 *  <p>Two processes are trying to modify a resource simultaneously.</p>
 *
 * @throws {@link EntityNotFoundException} (client fault)
 *  <p>A specified entity does not exist</p>
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
 * @throws {@link ResourceNotReadyException} (client fault)
 *  <p>A resource was not ready for a transaction.</p>
 *
 * @throws {@link GlueServiceException}
 * <p>Base exception class for all service exceptions from Glue service.</p>
 *
 */
export class DeleteTableCommand extends $Command<
  DeleteTableCommandInput,
  DeleteTableCommandOutput,
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
  constructor(readonly input: DeleteTableCommandInput) {
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
  ): Handler<DeleteTableCommandInput, DeleteTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, DeleteTableCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "DeleteTableCommand";
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
  private serialize(input: DeleteTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteTableCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteTableCommandOutput> {
    return de_DeleteTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
