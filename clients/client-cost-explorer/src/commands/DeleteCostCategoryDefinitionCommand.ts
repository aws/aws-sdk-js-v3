import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DeleteCostCategoryDefinitionRequest, DeleteCostCategoryDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteCostCategoryDefinitionCommand,
  serializeAws_json1_1DeleteCostCategoryDefinitionCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export interface DeleteCostCategoryDefinitionCommandInput extends DeleteCostCategoryDefinitionRequest {}
export interface DeleteCostCategoryDefinitionCommandOutput
  extends DeleteCostCategoryDefinitionResponse,
    __MetadataBearer {}

/**
 * <p>Deletes a Cost Category. Expenses from this month going forward will no longer be categorized with this Cost Category.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CostExplorerClient, DeleteCostCategoryDefinitionCommand } from "@aws-sdk/client-cost-explorer"; // ES Modules import
 * // const { CostExplorerClient, DeleteCostCategoryDefinitionCommand } = require("@aws-sdk/client-cost-explorer"); // CommonJS import
 * const client = new CostExplorerClient(config);
 * const command = new DeleteCostCategoryDefinitionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCostCategoryDefinitionCommandInput} for command's `input` shape.
 * @see {@link DeleteCostCategoryDefinitionCommandOutput} for command's `response` shape.
 * @see {@link CostExplorerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteCostCategoryDefinitionCommand extends $Command<
  DeleteCostCategoryDefinitionCommandInput,
  DeleteCostCategoryDefinitionCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteCostCategoryDefinitionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CostExplorerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteCostCategoryDefinitionCommandInput, DeleteCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DeleteCostCategoryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteCostCategoryDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteCostCategoryDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteCostCategoryDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteCostCategoryDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteCostCategoryDefinitionCommandOutput> {
    return deserializeAws_json1_1DeleteCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
