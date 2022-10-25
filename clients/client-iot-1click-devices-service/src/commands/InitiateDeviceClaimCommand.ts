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
  IoT1ClickDevicesServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../IoT1ClickDevicesServiceClient";
import {
  InitiateDeviceClaimRequest,
  InitiateDeviceClaimRequestFilterSensitiveLog,
  InitiateDeviceClaimResponse,
  InitiateDeviceClaimResponseFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_restJson1InitiateDeviceClaimCommand,
  serializeAws_restJson1InitiateDeviceClaimCommand,
} from "../protocols/Aws_restJson1";

export interface InitiateDeviceClaimCommandInput extends InitiateDeviceClaimRequest {}
export interface InitiateDeviceClaimCommandOutput extends InitiateDeviceClaimResponse, __MetadataBearer {}

/**
 * <p>Given a device ID, initiates a claim request for the associated device.</p><note>
 *  <p>Claiming a device consists of initiating a claim, then publishing a device event,
 *  and finalizing the claim. For a device of type button, a device event can
 *  be published by simply clicking the device.</p>
 *  </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } from "@aws-sdk/client-iot-1click-devices-service"; // ES Modules import
 * // const { IoT1ClickDevicesServiceClient, InitiateDeviceClaimCommand } = require("@aws-sdk/client-iot-1click-devices-service"); // CommonJS import
 * const client = new IoT1ClickDevicesServiceClient(config);
 * const command = new InitiateDeviceClaimCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InitiateDeviceClaimCommandInput} for command's `input` shape.
 * @see {@link InitiateDeviceClaimCommandOutput} for command's `response` shape.
 * @see {@link IoT1ClickDevicesServiceClientResolvedConfig | config} for IoT1ClickDevicesServiceClient's `config` shape.
 *
 */
export class InitiateDeviceClaimCommand extends $Command<
  InitiateDeviceClaimCommandInput,
  InitiateDeviceClaimCommandOutput,
  IoT1ClickDevicesServiceClientResolvedConfig
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

  constructor(readonly input: InitiateDeviceClaimCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: IoT1ClickDevicesServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<InitiateDeviceClaimCommandInput, InitiateDeviceClaimCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, InitiateDeviceClaimCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "IoT1ClickDevicesServiceClient";
    const commandName = "InitiateDeviceClaimCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InitiateDeviceClaimRequestFilterSensitiveLog,
      outputFilterSensitiveLog: InitiateDeviceClaimResponseFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InitiateDeviceClaimCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1InitiateDeviceClaimCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<InitiateDeviceClaimCommandOutput> {
    return deserializeAws_restJson1InitiateDeviceClaimCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
