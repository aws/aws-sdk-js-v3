import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { DescribeDatabaseRequest, DescribeDatabaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_0DescribeDatabaseCommand,
  serializeAws_json1_0DescribeDatabaseCommand,
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

export type DescribeDatabaseCommandInput = DescribeDatabaseRequest;
export type DescribeDatabaseCommandOutput = DescribeDatabaseResponse & __MetadataBearer;

/**
 * <p>Returns information about the database, including the database name, time that the database was created,
 *          and the total number of tables found within the database.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.</p>
 */
export class DescribeDatabaseCommand extends $Command<
  DescribeDatabaseCommandInput,
  DescribeDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDatabaseCommandInput) {
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
  ): Handler<DescribeDatabaseCommandInput, DescribeDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "DescribeDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeDatabaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DescribeDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0DescribeDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DescribeDatabaseCommandOutput> {
    return deserializeAws_json1_0DescribeDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
