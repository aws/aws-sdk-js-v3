import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ExportTask } from "../models/models_0";
import { StartExportTaskMessage } from "../models/models_1";
import {
  deserializeAws_queryStartExportTaskCommand,
  serializeAws_queryStartExportTaskCommand,
} from "../protocols/Aws_query";
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

export type StartExportTaskCommandInput = StartExportTaskMessage;
export type StartExportTaskCommandOutput = ExportTask & __MetadataBearer;

/**
 * <p>Starts an export of a snapshot to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.
 *         </p>
 */
export class StartExportTaskCommand extends $Command<
  StartExportTaskCommandInput,
  StartExportTaskCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: StartExportTaskCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "StartExportTaskCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: StartExportTaskMessage.filterSensitiveLog,
      outputFilterSensitiveLog: ExportTask.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: StartExportTaskCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryStartExportTaskCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<StartExportTaskCommandOutput> {
    return deserializeAws_queryStartExportTaskCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
