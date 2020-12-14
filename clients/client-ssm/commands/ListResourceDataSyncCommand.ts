import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { ListResourceDataSyncRequest, ListResourceDataSyncResult } from "../models/models_1";
import {
  deserializeAws_json1_1ListResourceDataSyncCommand,
  serializeAws_json1_1ListResourceDataSyncCommand,
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

export type ListResourceDataSyncCommandInput = ListResourceDataSyncRequest;
export type ListResourceDataSyncCommandOutput = ListResourceDataSyncResult & __MetadataBearer;

/**
 * <p>Lists your resource data sync configurations. Includes information about the last time a
 *    sync attempted to start, the last sync status, and the last time a sync successfully
 *    completed.</p>
 *          <p>The number of sync configurations might be too large to return using a single call to
 *     <code>ListResourceDataSync</code>. You can limit the number of sync configurations returned by
 *    using the <code>MaxResults</code> parameter. To determine whether there are more sync
 *    configurations to list, check the value of <code>NextToken</code> in the output. If there are
 *    more sync configurations to list, you can request them by specifying the <code>NextToken</code>
 *    returned in the call to the parameter of a subsequent call. </p>
 */
export class ListResourceDataSyncCommand extends $Command<
  ListResourceDataSyncCommandInput,
  ListResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: ListResourceDataSyncCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: SSMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<ListResourceDataSyncCommandInput, ListResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "ListResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: ListResourceDataSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: ListResourceDataSyncResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: ListResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1ListResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<ListResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1ListResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
