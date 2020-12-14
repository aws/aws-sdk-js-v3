import { LightsailClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LightsailClient";
import { DeleteRelationalDatabaseSnapshotRequest, DeleteRelationalDatabaseSnapshotResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand,
  serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand,
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

export type DeleteRelationalDatabaseSnapshotCommandInput = DeleteRelationalDatabaseSnapshotRequest;
export type DeleteRelationalDatabaseSnapshotCommandOutput = DeleteRelationalDatabaseSnapshotResult & __MetadataBearer;

/**
 * <p>Deletes a database snapshot in Amazon Lightsail.</p>
 *          <p>The <code>delete relational database snapshot</code> operation supports tag-based access
 *       control via resource tags applied to the resource identified by relationalDatabaseName. For
 *       more information, see the <a href="https://lightsail.aws.amazon.com/ls/docs/en/articles/amazon-lightsail-controlling-access-using-tags">Lightsail Dev Guide</a>.</p>
 */
export class DeleteRelationalDatabaseSnapshotCommand extends $Command<
  DeleteRelationalDatabaseSnapshotCommandInput,
  DeleteRelationalDatabaseSnapshotCommandOutput,
  LightsailClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteRelationalDatabaseSnapshotCommandInput) {
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
  ): Handler<DeleteRelationalDatabaseSnapshotCommandInput, DeleteRelationalDatabaseSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "LightsailClient";
    const commandName = "DeleteRelationalDatabaseSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRelationalDatabaseSnapshotRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteRelationalDatabaseSnapshotResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteRelationalDatabaseSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteRelationalDatabaseSnapshotCommandOutput> {
    return deserializeAws_json1_1DeleteRelationalDatabaseSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
