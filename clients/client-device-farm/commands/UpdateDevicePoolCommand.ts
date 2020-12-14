import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { UpdateDevicePoolRequest, UpdateDevicePoolResult } from "../models/models_0";
import {
  deserializeAws_json1_1UpdateDevicePoolCommand,
  serializeAws_json1_1UpdateDevicePoolCommand,
} from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  MiddlewareStack,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

export type UpdateDevicePoolCommandInput = UpdateDevicePoolRequest;
export type UpdateDevicePoolCommandOutput = UpdateDevicePoolResult & __MetadataBearer;

/**
 * <p>Modifies the name, description, and rules in a device pool given the attributes and
 *             the pool ARN. Rule updates are all-or-nothing, meaning they can only be updated as a
 *             whole (or not at all).</p>
 */
export class UpdateDevicePoolCommand extends $Command<
  UpdateDevicePoolCommandInput,
  UpdateDevicePoolCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

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

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "UpdateDevicePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateDevicePoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateDevicePoolResult.filterSensitiveLog,
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
