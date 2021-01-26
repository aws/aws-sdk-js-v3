import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { UpdateResourceDataSyncRequest, UpdateResourceDataSyncResult } from "../models/models_1";
import {
  deserializeAws_json1_1UpdateResourceDataSyncCommand,
  serializeAws_json1_1UpdateResourceDataSyncCommand,
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

export type UpdateResourceDataSyncCommandInput = UpdateResourceDataSyncRequest;
export type UpdateResourceDataSyncCommandOutput = UpdateResourceDataSyncResult & __MetadataBearer;

/**
 * <p>Update a resource data sync. After you create a resource data sync for a Region, you can't
 *    change the account options for that sync. For example, if you create a sync in the us-east-2
 *    (Ohio) Region and you choose the Include only the current account option, you can't edit that
 *    sync later and choose the Include all accounts from my AWS Organizations configuration option. Instead,
 *    you must delete the first resource data sync, and create a new one.</p>
 *          <note>
 *             <p>This API action only supports a resource data sync that was created with a SyncFromSource
 *      <code>SyncType</code>.</p>
 *          </note>
 */
export class UpdateResourceDataSyncCommand extends $Command<
  UpdateResourceDataSyncCommandInput,
  UpdateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: UpdateResourceDataSyncCommandInput) {
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
  ): Handler<UpdateResourceDataSyncCommandInput, UpdateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "UpdateResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: UpdateResourceDataSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: UpdateResourceDataSyncResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: UpdateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1UpdateResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<UpdateResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1UpdateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
