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
  SMITHY_CONTEXT_KEY,
} from "@smithy/types";

import { UpdateGatewaySoftwareNowInput, UpdateGatewaySoftwareNowOutput } from "../models/models_0";
import { de_UpdateGatewaySoftwareNowCommand, se_UpdateGatewaySoftwareNowCommand } from "../protocols/Aws_json1_1";
import { ServiceInputTypes, ServiceOutputTypes, StorageGatewayClientResolvedConfig } from "../StorageGatewayClient";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandInput extends UpdateGatewaySoftwareNowInput {}
/**
 * @public
 *
 * The output of {@link UpdateGatewaySoftwareNowCommand}.
 */
export interface UpdateGatewaySoftwareNowCommandOutput extends UpdateGatewaySoftwareNowOutput, __MetadataBearer {}

/**
 * @public
 * <p>Updates the gateway virtual machine (VM) software. The request immediately triggers the
 *          software update.</p>
 *          <note>
 *             <p>When you make this request, you get a <code>200 OK</code> success response
 *             immediately. However, it might take some time for the update to complete. You can call
 *                <a>DescribeGatewayInformation</a> to verify the gateway is in the
 *                <code>STATE_RUNNING</code> state.</p>
 *          </note>
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
 * const input = { // UpdateGatewaySoftwareNowInput
 *   GatewayARN: "STRING_VALUE", // required
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * // { // UpdateGatewaySoftwareNowOutput
 * //   GatewayARN: "STRING_VALUE",
 * // };
 *
 * ```
 *
 * @param UpdateGatewaySoftwareNowCommandInput - {@link UpdateGatewaySoftwareNowCommandInput}
 * @returns {@link UpdateGatewaySoftwareNowCommandOutput}
 * @see {@link UpdateGatewaySoftwareNowCommandInput} for command's `input` shape.
 * @see {@link UpdateGatewaySoftwareNowCommandOutput} for command's `response` shape.
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
 * @example To update a gateway's VM software
 * ```javascript
 * // Updates the gateway virtual machine (VM) software. The request immediately triggers the software update.
 * const input = {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * };
 * const command = new UpdateGatewaySoftwareNowCommand(input);
 * const response = await client.send(command);
 * /* response ==
 * {
 *   "GatewayARN": "arn:aws:storagegateway:us-east-1:111122223333:gateway/sgw-12A3456B"
 * }
 * *\/
 * // example id: to-update-a-gateways-vm-software-1472152020929
 * ```
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

  /**
   * @public
   */
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
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "StorageGateway_20130630",
        operation: "UpdateGatewaySoftwareNow",
      },
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
  private serialize(input: UpdateGatewaySoftwareNowCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_UpdateGatewaySoftwareNowCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateGatewaySoftwareNowCommandOutput> {
    return de_UpdateGatewaySoftwareNowCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
