import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { RemoveBackendConfigRequest, RemoveBackendConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1RemoveBackendConfigCommand,
  serializeAws_restJson1RemoveBackendConfigCommand,
} from "../protocols/Aws_restJson1";
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

export type RemoveBackendConfigCommandInput = RemoveBackendConfigRequest;
export type RemoveBackendConfigCommandOutput = RemoveBackendConfigResponse & __MetadataBearer;

/**
 * <p>Removes the AWS resources that are required to access the Amplify Admin UI.</p>
 */
export class RemoveBackendConfigCommand extends $Command<
  RemoveBackendConfigCommandInput,
  RemoveBackendConfigCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RemoveBackendConfigCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AmplifyBackendClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RemoveBackendConfigCommandInput, RemoveBackendConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "RemoveBackendConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RemoveBackendConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: RemoveBackendConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RemoveBackendConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1RemoveBackendConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<RemoveBackendConfigCommandOutput> {
    return deserializeAws_restJson1RemoveBackendConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
