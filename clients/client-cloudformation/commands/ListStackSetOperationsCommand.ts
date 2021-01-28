import { CloudFormationClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudFormationClient";
import { ListStackSetOperationsInput, ListStackSetOperationsOutput } from "../models/models_0";
import {
  deserializeAws_queryListStackSetOperationsCommand,
  serializeAws_queryListStackSetOperationsCommand,
} from "../protocols/Aws_query";
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

export type ListStackSetOperationsCommandInput = ListStackSetOperationsInput;
export type ListStackSetOperationsCommandOutput = ListStackSetOperationsOutput & __MetadataBearer;

/**
 * <p>Returns summary information about operations performed on a stack set. </p>
 */
export class ListStackSetOperationsCommand extends $Command<
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
  CloudFormationClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStackSetOperationsCommandInput) {
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
  ): Handler<ListStackSetOperationsCommandInput, ListStackSetOperationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudFormationClient";
    const commandName = "ListStackSetOperationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStackSetOperationsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStackSetOperationsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStackSetOperationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryListStackSetOperationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStackSetOperationsCommandOutput> {
    return deserializeAws_queryListStackSetOperationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
