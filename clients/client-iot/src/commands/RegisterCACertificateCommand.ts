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
  RegisterCACertificateRequest,
  RegisterCACertificateRequestFilterSensitiveLog,
  RegisterCACertificateResponse,
  RegisterCACertificateResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1RegisterCACertificateCommand,
  serializeAws_restJson1RegisterCACertificateCommand,
} from "../protocols/Aws_restJson1";

export interface RegisterCACertificateCommandInput extends RegisterCACertificateRequest {}
export interface RegisterCACertificateCommandOutput extends RegisterCACertificateResponse, __MetadataBearer {}

/**
 * <p>Registers a CA certificate with Amazon Web Services IoT Core. There is no limit to the number of CA
 *          certificates you can register in your Amazon Web Services account. You can register up to 10 CA
 *          certificates with the same <code>CA subject field</code> per Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">RegisterCACertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCACertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCACertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCACertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCACertificateCommandInput} for command's `input` shape.
 * @see {@link RegisterCACertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class RegisterCACertificateCommand extends $Command<
  RegisterCACertificateCommandInput,
  RegisterCACertificateCommandOutput,
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

  constructor(readonly input: RegisterCACertificateCommandInput) {
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
  ): Handler<RegisterCACertificateCommandInput, RegisterCACertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterCACertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCACertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCACertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterCACertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCACertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCACertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RegisterCACertificateCommandOutput> {
    return deserializeAws_restJson1RegisterCACertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
