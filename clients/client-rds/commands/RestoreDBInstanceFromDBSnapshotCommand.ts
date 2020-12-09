import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { RestoreDBInstanceFromDBSnapshotMessage, RestoreDBInstanceFromDBSnapshotResult } from "../models/models_1";
import {
  deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
  serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand,
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

export type RestoreDBInstanceFromDBSnapshotCommandInput = RestoreDBInstanceFromDBSnapshotMessage;
export type RestoreDBInstanceFromDBSnapshotCommandOutput = RestoreDBInstanceFromDBSnapshotResult & __MetadataBearer;

/**
 * <p>Creates a new DB instance from a DB snapshot. The target database is created from the source database restore point with most
 *             of the source's original configuration, including the default security group and DB parameter group. By default, the new DB
 *             instance is created as a Single-AZ deployment, except when the instance is a SQL Server instance that has an option group
 *             associated with mirroring. In this case, the instance becomes a Multi-AZ deployment, not a Single-AZ deployment.</p>
 *          <p>If you want to replace your original DB instance with the new, restored DB instance, then rename your original DB instance
 *             before you call the RestoreDBInstanceFromDBSnapshot action. RDS doesn't allow two DB instances with the same name. After you
 *             have renamed your original DB instance with a different identifier, then you can pass the original name of the DB instance as
 *             the DBInstanceIdentifier in the call to the RestoreDBInstanceFromDBSnapshot action. The result is that you replace the original
 *             DB instance with the DB instance created from the snapshot.</p>
 *          <p>If you are restoring from a shared manual DB snapshot, the <code>DBSnapshotIdentifier</code>
 *       must be the ARN of the shared DB snapshot.</p>
 *          <note>
 *             <p>This command doesn't apply to Aurora MySQL and Aurora PostgreSQL. For Aurora, use <code>RestoreDBClusterFromSnapshot</code>.</p>
 *          </note>
 */
export class RestoreDBInstanceFromDBSnapshotCommand extends $Command<
  RestoreDBInstanceFromDBSnapshotCommandInput,
  RestoreDBInstanceFromDBSnapshotCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: RestoreDBInstanceFromDBSnapshotCommandInput) {
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
  ): Handler<RestoreDBInstanceFromDBSnapshotCommandInput, RestoreDBInstanceFromDBSnapshotCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "RestoreDBInstanceFromDBSnapshotCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotMessage.filterSensitiveLog,
      outputFilterSensitiveLog: RestoreDBInstanceFromDBSnapshotResult.filterSensitiveLog,
    };

    if (typeof logger.info === "function") {
      logger.info({
        clientName,
        commandName,
      });
    }

    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: RestoreDBInstanceFromDBSnapshotCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<RestoreDBInstanceFromDBSnapshotCommandOutput> {
    return deserializeAws_queryRestoreDBInstanceFromDBSnapshotCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
