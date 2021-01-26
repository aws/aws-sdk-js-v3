import { MigrationHubClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MigrationHubClient";
import { NotifyApplicationStateRequest, NotifyApplicationStateResult } from "../models/models_0";
import {
  deserializeAws_json1_1NotifyApplicationStateCommand,
  serializeAws_json1_1NotifyApplicationStateCommand,
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

export type NotifyApplicationStateCommandInput = NotifyApplicationStateRequest;
export type NotifyApplicationStateCommandOutput = NotifyApplicationStateResult & __MetadataBearer;

/**
 * <p>Sets the migration state of an application. For a given application identified by the
 *          value passed to <code>ApplicationId</code>, its status is set or updated by passing one of
 *          three values to <code>Status</code>: <code>NOT_STARTED | IN_PROGRESS |
 *          COMPLETED</code>.</p>
 */
export class NotifyApplicationStateCommand extends $Command<
  NotifyApplicationStateCommandInput,
  NotifyApplicationStateCommandOutput,
  MigrationHubClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: NotifyApplicationStateCommandInput) {
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
  ): Handler<NotifyApplicationStateCommandInput, NotifyApplicationStateCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "MigrationHubClient";
    const commandName = "NotifyApplicationStateCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: NotifyApplicationStateRequest.filterSensitiveLog,
      outputFilterSensitiveLog: NotifyApplicationStateResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: NotifyApplicationStateCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1NotifyApplicationStateCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<NotifyApplicationStateCommandOutput> {
    return deserializeAws_json1_1NotifyApplicationStateCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
