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

import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import {
  CreateApprovalRuleTemplateInput,
  CreateApprovalRuleTemplateInputFilterSensitiveLog,
  CreateApprovalRuleTemplateOutput,
  CreateApprovalRuleTemplateOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateApprovalRuleTemplateCommand,
  serializeAws_json1_1CreateApprovalRuleTemplateCommand,
} from "../protocols/Aws_json1_1";

export interface CreateApprovalRuleTemplateCommandInput extends CreateApprovalRuleTemplateInput {}
export interface CreateApprovalRuleTemplateCommandOutput extends CreateApprovalRuleTemplateOutput, __MetadataBearer {}

/**
 * <p>Creates a template for approval rules that can then be associated with one or more
 *             repositories in your AWS account. When you associate a template with a repository, AWS
 *             CodeCommit creates an approval rule that matches the conditions of the template for all
 *             pull requests that meet the conditions of the template. For more information, see
 *             <a>AssociateApprovalRuleTemplateWithRepository</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateApprovalRuleTemplateCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateApprovalRuleTemplateCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateApprovalRuleTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateApprovalRuleTemplateCommandInput} for command's `input` shape.
 * @see {@link CreateApprovalRuleTemplateCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class CreateApprovalRuleTemplateCommand extends $Command<
  CreateApprovalRuleTemplateCommandInput,
  CreateApprovalRuleTemplateCommandOutput,
  CodeCommitClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateApprovalRuleTemplateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "CreateApprovalRuleTemplateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateApprovalRuleTemplateInputFilterSensitiveLog,
      outputFilterSensitiveLog: CreateApprovalRuleTemplateOutputFilterSensitiveLog,
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
