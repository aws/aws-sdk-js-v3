import { CodePipelineClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodePipelineClient";
import { PollForThirdPartyJobsInput, PollForThirdPartyJobsOutput } from "../models/models_0";
import {
  deserializeAws_json1_1PollForThirdPartyJobsCommand,
  serializeAws_json1_1PollForThirdPartyJobsCommand,
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

export type PollForThirdPartyJobsCommandInput = PollForThirdPartyJobsInput;
export type PollForThirdPartyJobsCommandOutput = PollForThirdPartyJobsOutput & __MetadataBearer;

/**
 * <p>Determines whether there are any third party jobs for a job worker to act on. Used
 *             for partner actions only.</p>
 *         <important>
 *             <p>When this API is called, AWS CodePipeline returns temporary credentials for the
 *                 S3 bucket used to store artifacts for the pipeline, if the action requires access to
 *                 that S3 bucket for input or output artifacts.</p>
 *         </important>
 */
export class PollForThirdPartyJobsCommand extends $Command<
  PollForThirdPartyJobsCommandInput,
  PollForThirdPartyJobsCommandOutput,
  CodePipelineClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: PollForThirdPartyJobsCommandInput) {
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
  ): Handler<PollForThirdPartyJobsCommandInput, PollForThirdPartyJobsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodePipelineClient";
    const commandName = "PollForThirdPartyJobsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PollForThirdPartyJobsInput.filterSensitiveLog,
      outputFilterSensitiveLog: PollForThirdPartyJobsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PollForThirdPartyJobsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1PollForThirdPartyJobsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PollForThirdPartyJobsCommandOutput> {
    return deserializeAws_json1_1PollForThirdPartyJobsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
