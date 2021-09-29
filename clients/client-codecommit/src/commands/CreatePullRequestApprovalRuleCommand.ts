import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestApprovalRuleInput, CreatePullRequestApprovalRuleOutput } from "../models/models_0";
import {
  deserializeAws_json1_1CreatePullRequestApprovalRuleCommand,
  serializeAws_json1_1CreatePullRequestApprovalRuleCommand,
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

export interface CreatePullRequestApprovalRuleCommandInput extends CreatePullRequestApprovalRuleInput {}
export interface CreatePullRequestApprovalRuleCommandOutput
  extends CreatePullRequestApprovalRuleOutput,
    __MetadataBearer {}

/**
 * <p>Creates an approval rule for a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestApprovalRuleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestApprovalRuleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreatePullRequestApprovalRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePullRequestApprovalRuleCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestApprovalRuleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class CreatePullRequestApprovalRuleCommand extends $Command<
  CreatePullRequestApprovalRuleCommandInput,
  CreatePullRequestApprovalRuleCommandOutput,
  CodeCommitClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreatePullRequestApprovalRuleCommandInput) {
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
  ): Handler<CreatePullRequestApprovalRuleCommandInput, CreatePullRequestApprovalRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreatePullRequestApprovalRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePullRequestApprovalRuleInput.filterSensitiveLog,
      outputFilterSensitiveLog: CreatePullRequestApprovalRuleOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePullRequestApprovalRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreatePullRequestApprovalRuleCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreatePullRequestApprovalRuleCommandOutput> {
    return deserializeAws_json1_1CreatePullRequestApprovalRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
