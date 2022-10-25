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
  RegisterCertificateWithoutCARequest,
  RegisterCertificateWithoutCARequestFilterSensitiveLog,
  RegisterCertificateWithoutCAResponse,
  RegisterCertificateWithoutCAResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1RegisterCertificateWithoutCACommand,
  serializeAws_restJson1RegisterCertificateWithoutCACommand,
} from "../protocols/Aws_restJson1";

export interface RegisterCertificateWithoutCACommandInput extends RegisterCertificateWithoutCARequest {}
export interface RegisterCertificateWithoutCACommandOutput
  extends RegisterCertificateWithoutCAResponse,
    __MetadataBearer {}

/**
 * <p>Register a certificate that does not have a certificate authority (CA).
 *          For supported certificates, consult <a href="https://docs.aws.amazon.com/iot/latest/developerguide/x509-client-certs.html#x509-cert-algorithms">
 *          Certificate signing algorithms supported by IoT</a>.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, RegisterCertificateWithoutCACommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, RegisterCertificateWithoutCACommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new RegisterCertificateWithoutCACommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterCertificateWithoutCACommandInput} for command's `input` shape.
 * @see {@link RegisterCertificateWithoutCACommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class RegisterCertificateWithoutCACommand extends $Command<
  RegisterCertificateWithoutCACommandInput,
  RegisterCertificateWithoutCACommandOutput,
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

  constructor(readonly input: RegisterCertificateWithoutCACommandInput) {
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
  ): Handler<RegisterCertificateWithoutCACommandInput, RegisterCertificateWithoutCACommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, RegisterCertificateWithoutCACommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "RegisterCertificateWithoutCACommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RegisterCertificateWithoutCARequestFilterSensitiveLog,
      outputFilterSensitiveLog: RegisterCertificateWithoutCAResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RegisterCertificateWithoutCACommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RegisterCertificateWithoutCACommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RegisterCertificateWithoutCACommandOutput> {
    return deserializeAws_restJson1RegisterCertificateWithoutCACommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
