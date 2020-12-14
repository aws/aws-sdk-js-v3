import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { CreateTableRequest, CreateTableResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateTableCommand,
  serializeAws_json1_0CreateTableCommand,
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

export type CreateTableCommandInput = CreateTableRequest;
export type CreateTableCommandOutput = CreateTableResponse & __MetadataBearer;

/**
 * <p>The CreateTable operation adds a new table to an existing database in your account. In an AWS account,
 *       table names must be at least unique within each Region if they are in the same database.
 *       You may have identical table names in the same Region if the tables are in seperate databases.
 *          While creating the table, you must specify the table name, database name,
 *          and the retention properties.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a>
 *          in the Timestream Developer Guide.
 *          </p>
 */
export class CreateTableCommand extends $Command<
  CreateTableCommandInput,
  CreateTableCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateTableCommandInput) {
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
  ): Handler<CreateTableCommandInput, CreateTableCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "CreateTableCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateTableRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateTableResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateTableCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateTableCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateTableCommandOutput> {
    return deserializeAws_json1_0CreateTableCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
