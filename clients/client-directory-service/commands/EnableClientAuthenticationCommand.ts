import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableClientAuthenticationRequest, EnableClientAuthenticationResult } from "../models/models_0";
import {
  deserializeAws_json1_1EnableClientAuthenticationCommand,
  serializeAws_json1_1EnableClientAuthenticationCommand,
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

export type EnableClientAuthenticationCommandInput = EnableClientAuthenticationRequest;
export type EnableClientAuthenticationCommandOutput = EnableClientAuthenticationResult & __MetadataBearer;

/**
 * <p>Enables alternative client authentication methods for the specified directory.</p>
 */
export class EnableClientAuthenticationCommand extends $Command<
  EnableClientAuthenticationCommandInput,
  EnableClientAuthenticationCommandOutput,
  DirectoryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: EnableClientAuthenticationCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DirectoryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<EnableClientAuthenticationCommandInput, EnableClientAuthenticationCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DirectoryServiceClient";
    const commandName = "EnableClientAuthenticationCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: EnableClientAuthenticationRequest.filterSensitiveLog,
      outputFilterSensitiveLog: EnableClientAuthenticationResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: EnableClientAuthenticationCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1EnableClientAuthenticationCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<EnableClientAuthenticationCommandOutput> {
    return deserializeAws_json1_1EnableClientAuthenticationCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
