import { GreengrassV2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassV2Client";
import {
  BatchAssociateClientDeviceWithCoreDeviceRequest,
  BatchAssociateClientDeviceWithCoreDeviceResponse,
} from "../models/models_0";
import {
  deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand,
  serializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand,
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

export interface BatchAssociateClientDeviceWithCoreDeviceCommandInput
  extends BatchAssociateClientDeviceWithCoreDeviceRequest {}
export interface BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  extends BatchAssociateClientDeviceWithCoreDeviceResponse,
    __MetadataBearer {}

/**
 * <p>Associate a list of client devices with a core device. Use this API operation to specify
 *       which client devices can discover a core device through cloud discovery. With cloud discovery,
 *       client devices connect to IoT Greengrass to retrieve associated core devices' connectivity information
 *       and certificates. For more information, see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/configure-cloud-discovery.html">Configure cloud
 *         discovery</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *
 *          <note>
 *             <p>Client devices are local IoT devices that connect to and communicate with an IoT Greengrass core
 *         device over MQTT. You can connect client devices to a core device to sync MQTT messages and
 *         data to Amazon Web Services IoT Core and interact with client devices in Greengrass components. For more information,
 *         see <a href="https://docs.aws.amazon.com/greengrass/v2/developerguide/interact-with-local-iot-devices.html">Interact with
 *           local IoT devices</a> in the <i>IoT Greengrass V2 Developer Guide</i>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, BatchAssociateClientDeviceWithCoreDeviceCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new BatchAssociateClientDeviceWithCoreDeviceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandInput} for command's `input` shape.
 * @see {@link BatchAssociateClientDeviceWithCoreDeviceCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class BatchAssociateClientDeviceWithCoreDeviceCommand extends $Command<
  BatchAssociateClientDeviceWithCoreDeviceCommandInput,
  BatchAssociateClientDeviceWithCoreDeviceCommandOutput,
  GreengrassV2ClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: BatchAssociateClientDeviceWithCoreDeviceCommandInput) {
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
    BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    BatchAssociateClientDeviceWithCoreDeviceCommandOutput
  > {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassV2Client";
    const commandName = "BatchAssociateClientDeviceWithCoreDeviceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: BatchAssociateClientDeviceWithCoreDeviceRequest.filterSensitiveLog,
      outputFilterSensitiveLog: BatchAssociateClientDeviceWithCoreDeviceResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: BatchAssociateClientDeviceWithCoreDeviceCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<BatchAssociateClientDeviceWithCoreDeviceCommandOutput> {
    return deserializeAws_restJson1BatchAssociateClientDeviceWithCoreDeviceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
