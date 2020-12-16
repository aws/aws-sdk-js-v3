import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateApprovalRuleTemplateInput, CreateApprovalRuleTemplateOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreateApprovalRuleTemplateCommand,
  serializeAws_json1_1CreateApprovalRuleTemplateCommand,
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

export type CreateApprovalRuleTemplateCommandInput = CreateApprovalRuleTemplateInput;
export type CreateApprovalRuleTemplateCommandOutput = CreateApprovalRuleTemplateOutput & __MetadataBearer;

/**
 * <p>Creates a template for approval rules that can then be associated with one or more
 *             repositories in your AWS account. When you associate a template with a repository, AWS
 *             CodeCommit creates an approval rule that matches the conditions of the template for all
 *             pull requests that meet the conditions of the template. For more information, see
 *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
 */
export class CreateApprovalRuleTemplateCommand extends $Command<
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateApprovalRuleTemplateCommandInput) {
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
  ): Handler<CreateApprovalRuleTemplateCommandInput, CreateApprovalRuleTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreateApprovalRuleTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApprovalRuleTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreateApprovalRuleTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateApprovalRuleTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateApprovalRuleTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateApprovalRuleTemplateCommandOutput> {
    return deserializeAws_json1_1CreateApprovalRuleTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
