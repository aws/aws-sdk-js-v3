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
  PhoneNumberValidateRequest,
  PhoneNumberValidateRequestFilterSensitiveLog,
  PhoneNumberValidateResponse,
  PhoneNumberValidateResponseFilterSensitiveLog,
} from "../models/models_1";
import { PinpointClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PinpointClient";
import {
  deserializeAws_restJson1PhoneNumberValidateCommand,
  serializeAws_restJson1PhoneNumberValidateCommand,
} from "../protocols/Aws_restJson1";

export interface PhoneNumberValidateCommandInput extends PhoneNumberValidateRequest {}
export interface PhoneNumberValidateCommandOutput extends PhoneNumberValidateResponse, __MetadataBearer {}

/**
 * <p>Retrieves information about a phone number.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, PhoneNumberValidateCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, PhoneNumberValidateCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new PhoneNumberValidateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PhoneNumberValidateCommandInput} for command's `input` shape.
 * @see {@link PhoneNumberValidateCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for PinpointClient's `config` shape.
 *
 */
export class PhoneNumberValidateCommand extends $Command<
  PhoneNumberValidateCommandInput,
  PhoneNumberValidateCommandOutput,
  PinpointClientResolvedConfig
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

  constructor(readonly input: PhoneNumberValidateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PinpointClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<PhoneNumberValidateCommandInput, PhoneNumberValidateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, PhoneNumberValidateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PinpointClient";
    const commandName = "PhoneNumberValidateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: PhoneNumberValidateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: PhoneNumberValidateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: PhoneNumberValidateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1PhoneNumberValidateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<PhoneNumberValidateCommandOutput> {
    return deserializeAws_restJson1PhoneNumberValidateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
