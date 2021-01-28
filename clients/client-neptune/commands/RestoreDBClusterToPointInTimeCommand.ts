import { NeptuneClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../NeptuneClient";
import { RestoreDBClusterToPointInTimeMessage, RestoreDBClusterToPointInTimeResult } from "../models/models_0";
import {
  deserializeAws_queryRestoreDBClusterToPointInTimeCommand,
  serializeAws_queryRestoreDBClusterToPointInTimeCommand,
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

export type RestoreDBClusterToPointInTimeCommandInput = RestoreDBClusterToPointInTimeMessage;
export type RestoreDBClusterToPointInTimeCommandOutput = RestoreDBClusterToPointInTimeResult & __MetadataBearer;

/**
 * <p>Restores a DB cluster to an arbitrary point in time. Users can restore to any point in
 *       time before <code>LatestRestorableTime</code> for up to <code>BackupRetentionPeriod</code>
 *       days. The target DB cluster is created from the source DB cluster with the same configuration
 *       as the original DB cluster, except that the new DB cluster is created with the default DB
 *       security group.</p>
 *          <note>
 *             <p>This action only restores the DB cluster, not the DB instances for that DB cluster. You
 *         must invoke the <a>CreateDBInstance</a> action to create DB instances for the
 *         restored DB cluster, specifying the identifier of the restored DB cluster in
 *         <code>DBClusterIdentifier</code>. You can create DB instances only after the
 *         <code>RestoreDBClusterToPointInTime</code> action has completed and the DB cluster is
 *         available.</p>
 *          </note>
 */
export class RestoreDBClusterToPointInTimeCommand extends $Command<
  RestoreDBClusterToPointInTimeCommandInput,
  RestoreDBClusterToPointInTimeCommandOutput,
  NeptuneClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBClusterToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: NeptuneClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBClusterToPointInTimeCommandInput, RestoreDBClusterToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "NeptuneClient";
    const commandName = "RestoreDBClusterToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBClusterToPointInTimeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBClusterToPointInTimeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: RestoreDBClusterToPointInTimeCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBClusterToPointInTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBClusterToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBClusterToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
