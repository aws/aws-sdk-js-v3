import { LookoutEquipmentClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutEquipmentClient";
import { StartDataIngestionJobRequest, StartDataIngestionJobResponse } from "../models/models_0";
import {
  deserializeAws_json1_0StartDataIngestionJobCommand,
  serializeAws_json1_0StartDataIngestionJobCommand,
} from "../protocols/Aws_json1_0";
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

export type StartDataIngestionJobCommandInput = StartDataIngestionJobRequest;
export type StartDataIngestionJobCommandOutput = StartDataIngestionJobResponse & __MetadataBearer;

/**
 * <p>Starts a data ingestion job. Amazon Lookout for Equipment returns the job status. </p>
 */
export class StartDataIngestionJobCommand extends $Command<
  StartDataIngestionJobCommandInput,
  StartDataIngestionJobCommandOutput,
  LookoutEquipmentClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartDataIngestionJobCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LookoutEquipmentClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartDataIngestionJobCommandInput, StartDataIngestionJobCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LookoutEquipmentClient";
    const commandName = "StartDataIngestionJobCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartDataIngestionJobRequest.filterSensitiveLog,
      outputFilterSensitiveLog: StartDataIngestionJobResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartDataIngestionJobCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0StartDataIngestionJobCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartDataIngestionJobCommandOutput> {
    return deserializeAws_json1_0StartDataIngestionJobCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
