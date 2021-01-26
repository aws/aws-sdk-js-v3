import { AppflowClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../AppflowClient";
import { UpdateConnectorProfileRequest, UpdateConnectorProfileResponse } from "../models/models_0";
import {
  deserializeAws_restJson1UpdateConnectorProfileCommand,
  serializeAws_restJson1UpdateConnectorProfileCommand,
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

export type UpdateConnectorProfileCommandInput = UpdateConnectorProfileRequest;
export type UpdateConnectorProfileCommandOutput = UpdateConnectorProfileResponse & __MetadataBearer;

/**
 * <p>
 *   Updates a given connector profile associated with your account.
 * </p>
 */
export class UpdateConnectorProfileCommand extends $Command<
  UpdateConnectorProfileCommandInput,
  UpdateConnectorProfileCommandOutput,
  AppflowClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateConnectorProfileCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: AppflowClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<UpdateConnectorProfileCommandInput, UpdateConnectorProfileCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "AppflowClient";
    const commandName = "UpdateConnectorProfileCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateConnectorProfileRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateConnectorProfileResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateConnectorProfileCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1UpdateConnectorProfileCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateConnectorProfileCommandOutput> {
    return deserializeAws_restJson1UpdateConnectorProfileCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
