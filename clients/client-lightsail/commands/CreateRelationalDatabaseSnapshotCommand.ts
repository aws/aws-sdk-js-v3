import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { CreateRelationalDatabaseSnapshotRequest, CreateRelationalDatabaseSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand,
  serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand,
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

export type CreateRelationalDatabaseSnapshotCommandInput = CreateRelationalDatabaseSnapshotRequest;
export type CreateRelationalDatabaseSnapshotCommandOutput = CreateRelationalDatabaseSnapshotResult & __MetadataBearer;

/**
 * <p>Creates a snapshot of your database in Amazon Lightsail. You can use snapshots for backups,
 *       to make copies of a database, and to save data before deleting a database.</p>
 *          <p>The <code>create relational database snapshot</code> operation supports tag-based access
 *       control via request tags. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateRelationalDatabaseSnapshotCommand extends $Command<
  CreateRelationalDatabaseSnapshotCommandInput,
  CreateRelationalDatabaseSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRelationalDatabaseSnapshotCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: LightsailClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<CreateRelationalDatabaseSnapshotCommandInput, CreateRelationalDatabaseSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateRelationalDatabaseSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRelationalDatabaseSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRelationalDatabaseSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateRelationalDatabaseSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRelationalDatabaseSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateRelationalDatabaseSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
