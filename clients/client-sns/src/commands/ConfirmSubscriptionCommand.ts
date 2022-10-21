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
  ConfirmSubscriptionInput,
  ConfirmSubscriptionInputFilterSensitiveLog,
  ConfirmSubscriptionResponse,
  ConfirmSubscriptionResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_queryConfirmSubscriptionCommand,
  serializeAws_queryConfirmSubscriptionCommand,
} from "../protocols/Aws_query";
import { ServiceInputTypes, ServiceOutputTypes, SNSClientResolvedConfig } from "../SNSClient";

export interface ConfirmSubscriptionCommandInput extends ConfirmSubscriptionInput {}
export interface ConfirmSubscriptionCommandOutput extends ConfirmSubscriptionResponse, __MetadataBearer {}

/**
 * <p>Verifies an endpoint owner's intent to receive messages by validating the token sent
 *             to the endpoint by an earlier <code>Subscribe</code> action. If the token is valid, the
 *             action creates a new subscription and returns its Amazon Resource Name (ARN). This call
 *             requires an AWS signature only when the <code>AuthenticateOnUnsubscribe</code> flag is
 *             set to "true".</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, ConfirmSubscriptionCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, ConfirmSubscriptionCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new ConfirmSubscriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmSubscriptionCommandInput} for command's `input` shape.
 * @see {@link ConfirmSubscriptionCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for SNSClient's `config` shape.
 *
 */
export class ConfirmSubscriptionCommand extends $Command<
  ConfirmSubscriptionCommandInput,
  ConfirmSubscriptionCommandOutput,
  SNSClientResolvedConfig
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

  constructor(readonly input: ConfirmSubscriptionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SNSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmSubscriptionCommandInput, ConfirmSubscriptionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmSubscriptionCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SNSClient";
    const commandName = "ConfirmSubscriptionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmSubscriptionInputFilterSensitiveLog,
      outputFilterSensitiveLog: ConfirmSubscriptionResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmSubscriptionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryConfirmSubscriptionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ConfirmSubscriptionCommandOutput> {
    return deserializeAws_queryConfirmSubscriptionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
