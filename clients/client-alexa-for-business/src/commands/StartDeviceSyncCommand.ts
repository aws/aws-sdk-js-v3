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

import { AlexaForBusinessClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AlexaForBusinessClient";
import {
  StartDeviceSyncRequest,
  StartDeviceSyncRequestFilterSensitiveLog,
  StartDeviceSyncResponse,
  StartDeviceSyncResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1StartDeviceSyncCommand,
  serializeAws_json1_1StartDeviceSyncCommand,
} from "../protocols/Aws_json1_1";

export interface StartDeviceSyncCommandInput extends StartDeviceSyncRequest {}
export interface StartDeviceSyncCommandOutput extends StartDeviceSyncResponse, __MetadataBearer {}

/**
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
 * const command = new StartDeviceSyncCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartDeviceSyncCommandInput} for command's `input` shape.
 * @see {@link StartDeviceSyncCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
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
      inputFilterSensitiveLog: StartDeviceSyncRequestFilterSensitiveLog,
      outputFilterSensitiveLog: StartDeviceSyncResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDeviceSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartDeviceSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDeviceSyncCommandOutput> {
    return deserializeAws_json1_1StartDeviceSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
