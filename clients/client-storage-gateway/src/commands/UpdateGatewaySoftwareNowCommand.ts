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
  UpdateGatewaySoftwareNowInput,
  UpdateGatewaySoftwareNowInputFilterSensitiveLog,
  UpdateGatewaySoftwareNowOutput,
  UpdateGatewaySoftwareNowOutputFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateGatewaySoftwareNowCommand,
  serializeAws_json1_1UpdateGatewaySoftwareNowCommand,
} from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the
 *          software update.</p>
 *
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the update to complete. You can call
 *                <a>DescribeGatewayInformation</a> to verify the gateway is in the
 *                <code>STATE_RUNNING</code> state.</p>
 *          </note>
 *
 *          <important>
 *             <p>A software update forces a system restart of your gateway. You can minimize the
 *             chance of any disruption to your applications by increasing your iSCSI Initiators'
 *             timeouts. For more information about increasing iSCSI Initiator timeouts for Windows and
 *             Linux, see <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorWindowsClient.html#CustomizeWindowsiSCSISettings">Customizing your Windows iSCSI settings</a> and <a href="https://docs.aws.amazon.com/storagegateway/latest/userguide/ConfiguringiSCSIClientInitiatorRedHatClient.html#CustomizeLinuxiSCSISettings">Customizing your Linux iSCSI settings</a>, respectively.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, UpdateGatewaySoftwareNowCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for StorageGatewayClient's `config` shape.
 *
 */
export class UpdateGatewaySoftwareNowCommand extends $Command<
  UpdateGatewaySoftwareNowCommandInput,
  UpdateGatewaySoftwareNowCommandOutput,
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

  constructor(readonly input: UpdateGatewaySoftwareNowCommandInput) {
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
  ): Handler<UpdateGatewaySoftwareNowCommandInput, UpdateGatewaySoftwareNowCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateGatewaySoftwareNowCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "StorageGatewayClient";
    const commandName = "UpdateGatewaySoftwareNowCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateGatewaySoftwareNowInputFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateGatewaySoftwareNowOutputFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateGatewaySoftwareNowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateGatewaySoftwareNowCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewaySoftwareNowCommandOutput> {
    return deserializeAws_json1_1UpdateGatewaySoftwareNowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
