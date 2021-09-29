import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchDisassociateClientDeviceFromCoreDeviceRequest,
  BatchDisassociateClientDeviceFromCoreDeviceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand,
  serializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand,
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

export interface BatchDisassociateClientDeviceFromCoreDeviceCommandInput
  extends BatchDisassociateClientDeviceFromCoreDeviceRequest {}
export interface BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  extends BatchDisassociateClientDeviceFromCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Disassociate a list of client devices from a core device. After you disassociate a client
 *       device from a core device, the client device won't be able to use cloud discovery to retrieve
 *       the core device's connectivity information and certificates.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchDisassociateClientDeviceFromCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new BatchDisassociateClientDeviceFromCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchDisassociateClientDeviceFromCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchDisassociateClientDeviceFromCoreDeviceCommand extends $Command<
  BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
  BatchDisassociateClientDeviceFromCoreDeviceCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassV2ClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<
    BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    BatchDisassociateClientDeviceFromCoreDeviceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "BatchDisassociateClientDeviceFromCoreDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchDisassociateClientDeviceFromCoreDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchDisassociateClientDeviceFromCoreDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchDisassociateClientDeviceFromCoreDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchDisassociateClientDeviceFromCoreDeviceCommandOutput> {
    return deserializeAws_restJson1BatchDisassociateClientDeviceFromCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
