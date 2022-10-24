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
  AssociateDeviceWithRoomRequest,
  AssociateDeviceWithRoomRequestFilterSensitiveLog,
  AssociateDeviceWithRoomResponse,
  AssociateDeviceWithRoomResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1AssociateDeviceWithRoomCommand,
  serializeAws_json1_1AssociateDeviceWithRoomCommand,
} from "../protocols/Aws_json1_1";

export interface AssociateDeviceWithRoomCommandInput extends AssociateDeviceWithRoomRequest {}
export interface AssociateDeviceWithRoomCommandOutput extends AssociateDeviceWithRoomResponse, __MetadataBearer {}

/**
 * <p>Associates a device with a given room. This applies all the settings from the room
 *          profile to the device, and all the skills in any skill groups added to that room. This
 *          operation requires the device to be online, or else a manual sync is required. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } from "@aws-sdk/client-alexa-for-business"; // ES Modules import
 * // const { AlexaForBusinessClient, AssociateDeviceWithRoomCommand } = require("@aws-sdk/client-alexa-for-business"); // CommonJS import
 * const client = new AlexaForBusinessClient(config);
 * const command = new AssociateDeviceWithRoomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateDeviceWithRoomCommandInput} for command's `input` shape.
 * @see {@link AssociateDeviceWithRoomCommandOutput} for command's `response` shape.
 * @see {@link AlexaForBusinessClientResolvedConfig | config} for AlexaForBusinessClient's `config` shape.
 *
 */
export class AssociateDeviceWithRoomCommand extends $Command<
  AssociateDeviceWithRoomCommandInput,
  AssociateDeviceWithRoomCommandOutput,
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

  constructor(readonly input: AssociateDeviceWithRoomCommandInput) {
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
  ): Handler<AssociateDeviceWithRoomCommandInput, AssociateDeviceWithRoomCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, AssociateDeviceWithRoomCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AlexaForBusinessClient";
    const commandName = "AssociateDeviceWithRoomCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: AssociateDeviceWithRoomRequestFilterSensitiveLog,
      outputFilterSensitiveLog: AssociateDeviceWithRoomResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: AssociateDeviceWithRoomCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1AssociateDeviceWithRoomCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<AssociateDeviceWithRoomCommandOutput> {
    return deserializeAws_json1_1AssociateDeviceWithRoomCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
