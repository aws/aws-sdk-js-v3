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
  UnsubscribeRequest,
  UnsubscribeRequestFilterSensitiveLog,
  UnsubscribeResult,
  UnsubscribeResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1UnsubscribeCommand,
  serializeAws_restJson1UnsubscribeCommand,
} from "../protocols/Aws_restJson1";

export interface UnsubscribeCommandInput extends UnsubscribeRequest {}
export interface UnsubscribeCommandOutput extends UnsubscribeResult, __MetadataBearer {}

/**
 * <p>Removes an association between a notification rule and an Chatbot topic so that
 *             subscribers to that topic stop receiving notifications when the events described in the
 *             rule are triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UnsubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UnsubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new UnsubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UnsubscribeCommandInput} for command's `input` shape.
 * @see {@link UnsubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for CodestarNotificationsClient's `config` shape.
 *
 */
export class UnsubscribeCommand extends $Command<
  UnsubscribeCommandInput,
  UnsubscribeCommandOutput,
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

  constructor(readonly input: UnsubscribeCommandInput) {
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
  ): Handler<UnsubscribeCommandInput, UnsubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(getEndpointPlugin(configuration, UnsubscribeCommand.getEndpointParameterInstructions()));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "UnsubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UnsubscribeRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UnsubscribeResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UnsubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UnsubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UnsubscribeCommandOutput> {
    return deserializeAws_restJson1UnsubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
