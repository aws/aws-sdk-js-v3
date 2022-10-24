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

import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import {
  UpdateDeviceInstanceRequest,
  UpdateDeviceInstanceRequestFilterSensitiveLog,
  UpdateDeviceInstanceResult,
  UpdateDeviceInstanceResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDeviceInstanceCommand,
  serializeAws_json1_1UpdateDeviceInstanceCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateDeviceInstanceCommandInput extends UpdateDeviceInstanceRequest {}
export interface UpdateDeviceInstanceCommandOutput extends UpdateDeviceInstanceResult, __MetadataBearer {}

/**
 * <p>Updates information about a private device instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDeviceInstanceCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDeviceInstanceCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDeviceInstanceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDeviceInstanceCommandInput} for command's `input` shape.
 * @see {@link UpdateDeviceInstanceCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class UpdateDeviceInstanceCommand extends $Command<
  UpdateDeviceInstanceCommandInput,
  UpdateDeviceInstanceCommandOutput,
  DeviceFarmClientResolvedConfig
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

  constructor(readonly input: UpdateDeviceInstanceCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DeviceFarmClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateDeviceInstanceCommandInput, UpdateDeviceInstanceCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDeviceInstanceCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateDeviceInstanceCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDeviceInstanceRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDeviceInstanceResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDeviceInstanceCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDeviceInstanceCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDeviceInstanceCommandOutput> {
    return deserializeAws_json1_1UpdateDeviceInstanceCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
