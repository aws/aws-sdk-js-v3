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

import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import {
  DeleteNotificationRuleRequest,
  DeleteNotificationRuleRequestFilterSensitiveLog,
  DeleteNotificationRuleResult,
  DeleteNotificationRuleResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1DeleteNotificationRuleCommand,
  serializeAws_restJson1DeleteNotificationRuleCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteNotificationRuleCommandInput extends DeleteNotificationRuleRequest {}
export interface DeleteNotificationRuleCommandOutput extends DeleteNotificationRuleResult, __MetadataBearer {}

/**
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 */
export class DeleteNotificationRuleCommand extends $Command<
  DeleteNotificationRuleCommandInput,
  DeleteNotificationRuleCommandOutput,
  CodestarNotificationsClientResolvedConfig
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

  constructor(readonly input: DeleteNotificationRuleCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CodestarNotificationsClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteNotificationRuleCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "DeleteNotificationRuleCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteNotificationRuleRequestFilterSensitiveLog,
      outputFilterSensitiveLog: DeleteNotificationRuleResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteNotificationRuleCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteNotificationRuleCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteNotificationRuleCommandOutput> {
    return deserializeAws_restJson1DeleteNotificationRuleCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
