import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { CreateResourceDataSyncRequest, CreateResourceDataSyncResult } from "../models/models_0";
import {
  deserializeAws_json1_1CreateResourceDataSyncCommand,
  serializeAws_json1_1CreateResourceDataSyncCommand,
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

export type CreateResourceDataSyncCommandInput = CreateResourceDataSyncRequest;
export type CreateResourceDataSyncCommandOutput = CreateResourceDataSyncResult & __MetadataBearer;

/**
 * <p>A resource data sync helps you view data from multiple sources in a single location. Systems
 *    Manager offers two types of resource data sync: <code>SyncToDestination</code> and
 *     <code>SyncFromSource</code>.</p>
 *          <p>You can configure Systems Manager Inventory to use the <code>SyncToDestination</code> type to
 *    synchronize Inventory data from multiple AWS Regions to a single S3 bucket. For more information,
 *    see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/sysman-inventory-datasync.html">Configuring Resource Data
 *     Sync for Inventory</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *
 *          <p>You can configure Systems Manager Explorer to use the <code>SyncFromSource</code> type to synchronize
 *    operational work items (OpsItems) and operational data (OpsData) from multiple AWS Regions to a
 *    single S3 bucket. This type can synchronize OpsItems and OpsData from multiple AWS accounts and
 *    Regions or <code>EntireOrganization</code> by using AWS Organizations. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/Explorer-resource-data-sync.html">Setting up Systems Manager Explorer to display data from multiple accounts and Regions</a> in the
 *     <i>AWS Systems Manager User Guide</i>.</p>
 *
 *          <p>A resource data sync is an asynchronous operation that returns immediately. After a
 *    successful initial sync is completed, the system continuously syncs data. To check the status of
 *    a sync, use the <a>ListResourceDataSync</a>.</p>
 *
 *          <note>
 *             <p>By default, data is not encrypted in Amazon S3. We strongly recommend that you enable encryption
 *     in Amazon S3 to ensure secure data storage. We also recommend that you secure access to the Amazon S3
 *     bucket by creating a restrictive bucket policy. </p>
 *          </note>
 */
export class CreateResourceDataSyncCommand extends $Command<
  CreateResourceDataSyncCommandInput,
  CreateResourceDataSyncCommandOutput,
  SSMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: CreateResourceDataSyncCommandInput) {
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
  ): Handler<CreateResourceDataSyncCommandInput, CreateResourceDataSyncCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "SSMClient";
    const commandName = "CreateResourceDataSyncCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: CreateResourceDataSyncRequest.filterSensitiveLog,
      outputFilterSensitiveLog: CreateResourceDataSyncResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: CreateResourceDataSyncCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1CreateResourceDataSyncCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<CreateResourceDataSyncCommandOutput> {
    return deserializeAws_json1_1CreateResourceDataSyncCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
