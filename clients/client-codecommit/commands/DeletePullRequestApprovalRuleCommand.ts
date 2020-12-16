import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeletePullRequestApprovalRuleInput, DeletePullRequestApprovalRuleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeletePullRequestApprovalRuleCommand,
  serializeAws_json1_1DeletePullRequestApprovalRuleCommand,
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

export type DeletePullRequestApprovalRuleCommandInput = DeletePullRequestApprovalRuleInput;
export type DeletePullRequestApprovalRuleCommandOutput = DeletePullRequestApprovalRuleOutput & __MetadataBearer;

/**
 * <p>Deletes an approval rule from a specified pull request. Approval rules can be deleted from a pull request only if the pull request is open, and if the
 *             approval rule was created specifically for a pull request and not generated from an approval rule template associated with the repository where the
 *             pull request was created. You cannot delete an approval rule from a merged or closed pull request.</p>
 */
export class DeletePullRequestApprovalRuleCommand extends $Command<
  DeletePullRequestApprovalRuleCommandInput,
  DeletePullRequestApprovalRuleCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeletePullRequestApprovalRuleCommandInput) {
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
  ): Handler<DeletePullRequestApprovalRuleCommandInput, DeletePullRequestApprovalRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DeletePullRequestApprovalRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeletePullRequestApprovalRuleInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeletePullRequestApprovalRuleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeletePullRequestApprovalRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeletePullRequestApprovalRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeletePullRequestApprovalRuleCommandOutput> {
    return deserializeAws_json1_1DeletePullRequestApprovalRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
