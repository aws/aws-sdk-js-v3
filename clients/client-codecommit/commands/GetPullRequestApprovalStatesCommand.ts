import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetPullRequestApprovalStatesInput, GetPullRequestApprovalStatesOutput } from "../models/models_0";
import {
  deserializeAws_json1_1GetPullRequestApprovalStatesCommand,
  serializeAws_json1_1GetPullRequestApprovalStatesCommand,
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

export type GetPullRequestApprovalStatesCommandInput = GetPullRequestApprovalStatesInput;
export type GetPullRequestApprovalStatesCommandOutput = GetPullRequestApprovalStatesOutput & __MetadataBearer;

/**
 * <p>Gets information about the approval states for a specified pull request. Approval states only apply to pull requests that have one or more
 *         approval rules applied to them.</p>
 */
export class GetPullRequestApprovalStatesCommand extends $Command<
  GetPullRequestApprovalStatesCommandInput,
  GetPullRequestApprovalStatesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetPullRequestApprovalStatesCommandInput) {
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
  ): Handler<GetPullRequestApprovalStatesCommandInput, GetPullRequestApprovalStatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "GetPullRequestApprovalStatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPullRequestApprovalStatesInput.filterSensitiveLog,
      outputFilterSensitiveLog: GetPullRequestApprovalStatesOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPullRequestApprovalStatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetPullRequestApprovalStatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetPullRequestApprovalStatesCommandOutput> {
    return deserializeAws_json1_1GetPullRequestApprovalStatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
