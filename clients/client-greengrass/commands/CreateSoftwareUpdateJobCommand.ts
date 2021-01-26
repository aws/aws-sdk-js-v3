import { GreengrassClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GreengrassClient";
import { CreateSoftwareUpdateJobRequest, CreateSoftwareUpdateJobResponse } from "../models/models_0";
import {
  deserializeAws_restJson1CreateSoftwareUpdateJobCommand,
  serializeAws_restJson1CreateSoftwareUpdateJobCommand,
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

export type CreateSoftwareUpdateJobCommandInput = CreateSoftwareUpdateJobRequest;
export type CreateSoftwareUpdateJobCommandOutput = CreateSoftwareUpdateJobResponse & __MetadataBearer;

/**
 * Creates a software update for a core or group of cores (specified as an IoT thing group.) Use this to update the OTA Agent as well as the Greengrass core software. It makes use of the IoT Jobs feature which provides additional commands to manage a Greengrass core software update job.
 */
export class CreateSoftwareUpdateJobCommand extends $Command<
  CreateSoftwareUpdateJobCommandInput,
  CreateSoftwareUpdateJobCommandOutput,
  GreengrassClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateSoftwareUpdateJobCommandInput) {
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
  ): Handler<CreateSoftwareUpdateJobCommandInput, CreateSoftwareUpdateJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "GreengrassClient";
    const commandName = "CreateSoftwareUpdateJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateSoftwareUpdateJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateSoftwareUpdateJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateSoftwareUpdateJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1CreateSoftwareUpdateJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateSoftwareUpdateJobCommandOutput> {
    return deserializeAws_restJson1CreateSoftwareUpdateJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
