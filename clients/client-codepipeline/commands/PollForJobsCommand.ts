import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForJobsInput, PollForJobsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PollForJobsCommand,
  serializeAws_json1_1PollForJobsCommand,
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

export type PollForJobsCommandInput = PollForJobsInput;
export type PollForJobsCommandOutput = PollForJobsOutput & __MetadataBearer;

/**
 * <p>Returns information about any jobs for AWS CodePipeline to act on.
 *                 <code>PollForJobs</code> is valid only for action types with "Custom" in the owner
 *             field. If the action type contains "AWS" or "ThirdParty" in the owner field, the
 *                 <code>PollForJobs</code> action returns an error.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts. This API also returns any secret
 *                 values defined for the action.</p>
 *         </important>
 */
export class PollForJobsCommand extends $Command<
  PollForJobsCommandInput,
  PollForJobsCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PollForJobsCommandInput) {
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
  ): Handler<PollForJobsCommandInput, PollForJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PollForJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PollForJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: PollForJobsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PollForJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PollForJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForJobsCommandOutput> {
    return deserializeAws_json1_1PollForJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
