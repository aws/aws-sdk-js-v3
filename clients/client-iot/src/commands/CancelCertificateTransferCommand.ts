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
  CancelCertificateTransferRequest,
  CancelCertificateTransferRequestFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1CancelCertificateTransferCommand,
  serializeAws_restJson1CancelCertificateTransferCommand,
} from "../protocols/Aws_restJson1";

export interface CancelCertificateTransferCommandInput extends CancelCertificateTransferRequest {}
export interface CancelCertificateTransferCommandOutput extends __MetadataBearer {}

/**
 * <p>Cancels a pending transfer for the specified certificate.</p>
 *          <p>
 *             <b>Note</b> Only the transfer source account can use this
 *          operation to cancel a transfer. (Transfer destinations can use <a>RejectCertificateTransfer</a> instead.) After transfer, IoT returns the
 *          certificate to the source account in the INACTIVE state. After the destination account has
 *          accepted the transfer, the transfer cannot be cancelled.</p>
 *          <p>After a certificate transfer is cancelled, the status of the certificate changes from
 *          PENDING_TRANSFER to INACTIVE.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">CancelCertificateTransfer</a> action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, CancelCertificateTransferCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, CancelCertificateTransferCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new CancelCertificateTransferCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelCertificateTransferCommandInput} for command's `input` shape.
 * @see {@link CancelCertificateTransferCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class CancelCertificateTransferCommand extends $Command<
  CancelCertificateTransferCommandInput,
  CancelCertificateTransferCommandOutput,
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

  constructor(readonly input: CancelCertificateTransferCommandInput) {
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
  ): Handler<CancelCertificateTransferCommandInput, CancelCertificateTransferCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, CancelCertificateTransferCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "CancelCertificateTransferCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CancelCertificateTransferRequestFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CancelCertificateTransferCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CancelCertificateTransferCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CancelCertificateTransferCommandOutput> {
    return deserializeAws_restJson1CancelCertificateTransferCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
