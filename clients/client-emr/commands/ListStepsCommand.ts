import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { ListStepsInput, ListStepsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListStepsCommand, serializeAws_json1_1ListStepsCommand } from "../protocols/Aws_json1_1";
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

export type ListStepsCommandInput = ListStepsInput;
export type ListStepsCommandOutput = ListStepsOutput & __MetadataBearer;

/**
 * <p>Provides a list of steps for the cluster in reverse order unless you specify
 *             <code>stepIds</code> with the request of filter by <code>StepStates</code>. You can
 *          specify a maximum of ten <code>stepIDs</code>.</p>
 */
export class ListStepsCommand extends $Command<ListStepsCommandInput, ListStepsCommandOutput, EMRClientResolvedConfig> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListStepsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: EMRClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListStepsCommandInput, ListStepsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "ListStepsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListStepsInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListStepsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListStepsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListStepsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListStepsCommandOutput> {
    return deserializeAws_json1_1ListStepsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
