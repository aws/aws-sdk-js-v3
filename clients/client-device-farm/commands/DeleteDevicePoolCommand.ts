import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { DeleteDevicePoolRequest, DeleteDevicePoolResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteDevicePoolCommand,
  serializeAws_json1_1DeleteDevicePoolCommand,
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

export type DeleteDevicePoolCommandInput = DeleteDevicePoolRequest;
export type DeleteDevicePoolCommandOutput = DeleteDevicePoolResult & __MetadataBearer;

/**
 * <p>Deletes a device pool given the pool ARN. Does not allow deletion of curated pools
 *             owned by the system.</p>
 */
export class DeleteDevicePoolCommand extends $Command<
  DeleteDevicePoolCommandInput,
  DeleteDevicePoolCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDevicePoolCommandInput) {
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
  ): Handler<DeleteDevicePoolCommandInput, DeleteDevicePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "DeleteDevicePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDevicePoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDevicePoolResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDevicePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteDevicePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDevicePoolCommandOutput> {
    return deserializeAws_json1_1DeleteDevicePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
