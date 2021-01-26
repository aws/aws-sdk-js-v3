import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { DeleteProgressUpdateStreamRequest, DeleteProgressUpdateStreamResult } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteProgressUpdateStreamCommand,
  serializeAws_json1_1DeleteProgressUpdateStreamCommand,
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

export type DeleteProgressUpdateStreamCommandInput = DeleteProgressUpdateStreamRequest;
export type DeleteProgressUpdateStreamCommandOutput = DeleteProgressUpdateStreamResult & __MetadataBearer;

/**
 * <p>Deletes a progress update stream, including all of its tasks, which was previously
 *          created as an AWS resource used for access control. This API has the following
 *          traits:</p>
 *          <ul>
 *             <li>
 *                <p>The only parameter needed for <code>DeleteProgressUpdateStream</code> is the
 *                stream name (same as a <code>CreateProgressUpdateStream</code> call).</p>
 *             </li>
 *             <li>
 *                <p>The call will return, and a background process will asynchronously delete the
 *                stream and all of its resources (tasks, associated resources, resource attributes,
 *                created artifacts).</p>
 *             </li>
 *             <li>
 *                <p>If the stream takes time to be deleted, it might still show up on a
 *                   <code>ListProgressUpdateStreams</code> call.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>CreateProgressUpdateStream</code>, <code>ImportMigrationTask</code>,
 *                   <code>NotifyMigrationTaskState</code>, and all Associate[*] APIs related to the
 *                tasks belonging to the stream will throw "InvalidInputException" if the stream of the
 *                same name is in the process of being deleted.</p>
 *             </li>
 *             <li>
 *                <p>Once the stream and all of its resources are deleted,
 *                   <code>CreateProgressUpdateStream</code> for a stream of the same name will
 *                succeed, and that stream will be an entirely new logical resource (without any
 *                resources associated with the old stream).</p>
 *             </li>
 *          </ul>
 */
export class DeleteProgressUpdateStreamCommand extends $Command<
  DeleteProgressUpdateStreamCommandInput,
  DeleteProgressUpdateStreamCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteProgressUpdateStreamCommandInput) {
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
  ): Handler<DeleteProgressUpdateStreamCommandInput, DeleteProgressUpdateStreamCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "DeleteProgressUpdateStreamCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteProgressUpdateStreamRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteProgressUpdateStreamResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteProgressUpdateStreamCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteProgressUpdateStreamCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteProgressUpdateStreamCommandOutput> {
    return deserializeAws_json1_1DeleteProgressUpdateStreamCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
