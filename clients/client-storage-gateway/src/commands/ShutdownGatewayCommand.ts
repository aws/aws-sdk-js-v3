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
  ShutdownGatewayInput,
  ShutdownGatewayInputFilterSensitiveLog,
  ShutdownGatewayOutput,
  ShutdownGatewayOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1ShutdownGatewayCommand,
  serializeAws_json1_1ShutdownGatewayCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface ShutdownGatewayCommandInput extends ShutdownGatewayInput {}
export interface ShutdownGatewayCommandOutput extends ShutdownGatewayOutput, __MetadataBearer {}

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
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ShutdownGatewayCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ShutdownGatewayCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ShutdownGatewayCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ShutdownGatewayCommandInput} for command's `input` shape.
 * @see {@link ShutdownGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class ShutdownGatewayCommand extends $Command<
  ShutdownGatewayCommandInput,
  ShutdownGatewayCommandOutput,
  StorageGatewayClientResolvedConfig
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
    this.middlewareStack.use(
      getEndpointPlugin(configuration, ShutdownGatewayCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "ShutdownGatewayCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ShutdownGatewayInputFilterSensitiveLog,
      outputFilterSensitiveLog: ShutdownGatewayOutputFilterSensitiveLog,
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
