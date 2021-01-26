import {
  ApplicationDiscoveryServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../ApplicationDiscoveryServiceClient";
import { StartContinuousExportRequest, StartContinuousExportResponse } from "../models/models_0";
import {
  deserializeAws_json1_1StartContinuousExportCommand,
  serializeAws_json1_1StartContinuousExportCommand,
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

export type StartContinuousExportCommandInput = StartContinuousExportRequest;
export type StartContinuousExportCommandOutput = StartContinuousExportResponse & __MetadataBearer;

/**
 * <p>Start the continuous flow of agent's discovered data into Amazon Athena.</p>
 */
export class StartContinuousExportCommand extends $Command<
  StartContinuousExportCommandInput,
  StartContinuousExportCommandOutput,
  ApplicationDiscoveryServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartContinuousExportCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: ApplicationDiscoveryServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartContinuousExportCommandInput, StartContinuousExportCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "ApplicationDiscoveryServiceClient";
    const commandName = "StartContinuousExportCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartContinuousExportRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartContinuousExportResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartContinuousExportCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1StartContinuousExportCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartContinuousExportCommandOutput> {
    return deserializeAws_json1_1StartContinuousExportCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
