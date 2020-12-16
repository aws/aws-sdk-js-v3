import { AmplifyBackendClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AmplifyBackendClient";
import { UpdateBackendConfigRequest, UpdateBackendConfigResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateBackendConfigCommand,
  serializeAws_restJson1UpdateBackendConfigCommand,
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

export type UpdateBackendConfigCommandInput = UpdateBackendConfigRequest;
export type UpdateBackendConfigCommandOutput = UpdateBackendConfigResponse & __MetadataBearer;

/**
 * <p>Updates the AWS resources that are required to access the Amplify Admin UI.</p>
 */
export class UpdateBackendConfigCommand extends $Command<
  UpdateBackendConfigCommandInput,
  UpdateBackendConfigCommandOutput,
  AmplifyBackendClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateBackendConfigCommandInput) {
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
  ): Handler<UpdateBackendConfigCommandInput, UpdateBackendConfigCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AmplifyBackendClient";
    const commandName = "UpdateBackendConfigCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateBackendConfigRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateBackendConfigResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateBackendConfigCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateBackendConfigCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateBackendConfigCommandOutput> {
    return deserializeAws_restJson1UpdateBackendConfigCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
