import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { WriteRecordsRequest } from "../models/models_0";
import {
  deserializeAws_json1_0WriteRecordsCommand,
  serializeAws_json1_0WriteRecordsCommand,
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

export type WriteRecordsCommandInput = WriteRecordsRequest;
export type WriteRecordsCommandOutput = __MetadataBearer;

/**
 * <p>The WriteRecords operation enables you to write your time series
 *       data into Timestream. You can specify a single data point or a batch
 *       of data points to be inserted into the system. Timestream offers you
 *       with a flexible schema that auto detects the column names and data types
 *       for your Timestream tables based on the dimension names and data types of
 *       the data points you specify when invoking writes into the database.
 *       Timestream support eventual consistency read semantics. This means that
 *       when you query data immediately after writing a batch of data into Timestream,
 *       the query results might not reflect the results of a recently completed write
 *       operation. The results may also include some stale data. If you repeat the
 *       query request after a short time, the results should return the latest data.
 *       Service quotas apply. For more information,
 *       see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *         </p>
 */
export class WriteRecordsCommand extends $Command<
  WriteRecordsCommandInput,
  WriteRecordsCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: WriteRecordsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: TimestreamWriteClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<WriteRecordsCommandInput, WriteRecordsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "WriteRecordsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: WriteRecordsRequest.filterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: WriteRecordsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0WriteRecordsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<WriteRecordsCommandOutput> {
    return deserializeAws_json1_0WriteRecordsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
