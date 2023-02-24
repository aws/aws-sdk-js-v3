// smithy-typescript generated code
import { EndpointParameterInstructions, getEndpointPlugin } from "@aws-sdk/middleware-endpoint";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { Command as $Command } from "@aws-sdk/smithy-client";
import {
  FinalizeHandlerArguments,
  Handler,
  HandlerExecutionContext,
  HttpHandlerOptions as __HttpHandlerOptions,
  MetadataBearer as __MetadataBearer,
  MiddlewareStack,
  SerdeContext as __SerdeContext,
} from "@aws-sdk/types";

import { BackupClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../BackupClient";
import { DeleteRecoveryPointInput, DeleteRecoveryPointInputFilterSensitiveLog } from "../models/models_0";
import {
  deserializeAws_restJson1DeleteRecoveryPointCommand,
  serializeAws_restJson1DeleteRecoveryPointCommand,
} from "../protocols/Aws_restJson1";

export interface DeleteRecoveryPointCommandInput extends DeleteRecoveryPointInput {}
export interface DeleteRecoveryPointCommandOutput extends __MetadataBearer {}

/**
 * <p>Deletes the recovery point specified by a recovery point ID.</p>
 *          <p>If the recovery point ID belongs to a continuous backup, calling this endpoint deletes
 *          the existing continuous backup and stops future continuous backup.</p>
 *          <p>When an IAM role's permissions are insufficient to call this API, the service sends back
 *       an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted.
 *       Instead, it enters an <code>EXPIRED</code> state.</p>
 *          <p>
 *             <code>EXPIRED</code> recovery points can be deleted with this API once the IAM role
 *       has the <code>iam:CreateServiceLinkedRole</code> action. To learn more about adding this role, see
 *       <a href="https://docs.aws.amazon.com/aws-backup/latest/devguide/deleting-backups.html#deleting-backups-troubleshooting">
 *          Troubleshooting manual deletions</a>.</p>
 *          <p>If the user or role is deleted or the permission within the role is removed,
 *       the deletion will not be successful and will enter an <code>EXPIRED</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { BackupClient, DeleteRecoveryPointCommand } from "@aws-sdk/client-backup"; // ES Modules import
 * // const { BackupClient, DeleteRecoveryPointCommand } = require("@aws-sdk/client-backup"); // CommonJS import
 * const client = new BackupClient(config);
 * const command = new DeleteRecoveryPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRecoveryPointCommandInput} for command's `input` shape.
 * @see {@link DeleteRecoveryPointCommandOutput} for command's `response` shape.
 * @see {@link BackupClientResolvedConfig | config} for BackupClient's `config` shape.
 *
 */
export class DeleteRecoveryPointCommand extends $Command<
  DeleteRecoveryPointCommandInput,
  DeleteRecoveryPointCommandOutput,
  BackupClientResolvedConfig
> {
  // Start section: command_properties
  // End section: command_properties

  public static getEndpointParameterInstructions(): EndpointParameterInstructions {
    return {
      UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
      Endpoint: { type: "builtInParams", name: "endpoint" },
      Region: { type: "builtInParams", name: "region" },
      UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
    };
  }

  constructor(readonly input: DeleteRecoveryPointCommandInput) {
    // Start section: command_constructor
    super();
    // End section: command_constructor
  }

  /**
   * @internal
   */
  resolveMiddleware(
    clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>,
    configuration: BackupClientResolvedConfig,
    options?: __HttpHandlerOptions
  ): Handler<DeleteRecoveryPointCommandInput, DeleteRecoveryPointCommandOutput> {
    this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
    this.middlewareStack.use(
      getEndpointPlugin(configuration, DeleteRecoveryPointCommand.getEndpointParameterInstructions())
    );

    const stack = clientStack.concat(this.middlewareStack);

    const { logger } = configuration;
    const clientName = "BackupClient";
    const commandName = "DeleteRecoveryPointCommand";
    const handlerExecutionContext: HandlerExecutionContext = {
      logger,
      clientName,
      commandName,
      inputFilterSensitiveLog: DeleteRecoveryPointInputFilterSensitiveLog,
      outputFilterSensitiveLog: (output: any) => output,
    };
    const { requestHandler } = configuration;
    return stack.resolve(
      (request: FinalizeHandlerArguments<any>) =>
        requestHandler.handle(request.request as __HttpRequest, options || {}),
      handlerExecutionContext
    );
  }

  private serialize(input: DeleteRecoveryPointCommandInput, context: __SerdeContext): Promise<__HttpRequest> {
    return serializeAws_restJson1DeleteRecoveryPointCommand(input, context);
  }

  private deserialize(output: __HttpResponse, context: __SerdeContext): Promise<DeleteRecoveryPointCommandOutput> {
    return deserializeAws_restJson1DeleteRecoveryPointCommand(output, context);
  }

  // Start section: command_body_extra
  // End section: command_body_extra
}
