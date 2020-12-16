import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { GetRemoteAccessSessionRequest, GetRemoteAccessSessionResult } from "../models/models_0";
import {
  deserializeAws_json1_1GetRemoteAccessSessionCommand,
  serializeAws_json1_1GetRemoteAccessSessionCommand,
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

export type GetRemoteAccessSessionCommandInput = GetRemoteAccessSessionRequest;
export type GetRemoteAccessSessionCommandOutput = GetRemoteAccessSessionResult & __MetadataBearer;

/**
 * <p>Returns a link to a currently running remote access session.</p>
 */
export class GetRemoteAccessSessionCommand extends $Command<
  GetRemoteAccessSessionCommandInput,
  GetRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: GetRemoteAccessSessionCommandInput) {
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
  ): Handler<GetRemoteAccessSessionCommandInput, GetRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "GetRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: GetRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: GetRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: GetRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1GetRemoteAccessSessionCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<GetRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1GetRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
