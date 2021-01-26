import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DBInstanceAutomatedBackupMessage, DescribeDBInstanceAutomatedBackupsMessage } from "../models/models_0";
import {
  deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand,
  serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand,
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

export type DescribeDBInstanceAutomatedBackupsCommandInput = DescribeDBInstanceAutomatedBackupsMessage;
export type DescribeDBInstanceAutomatedBackupsCommandOutput = DBInstanceAutomatedBackupMessage & __MetadataBearer;

/**
 * <p>Displays backups for both current and deleted
 *             instances. For example, use this operation to
 *             find details about automated backups for previously deleted instances. Current instances
 *             with retention periods greater than zero (0) are returned for both the
 *             <code>DescribeDBInstanceAutomatedBackups</code> and
 *             <code>DescribeDBInstances</code> operations.</p>
 * 	        <p>All parameters are optional.</p>
 */
export class DescribeDBInstanceAutomatedBackupsCommand extends $Command<
  DescribeDBInstanceAutomatedBackupsCommandInput,
  DescribeDBInstanceAutomatedBackupsCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DescribeDBInstanceAutomatedBackupsCommandInput) {
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
  ): Handler<DescribeDBInstanceAutomatedBackupsCommandInput, DescribeDBInstanceAutomatedBackupsCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DescribeDBInstanceAutomatedBackupsCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DescribeDBInstanceAutomatedBackupsMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DBInstanceAutomatedBackupMessage.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DescribeDBInstanceAutomatedBackupsCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DescribeDBInstanceAutomatedBackupsCommandOutput> {
    return deserializeAws_queryDescribeDBInstanceAutomatedBackupsCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
