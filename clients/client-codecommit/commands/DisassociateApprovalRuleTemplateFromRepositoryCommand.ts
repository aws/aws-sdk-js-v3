import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DisassociateApprovalRuleTemplateFromRepositoryInput } from "../models/models_0";
import {
  deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand,
  serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand,
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

export type DisassociateApprovalRuleTemplateFromRepositoryCommandInput = DisassociateApprovalRuleTemplateFromRepositoryInput;
export type DisassociateApprovalRuleTemplateFromRepositoryCommandOutput = __MetadataBearer;

/**
 * <p>Removes the association between a template and a repository so that approval rules
 *             based on the template are not automatically created when pull requests are created in
 *             the specified repository. This does not delete any approval rules previously created for
 *             pull requests through the template association.</p>
 */
export class DisassociateApprovalRuleTemplateFromRepositoryCommand extends $Command<
  DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
  DisassociateApprovalRuleTemplateFromRepositoryCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput) {
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
  ): Handler<
    DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    DisassociateApprovalRuleTemplateFromRepositoryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "DisassociateApprovalRuleTemplateFromRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DisassociateApprovalRuleTemplateFromRepositoryInput.filterSensitiveLog,
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
    input: DisassociateApprovalRuleTemplateFromRepositoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DisassociateApprovalRuleTemplateFromRepositoryCommandOutput> {
    return deserializeAws_json1_1DisassociateApprovalRuleTemplateFromRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
