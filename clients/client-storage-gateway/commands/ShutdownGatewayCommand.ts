import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";
import { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import {
  deserializeAws_json1_1ShutdownGatewayCommand,
  serializeAws_json1_1ShutdownGatewayCommand,
} from "../protocols/Aws_json1_1";
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

export type ShutdownGatewayCommandInput = ShutdownGatewayInput;
export type ShutdownGatewayCommandOutput = ShutdownGatewayOutput & __MetadataBearer;

/**
 * <p>Shuts down a gateway. To specify which gateway to shut down, use the Amazon Resource
 *          Name (ARN) of the gateway in the body of your request.</p>
 *
 *          <p>The operation shuts down the gateway service component running in the gateway's
 *          virtual machine (VM) and not the host VM.</p>
 *
 *          <note>
 *             <p>If you want to shut down the VM, it is recommended that you first shut down the
 *             gateway component in the VM to avoid unpredictable conditions.</p>
 *          </note>
 *
 *          <p>After the gateway is shutdown, you cannot call any other API except <a>StartGateway</a>, <a>DescribeGatewayInformation</a>, and <a>ListGateways</a>. For more information, see <a>ActivateGateway</a>.
 *          Your applications cannot read from or write to the gateway's storage volumes, and
 *          there are no snapshots taken.</p>
 *
 *          <note>
 *             <p>When you make a shutdown request, you will get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the gateway to shut down. You can call
 *             the <a>DescribeGatewayInformation</a> API to check the status. For more
 *             information, see <a>ActivateGateway</a>.</p>
 *          </note>
 *
 *          <p>If do not intend to use the gateway again, you must delete the gateway (using <a>DeleteGateway</a>) to no longer pay software charges associated with the
 *          gateway.</p>
 */
export class ShutdownGatewayCommand extends $Command<
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ShutdownGatewayCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: StorageGatewayClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ShutdownGatewayCommandInput, ShutdownGatewayCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ShutdownGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ShutdownGatewayInput.filterSensitiveLog,
      outputFilterSensitiveLog: ShutdownGatewayOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ShutdownGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ShutdownGatewayCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ShutdownGatewayCommandOutput> {
    return deserializeAws_json1_1ShutdownGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
