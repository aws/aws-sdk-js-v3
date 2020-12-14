import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdateApprovalRuleTemplateContentInput, UpdateApprovalRuleTemplateContentOutput } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
  serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
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

export type UpdateApprovalRuleTemplateContentCommandInput = UpdateApprovalRuleTemplateContentInput;
export type UpdateApprovalRuleTemplateContentCommandOutput = UpdateApprovalRuleTemplateContentOutput & __MetadataBearer;

/**
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 */
export class UpdateApprovalRuleTemplateContentCommand extends $Command<
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateApprovalRuleTemplateContentCommandInput) {
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
  ): Handler<UpdateApprovalRuleTemplateContentCommandInput, UpdateApprovalRuleTemplateContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateApprovalRuleTemplateContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApprovalRuleTemplateContentInput.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateApprovalRuleTemplateContentOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdateApprovalRuleTemplateContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdateApprovalRuleTemplateContentCommandOutput> {
    return deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
