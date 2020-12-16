import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { AcknowledgeJobInput, AcknowledgeJobOutput } from "../models/models_0";
import {
  deserializeAws_json1_1AcknowledgeJobCommand,
  serializeAws_json1_1AcknowledgeJobCommand,
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

export type AcknowledgeJobCommandInput = AcknowledgeJobInput;
export type AcknowledgeJobCommandOutput = AcknowledgeJobOutput & __MetadataBearer;

/**
 * <p>Returns information about a specified job and whether that job has been received by
 *             the job worker. Used for custom actions only.</p>
 */
export class AcknowledgeJobCommand extends $Command<
  AcknowledgeJobCommandInput,
  AcknowledgeJobCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcknowledgeJobCommandInput) {
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
  ): Handler<AcknowledgeJobCommandInput, AcknowledgeJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "AcknowledgeJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcknowledgeJobInput.filterSensitiveLog,
      outputFilterSensitiveLog: AcknowledgeJobOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcknowledgeJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AcknowledgeJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AcknowledgeJobCommandOutput> {
    return deserializeAws_json1_1AcknowledgeJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
