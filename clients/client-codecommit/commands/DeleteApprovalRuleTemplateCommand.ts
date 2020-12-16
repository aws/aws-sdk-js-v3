import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DeleteApprovalRuleTemplateInput, DeleteApprovalRuleTemplateOutput } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteApprovalRuleTemplateCommand,
  serializeAws_json1_1DeleteApprovalRuleTemplateCommand,
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

export type DeleteApprovalRuleTemplateCommandInput = DeleteApprovalRuleTemplateInput;
export type DeleteApprovalRuleTemplateCommandOutput = DeleteApprovalRuleTemplateOutput & __MetadataBearer;

/**
 * <p>Deletes a specified approval rule template. Deleting a template does not remove approval rules on pull requests already created with the template.</p>
 */
export class DeleteApprovalRuleTemplateCommand extends $Command<
  DeleteApprovalRuleTemplateCommandInput,
  DeleteApprovalRuleTemplateCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteApprovalRuleTemplateCommandInput) {
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
  ): Handler<DeleteApprovalRuleTemplateCommandInput, DeleteApprovalRuleTemplateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DeleteApprovalRuleTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteApprovalRuleTemplateInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteApprovalRuleTemplateOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteApprovalRuleTemplateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteApprovalRuleTemplateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteApprovalRuleTemplateCommandOutput> {
    return deserializeAws_json1_1DeleteApprovalRuleTemplateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
