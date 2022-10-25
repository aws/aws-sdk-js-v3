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
  GetPhoneNumberOrderRequest,
  GetPhoneNumberOrderRequestFilterSensitiveLog,
  GetPhoneNumberOrderResponse,
  GetPhoneNumberOrderResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1GetPhoneNumberOrderCommand,
  serializeAws_restJson1GetPhoneNumberOrderCommand,
} from "../protocols/Aws_restJson1";

export interface GetPhoneNumberOrderCommandInput extends GetPhoneNumberOrderRequest {}
export interface GetPhoneNumberOrderCommandOutput extends GetPhoneNumberOrderResponse, __MetadataBearer {}

/**
 * <p>Retrieves details for the specified phone number order, such as the order creation timestamp, phone
 *             numbers in E.164 format, product type, and order status.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, GetPhoneNumberOrderCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, GetPhoneNumberOrderCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new GetPhoneNumberOrderCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPhoneNumberOrderCommandInput} for command's `input` shape.
 * @see {@link GetPhoneNumberOrderCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class GetPhoneNumberOrderCommand extends $Command<
  GetPhoneNumberOrderCommandInput,
  GetPhoneNumberOrderCommandOutput,
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

  constructor(readonly input: GetPhoneNumberOrderCommandInput) {
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
  ): Handler<GetPhoneNumberOrderCommandInput, GetPhoneNumberOrderCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, GetPhoneNumberOrderCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "GetPhoneNumberOrderCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetPhoneNumberOrderRequestFilterSensitiveLog,
      outputFilterSensitiveLog: GetPhoneNumberOrderResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetPhoneNumberOrderCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1GetPhoneNumberOrderCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetPhoneNumberOrderCommandOutput> {
    return deserializeAws_restJson1GetPhoneNumberOrderCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
