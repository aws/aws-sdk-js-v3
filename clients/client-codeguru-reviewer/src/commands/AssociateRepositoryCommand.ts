// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { CodeGuruReviewerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeGuruReviewerClient";
import {
  AssociateRepositoryRequest,
  AssociateRepositoryRequestFilterSensitiveLog,
  AssociateRepositoryResponse,
  AssociateRepositoryResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateRepositoryCommand,
  serializeAws_restJson1AssociateRepositoryCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateRepositoryCommandInput extends AssociateRepositoryRequest {}
export interface AssociateRepositoryCommandOutput extends AssociateRepositoryResponse, __MetadataBearer {}

/**
 * <p>Use to associate an Amazon Web Services CodeCommit repository or a repository managed by Amazon Web Services
 *          CodeStar Connections with Amazon CodeGuru Reviewer. When you associate a repository, CodeGuru Reviewer reviews
 *          source code changes in the repository's pull requests and provides automatic
 *          recommendations. You can view recommendations using the CodeGuru Reviewer console. For more
 *          information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/recommendations.html">Recommendations in
 *             Amazon CodeGuru Reviewer</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *
 *          <p>If you associate a CodeCommit or S3 repository, it must be in the same Amazon Web Services Region and
 *          Amazon Web Services account where its CodeGuru Reviewer code reviews are configured.</p>
 *
 *          <p>Bitbucket and GitHub Enterprise Server repositories are managed by Amazon Web Services CodeStar
 *          Connections to connect to CodeGuru Reviewer. For more information, see <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-associate-repository.html">Associate a
 *             repository</a> in the <i>Amazon CodeGuru Reviewer User Guide.</i>
 *          </p>
 *
 *          <note>
 *             <p>You cannot use the CodeGuru Reviewer SDK or the Amazon Web Services CLI to associate a GitHub repository with
 *             Amazon CodeGuru Reviewer. To associate a GitHub repository, use the console. For more information, see
 *                <a href="https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/getting-started-with-guru.html">Getting started with
 *                CodeGuru Reviewer</a> in the <i>CodeGuru Reviewer User Guide.</i>
 *             </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeGuruReviewerClient, AssociateRepositoryCommand } from "@aws-sdk/client-codeguru-reviewer"; // ES Modules import
 * // const { CodeGuruReviewerClient, AssociateRepositoryCommand } = require("@aws-sdk/client-codeguru-reviewer"); // CommonJS import
 * const client = new CodeGuruReviewerClient(config);
 * const command = new AssociateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeGuruReviewerClientResolvedConfig | config} for CodeGuruReviewerClient's `config` shape.
 *
 */
export class AssociateRepositoryCommand extends $Command<
  AssociateRepositoryCommandInput,
  AssociateRepositoryCommandOutput,
  CodeGuruReviewerClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateRepositoryCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeGuruReviewerClient";
    const commandName = "AssociateRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateRepositoryRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateRepositoryResponseFilterSensitiveLog,
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
