import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceToPointInTimeMessage, RestoreDBInstanceToPointInTimeResult } from "../models/models_1";
import {
  deserializeAws_queryRestoreDBInstanceToPointInTimeCommand,
  serializeAws_queryRestoreDBInstanceToPointInTimeCommand,
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

export type RestoreDBInstanceToPointInTimeCommandInput = RestoreDBInstanceToPointInTimeMessage;
export type RestoreDBInstanceToPointInTimeCommandOutput = RestoreDBInstanceToPointInTimeResult & __MetadataBearer;

/**
 * <p>Restores a DB instance to an arbitrary point in time. You can restore to any point in time before the time identified by the LatestRestorableTime property. You can restore to a point up to the number of days specified by the BackupRetentionPeriod property.</p>
 * 	        <p>The target database is created with most of the original configuration, but in a
 *             system-selected Availability Zone, with the default security group, the default subnet
 *             group, and the default DB parameter group. By default, the new DB instance is created as
 *             a single-AZ deployment except when the instance is a SQL Server instance that has an
 *             option group that is associated with mirroring; in this case, the instance becomes a
 *             mirrored deployment and not a single-AZ deployment.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterToPointInTime</code>.</p>
 *          </note>
 */
export class RestoreDBInstanceToPointInTimeCommand extends $Command<
  RestoreDBInstanceToPointInTimeCommandInput,
  RestoreDBInstanceToPointInTimeCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBInstanceToPointInTimeCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: RDSClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<RestoreDBInstanceToPointInTimeCommandInput, RestoreDBInstanceToPointInTimeCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceToPointInTimeCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBInstanceToPointInTimeMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBInstanceToPointInTimeResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreDBInstanceToPointInTimeCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceToPointInTimeCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBInstanceToPointInTimeCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceToPointInTimeCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
