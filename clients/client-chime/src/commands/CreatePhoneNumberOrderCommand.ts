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

import { ChimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ChimeClient";
import {
  CreatePhoneNumberOrderRequest,
  CreatePhoneNumberOrderRequestFilterSensitiveLog,
  CreatePhoneNumberOrderResponse,
  CreatePhoneNumberOrderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreatePhoneNumberOrderCommand,
  serializeAws_restJson1CreatePhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";

export interface CreatePhoneNumberOrderCommandInput extends CreatePhoneNumberOrderRequest {}
export interface CreatePhoneNumberOrderCommandOutput extends CreatePhoneNumberOrderResponse, __MetadataBearer {}

/**
 * <p>Creates an order for phone numbers to be provisioned. For toll-free numbers, you cannot use the Amazon Chime Business Calling product type.
 *         For numbers outside the U.S., you must use the Amazon Chime SIP Media Application Dial-In product type.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, CreatePhoneNumberOrderCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, CreatePhoneNumberOrderCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new CreatePhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link CreatePhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class CreatePhoneNumberOrderCommand extends $Command<
  CreatePhoneNumberOrderCommandInput,
  CreatePhoneNumberOrderCommandOutput,
  ChimeClientResolvedConfig
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

  constructor(readonly input: CreatePhoneNumberOrderCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ChimeClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreatePhoneNumberOrderCommandInput, CreatePhoneNumberOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreatePhoneNumberOrderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "CreatePhoneNumberOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreatePhoneNumberOrderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreatePhoneNumberOrderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreatePhoneNumberOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreatePhoneNumberOrderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreatePhoneNumberOrderCommandOutput> {
    return deserializeAws_restJson1CreatePhoneNumberOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
