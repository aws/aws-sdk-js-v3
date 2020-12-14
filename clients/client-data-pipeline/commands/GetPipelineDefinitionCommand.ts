import { DataPipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DataPipelineClient";
import { GetPipelineDefinitionInput, GetPipelineDefinitionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetPipelineDefinitionCommand,
  serializeAws_json1_1GetPipelineDefinitionCommand,
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

export type GetPipelineDefinitionCommandInput = GetPipelineDefinitionInput;
export type GetPipelineDefinitionCommandOutput = GetPipelineDefinitionOutput & __MetadataBearer;

/**
 * <p>Gets the definition of the specified pipeline. You can call <code>GetPipelineDefinition</code> to retrieve
 *             the pipeline definition that you provided using <a>PutPipelineDefinition</a>.</p>
 */
export class GetPipelineDefinitionCommand extends $Command<
  GetPipelineDefinitionCommandInput,
  GetPipelineDefinitionCommandOutput,
  DataPipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPipelineDefinitionCommandInput) {
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
  ): Handler<GetPipelineDefinitionCommandInput, GetPipelineDefinitionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DataPipelineClient";
    const commandName = "GetPipelineDefinitionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPipelineDefinitionInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPipelineDefinitionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPipelineDefinitionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPipelineDefinitionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPipelineDefinitionCommandOutput> {
    return deserializeAws_json1_1GetPipelineDefinitionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
