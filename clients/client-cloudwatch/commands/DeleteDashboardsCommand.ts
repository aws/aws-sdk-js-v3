import { CloudWatchClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchClient";
import { DeleteDashboardsInput, DeleteDashboardsOutput } from "../models/models_0";
import {
  deserializeAws_queryDeleteDashboardsCommand,
  serializeAws_queryDeleteDashboardsCommand,
} from "../protocols/Aws_query";
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

export type DeleteDashboardsCommandInput = DeleteDashboardsInput;
export type DeleteDashboardsCommandOutput = DeleteDashboardsOutput & __MetadataBearer;

/**
 * <p>Deletes all dashboards that you specify. You
 * 			can specify up to 100 dashboards to delete. If there is an error during this call, no dashboards are
 * 			deleted.</p>
 */
export class DeleteDashboardsCommand extends $Command<
  DeleteDashboardsCommandInput,
  DeleteDashboardsCommandOutput,
  CloudWatchClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDashboardsCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: CloudWatchClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteDashboardsCommandInput, DeleteDashboardsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "CloudWatchClient";
    const commandName = "DeleteDashboardsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDashboardsInput.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDashboardsOutput.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteDashboardsCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDashboardsCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteDashboardsCommandOutput> {
    return deserializeAws_queryDeleteDashboardsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
