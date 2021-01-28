import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import {
  CreateRelationalDatabaseFromSnapshotRequest,
  CreateRelationalDatabaseFromSnapshotResult,
} from "../models/models_0";
import {
  deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand,
  serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand,
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

export type CreateRelationalDatabaseFromSnapshotCommandInput = CreateRelationalDatabaseFromSnapshotRequest;
export type CreateRelationalDatabaseFromSnapshotCommandOutput = CreateRelationalDatabaseFromSnapshotResult &
  __MetadataBearer;

/**
 * <p>Creates a new database from an existing database snapshot in Amazon Lightsail.</p>
 *          <p>You can create a new database from a snapshot in if something goes wrong with your
 *       original database, or to change it to a different plan, such as a high availability or
 *       standard plan.</p>
 *          <p>The <code>create relational database from snapshot</code> operation supports tag-based
 *       access control via request tags and resource tags applied to the resource identified by
 *       relationalDatabaseSnapshotName. For more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class CreateRelationalDatabaseFromSnapshotCommand extends $Command<
  CreateRelationalDatabaseFromSnapshotCommandInput,
  CreateRelationalDatabaseFromSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateRelationalDatabaseFromSnapshotCommandInput) {
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
  ): Handler<CreateRelationalDatabaseFromSnapshotCommandInput, CreateRelationalDatabaseFromSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "CreateRelationalDatabaseFromSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateRelationalDatabaseFromSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: CreateRelationalDatabaseFromSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<CreateRelationalDatabaseFromSnapshotCommandOutput> {
    return deserializeAws_json1_1CreateRelationalDatabaseFromSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
