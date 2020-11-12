import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateContainerServiceDeploymentRequest, CreateContainerServiceDeploymentResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateContainerServiceDeploymentCommand,
  serializeAws_json1_1CreateContainerServiceDeploymentCommand,
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

export type CreateContainerServiceDeploymentCommandInput = CreateContainerServiceDeploymentRequest;
export type CreateContainerServiceDeploymentCommandOutput = CreateContainerServiceDeploymentResult & __MetadataBearer;

export class CreateContainerServiceDeploymentCommand extends $Command<
  CreateContainerServiceDeploymentCommandInput,
  CreateContainerServiceDeploymentCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateContainerServiceDeploymentCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateContainerServiceDeploymentCommandInput, CreateContainerServiceDeploymentCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateContainerServiceDeploymentCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateContainerServiceDeploymentRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateContainerServiceDeploymentResult.filterSensitiveLog,
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
    input: CreateContainerServiceDeploymentCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateContainerServiceDeploymentCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateContainerServiceDeploymentCommandOutput> {
    return deserializeAws_json1_1CreateContainerServiceDeploymentCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
