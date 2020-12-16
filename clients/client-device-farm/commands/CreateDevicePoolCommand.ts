import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { CreateDevicePoolRequest, CreateDevicePoolResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateDevicePoolCommand,
  serializeAws_json1_1CreateDevicePoolCommand,
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

export type CreateDevicePoolCommandInput = CreateDevicePoolRequest;
export type CreateDevicePoolCommandOutput = CreateDevicePoolResult & __MetadataBearer;

/**
 * <p>Creates a device pool.</p>
 */
export class CreateDevicePoolCommand extends $Command<
  CreateDevicePoolCommandInput,
  CreateDevicePoolCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDevicePoolCommandInput) {
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
  ): Handler<CreateDevicePoolCommandInput, CreateDevicePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "CreateDevicePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDevicePoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDevicePoolResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDevicePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateDevicePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDevicePoolCommandOutput> {
    return deserializeAws_json1_1CreateDevicePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
