import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolRequest, GetDevicePoolResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDevicePoolCommand,
  serializeAws_json1_1GetDevicePoolCommand,
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

export type GetDevicePoolCommandInput = GetDevicePoolRequest;
export type GetDevicePoolCommandOutput = GetDevicePoolResult & __MetadataBearer;

/**
 * <p>Gets information about a device pool.</p>
 */
export class GetDevicePoolCommand extends $Command<
  GetDevicePoolCommandInput,
  GetDevicePoolCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevicePoolCommandInput) {
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
  ): Handler<GetDevicePoolCommandInput, GetDevicePoolCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetDevicePoolCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicePoolRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevicePoolResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicePoolCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevicePoolCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetDevicePoolCommandOutput> {
    return deserializeAws_json1_1GetDevicePoolCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
