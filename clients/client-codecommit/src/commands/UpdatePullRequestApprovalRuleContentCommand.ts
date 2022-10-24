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
  UpdatePullRequestApprovalRuleContentInput,
  UpdatePullRequestApprovalRuleContentInputFilterSensitiveLog,
  UpdatePullRequestApprovalRuleContentOutput,
  UpdatePullRequestApprovalRuleContentOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand,
  serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand,
} from "../protocols/Aws_json1_1";

export interface UpdatePullRequestApprovalRuleContentCommandInput extends UpdatePullRequestApprovalRuleContentInput {}
export interface UpdatePullRequestApprovalRuleContentCommandOutput
  extends UpdatePullRequestApprovalRuleContentOutput,
    __MetadataBearer {}

/**
 * <p>Updates the structure of an approval rule created specifically for a pull request. For example, you can change the number of required approvers and
 *             the approval pool for approvers. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestApprovalRuleContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestApprovalRuleContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestApprovalRuleContentCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestApprovalRuleContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class UpdatePullRequestApprovalRuleContentCommand extends $Command<
  UpdatePullRequestApprovalRuleContentCommandInput,
  UpdatePullRequestApprovalRuleContentCommandOutput,
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

  constructor(readonly input: UpdatePullRequestApprovalRuleContentCommandInput) {
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
  ): Handler<UpdatePullRequestApprovalRuleContentCommandInput, UpdatePullRequestApprovalRuleContentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdatePullRequestApprovalRuleContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdatePullRequestApprovalRuleContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdatePullRequestApprovalRuleContentInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdatePullRequestApprovalRuleContentOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: UpdatePullRequestApprovalRuleContentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<UpdatePullRequestApprovalRuleContentCommandOutput> {
    return deserializeAws_json1_1UpdatePullRequestApprovalRuleContentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
