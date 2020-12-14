import { CostExplorerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CostExplorerClient";
import { DescribeCostCategoryDefinitionRequest, DescribeCostCategoryDefinitionResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DescribeCostCategoryDefinitionCommand,
  serializeAws_json1_1DescribeCostCategoryDefinitionCommand,
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

export type DescribeCostCategoryDefinitionCommandInput = DescribeCostCategoryDefinitionRequest;
export type DescribeCostCategoryDefinitionCommandOutput = DescribeCostCategoryDefinitionResponse & __MetadataBearer;

/**
 * <p>Returns the name, ARN, rules, definition, and effective dates of a Cost Category that's defined in the account.</p>
 *          <p>You have the option to use <code>EffectiveOn</code> to return a Cost Category that is active on a specific date. If there is no <code>EffectiveOn</code> specified, you’ll see a Cost Category that is effective on the current date. If Cost Category is still effective, <code>EffectiveEnd</code> is omitted in the response. </p>
 */
export class DescribeCostCategoryDefinitionCommand extends $Command<
  DescribeCostCategoryDefinitionCommandInput,
  DescribeCostCategoryDefinitionCommandOutput,
  CostExplorerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeCostCategoryDefinitionCommandInput) {
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
  ): Handler<DescribeCostCategoryDefinitionCommandInput, DescribeCostCategoryDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CostExplorerClient";
    const commandName = "DescribeCostCategoryDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeCostCategoryDefinitionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeCostCategoryDefinitionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeCostCategoryDefinitionCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeCostCategoryDefinitionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeCostCategoryDefinitionCommandOutput> {
    return deserializeAws_json1_1DescribeCostCategoryDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
