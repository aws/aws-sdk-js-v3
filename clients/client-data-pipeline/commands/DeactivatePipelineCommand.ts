import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { DeactivatePipelineInput, DeactivatePipelineOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeactivatePipelineCommand,
  serializeAws_json1_1DeactivatePipelineCommand,
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

export type DeactivatePipelineCommandInput = DeactivatePipelineInput;
export type DeactivatePipelineCommandOutput = DeactivatePipelineOutput & __MetadataBearer;

/**
 * <p>Deactivates the specified running pipeline. The pipeline is set to the <code>DEACTIVATING</code>
 *           state until the deactivation process completes.</p>
 *         <p>To resume a deactivated pipeline, use <a>ActivatePipeline</a>. By default, the pipeline resumes from the last completed execution.
 *           Optionally, you can specify the date and time to resume the pipeline.</p>
 */
export class DeactivatePipelineCommand extends $Command<
  DeactivatePipelineCommandInput,
  DeactivatePipelineCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeactivatePipelineCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DataPipelineClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeactivatePipelineCommandInput, DeactivatePipelineCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "DeactivatePipelineCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeactivatePipelineInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeactivatePipelineOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeactivatePipelineCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeactivatePipelineCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeactivatePipelineCommandOutput> {
    return deserializeAws_json1_1DeactivatePipelineCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
