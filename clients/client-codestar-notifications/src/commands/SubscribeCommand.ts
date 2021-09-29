import {
  CodestarNotificationsClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../CodestarNotificationsClient";
import { SubscribeRequest, SubscribeResult } from "../models/models_0";
import {
  deserializeAws_restJson1SubscribeCommand,
  serializeAws_restJson1SubscribeCommand,
} from "../protocols/Aws_restJson1";
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

export interface SubscribeCommandInput extends SubscribeRequest {}
export interface SubscribeCommandOutput extends SubscribeResult, __MetadataBearer {}

/**
 * <p>Creates an association between a notification rule and an SNS topic so that the
 *             associated target can receive notifications when the events described in the rule are
 *             triggered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, SubscribeCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, SubscribeCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new SubscribeCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SubscribeCommandInput} for command's `input` shape.
 * @see {@link SubscribeCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class SubscribeCommand extends $Command<
  SubscribeCommandInput,
  SubscribeCommandOutput,
  CodestarNotificationsClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: SubscribeCommandInput) {
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
  ): Handler<SubscribeCommandInput, SubscribeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CodestarNotificationsClient";
    const commandName = "SubscribeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: SubscribeRequest.filterSensitiveLog,
      outputFilterSensitiveLog: SubscribeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: SubscribeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1SubscribeCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<SubscribeCommandOutput> {
    return deserializeAws_restJson1SubscribeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
