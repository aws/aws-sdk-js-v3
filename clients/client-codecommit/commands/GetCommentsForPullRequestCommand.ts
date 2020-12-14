import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentsForPullRequestInput, GetCommentsForPullRequestOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetCommentsForPullRequestCommand,
  serializeAws_json1_1GetCommentsForPullRequestCommand,
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

export type GetCommentsForPullRequestCommandInput = GetCommentsForPullRequestInput;
export type GetCommentsForPullRequestCommandOutput = GetCommentsForPullRequestOutput & __MetadataBearer;

/**
 * <p>Returns comments made on a pull request.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 */
export class GetCommentsForPullRequestCommand extends $Command<
  GetCommentsForPullRequestCommandInput,
  GetCommentsForPullRequestCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCommentsForPullRequestCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodeCommitClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<GetCommentsForPullRequestCommandInput, GetCommentsForPullRequestCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentsForPullRequestCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommentsForPullRequestInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCommentsForPullRequestOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommentsForPullRequestCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommentsForPullRequestCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCommentsForPullRequestCommandOutput> {
    return deserializeAws_json1_1GetCommentsForPullRequestCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
