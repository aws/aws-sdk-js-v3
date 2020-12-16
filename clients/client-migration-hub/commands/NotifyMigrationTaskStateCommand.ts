import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyMigrationTaskStateRequest, NotifyMigrationTaskStateResult } from "../models/models_0";
import {
  deserializeAws_json1_1NotifyMigrationTaskStateCommand,
  serializeAws_json1_1NotifyMigrationTaskStateCommand,
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

export type NotifyMigrationTaskStateCommandInput = NotifyMigrationTaskStateRequest;
export type NotifyMigrationTaskStateCommandOutput = NotifyMigrationTaskStateResult & __MetadataBearer;

/**
 * <p>Notifies Migration Hub of the current status, progress, or other detail regarding a
 *          migration task. This API has the following traits:</p>
 *          <ul>
 *             <li>
 *                <p>Migration tools will call the <code>NotifyMigrationTaskState</code> API to share
 *                the latest progress and status.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>MigrationTaskName</code> is used for addressing updates to the correct
 *                target.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>ProgressUpdateStream</code> is used for access control and to provide a
 *                namespace for each migration tool.</p>
 *             </li>
 *          </ul>
 */
export class NotifyMigrationTaskStateCommand extends $Command<
  NotifyMigrationTaskStateCommandInput,
  NotifyMigrationTaskStateCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyMigrationTaskStateCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: MigrationHubClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<NotifyMigrationTaskStateCommandInput, NotifyMigrationTaskStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "NotifyMigrationTaskStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyMigrationTaskStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyMigrationTaskStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyMigrationTaskStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyMigrationTaskStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyMigrationTaskStateCommandOutput> {
    return deserializeAws_json1_1NotifyMigrationTaskStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
