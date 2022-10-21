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
  UpdateApprovalRuleTemplateContentInput,
  UpdateApprovalRuleTemplateContentInputFilterSensitiveLog,
  UpdateApprovalRuleTemplateContentOutput,
  UpdateApprovalRuleTemplateContentOutputFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
  serializeAws_json1_1UpdateApprovalRuleTemplateContentCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateApprovalRuleTemplateContentCommandInput extends UpdateApprovalRuleTemplateContentInput {}
export interface UpdateApprovalRuleTemplateContentCommandOutput
  extends UpdateApprovalRuleTemplateContentOutput,
    __MetadataBearer {}

/**
 * <p>Updates the content of an approval rule template. You can change the number of
 *             required approvals, the membership of the approval rule, and whether an approval pool is
 *             defined.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdateApprovalRuleTemplateContentCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdateApprovalRuleTemplateContentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateApprovalRuleTemplateContentCommandInput} for command's `input` shape.
 * @see {@link UpdateApprovalRuleTemplateContentCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class UpdateApprovalRuleTemplateContentCommand extends $Command<
  UpdateApprovalRuleTemplateContentCommandInput,
  UpdateApprovalRuleTemplateContentCommandOutput,
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateApprovalRuleTemplateContentCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "UpdateApprovalRuleTemplateContentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateApprovalRuleTemplateContentInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateApprovalRuleTemplateContentOutputFilterSensitiveLog,
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
