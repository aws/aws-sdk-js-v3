import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetCommentsForComparedCommitInput, GetCommentsForComparedCommitOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetCommentsForComparedCommitCommand,
  serializeAws_json1_1GetCommentsForComparedCommitCommand,
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

export type GetCommentsForComparedCommitCommandInput = GetCommentsForComparedCommitInput;
export type GetCommentsForComparedCommitCommandOutput = GetCommentsForComparedCommitOutput & __MetadataBearer;

/**
 * <p>Returns information about comments made on the comparison between two commits.</p>
 *         <note>
 *             <p>Reaction counts might include numbers from user identities who were deleted after the reaction was made. For a count of
 *             reactions from active identities, use GetCommentReactions.</p>
 *          </note>
 */
export class GetCommentsForComparedCommitCommand extends $Command<
  GetCommentsForComparedCommitCommandInput,
  GetCommentsForComparedCommitCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetCommentsForComparedCommitCommandInput) {
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
  ): Handler<GetCommentsForComparedCommitCommandInput, GetCommentsForComparedCommitCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetCommentsForComparedCommitCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetCommentsForComparedCommitInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetCommentsForComparedCommitOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetCommentsForComparedCommitCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetCommentsForComparedCommitCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetCommentsForComparedCommitCommandOutput> {
    return deserializeAws_json1_1GetCommentsForComparedCommitCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
