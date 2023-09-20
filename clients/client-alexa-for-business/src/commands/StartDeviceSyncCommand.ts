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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import { StartDeviceSyncRequest, StartDeviceSyncResponse } from "../models/models_0";
import { de_StartDeviceSyncCommand, se_StartDeviceSyncCommand } from "../protocols/Aws_json1_1";

/**
 * @public
 */
export { __MetadataBearer, $Command };
/**
 * @public
 *
 * The input for {@link StartDeviceSyncCommand}.
 */
export interface StartDeviceSyncCommandInput extends StartDeviceSyncRequest {}
/**
 * @public
 *
 * The output of {@link StartDeviceSyncCommand}.
 */
export interface StartDeviceSyncCommandOutput extends StartDeviceSyncResponse, __MetadataBearer {}

/**
 * @public
 * @deprecated
 *
 * <p>Resets a device and its account to the known default settings. This clears all
 *          information and settings set by previous users in the following ways:</p>
 *          <ul>
 *             <li>
 *                <p>Bluetooth - This unpairs all bluetooth devices paired with your echo
 *                device.</p>
 *             </li>
 *             <li>
 *                <p>Volume - This resets the echo device's volume to the default value.</p>
 *             </li>
 *             <li>
 *                <p>Notifications - This clears all notifications from your echo device.</p>
 *             </li>
 *             <li>
 *                <p>Lists - This clears all to-do items from your echo device.</p>
 *             </li>
 *             <li>
 *                <p>Settings - This internally syncs the room's profile (if the device is assigned to
 *                a room), contacts, address books, delegation access for account linking, and
 *                communications (if enabled on the room profile).</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, StartDeviceSyncCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, StartDeviceSyncCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const input = { // StartDeviceSyncRequest
 *   RoomArn: "STRING_VALUE",
 *   DeviceArn: "STRING_VALUE",
 *   Features: [ // Features // required
 *     "BLUETOOTH" || "VOLUME" || "NOTIFICATIONS" || "LISTS" || "SKILLS" || "NETWORK_PROFILE" || "SETTINGS" || "ALL",
 *   ],
 * };
 * const command = new StartDeviceSyncCommand(input);
 * const response = await client.send(command);
 * // {};
 *
 * ```
 *
 * @param StartDeviceSyncCommandInput - {@link StartDeviceSyncCommandInput}
 * @returns {@link StartDeviceSyncCommandOutput}
 * @see {@link StartDeviceSyncCommandInput} for command's `input` shape.
 * @see {@link StartDeviceSyncCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 * @throws {@link DeviceNotRegisteredException} (client fault)
 *  <p>The request failed because this device is no longer registered and therefore no longer managed by this account.</p>
 *
 * @throws {@link AlexaForBusinessServiceException}
 * <p>Base exception class for all service exceptions from AlexaForBusiness service.</p>
 *
 */
export class StartDeviceSyncCommand extends $Command<
  StartDeviceSyncCommandInput,
  StartDeviceSyncCommandOutput,
  AlexaForBusinessClientResolvedConfig
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
  constructor(readonly input: StartDeviceSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AlexaForBusinessClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDeviceSyncCommandInput, StartDeviceSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, StartDeviceSyncCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "StartDeviceSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: (_: any) => _,
      outputFilterSensitiveLog: (_: any) => _,
      [SMITHY_CONTEXT_KEY]: {
        service: "AlexaForBusiness",
        operation: "StartDeviceSync",
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
  private serialize(input: StartDeviceSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return se_StartDeviceSyncCommand(input, context);
  }

  /**
   * @internal
   */
  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeviceSyncCommandOutput> {
    return de_StartDeviceSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
