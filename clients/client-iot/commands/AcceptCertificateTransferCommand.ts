import { IoTClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTClient";
import { AcceptCertificateTransferRequest } from "../models/models_0";
import {
  deserializeAws_restJson1AcceptCertificateTransferCommand,
  serializeAws_restJson1AcceptCertificateTransferCommand,
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

export interface AcceptCertificateTransferCommandInput extends AcceptCertificateTransferRequest {}
export interface AcceptCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * <p>Accepts a pending certificate transfer. The default state of the certificate is
 *          INACTIVE.</p>
 *          <p>To check for pending certificate transfers, call <a>ListCertificates</a>
 *          to enumerate your certificates.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">AcceptCertificateTransfer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, AcceptCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, AcceptCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new AcceptCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AcceptCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link AcceptCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class AcceptCertificateTransferCommand extends $Command<
  AcceptCertificateTransferCommandInput,
  AcceptCertificateTransferCommandOutput,
  IoTClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: AcceptCertificateTransferCommandInput) {
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
  ): Handler<AcceptCertificateTransferCommandInput, AcceptCertificateTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "AcceptCertificateTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AcceptCertificateTransferRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AcceptCertificateTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1AcceptCertificateTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AcceptCertificateTransferCommandOutput> {
    return deserializeAws_restJson1AcceptCertificateTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
