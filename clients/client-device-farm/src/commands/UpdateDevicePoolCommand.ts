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
  UpdateDevicePoolRequest,
  UpdateDevicePoolRequestFilterSensitiveLog,
  UpdateDevicePoolResult,
  UpdateDevicePoolResultFilterSensitiveLog,
} from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDevicePoolCommand,
  serializeAws_json1_1UpdateDevicePoolCommand,
} from "../protocols/Aws_json1_1";

export interface UpdateDevicePoolCommandInput extends UpdateDevicePoolRequest {}
export interface UpdateDevicePoolCommandOutput extends UpdateDevicePoolResult, __MetadataBearer {}

/**
 * <p>Modifies the name, description, and rules in a device pool given the attributes and
 *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 *             whole (or not at all).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, UpdateDevicePoolCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, UpdateDevicePoolCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new UpdateDevicePoolCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDevicePoolCommandInput} for command's `input` shape.
 * @see {@link UpdateDevicePoolCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for DeviceFarmClient's `config` shape.
 *
 */
export class UpdateDevicePoolCommand extends $Command<
  UpdateDevicePoolCommandInput,
  UpdateDevicePoolCommandOutput,
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

  constructor(readonly input: UpdateDevicePoolCommandInput) {
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
  ): Handler<UpdateDevicePoolCommandInput, UpdateDevicePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, UpdateDevicePoolCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateDevicePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDevicePoolRequestFilterSensitiveLog,
      outputFilterSensitiveLog: UpdateDevicePoolResultFilterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateDevicePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateDevicePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateDevicePoolCommandOutput> {
    return deserializeAws_json1_1UpdateDevicePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
