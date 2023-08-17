// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@smithy/middleware-endpoint";
import { getSerdePlugin } from "@smithy/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@smithy/protocol-http";
import { Command as $Command } from "@smithy/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@smithy/types";

import { ShutdownGatewayInput, ShutdownGatewayOutput } from "../models/models_0";
import { de_ShutdownGatewayCommand, se_ShutdownGatewayCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link ShutdownGatewayCommand}.
 */
export interface ShutdownGatewayCommandInput extends ShutdownGatewayInput {}
/**
 * @public
 *
 * The output of {@link ShutdownGatewayCommand}.
 */
export interface ShutdownGatewayCommandOutput extends ShutdownGatewayOutput, __MetadataBearer {}

/**
 * @public
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
 * const input = { // ShutdownGatewayInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new ShutdownGatewayCommand(input);
 * const response = await client.send(command);
 * // { // ShutdownGatewayOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param ShutdownGatewayCommandInput - {@link ShutdownGatewayCommandInput}
 * @returns {@link ShutdownGatewayCommandOutput}
 * @see {@link ShutdownGatewayCommandInput} for command's `input` shape.
 * @see {@link ShutdownGatewayCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 * @throws {@link InternalServerError} (server fault)
 *  <p>An internal server error has occurred during the request. For more information, see the
 *          error and message fields.</p>
 *
 * @throws {@link InvalidGatewayRequestException} (client fault)
 *  <p>An exception occurred because an invalid gateway request was issued to the service. For
 *          more information, see the error and message fields.</p>
 *
 * @throws {@link StorageGatewayServiceException}
 * <p>Base exception class for all service exceptions from StorageGateway service.</p>
 *
 * @example To shut down a gateway service
 * ```javascript
 * // This operation shuts down the gateway service component running in the storage gateway's virtual machine (VM) and not the VM.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * };
 * const command = new ShutdownGatewayCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:999999999999:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-shut-down-a-gateway-service-1472150508835
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  /**
   * @internal
   */
  private serialize(input: ShutdownGatewayCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_ShutdownGatewayCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ShutdownGatewayCommandOutput> {
    return de_ShutdownGatewayCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
