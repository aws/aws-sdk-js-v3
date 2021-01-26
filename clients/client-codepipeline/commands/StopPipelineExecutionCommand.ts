import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { StopPipelineExecutionInput, StopPipelineExecutionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1StopPipelineExecutionCommand,
  serializeAws_json1_1StopPipelineExecutionCommand,
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

export type StopPipelineExecutionCommandInput = StopPipelineExecutionInput;
export type StopPipelineExecutionCommandOutput = StopPipelineExecutionOutput & __MetadataBearer;

/**
 * <p>Stops the specified pipeline execution. You choose to either stop the pipeline
 *             execution by completing in-progress actions without starting subsequent actions, or by
 *             abandoning in-progress actions. While completing or abandoning in-progress actions, the
 *             pipeline execution is in a <code>Stopping</code> state. After all in-progress actions
 *             are completed or abandoned, the pipeline execution is in a <code>Stopped</code>
 *             state.</p>
 */
export class StopPipelineExecutionCommand extends $Command<
  StopPipelineExecutionCommandInput,
  StopPipelineExecutionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopPipelineExecutionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodePipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "StopPipelineExecutionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopPipelineExecutionInput.filterSensitiveLog,
      outputFilterSensitiveLog: StopPipelineExecutionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopPipelineExecutionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopPipelineExecutionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopPipelineExecutionCommandOutput> {
    return deserializeAws_json1_1StopPipelineExecutionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
