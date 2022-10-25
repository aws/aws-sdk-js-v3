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
  CreateKeysAndCertificateRequest,
  CreateKeysAndCertificateRequestFilterSensitiveLog,
  CreateKeysAndCertificateResponse,
  CreateKeysAndCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CreateKeysAndCertificateCommand,
  serializeAws_restJson1CreateKeysAndCertificateCommand,
} from "../protocols/Aws_restJson1";

export interface CreateKeysAndCertificateCommandInput extends CreateKeysAndCertificateRequest {}
export interface CreateKeysAndCertificateCommandOutput extends CreateKeysAndCertificateResponse, __MetadataBearer {}

/**
 * <p>Creates a 2048-bit RSA key pair and issues an X.509 certificate using the issued
 *          public key. You can also call <code>CreateKeysAndCertificate</code> over MQTT from a
 *          device, for more information, see <a href="https://docs.aws.amazon.com/iot/latest/developerguide/provision-wo-cert.html#provision-mqtt-api">Provisioning MQTT API</a>.</p>
 *          <p>
 *             <b>Note</b> This is the only time IoT issues the private key
 *          for this certificate, so it is important to keep it in a secure location.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CreateKeysAndCertificate</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CreateKeysAndCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CreateKeysAndCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CreateKeysAndCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeysAndCertificateCommandInput} for command's `input` shape.
 * @see {@link CreateKeysAndCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CreateKeysAndCertificateCommand extends $Command<
  CreateKeysAndCertificateCommandInput,
  CreateKeysAndCertificateCommandOutput,
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

  constructor(readonly input: CreateKeysAndCertificateCommandInput) {
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
  ): Handler<CreateKeysAndCertificateCommandInput, CreateKeysAndCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CreateKeysAndCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CreateKeysAndCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateKeysAndCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: CreateKeysAndCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateKeysAndCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateKeysAndCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateKeysAndCertificateCommandOutput> {
    return deserializeAws_restJson1CreateKeysAndCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
