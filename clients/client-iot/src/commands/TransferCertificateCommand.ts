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
  TransferCertificateRequest,
  TransferCertificateRequestFilterSensitiveLog,
  TransferCertificateResponse,
  TransferCertificateResponseFilterSensitiveLog,
} from "../models/models_2";
import {
  deserializeAws_restJson1TransferCertificateCommand,
  serializeAws_restJson1TransferCertificateCommand,
} from "../protocols/Aws_restJson1";

export interface TransferCertificateCommandInput extends TransferCertificateRequest {}
export interface TransferCertificateCommandOutput extends TransferCertificateResponse, __MetadataBearer {}

/**
 * <p>Transfers the specified certificate to the specified Amazon Web Services account.</p>
 *          <p>Requires permission to access the <a href="https://docs.aws.amazon.com/service-authorization/latest/reference/list_awsiot.html#awsiot-actions-as-permissions">TransferCertificate</a> action.</p>
 *
 *          <p>You can cancel the transfer until it is acknowledged by the recipient.</p>
 *          <p>No notification is sent to the transfer destination's account. It is up to the caller
 *          to notify the transfer target.</p>
 *          <p>The certificate being transferred must not be in the ACTIVE state. You can use the
 *          <a>UpdateCertificate</a> action to deactivate it.</p>
 *          <p>The certificate must not have any policies attached to it. You can use the
 *          <a>DetachPolicy</a> action to detach them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, TransferCertificateCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, TransferCertificateCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new TransferCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TransferCertificateCommandInput} for command's `input` shape.
 * @see {@link TransferCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for IoTClient's `config` shape.
 *
 */
export class TransferCertificateCommand extends $Command<
  TransferCertificateCommandInput,
  TransferCertificateCommandOutput,
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

  constructor(readonly input: TransferCertificateCommandInput) {
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
  ): Handler<TransferCertificateCommandInput, TransferCertificateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, TransferCertificateCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTClient";
    const commandName = "TransferCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: TransferCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: TransferCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: TransferCertificateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1TransferCertificateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<TransferCertificateCommandOutput> {
    return deserializeAws_restJson1TransferCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
