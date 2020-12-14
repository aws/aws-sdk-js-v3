import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListCommandInvocationsRequest, ListCommandInvocationsResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListCommandInvocationsCommand,
  serializeAws_json1_1ListCommandInvocationsCommand,
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

export type ListCommandInvocationsCommandInput = ListCommandInvocationsRequest;
export type ListCommandInvocationsCommandOutput = ListCommandInvocationsResult & __MetadataBearer;

/**
 * <p>An invocation is copy of a command sent to a specific instance. A command can apply to one
 *    or more instances. A command invocation applies to one instance. For example, if a user runs
 *    SendCommand against three instances, then a command invocation is created for each requested
 *    instance ID. ListCommandInvocations provide status about command execution.</p>
 */
export class ListCommandInvocationsCommand extends $Command<
  ListCommandInvocationsCommandInput,
  ListCommandInvocationsCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListCommandInvocationsCommandInput) {
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
  ): Handler<ListCommandInvocationsCommandInput, ListCommandInvocationsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListCommandInvocationsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListCommandInvocationsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListCommandInvocationsResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListCommandInvocationsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListCommandInvocationsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListCommandInvocationsCommandOutput> {
    return deserializeAws_json1_1ListCommandInvocationsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
