import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { OverridePullRequestApprovalRulesInput } from "../models/models_1";
import {
  deserializeAws_json1_1OverridePullRequestApprovalRulesCommand,
  serializeAws_json1_1OverridePullRequestApprovalRulesCommand,
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

export type OverridePullRequestApprovalRulesCommandInput = OverridePullRequestApprovalRulesInput;
export type OverridePullRequestApprovalRulesCommandOutput = __MetadataBearer;

/**
 * <p>Sets aside (overrides) all approval rule requirements for a specified pull request.</p>
 */
export class OverridePullRequestApprovalRulesCommand extends $Command<
  OverridePullRequestApprovalRulesCommandInput,
  OverridePullRequestApprovalRulesCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: OverridePullRequestApprovalRulesCommandInput) {
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
  ): Handler<OverridePullRequestApprovalRulesCommandInput, OverridePullRequestApprovalRulesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "OverridePullRequestApprovalRulesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: OverridePullRequestApprovalRulesInput.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: OverridePullRequestApprovalRulesCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1OverridePullRequestApprovalRulesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<OverridePullRequestApprovalRulesCommandOutput> {
    return deserializeAws_json1_1OverridePullRequestApprovalRulesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
