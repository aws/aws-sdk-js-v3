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

import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import {
  ConfirmTopicRuleDestinationRequest,
  ConfirmTopicRuleDestinationRequestFilterSensitiveLog,
  ConfirmTopicRuleDestinationResponse,
  ConfirmTopicRuleDestinationResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1ConfirmTopicRuleDestinationCommand,
  serializeAws_restJson1ConfirmTopicRuleDestinationCommand,
} from "../protocols/Aws_restJson1";

export interface ConfirmTopicRuleDestinationCommandInput extends ConfirmTopicRuleDestinationRequest {}
export interface ConfirmTopicRuleDestinationCommandOutput
  extends ConfirmTopicRuleDestinationResponse,
    __MetadataBearer {}

/**
 * <p>Confirms a topic rule destination. When you create a rule requiring a destination, IoT
 *          sends a confirmation message to the endpoint or base address you specify. The message
 *          includes a token which you pass back when calling <code>ConfirmTopicRuleDestination</code>
 *          to confirm that you own or have access to the endpoint.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">ConfirmTopicRuleDestination</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ConfirmTopicRuleDestinationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ConfirmTopicRuleDestinationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ConfirmTopicRuleDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfirmTopicRuleDestinationCommandInput} for command's `input` shape.
 * @see {@link ConfirmTopicRuleDestinationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class ConfirmTopicRuleDestinationCommand extends $Command<
  ConfirmTopicRuleDestinationCommandInput,
  ConfirmTopicRuleDestinationCommandOutput,
  IoTClientResolvedConfig
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

  constructor(readonly input: ConfirmTopicRuleDestinationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ConfirmTopicRuleDestinationCommandInput, ConfirmTopicRuleDestinationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ConfirmTopicRuleDestinationCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "ConfirmTopicRuleDestinationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ConfirmTopicRuleDestinationRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ConfirmTopicRuleDestinationResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ConfirmTopicRuleDestinationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ConfirmTopicRuleDestinationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<ConfirmTopicRuleDestinationCommandOutput> {
    return deserializeAws_restJson1ConfirmTopicRuleDestinationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
