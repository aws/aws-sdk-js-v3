import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateDeviceDefinitionVersionRequest, CreateDeviceDefinitionVersionResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateDeviceDefinitionVersionCommand,
  serializeAws_restJson1CreateDeviceDefinitionVersionCommand,
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

export type CreateDeviceDefinitionVersionCommandInput = CreateDeviceDefinitionVersionRequest;
export type CreateDeviceDefinitionVersionCommandOutput = CreateDeviceDefinitionVersionResponse & __MetadataBearer;

/**
 * Creates a version of a device definition that has already been defined.
 */
export class CreateDeviceDefinitionVersionCommand extends $Command<
  CreateDeviceDefinitionVersionCommandInput,
  CreateDeviceDefinitionVersionCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDeviceDefinitionVersionCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: GreengrassClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateDeviceDefinitionVersionCommandInput, CreateDeviceDefinitionVersionCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateDeviceDefinitionVersionCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDeviceDefinitionVersionRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDeviceDefinitionVersionResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDeviceDefinitionVersionCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateDeviceDefinitionVersionCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateDeviceDefinitionVersionCommandOutput> {
    return deserializeAws_restJson1CreateDeviceDefinitionVersionCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
