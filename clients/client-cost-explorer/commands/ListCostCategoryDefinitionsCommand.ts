import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { ListCostCategoryDefinitionsRequest, ListCostCategoryDefinitionsResponse } from "../models/models_0";
import {
  deserializeAws_json1_1ListCostCategoryDefinitionsCommand,
  serializeAws_json1_1ListCostCategoryDefinitionsCommand,
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

export type ListCostCategoryDefinitionsCommandInput = ListCostCategoryDefinitionsRequest;
export type ListCostCategoryDefinitionsCommandOutput = ListCostCategoryDefinitionsResponse & __MetadataBearer;

/**
 * <p>Returns the name, ARN, <code>NumberOfRules</code> and effective dates of all Cost Categories defined in the account. You have the option to use <code>EffectiveOn</code> to return a list of Cost Categories that were active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see Cost Categories that are effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. <code>ListCostCategoryDefinitions</code> supports pagination. The request can have a <code>MaxResults</code> range up to 100.</p>
 */
export class ListCostCategoryDefinitionsCommand extends $Command<
  ListCostCategoryDefinitionsCommandInput,
  ListCostCategoryDefinitionsCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCostCategoryDefinitionsCommandInput) {
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
  ): Handler<ListCostCategoryDefinitionsCommandInput, ListCostCategoryDefinitionsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "ListCostCategoryDefinitionsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCostCategoryDefinitionsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCostCategoryDefinitionsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCostCategoryDefinitionsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCostCategoryDefinitionsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListCostCategoryDefinitionsCommandOutput> {
    return deserializeAws_json1_1ListCostCategoryDefinitionsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
