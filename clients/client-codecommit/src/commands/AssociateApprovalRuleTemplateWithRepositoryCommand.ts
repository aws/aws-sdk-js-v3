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
  AssociateApprovalRuleTemplateWithRepositoryInput,
  AssociateApprovalRuleTemplateWithRepositoryInputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand,
  serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateApprovalRuleTemplateWithRepositoryCommandInput
  extends AssociateApprovalRuleTemplateWithRepositoryInput {}
export interface AssociateApprovalRuleTemplateWithRepositoryCommandOutput extends __MetadataBearer {}

/**
 * <p>Creates an association between an approval rule template and a specified repository.
 *             Then, the next time a pull request is created in the repository where the destination
 *             reference (if specified) matches the destination reference (branch) for the pull
 *             request, an approval rule that matches the template conditions is automatically created
 *             for that pull request. If no destination references are specified in the template, an
 *             approval rule that matches the template contents is created for all pull requests in
 *             that repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, AssociateApprovalRuleTemplateWithRepositoryCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new AssociateApprovalRuleTemplateWithRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandInput} for command's `input` shape.
 * @see {@link AssociateApprovalRuleTemplateWithRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class AssociateApprovalRuleTemplateWithRepositoryCommand extends $Command<
  AssociateApprovalRuleTemplateWithRepositoryCommandInput,
  AssociateApprovalRuleTemplateWithRepositoryCommandOutput,
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

  constructor(readonly input: AssociateApprovalRuleTemplateWithRepositoryCommandInput) {
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
    AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    AssociateApprovalRuleTemplateWithRepositoryCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AssociateApprovalRuleTemplateWithRepositoryCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "AssociateApprovalRuleTemplateWithRepositoryCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateApprovalRuleTemplateWithRepositoryInputFilterSensitiveLog,
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
    input: AssociateApprovalRuleTemplateWithRepositoryCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateApprovalRuleTemplateWithRepositoryCommandOutput> {
    return deserializeAws_json1_1AssociateApprovalRuleTemplateWithRepositoryCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
