import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { CreateCodeReviewRequest, CreateCodeReviewResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateCodeReviewCommand,
  serializeAws_restJson1CreateCodeReviewCommand,
} from "../protocols/Aws_restJson1";
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

export type CreateCodeReviewCommandInput = CreateCodeReviewRequest;
export type CreateCodeReviewCommandOutput = CreateCodeReviewResponse & __MetadataBearer;

/**
 * <p>
 *          Use to create a code review with a <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-api/API_CodeReviewType.html">
 *                <code>CodeReviewType</code>
 *             </a>
 *          of <code>RepositoryAnalysis</code>. This type of code review analyzes all code under a specified branch in an associated repository.
 *          <code>PullRequest</code> code reviews are automatically triggered by a pull request so cannot be created using this method.
 *       </p>
 */
export class CreateCodeReviewCommand extends $Command<
  CreateCodeReviewCommandInput,
  CreateCodeReviewCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateCodeReviewCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeGuruReviewerClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateCodeReviewCommandInput, CreateCodeReviewCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "CreateCodeReviewCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateCodeReviewRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateCodeReviewResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateCodeReviewCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateCodeReviewCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateCodeReviewCommandOutput> {
    return deserializeAws_restJson1CreateCodeReviewCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
