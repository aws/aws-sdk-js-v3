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
  ProvisionDeviceRequest,
  ProvisionDeviceRequestFilterSensitiveLog,
  ProvisionDeviceResponse,
  ProvisionDeviceResponseFilterSensitiveLog,
} from "../models/models_0";
import { PanoramaClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PanoramaClient";
import {
  deserializeAws_restJson1ProvisionDeviceCommand,
  serializeAws_restJson1ProvisionDeviceCommand,
} from "../protocols/Aws_restJson1";

export interface ProvisionDeviceCommandInput extends ProvisionDeviceRequest {}
export interface ProvisionDeviceCommandOutput extends ProvisionDeviceResponse, __MetadataBearer {}

/**
 * <p>Creates a device and returns a configuration archive. The configuration archive is a ZIP file that contains a
 *       provisioning certificate that is valid for 5 minutes. Name the configuration archive
 *           <code>certificates-omni_<i>device-name</i>.zip</code> and transfer it to the device within 5
 *       minutes. Use the included USB storage device and connect it to the USB 3.0 port next to the HDMI output.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PanoramaClient, ProvisionDeviceCommand } from "@aws-sdk/client-panorama"; // ES Modules import
 * // const { PanoramaClient, ProvisionDeviceCommand } = require("@aws-sdk/client-panorama"); // CommonJS import
 * const client = new PanoramaClient(config);
 * const command = new ProvisionDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ProvisionDeviceCommandInput} for command's `input` shape.
 * @see {@link ProvisionDeviceCommandOutput} for command's `response` shape.
 * @see {@link PanoramaClientResolvedConfig | config} for PanoramaClient's `config` shape.
 *
 */
export class ProvisionDeviceCommand extends $Command<
  ProvisionDeviceCommandInput,
  ProvisionDeviceCommandOutput,
  PanoramaClientResolvedConfig
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

  constructor(readonly input: ProvisionDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: PanoramaClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ProvisionDeviceCommandInput, ProvisionDeviceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ProvisionDeviceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "PanoramaClient";
    const commandName = "ProvisionDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ProvisionDeviceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: ProvisionDeviceResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ProvisionDeviceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1ProvisionDeviceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ProvisionDeviceCommandOutput> {
    return deserializeAws_restJson1ProvisionDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
