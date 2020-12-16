import { EMRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EMRClient";
import { StartNotebookExecutionInput, StartNotebookExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StartNotebookExecutionCommand,
  serializeAws_json1_1StartNotebookExecutionCommand,
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

export type StartNotebookExecutionCommandInput = StartNotebookExecutionInput;
export type StartNotebookExecutionCommandOutput = StartNotebookExecutionOutput & __MetadataBearer;

/**
 * <p>Starts a notebook execution.</p>
 */
export class StartNotebookExecutionCommand extends $Command<
  StartNotebookExecutionCommandInput,
  StartNotebookExecutionCommandOutput,
  EMRClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartNotebookExecutionCommandInput) {
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
  ): Handler<StartNotebookExecutionCommandInput, StartNotebookExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "EMRClient";
    const commandName = "StartNotebookExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartNotebookExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StartNotebookExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartNotebookExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartNotebookExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartNotebookExecutionCommandOutput> {
    return deserializeAws_json1_1StartNotebookExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
