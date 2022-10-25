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
  ValidateE911AddressRequest,
  ValidateE911AddressRequestFilterSensitiveLog,
  ValidateE911AddressResponse,
  ValidateE911AddressResponseFilterSensitiveLog,
} from "../models/models_1";
import {
  deserializeAws_restJson1ValidateE911AddressCommand,
  serializeAws_restJson1ValidateE911AddressCommand,
} from "../protocols/Aws_restJson1";

export interface ValidateE911AddressCommandInput extends ValidateE911AddressRequest {}
export interface ValidateE911AddressCommandOutput extends ValidateE911AddressResponse, __MetadataBearer {}

/**
 * <p>Validates an address to be used for 911 calls made with Amazon
 *             Chime Voice Connectors. You can use validated addresses
 *             in a Presence Information Data Format Location Object file that you include in SIP requests.
 *             That helps ensure that addresses are routed to the appropriate Public Safety Answering Point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ChimeClient, ValidateE911AddressCommand } from "@aws-sdk/client-chime"; // ES Modules import
 * // const { ChimeClient, ValidateE911AddressCommand } = require("@aws-sdk/client-chime"); // CommonJS import
 * const client = new ChimeClient(config);
 * const command = new ValidateE911AddressCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateE911AddressCommandInput} for command's `input` shape.
 * @see {@link ValidateE911AddressCommandOutput} for command's `response` shape.
 * @see {@link ChimeClientResolvedConfig | config} for ChimeClient's `config` shape.
 *
 */
export class ValidateE911AddressCommand extends $Command<
  ValidateE911AddressCommandInput,
  ValidateE911AddressCommandOutput,
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

  constructor(readonly input: ValidateE911AddressCommandInput) {
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
  ): Handler<ValidateE911AddressCommandInput, ValidateE911AddressCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ValidateE911AddressCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ChimeClient";
    const commandName = "ValidateE911AddressCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ValidateE911AddressRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ValidateE911AddressResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ValidateE911AddressCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ValidateE911AddressCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ValidateE911AddressCommandOutput> {
    return deserializeAws_restJson1ValidateE911AddressCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
