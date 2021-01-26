import { DeviceFarmClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DeviceFarmClient";
import { InstallToRemoteAccessSessionRequest, InstallToRemoteAccessSessionResult } from "../models/models_0";
import {
  deserializeAws_json1_1InstallToRemoteAccessSessionCommand,
  serializeAws_json1_1InstallToRemoteAccessSessionCommand,
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

export type InstallToRemoteAccessSessionCommandInput = InstallToRemoteAccessSessionRequest;
export type InstallToRemoteAccessSessionCommandOutput = InstallToRemoteAccessSessionResult & __MetadataBearer;

/**
 * <p>Installs an application to the device in a remote access session. For Android
 *             applications, the file must be in .apk format. For iOS applications, the file must be in
 *             .ipa format.</p>
 */
export class InstallToRemoteAccessSessionCommand extends $Command<
  InstallToRemoteAccessSessionCommandInput,
  InstallToRemoteAccessSessionCommandOutput,
  DeviceFarmClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: InstallToRemoteAccessSessionCommandInput) {
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
  ): Handler<InstallToRemoteAccessSessionCommandInput, InstallToRemoteAccessSessionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DeviceFarmClient";
    const commandName = "InstallToRemoteAccessSessionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: InstallToRemoteAccessSessionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: InstallToRemoteAccessSessionResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: InstallToRemoteAccessSessionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1InstallToRemoteAccessSessionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<InstallToRemoteAccessSessionCommandOutput> {
    return deserializeAws_json1_1InstallToRemoteAccessSessionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
