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

import { IoTWirelessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IoTWirelessClient";
import {
  AssociateWirelessGatewayWithCertificateRequest,
  AssociateWirelessGatewayWithCertificateRequestFilterSensitiveLog,
  AssociateWirelessGatewayWithCertificateResponse,
  AssociateWirelessGatewayWithCertificateResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand,
  serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand,
} from "../protocols/Aws_restJson1";

export interface AssociateWirelessGatewayWithCertificateCommandInput
  extends AssociateWirelessGatewayWithCertificateRequest {}
export interface AssociateWirelessGatewayWithCertificateCommandOutput
  extends AssociateWirelessGatewayWithCertificateResponse,
    __MetadataBearer {}

/**
 * <p>Associates a wireless gateway with a certificate.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } from "@aws-sdk/client-iot-wireless"; // ES Modules import
 * // const { IoTWirelessClient, AssociateWirelessGatewayWithCertificateCommand } = require("@aws-sdk/client-iot-wireless"); // CommonJS import
 * const client = new IoTWirelessClient(config);
 * const command = new AssociateWirelessGatewayWithCertificateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateWirelessGatewayWithCertificateCommandInput} for command's `input` shape.
 * @see {@link AssociateWirelessGatewayWithCertificateCommandOutput} for command's `response` shape.
 * @see {@link IoTWirelessClientResolvedConfig | config} for IoTWirelessClient's `config` shape.
 *
 */
export class AssociateWirelessGatewayWithCertificateCommand extends $Command<
  AssociateWirelessGatewayWithCertificateCommandInput,
  AssociateWirelessGatewayWithCertificateCommandOutput,
  IoTWirelessClientResolvedConfig
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

  constructor(readonly input: AssociateWirelessGatewayWithCertificateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoTWirelessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    AssociateWirelessGatewayWithCertificateCommandInput,
    AssociateWirelessGatewayWithCertificateCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(
        configuration,
        AssociateWirelessGatewayWithCertificateCommand.getEndpointParameterInstructions()
      )
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoTWirelessClient";
    const commandName = "AssociateWirelessGatewayWithCertificateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateWirelessGatewayWithCertificateResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: AssociateWirelessGatewayWithCertificateCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<AssociateWirelessGatewayWithCertificateCommandOutput> {
    return deserializeAws_restJson1AssociateWirelessGatewayWithCertificateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
