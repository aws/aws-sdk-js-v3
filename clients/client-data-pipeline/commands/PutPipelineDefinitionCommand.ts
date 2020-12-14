import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { PutPipelineDefinitionInput, PutPipelineDefinitionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutPipelineDefinitionCommand,
  serializeAws_json1_1PutPipelineDefinitionCommand,
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

export type PutPipelineDefinitionCommandInput = PutPipelineDefinitionInput;
export type PutPipelineDefinitionCommandOutput = PutPipelineDefinitionOutput & __MetadataBearer;

/**
 * <p>Adds tasks, schedules, and preconditions to the specified pipeline. You can use <code>PutPipelineDefinition</code> to populate a new pipeline.</p>
 *         <p>
 *             <code>PutPipelineDefinition</code> also validates the configuration as it adds it to the pipeline. Changes to the pipeline are saved unless one
 *             of the following validation errors exist in the pipeline.
 *         </p>
 *         <ol>
 *             <li>
 *                <p>An object is missing a name or identifier field.</p>
 *             </li>
 *             <li>
 *                <p>A string or reference field is empty.</p>
 *             </li>
 *             <li>
 *                <p>The number of objects in the pipeline exceeds the allowed maximum number of objects.</p>
 *             </li>
 *             <li>
 *                <p>The pipeline is in a FINISHED state.</p>
 *             </li>
 *          </ol>
 *         <p>
 *             Pipeline object definitions are passed to the <code>PutPipelineDefinition</code> action and returned by the <a>GetPipelineDefinition</a> action.
 *         </p>
 */
export class PutPipelineDefinitionCommand extends $Command<
  PutPipelineDefinitionCommandInput,
  PutPipelineDefinitionCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutPipelineDefinitionCommandInput) {
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
  ): Handler<PutPipelineDefinitionCommandInput, PutPipelineDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "PutPipelineDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutPipelineDefinitionInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutPipelineDefinitionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutPipelineDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutPipelineDefinitionCommandOutput> {
    return deserializeAws_json1_1PutPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
