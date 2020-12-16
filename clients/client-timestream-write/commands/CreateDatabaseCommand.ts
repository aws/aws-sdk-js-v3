import { ServiceInputTypes, ServiceOutputTypes, TimestreamWriteClientResolvedConfig } from "../TimestreamWriteClient";
import { CreateDatabaseRequest, CreateDatabaseResponse } from "../models/models_0";
import {
  deserializeAws_json1_0CreateDatabaseCommand,
  serializeAws_json1_0CreateDatabaseCommand,
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

export type CreateDatabaseCommandInput = CreateDatabaseRequest;
export type CreateDatabaseCommandOutput = CreateDatabaseResponse & __MetadataBearer;

/**
 * <p>Creates a new Timestream database. If the KMS key is not specified, the database will be encrypted with a Timestream managed KMS key located in your account.
 *          Refer to <a href="https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#aws-managed-cmk">AWS managed KMS keys</a> for more info.
 *          Service quotas apply. For more information, see <a href="https://docs.aws.amazon.com/timestream/latest/developerguide/ts-limits.html">Access Management</a> in the Timestream Developer Guide.
 *       </p>
 */
export class CreateDatabaseCommand extends $Command<
  CreateDatabaseCommandInput,
  CreateDatabaseCommandOutput,
  TimestreamWriteClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateDatabaseCommandInput) {
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
  ): Handler<CreateDatabaseCommandInput, CreateDatabaseCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "TimestreamWriteClient";
    const commandName = "CreateDatabaseCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateDatabaseRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateDatabaseResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateDatabaseCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_0CreateDatabaseCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateDatabaseCommandOutput> {
    return deserializeAws_json1_0CreateDatabaseCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
