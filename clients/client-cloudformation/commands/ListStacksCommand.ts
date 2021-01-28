import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStacksInput, ListStacksOutput } from "../models/models_0";
import { deserializeAws_queryListStacksCommand, serializeAws_queryListStacksCommand } from "../protocols/Aws_query";
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

export type ListStacksCommandInput = ListStacksInput;
export type ListStacksCommandOutput = ListStacksOutput & __MetadataBearer;

/**
 * <p>Returns the summary information for stacks whose status matches the specified
 *          StackStatusFilter. Summary information for stacks that have been deleted is kept for 90
 *          days after the stack is deleted. If no StackStatusFilter is specified, summary information
 *          for all stacks is returned (including existing stacks and stacks that have been
 *          deleted).</p>
 */
export class ListStacksCommand extends $Command<
  ListStacksCommandInput,
  ListStacksCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStacksCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudFormationClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStacksCommandInput, ListStacksCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStacksCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStacksInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStacksOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStacksCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStacksCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStacksCommandOutput> {
    return deserializeAws_queryListStacksCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
