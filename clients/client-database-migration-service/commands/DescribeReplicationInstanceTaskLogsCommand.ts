import {
  DatabaseMigrationServiceClientResolvedConfig,
  ServiceInputTypes,
  ServiceOutputTypes,
} from "../DatabaseMigrationServiceClient";
import {
  DescribeReplicationInstanceTaskLogsMessage,
  DescribeReplicationInstanceTaskLogsResponse,
} from "../models/models_0";
import {
  deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand,
  serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand,
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

export type DescribeReplicationInstanceTaskLogsCommandInput = DescribeReplicationInstanceTaskLogsMessage;
export type DescribeReplicationInstanceTaskLogsCommandOutput = DescribeReplicationInstanceTaskLogsResponse &
  __MetadataBearer;

/**
 * <p>Returns information about the task logs for the specified task.</p>
 */
export class DescribeReplicationInstanceTaskLogsCommand extends $Command<
  DescribeReplicationInstanceTaskLogsCommandInput,
  DescribeReplicationInstanceTaskLogsCommandOutput,
  DatabaseMigrationServiceClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeReplicationInstanceTaskLogsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: DatabaseMigrationServiceClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DescribeReplicationInstanceTaskLogsCommandInput, DescribeReplicationInstanceTaskLogsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "DatabaseMigrationServiceClient";
    const commandName = "DescribeReplicationInstanceTaskLogsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DescribeReplicationInstanceTaskLogsResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeReplicationInstanceTaskLogsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeReplicationInstanceTaskLogsCommandOutput> {
    return deserializeAws_json1_1DescribeReplicationInstanceTaskLogsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
