import { OpsWorksCMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../OpsWorksCMClient";
import { DeleteBackupRequest, DeleteBackupResponse } from "../models/models_0";
import {
  deserializeAws_json1_1DeleteBackupCommand,
  serializeAws_json1_1DeleteBackupCommand,
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

export interface DeleteBackupCommandInput extends DeleteBackupRequest {}
export interface DeleteBackupCommandOutput extends DeleteBackupResponse, __MetadataBearer {}

/**
 * <p>
 *       Deletes a backup. You can delete both manual and automated backups. This operation is asynchronous.
 *     </p>
 *          <p>
 *       An <code>InvalidStateException</code> is thrown when a backup deletion is already in progress.
 *       A <code>ResourceNotFoundException</code> is thrown when the backup does not exist.
 *       A <code>ValidationException</code> is thrown when parameters of the request are not valid.
 *     </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { OpsWorksCMClient, DeleteBackupCommand } from "@aws-sdk/client-opsworkscm"; // ES Modules import
 * // const { OpsWorksCMClient, DeleteBackupCommand } = require("@aws-sdk/client-opsworkscm"); // CommonJS import
 * const client = new OpsWorksCMClient(config);
 * const command = new DeleteBackupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBackupCommandInput} for command's `input` shape.
 * @see {@link DeleteBackupCommandOutput} for command's `response` shape.
 * @see {@link OpsWorksCMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export class DeleteBackupCommand extends $Command<
  DeleteBackupCommandInput,
  DeleteBackupCommandOutput,
  OpsWorksCMClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  constructor(readonly input: DeleteBackupCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: OpsWorksCMClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteBackupCommandInput, DeleteBackupCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "OpsWorksCMClient";
    const commandName = "DeleteBackupCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteBackupRequest.filterSensitiveLog,
      outputFilterSensitiveLog: DeleteBackupResponse.filterSensitiveLog,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteBackupCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_json1_1DeleteBackupCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteBackupCommandOutput> {
    return deserializeAws_json1_1DeleteBackupCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
