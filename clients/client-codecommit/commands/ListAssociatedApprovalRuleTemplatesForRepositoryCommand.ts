import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  ListAssociatedApprovalRuleTemplatesForRepositoryInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryOutput,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
  serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand,
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

export type ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput = ListAssociatedApprovalRuleTemplatesForRepositoryInput;
export type ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput = ListAssociatedApprovalRuleTemplatesForRepositoryOutput &
  __MetadataBearer;

/**
 * <p>Lists all approval rule templates that are associated with a specified repository.</p>
 */
export class ListAssociatedApprovalRuleTemplatesForRepositoryCommand extends $Command<
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
  ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput) {
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
    ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "ListAssociatedApprovalRuleTemplatesForRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListAssociatedApprovalRuleTemplatesForRepositoryInput.filterSensitiveLog,
      outputFilterSensitiveLog: ListAssociatedApprovalRuleTemplatesForRepositoryOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: ListAssociatedApprovalRuleTemplatesForRepositoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListAssociatedApprovalRuleTemplatesForRepositoryCommandOutput> {
    return deserializeAws_json1_1ListAssociatedApprovalRuleTemplatesForRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
