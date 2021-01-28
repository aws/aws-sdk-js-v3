import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetDevicePoolCompatibilityRequest, GetDevicePoolCompatibilityResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetDevicePoolCompatibilityCommand,
  serializeAws_json1_1GetDevicePoolCompatibilityCommand,
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

export type GetDevicePoolCompatibilityCommandInput = GetDevicePoolCompatibilityRequest;
export type GetDevicePoolCompatibilityCommandOutput = GetDevicePoolCompatibilityResult & __MetadataBearer;

/**
 * <p>Gets information about compatibility with a device pool.</p>
 */
export class GetDevicePoolCompatibilityCommand extends $Command<
  GetDevicePoolCompatibilityCommandInput,
  GetDevicePoolCompatibilityCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetDevicePoolCompatibilityCommandInput) {
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
  ): Handler<GetDevicePoolCompatibilityCommandInput, GetDevicePoolCompatibilityCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetDevicePoolCompatibilityCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetDevicePoolCompatibilityRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetDevicePoolCompatibilityResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetDevicePoolCompatibilityCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetDevicePoolCompatibilityCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<GetDevicePoolCompatibilityCommandOutput> {
    return deserializeAws_json1_1GetDevicePoolCompatibilityCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
