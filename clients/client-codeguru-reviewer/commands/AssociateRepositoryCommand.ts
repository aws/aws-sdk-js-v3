import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import { AssociateRepositoryRequest, AssociateRepositoryResponse } from "../models/models_0";
import {
  deserializeAws_restJson1AssociateRepositoryCommand,
  serializeAws_restJson1AssociateRepositoryCommand,
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

export type AssociateRepositoryCommandInput = AssociateRepositoryRequest;
export type AssociateRepositoryCommandOutput = AssociateRepositoryResponse & __MetadataBearer;

/**
 * <p>
 *          Use to associate an AWS CodeCommit repository or a repostory managed by
 *          AWS CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a
 *         repository, CodeGuru Reviewer reviews source code changes in the repository's pull requests and provides
 *         automatic recommendations. You can view recommendations using the CodeGuru Reviewer console. For more information, see
 *          <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
 *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *         </p>
 *
 *          <p>If you associate a CodeCommit repository, it must be in the same
 *          AWS Region and AWS account where its CodeGuru Reviewer code reviews are configured.</p>
 *
 *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by AWS CodeStar
 *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/reviewer-ug/step-one.html#select-repository-source-provider">Connect to a repository source provider</a> in
 *          the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *
 *          <note>
 *             <p>
 *             You cannot use the CodeGuru Reviewer SDK or the AWS CLI to associate a GitHub repository with Amazon CodeGuru Reviewer. To associate
 *             a GitHub repository, use the console. For more information, see
 *             <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting
 *             started with CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
 *             </p>
 *          </note>
 */
export class AssociateRepositoryCommand extends $Command<
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AssociateRepositoryCommandInput) {
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
  ): Handler<AssociateRepositoryCommandInput, AssociateRepositoryCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "AssociateRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateRepositoryRequest.filterSensitiveLog,
      outputFilterSensitiveLog: AssociateRepositoryResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateRepositoryCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateRepositoryCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateRepositoryCommandOutput> {
    return deserializeAws_restJson1AssociateRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
