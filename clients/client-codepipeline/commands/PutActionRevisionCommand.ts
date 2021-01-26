import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PutActionRevisionInput, PutActionRevisionOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PutActionRevisionCommand,
  serializeAws_json1_1PutActionRevisionCommand,
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

export type PutActionRevisionCommandInput = PutActionRevisionInput;
export type PutActionRevisionCommandOutput = PutActionRevisionOutput & __MetadataBearer;

/**
 * <p>Provides information to AWS CodePipeline about new revisions to a source.</p>
 */
export class PutActionRevisionCommand extends $Command<
  PutActionRevisionCommandInput,
  PutActionRevisionCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PutActionRevisionCommandInput) {
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
  ): Handler<PutActionRevisionCommandInput, PutActionRevisionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PutActionRevisionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PutActionRevisionInput.filterSensitiveLog,
      outputFilterSensitiveLog: PutActionRevisionOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PutActionRevisionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PutActionRevisionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PutActionRevisionCommandOutput> {
    return deserializeAws_json1_1PutActionRevisionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
