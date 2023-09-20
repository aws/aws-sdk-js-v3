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

import { DeleteInventoryRequest, DeleteInventoryResult } from "../models/models_0";
import { de_DeleteInventoryCommand, se_DeleteInventoryCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, SSMClientResolvedConfig } from "../SSMClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandInput extends DeleteInventoryRequest {}
/**
 * @public
 *
 * The output of {@link DeleteInventoryCommand}.
 */
export interface DeleteInventoryCommandOutput extends DeleteInventoryResult, __MetadataBearer {}

/**
 * @public
 * <p>Delete a custom inventory type or the data associated with a custom Inventory type. Deleting
 *    a custom inventory type is also referred to as deleting a custom inventory schema.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteInventoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteInventoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const input = { // DeleteInventoryRequest
 *   TypeName: "STRING_VALUE", // required
 *   SchemaDeleteOption: "DisableSchema" || "DeleteSchema",
 *   DryRun: true || false,
 *   ClientToken: "STRING_VALUE",
 * };
 * const command = new DeleteInventoryCommand(input);
 * const response = await client.send(command);
 * // { // DeleteInventoryResult
 * //   DeletionId: "STRING_VALUE",
 * //   TypeName: "STRING_VALUE",
 * //   DeletionSummary: { // InventoryDeletionSummary
 * //     TotalCount: Number("int"),
 * //     RemainingCount: Number("int"),
 * //     SummaryItems: [ // InventoryDeletionSummaryItems
 * //       { // InventoryDeletionSummaryItem
 * //         Version: "STRING_VALUE",
 * //         Count: Number("int"),
 * //         RemainingCount: Number("int"),
 * //       },
 * //     ],
 * //   },
 * // };
 *
 * ```
 *
 * @param DeleteInventoryCommandInput - {@link DeleteInventoryCommandInput}
 * @returns {@link DeleteInventoryCommandOutput}
 * @see {@link DeleteInventoryCommandInput} for command's `input` shape.
 * @see {@link DeleteInventoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for SSMClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An error occurred on the server side.</p>
 *
 * @throws {@link InvalidDeleteInventoryParametersException} (client fault)
 *  <p>One or more of the parameters specified for the delete operation isn't valid. Verify all
 *    parameters and try again.</p>
 *
 * @throws {@link InvalidInventoryRequestException} (client fault)
 *  <p>The request isn't valid.</p>
 *
 * @throws {@link InvalidOptionException} (client fault)
 *  <p>The delete inventory option specified isn't valid. Verify the option and try again.</p>
 *
 * @throws {@link InvalidTypeNameException} (client fault)
 *  <p>The parameter type name isn't valid.</p>
 *
 * @throws {@link SSMServiceException}
 * <p>Base exception class for all service exceptions from SSM service.</p>
 *
 */
export class DeleteInventoryCommand extends $Command<
  DeleteInventoryCommandInput,
  DeleteInventoryCommandOutput,
  SSMClientResolvedConfig
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
  constructor(readonly input: DeleteInventoryCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteInventoryCommandInput, DeleteInventoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteInventoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "DeleteInventoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AmazonSSM",
        operation: "DeleteInventory",
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
  private serialize(input: DeleteInventoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_DeleteInventoryCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteInventoryCommandOutput> {
    return de_DeleteInventoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
