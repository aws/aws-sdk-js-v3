import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { StopRemoteAccessSessionRequest, StopRemoteAccessSessionResult } from "../models/models_0";
import {
  deserializeAws_json1_1StopRemoteAccessSessionCommand,
  serializeAws_json1_1StopRemoteAccessSessionCommand,
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

export type StopRemoteAccessSessionCommandInput = StopRemoteAccessSessionRequest;
export type StopRemoteAccessSessionCommandOutput = StopRemoteAccessSessionResult & __MetadataBearer;

/**
 * <p>Ends a specified remote access session.</p>
 */
export class StopRemoteAccessSessionCommand extends $Command<
  StopRemoteAccessSessionCommandInput,
  StopRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StopRemoteAccessSessionCommandInput) {
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
  ): Handler<StopRemoteAccessSessionCommandInput, StopRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "StopRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StopRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StopRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StopRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StopRemoteAccessSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StopRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1StopRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
