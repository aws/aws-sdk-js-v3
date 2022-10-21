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
  ListApprovalRuleTemplatesInput,
  ListApprovalRuleTemplatesInputFilterSensitiveLog,
  ListApprovalRuleTemplatesOutput,
  ListApprovalRuleTemplatesOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ListApprovalRuleTemplatesCommand,
  serializeAws_json1_1ListApprovalRuleTemplatesCommand,
} from "../protocols/Aws_json1_1";

export interface ListApprovalRuleTemplatesCommandInput extends ListApprovalRuleTemplatesInput {}
export interface ListApprovalRuleTemplatesCommandOutput extends ListApprovalRuleTemplatesOutput, __MetadataBearer {}

/**
 * <p>Lists all approval rule templates in the specified AWS Region in your AWS account. If
 *             an AWS Region is not specified, the AWS Region where you are signed in is used.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, ListApprovalRuleTemplatesCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, ListApprovalRuleTemplatesCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new ListApprovalRuleTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListApprovalRuleTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListApprovalRuleTemplatesCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for CodeCommitClient's `config` shape.
 *
 */
export class ListApprovalRuleTemplatesCommand extends $Command<
  ListApprovalRuleTemplatesCommandInput,
  ListApprovalRuleTemplatesCommandOutput,
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

  constructor(readonly input: ListApprovalRuleTemplatesCommandInput) {
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
  ): Handler<ListApprovalRuleTemplatesCommandInput, ListApprovalRuleTemplatesCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ListApprovalRuleTemplatesCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodeCommitClient";
    const commandName = "ListApprovalRuleTemplatesCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListApprovalRuleTemplatesInputFilterSensitiveLog,
      outputFilterSensitiveLog: ListApprovalRuleTemplatesOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListApprovalRuleTemplatesCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListApprovalRuleTemplatesCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ListApprovalRuleTemplatesCommandOutput> {
    return deserializeAws_json1_1ListApprovalRuleTemplatesCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
