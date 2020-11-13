import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateContainerServiceRegistryLoginRequest,
  CreateContainerServiceRegistryLoginResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand,
  serializeAws_json1_1CreateContainerServiceRegistryLoginCommand,
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

export type CreateContainerServiceRegistryLoginCommandInput = CreateContainerServiceRegistryLoginRequest;
export type CreateContainerServiceRegistryLoginCommandOutput = CreateContainerServiceRegistryLoginResult &
  __MetadataBearer;

export class CreateContainerServiceRegistryLoginCommand extends $Command<
  CreateContainerServiceRegistryLoginCommandInput,
  CreateContainerServiceRegistryLoginCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContainerServiceRegistryLoginCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerServiceRegistryLoginCommandInput, CreateContainerServiceRegistryLoginCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceRegistryLoginCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContainerServiceRegistryLoginRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContainerServiceRegistryLoginResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateContainerServiceRegistryLoginCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceRegistryLoginCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceRegistryLoginCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceRegistryLoginCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
