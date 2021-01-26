import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { ResumeWorkflowRunRequest, ResumeWorkflowRunResponse } from "../models/models_1";
import {
  deserializeAws_json1_1ResumeWorkflowRunCommand,
  serializeAws_json1_1ResumeWorkflowRunCommand,
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

export type ResumeWorkflowRunCommandInput = ResumeWorkflowRunRequest;
export type ResumeWorkflowRunCommandOutput = ResumeWorkflowRunResponse & __MetadataBearer;

/**
 * <p>Restarts selected nodes of a previous partially completed workflow run and resumes the workflow run. The selected nodes and all nodes that are downstream from the selected nodes are run.</p>
 */
export class ResumeWorkflowRunCommand extends $Command<
  ResumeWorkflowRunCommandInput,
  ResumeWorkflowRunCommandOutput,
  GlueClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ResumeWorkflowRunCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GlueClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ResumeWorkflowRunCommandInput, ResumeWorkflowRunCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GlueClient";
    const commandName = "ResumeWorkflowRunCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ResumeWorkflowRunRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ResumeWorkflowRunResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ResumeWorkflowRunCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ResumeWorkflowRunCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ResumeWorkflowRunCommandOutput> {
    return deserializeAws_json1_1ResumeWorkflowRunCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
