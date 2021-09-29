import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { DeleteDBInstanceAutomatedBackupMessage, DeleteDBInstanceAutomatedBackupResult } from "../models/models_0";
import {
  deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand,
  serializeAws_queryDeleteDBInstanceAutomatedBackupCommand,
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

export interface DeleteDBInstanceAutomatedBackupCommandInput extends DeleteDBInstanceAutomatedBackupMessage {}
export interface DeleteDBInstanceAutomatedBackupCommandOutput
  extends DeleteDBInstanceAutomatedBackupResult,
    __MetadataBearer {}

/**
 * <p>Deletes automated backups using the <code>DbiResourceId</code> value of the source DB instance or the Amazon Resource Name (ARN) of the automated backups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBInstanceAutomatedBackupCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBInstanceAutomatedBackupCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBInstanceAutomatedBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBInstanceAutomatedBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteDBInstanceAutomatedBackupCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteDBInstanceAutomatedBackupCommand extends $Command<
  DeleteDBInstanceAutomatedBackupCommandInput,
  DeleteDBInstanceAutomatedBackupCommandOutput,
  RDSClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteDBInstanceAutomatedBackupCommandInput) {
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
  ): Handler<DeleteDBInstanceAutomatedBackupCommandInput, DeleteDBInstanceAutomatedBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "RDSClient";
    const commandName = "DeleteDBInstanceAutomatedBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteDBInstanceAutomatedBackupMessage.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteDBInstanceAutomatedBackupResult.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(
    input: DeleteDBInstanceAutomatedBackupCommandInput,
    context: __SerdeContext
  ): Promise<__HttpRequest> {
    return serializeAws_queryDeleteDBInstanceAutomatedBackupCommand(input, context);
  }

  private deserialize(
    output: __HttpResponse,
    context: __SerdeContext
  ): Promise<DeleteDBInstanceAutomatedBackupCommandOutput> {
    return deserializeAws_queryDeleteDBInstanceAutomatedBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
